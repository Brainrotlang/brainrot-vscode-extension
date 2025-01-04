import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposables: vscode.Disposable[] = [];

    // Register the text document change handler
    const changeHandler = vscode.workspace.onDidChangeTextDocument(async event => {
        const editor = vscode.window.activeTextEditor;
        if (!editor || event.contentChanges.length === 0) {
            return;
        }

        // Make sure we're in a brainrot language document
        if (editor.document.languageId !== 'brainrot') {
            return;
        }

        // Make sure the change happened in the active document
        if (event.document.uri.toString() !== editor.document.uri.toString()) {
            return;
        }

        const change = event.contentChanges[event.contentChanges.length - 1];
        
        // We only care about single-character insertions that are "/"
        if (change.text !== '/' || change.rangeLength !== 0) {
            return;
        }

        const lineText = editor.document.lineAt(change.range.start.line).text;
        const position = change.range.start.character;

        // Check if there's a slash right before our current position
        if (position > 0 && lineText[position - 1] === '/') {
            // Create a range that covers both slashes
            const startPos = new vscode.Position(change.range.start.line, position - 1);
            const endPos = new vscode.Position(change.range.start.line, position + 1);
            const range = new vscode.Range(startPos, endPos);

            try {
                await editor.edit(editBuilder => {
                    editBuilder.replace(range, '🚽');
                }, {
                    undoStopBefore: false,
                    undoStopAfter: true
                });
            } catch (error) {
                console.error('Failed to replace text:', error);
            }
        }
    });
    disposables.push(changeHandler);

    // Register the insertToiletEmoji command
    const command = vscode.commands.registerCommand('brainrot.insertToiletEmoji', async () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const position = editor.selection.active;
            await editor.edit(editBuilder => {
                editBuilder.insert(position, '🚽');
            });
        }
    });
    disposables.push(command);

    context.subscriptions.push(...disposables);
}

export function deactivate() {}
