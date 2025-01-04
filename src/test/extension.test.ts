import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Brainrot Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    async function createTestDocument(content: string): Promise<vscode.TextDocument> {
        // Create an untitled document with the brainrot language
        const document = await vscode.workspace.openTextDocument({
            content: content,
            language: 'brainrot'
        });
        await vscode.window.showTextDocument(document);
        return document;
    }

    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    test('Inserts toilet emoji after typing "//"', async () => {
        const document = await createTestDocument('');
        const editor = await vscode.window.showTextDocument(document);

        // Type the first slash
        await editor.edit(editBuilder => {
            editBuilder.insert(new vscode.Position(0, 0), '/');
        });

        await delay(100);

        // Type the second slash
        await editor.edit(editBuilder => {
            editBuilder.insert(new vscode.Position(0, 1), '/');
        });

        await delay(300);

        const text = document.getText();
        assert.strictEqual(
            text,
            '🚽',
            `Toilet emoji should be inserted after typing "//". Actual: "${text}"`
        );
    });

    test('Does not insert emoji if "//" is in the middle of text', async () => {
        const document = await createTestDocument('Hello // world');
        const editor = await vscode.window.showTextDocument(document);

        await editor.edit(editBuilder => {
            editBuilder.insert(new vscode.Position(0, 14), '/');
        });

        await delay(300);

        const text = document.getText();
        assert.strictEqual(
            text,
            'Hello // world/',
            `No emoji should be inserted in the middle of text. Actual: "${text}"`
        );
    });

    test('Inserts emoji at the correct position', async () => {
        const document = await createTestDocument('First /');
        const editor = await vscode.window.showTextDocument(document);

        await delay(100);

        await editor.edit(editBuilder => {
            editBuilder.insert(new vscode.Position(0, 7), '/');
        });

        await delay(300);

        const text = document.getText();
        assert.strictEqual(
            text,
            'First 🚽',
            `Toilet emoji should be inserted at the correct position. Actual: "${text}"`
        );
    });
});