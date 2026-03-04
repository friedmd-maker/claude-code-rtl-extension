import * as vscode from 'vscode';
import { findClaudeExtensions } from './finder.js';
import { addRtl, removeRtl, fixBidi, getStatus } from './injector.js';
import { createStatusBarItem, updateStatusBar, disposeStatusBar } from './statusBar.js';

let outputChannel: vscode.OutputChannel;

function getOutputChannel(): vscode.OutputChannel {
    if (!outputChannel) {
        outputChannel = vscode.window.createOutputChannel('Claude RTL');
    }
    return outputChannel;
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
    channel.appendLine(`Found ${extensions.length} Claude Code extension(s):\n`);

    for (const s of statuses) {
        channel.appendLine(`  ${s.extension.name}`);
        channel.appendLine(`    CSS: ${s.cssInstalled ? 'INSTALLED' : 'Not installed'}  |  ${s.cssBackupExists ? 'Backup exists' : 'No backup'}`);
        channel.appendLine(`    JS:  ${s.jsInstalled ? 'INSTALLED' : 'Not installed'}  |  ${s.jsBackupExists ? 'Backup exists' : 'No backup'}`);
        channel.appendLine(`    Path: ${s.extension.cssPath}\n`);
    }

    channel.show(true);
    await updateStatusBar();
}

async function handleShowMenu(): Promise<void> {
    const items: vscode.QuickPickItem[] = [
        { label: '$(check) Activate RTL', description: 'Enable RTL support for Claude Code' },
        { label: '$(tools) Fix BiDi', description: 'Activate RTL and fix bidirectional text issues' },
        { label: '$(close) Deactivate RTL', description: 'Disable RTL support and restore original files' },
        { label: '$(info) Check Status', description: 'Show current RTL status' },
    ];

    const selection = await vscode.window.showQuickPick(items, {
        placeHolder: 'Claude Code RTL Support',
    });

    if (!selection) return;

    if (selection.label.includes('Activate')) {
        vscode.commands.executeCommand('claude-rtl.add');
    } else if (selection.label.includes('Fix BiDi')) {
        vscode.commands.executeCommand('claude-rtl.fixBidi');
    } else if (selection.label.includes('Deactivate')) {
        vscode.commands.executeCommand('claude-rtl.remove');
    } else if (selection.label.includes('Status')) {
        vscode.commands.executeCommand('claude-rtl.status');
    }
}

export function activate(context: vscode.ExtensionContext): void {
    const statusBar = createStatusBarItem();
    context.subscriptions.push(statusBar);

    context.subscriptions.push(
        vscode.commands.registerCommand('claude-rtl.add', handleAdd),
        vscode.commands.registerCommand('claude-rtl.fixBidi', handleFixBidi),
        vscode.commands.registerCommand('claude-rtl.remove', handleRemove),
        vscode.commands.registerCommand('claude-rtl.status', handleStatus),
        vscode.commands.registerCommand('claude-rtl.showMenu', handleShowMenu),
    );

    updateStatusBar();
}

export function deactivate(): void {
    disposeStatusBar();
    outputChannel?.dispose();
}
