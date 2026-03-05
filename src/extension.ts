import * as vscode from 'vscode';
import { RtlMode } from './types.js';
import { findClaudeExtensions } from './finder.js';
import { addRtl, addRtlAlways, addRtlAuto, removeRtl, fixBidi, getStatus } from './injector.js';
import { createStatusBarItem, updateStatusBar, disposeStatusBar } from './statusBar.js';

const STATE_MODE_KEY = 'rtl.mode';

let outputChannel: vscode.OutputChannel;
let globalState: vscode.Memento;

function getOutputChannel(): vscode.OutputChannel {
    if (!outputChannel) {
        outputChannel = vscode.window.createOutputChannel('Claude RTL');
    }
    return outputChannel;
}

async function saveMode(mode: RtlMode): Promise<void> {
    await globalState.update(STATE_MODE_KEY, mode);
}

function getSavedMode(): RtlMode {
    return globalState.get<RtlMode>(STATE_MODE_KEY, 'inactive');
}

async function handleAdd(): Promise<void> {
    const extensions = await findClaudeExtensions();
    if (extensions.length === 0) {
        vscode.window.showWarningMessage('No Claude Code extensions found.');
        return;
    }

    const channel = getOutputChannel();
    channel.clear();
    channel.appendLine('Activating RTL support...\n');

    let anyChanged = false;
    for (const ext of extensions) {
        const result = await addRtl(ext);
        result.messages.forEach(m => channel.appendLine(m));
        if (result.changed) anyChanged = true;
    }

    channel.show(true);
    await saveMode('active');

    if (anyChanged) {
        vscode.commands.executeCommand('workbench.action.reloadWindow');
    }
}

async function handleAddAlways(): Promise<void> {
    const extensions = await findClaudeExtensions();
    if (extensions.length === 0) {
        vscode.window.showWarningMessage('No Claude Code extensions found.');
        return;
    }

    const channel = getOutputChannel();
    channel.clear();
    channel.appendLine('Activating RTL Always mode...\n');

    let anyChanged = false;
    for (const ext of extensions) {
        const result = await addRtlAlways(ext);
        result.messages.forEach(m => channel.appendLine(m));
        if (result.changed) anyChanged = true;
    }

    channel.show(true);
    await saveMode('always');

    if (anyChanged) {
        vscode.commands.executeCommand('workbench.action.reloadWindow');
    }
}

async function handleAddAuto(): Promise<void> {
    const extensions = await findClaudeExtensions();
    if (extensions.length === 0) {
        vscode.window.showWarningMessage('No Claude Code extensions found.');
        return;
    }

    const channel = getOutputChannel();
    channel.clear();
    channel.appendLine('Activating RTL Auto mode...\n');

    let anyChanged = false;
    for (const ext of extensions) {
        const result = await addRtlAuto(ext);
        result.messages.forEach(m => channel.appendLine(m));
        if (result.changed) anyChanged = true;
    }

    channel.show(true);
    await saveMode('auto');

    if (anyChanged) {
        vscode.commands.executeCommand('workbench.action.reloadWindow');
    }
}

async function handleFixBidi(): Promise<void> {
    const extensions = await findClaudeExtensions();
    if (extensions.length === 0) {
        vscode.window.showWarningMessage('No Claude Code extensions found.');
        return;
    }

    const channel = getOutputChannel();
    channel.clear();
    channel.appendLine('Activating RTL support with BiDi fix...\n');

    let anyChanged = false;
    for (const ext of extensions) {
        const result = await fixBidi(ext);
        result.messages.forEach(m => channel.appendLine(m));
        if (result.changed) anyChanged = true;
    }

    channel.show(true);

    // fixBidi preserves current mode; if was inactive, it activates as 'active'
    const currentSaved = getSavedMode();
    if (currentSaved === 'inactive') {
        await saveMode('active');
    }

    if (anyChanged) {
        vscode.commands.executeCommand('workbench.action.reloadWindow');
    }
}

async function handleRemove(): Promise<void> {
    const extensions = await findClaudeExtensions();
    if (extensions.length === 0) {
        vscode.window.showWarningMessage('No Claude Code extensions found.');
        return;
    }

    const channel = getOutputChannel();
    channel.clear();
    channel.appendLine('Deactivating RTL support...\n');

    let anyChanged = false;
    for (const ext of extensions) {
        const result = await removeRtl(ext);
        result.messages.forEach(m => channel.appendLine(m));
        if (result.changed) anyChanged = true;
    }

    channel.show(true);
    await saveMode('inactive');

    if (anyChanged) {
        vscode.commands.executeCommand('workbench.action.reloadWindow');
    } else {
        vscode.window.showInformationMessage('RTL is already inactive.');
    }
}

async function handleStatus(): Promise<void> {
    const extensions = await findClaudeExtensions();
    if (extensions.length === 0) {
        vscode.window.showWarningMessage('No Claude Code extensions found.');
        return;
    }

    const statuses = await getStatus(extensions);
    const channel = getOutputChannel();
    channel.clear();
    const ideName = vscode.env.appName;
    channel.appendLine(`IDE: ${ideName}`);
    channel.appendLine(`Saved mode: ${getSavedMode()}`);
    channel.appendLine(`Found ${extensions.length} Claude Code extension(s):\n`);

    for (const s of statuses) {
        channel.appendLine(`  ${s.extension.name}`);
        channel.appendLine(`    CSS: ${s.cssInstalled ? 'INSTALLED' : 'Not installed'}  |  ${s.cssBackupExists ? 'Backup exists' : 'No backup'}`);
        channel.appendLine(`    JS:  ${s.jsInstalled ? 'INSTALLED' : 'Not installed'}  |  ${s.jsBackupExists ? 'Backup exists' : 'No backup'}`);
        channel.appendLine(`    Mode: ${s.mode}`);
        channel.appendLine(`    Path: ${s.extension.cssPath}\n`);
    }

    channel.show(true);
    await updateStatusBar();
}

interface MenuAction extends vscode.QuickPickItem {
    command: string;
}

async function handleShowMenu(): Promise<void> {
    const items: MenuAction[] = [
        { label: '$(check) Activate RTL', description: 'Enable RTL support with toggle button', command: 'claude-rtl.add' },
        { label: '$(pin) Activate RTL (Always)', description: 'Enable RTL permanently without toggle button', command: 'claude-rtl.addAlways' },
        { label: '$(eye) Activate RTL (Auto)', description: 'Auto-detect Hebrew per paragraph and set direction', command: 'claude-rtl.addAuto' },
        { label: '$(tools) Fix BiDi', description: 'Activate RTL and fix bidirectional text issues', command: 'claude-rtl.fixBidi' },
        { label: '$(close) Deactivate RTL', description: 'Disable RTL support and restore original files', command: 'claude-rtl.remove' },
        { label: '$(info) Check Status', description: 'Show current RTL status', command: 'claude-rtl.status' },
    ];

    const selection = await vscode.window.showQuickPick(items, {
        placeHolder: 'Claude Code RTL Support',
    });

    if (selection) {
        vscode.commands.executeCommand(selection.command);
    }
}

/**
 * Auto-reactivate RTL if needed.
 * Runs silently on every activation to ensure RTL stays injected
 * even after Claude Code updates replace the files.
 */
async function autoReactivate(): Promise<void> {
    const savedMode = getSavedMode();
    const isFirstInstall = globalState.get<string>(STATE_MODE_KEY) === undefined;

    // First install — activate as 'active' automatically
    if (isFirstInstall) {
        await saveMode('active');
        const extensions = await findClaudeExtensions();
        if (extensions.length === 0) return;

        let anyChanged = false;
        for (const ext of extensions) {
            const result = await addRtl(ext);
            if (result.changed) anyChanged = true;
        }

        if (anyChanged) {
            vscode.commands.executeCommand('workbench.action.reloadWindow');
        }
        return;
    }

    if (savedMode === 'inactive') return;

    const extensions = await findClaudeExtensions();
    if (extensions.length === 0) return;

    const statuses = await getStatus(extensions);
    const needsReinjection = statuses.some(s => s.mode !== savedMode);
    if (!needsReinjection) return;

    // Silently re-inject based on saved mode
    let anyChanged = false;
    for (const ext of extensions) {
        const result = savedMode === 'auto'
            ? await addRtlAuto(ext)
            : savedMode === 'always'
            ? await addRtlAlways(ext)
            : await addRtl(ext);
        if (result.changed) anyChanged = true;
    }

    if (anyChanged) {
        vscode.commands.executeCommand('workbench.action.reloadWindow');
    }
}

export function activate(context: vscode.ExtensionContext): void {
    globalState = context.globalState;

    const statusBar = createStatusBarItem();
    context.subscriptions.push(statusBar);

    context.subscriptions.push(
        vscode.commands.registerCommand('claude-rtl.add', handleAdd),
        vscode.commands.registerCommand('claude-rtl.addAlways', handleAddAlways),
        vscode.commands.registerCommand('claude-rtl.addAuto', handleAddAuto),
        vscode.commands.registerCommand('claude-rtl.fixBidi', handleFixBidi),
        vscode.commands.registerCommand('claude-rtl.remove', handleRemove),
        vscode.commands.registerCommand('claude-rtl.status', handleStatus),
        vscode.commands.registerCommand('claude-rtl.showMenu', handleShowMenu),
    );

    autoReactivate();
    updateStatusBar();
}

export function deactivate(): void {
    disposeStatusBar();
    outputChannel?.dispose();
}
