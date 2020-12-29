// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "lizard" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('lizard.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from VsCodeExtLizard!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}


const taskProvider = vscode.tasks.registerTaskProvider('lizard', {
	provideTasks: () => {
		const tasks = [];

		if(vscode.workspace.workspaceFolders)
		{
			
			const args = [];
			const lizardConfiguration = vscode.workspace.getConfiguration('lizard');

			if (lizardConfiguration.get('modifiedCyclomaticComplexityCalculation')===true) {
				args.push('--modified');
			}
			
			const argString = args.join(' ');
			const lizardShellEcecution = new vscode.ShellExecution("lizard ${relativeFile} " + argString)

			const task = new vscode.Task({ type: 'lizard' }, 
				vscode.workspace.workspaceFolders[0],
				"lizardOnOpenedFile", 
				"lizard",
				lizardShellEcecution);
				tasks.push(task);
		}
		return tasks;
	},
	resolveTask(_task: vscode.Task): vscode.Task | undefined {

		if(vscode.workspace.workspaceFolders)
		{
			const lizardShellEcecution = new vscode.ShellExecution("lizard ${relativeFile}")
			const task = new vscode.Task({ type: 'lizard' }, 
				vscode.workspace.workspaceFolders[0],
				"lizardOnOpenedFile", 
				"lizard",
				lizardShellEcecution);

				return task;
		}
		return undefined;
	}
  });