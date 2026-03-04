import * as fs from 'fs/promises';
import { ClaudeExtensionInfo, RtlStatus } from './types.js';
import {
    RTL_CSS_RULES, RTL_JS_CODE,
    RTL_START_MARKER, RTL_END_MARKER,
    JS_START_MARKER, JS_END_MARKER,
} from './content.js';

/**
 * Check if a path exists.
 */
async function exists(p: string): Promise<boolean> {
    try {
        await fs.access(p);
        return true;
    } catch {
        return false;
    }
}

/**
 * Check if RTL CSS markers exist in the file.
 */
export async function isCssInstalled(cssPath: string): Promise<boolean> {
    try {
        const content = await fs.readFile(cssPath, 'utf-8');
        return content.includes(RTL_START_MARKER);
    } catch {
        return false;
    }
}

/**
 * Check if JS toggle markers exist in the file.
 */
export async function isJsInstalled(jsPath: string | null): Promise<boolean> {
    if (!jsPath) return false;
    try {
        const content = await fs.readFile(jsPath, 'utf-8');
        return content.includes(JS_START_MARKER);
    } catch {
        return false;
    }
}

/**
 * Strip a marked block from content string.
 * Equivalent to Python _strip_block().
 */
function stripBlock(content: string, startMarker: string, endMarker: string): string {
    const startIdx = content.indexOf(startMarker);
    const endIdx = content.indexOf(endMarker);
    if (startIdx === -1 || endIdx === -1) return content;

    let actualStart = startIdx;
    const actualEnd = endIdx + endMarker.length;

    // Remove preceding newline if present (matching Python behavior)
    if (actualStart > 0 && content[actualStart - 1] === '\n') {
        actualStart -= 1;
    }

    return content.substring(0, actualStart) + content.substring(actualEnd);
}

/**
 * Get RTL status for all found extensions.
 */
export async function getStatus(extensions: ClaudeExtensionInfo[]): Promise<RtlStatus[]> {
    const statuses: RtlStatus[] = [];

    for (const ext of extensions) {
        statuses.push({
            extension: ext,
            cssInstalled: await isCssInstalled(ext.cssPath),
            jsInstalled: await isJsInstalled(ext.jsPath),
            cssBackupExists: await exists(ext.cssPath + '.bak'),
            jsBackupExists: ext.jsPath ? await exists(ext.jsPath + '.bak') : false,
        });
    }

    return statuses;
}

/**
 * Add RTL support to a single Claude Code extension.
 * Returns an array of status messages.
 */
export async function addRtl(ext: ClaudeExtensionInfo): Promise<{ messages: string[]; changed: boolean }> {
    const messages: string[] = [];
    let changed = false;

    // --- CSS ---
    try {
        const backupPath = ext.cssPath + '.bak';

        if (await exists(backupPath)) {
            // Backup exists: restore clean file, then re-inject
            await fs.copyFile(backupPath, ext.cssPath);
            messages.push(`  CSS: Restored from backup`);
        } else {
            // First time: create backup
            await fs.copyFile(ext.cssPath, backupPath);
            messages.push(`  CSS: Backup created: ${backupPath}`);
        }

        const content = await fs.readFile(ext.cssPath, 'utf-8');
        await fs.writeFile(ext.cssPath, content + '\n' + RTL_CSS_RULES, 'utf-8');
        messages.push(`  CSS: RTL support added to ${ext.name}`);
        changed = true;
    } catch (e: unknown) {
        const err = e as NodeJS.ErrnoException;
        if (err.code === 'EPERM' || err.code === 'EACCES') {
            messages.push(`  CSS: Permission denied: ${ext.cssPath}`);
            messages.push('       Try running with elevated privileges');
        } else {
            messages.push(`  CSS: Error: ${err.message}`);
        }
    }

    // --- JS ---
    if (!ext.jsPath) {
        messages.push('  JS:  index.js not found, skipping button injection');
        return { messages, changed };
    }

    try {
        const backupPath = ext.jsPath + '.bak';

        if (await exists(backupPath)) {
            // Backup exists: restore clean file, then re-inject
            await fs.copyFile(backupPath, ext.jsPath);
            messages.push(`  JS:  Restored from backup`);
        } else {
            // First time: create backup
            await fs.copyFile(ext.jsPath, backupPath);
            messages.push(`  JS:  Backup created: ${backupPath}`);
        }

        const content = await fs.readFile(ext.jsPath, 'utf-8');
        await fs.writeFile(ext.jsPath, content + '\n' + RTL_JS_CODE, 'utf-8');
        messages.push(`  JS:  Toggle button added to ${ext.name}`);
        changed = true;
    } catch (e: unknown) {
        const err = e as NodeJS.ErrnoException;
        if (err.code === 'EPERM' || err.code === 'EACCES') {
            messages.push(`  JS:  Permission denied: ${ext.jsPath}`);
            messages.push('       Try running with elevated privileges');
        } else {
            messages.push(`  JS:  Error: ${err.message}`);
        }
    }

    return { messages, changed };
}

const BIDI_OVERRIDE = '*{direction:ltr;unicode-bidi:bidi-override}';

/**
 * Add RTL support and fix BiDi issue by removing the bidi-override rule from CSS.
 * Same as addRtl() but also strips the problematic bidi-override rule.
 */
export async function fixBidi(ext: ClaudeExtensionInfo): Promise<{ messages: string[]; changed: boolean }> {
    const result = await addRtl(ext);

    // After injection, remove the bidi-override rule from the CSS file
    try {
        const content = await fs.readFile(ext.cssPath, 'utf-8');
        if (content.includes(BIDI_OVERRIDE)) {
            const fixed = content.replace(BIDI_OVERRIDE, '');
            await fs.writeFile(ext.cssPath, fixed, 'utf-8');
            result.messages.push(`  CSS: Removed bidi-override rule`);
        }
    } catch (e: unknown) {
        result.messages.push(`  CSS: Error fixing BiDi: ${(e as Error).message}`);
    }

    return result;
}

/**
 * Remove RTL support from a single Claude Code extension.
 * Returns an array of status messages.
 */
export async function removeRtl(ext: ClaudeExtensionInfo): Promise<{ messages: string[]; changed: boolean }> {
    const messages: string[] = [];
    let changed = false;

    // --- CSS ---
    if (!(await isCssInstalled(ext.cssPath))) {
        messages.push(`  CSS: RTL not installed in ${ext.name}`);
    } else {
        const backupPath = ext.cssPath + '.bak';
        let restored = false;

        if (await exists(backupPath)) {
            try {
                await fs.copyFile(backupPath, ext.cssPath);
                await fs.unlink(backupPath);
                messages.push(`  CSS: Restored from backup: ${ext.name}`);
                restored = true;
                changed = true;
            } catch (e: unknown) {
                messages.push(`  CSS: Backup restore failed: ${(e as Error).message}, trying manual removal...`);
            }
        }

        if (!restored) {
            try {
                const content = await fs.readFile(ext.cssPath, 'utf-8');
                const cleaned = stripBlock(content, RTL_START_MARKER, RTL_END_MARKER);
                await fs.writeFile(ext.cssPath, cleaned, 'utf-8');
                messages.push(`  CSS: RTL removed from ${ext.name}`);
                changed = true;
            } catch (e: unknown) {
                messages.push(`  CSS: Error removing RTL: ${(e as Error).message}`);
            }
        }
    }

    // --- JS ---
    if (!ext.jsPath || !(await isJsInstalled(ext.jsPath))) {
        messages.push(`  JS:  Button not installed in ${ext.name}`);
    } else {
        const backupPath = ext.jsPath + '.bak';
        let restored = false;

        if (await exists(backupPath)) {
            try {
                await fs.copyFile(backupPath, ext.jsPath);
                await fs.unlink(backupPath);
                messages.push(`  JS:  Restored from backup: ${ext.name}`);
                restored = true;
                changed = true;
            } catch (e: unknown) {
                messages.push(`  JS:  Backup restore failed: ${(e as Error).message}, trying manual removal...`);
            }
        }

        if (!restored) {
            try {
                const content = await fs.readFile(ext.jsPath, 'utf-8');
                const cleaned = stripBlock(content, JS_START_MARKER, JS_END_MARKER);
                await fs.writeFile(ext.jsPath, cleaned, 'utf-8');
                messages.push(`  JS:  Toggle button removed from ${ext.name}`);
                changed = true;
            } catch (e: unknown) {
                messages.push(`  JS:  Error removing button: ${(e as Error).message}`);
            }
        }
    }

    return { messages, changed };
}
