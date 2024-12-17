# Brainrot VSCode Extension

## 🤔 What is Brainrot?

**Brainrot** is a meme-inspired programming language that translates common programming keywords into internet slang and meme references. This VSCode extension provides syntax highlighting and basic language support for Brainrot files (`.brainrot`).

### Example:

```brainrot
skibidi main {
    yapping("Hello, World!");
    bussin 0;
}
```

In Brainrot:

- `skibidi` is equivalent to `void`
- `rizz` is equivalent to `int`
- `bussin` is equivalent to `return`
- And much more...

## 🛠 Features

This extension adds:

- Syntax highlighting for Brainrot language keywords, operators, and built-in functions.
- File association for `.brainrot` files.
- Basic language configuration (comments, brackets, etc.).

## 📦 Installation

### Method 1: Running in Development Mode

1. **Clone this repository** to your local machine:

   ```bash
   git clone https://github.com/araujo88/brainrot-vscode-support.git
   cd brainrot-vscode-support
   ```

2. **Open the project in VSCode**:

   ```bash
   code .
   ```

3. **Install the required dependencies**:
   Make sure you have Node.js installed. If not, [download and install Node.js](https://nodejs.org/). Then, run:

   ```bash
   npm install
   ```

4. **Launch the extension in a new VSCode window**:
   Press `F5` or go to the "Run and Debug" sidebar and select "Run Extension." This will open a new instance of VSCode with your extension loaded.

5. **Test the extension**:
   Create or open a `.brainrot` file to see syntax highlighting in action.

---

### Method 2: Packaging and Installing the Extension

1. **Package the extension**:
   Install the VSCode Extension Manager (`vsce`) if you haven't already:

   ```bash
   npm install -g @vscode/vsce
   ```

   Run the following command to package the extension into a `.vsix` file:

   ```bash
   vsce package
   ```

   This will create a file like `brainrot-x.y.z.vsix`.

2. **Install the packaged extension**:
   Open VSCode and install the extension manually:

   - Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X` on macOS).
   - Click the "..." menu in the top-right corner and select "Install from VSIX..."
   - Navigate to the `.vsix` file you created and select it to install.

3. **Reload VSCode**:
   After installation, reload VSCode to ensure the extension is active.

4. **Test the extension**:
   Open a `.brainrot` file to see syntax highlighting and language features in action.

---

## 💻 Usage

After following the installation steps, you can start writing Brainrot code in any file with a `.brainrot` extension. VSCode will automatically apply syntax highlighting for recognized keywords and operators.

### Supported Brainrot Keywords

The following keywords are highlighted in Brainrot:

| Brainrot   | C Equivalent |
| ---------- | ------------ |
| skibidi    | void         |
| rizz       | int          |
| cap        | bool         |
| cooked     | auto         |
| flex       | for          |
| bussin     | return       |
| edging     | if           |
| amogus     | else         |
| goon       | while        |
| bruh       | break        |
| grind      | continue     |
| chad       | float        |
| gigachad   | double       |
| yap        | char         |
| grimace    | const        |
| sigma rule | case         |
| based      | default      |
| mewing     | do           |
| gyatt      | enum         |
| whopper    | extern       |
| cringe     | goto         |
| giga       | long         |
| edgy       | register     |
| soy        | short        |
| nut        | signed       |
| maxxing    | sizeof       |
| salty      | static       |
| gang       | struct       |
| ohio       | switch       |
| chungus    | union        |
| nonut      | unsigned     |
| schizo     | volatile     |

## ⚠️ Known Issues

1. Error reporting is minimal.
2. No support for complex control structures like functions other than `main`.
3. Limited string manipulation capabilities.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the extension, feel free to submit a pull request:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by meme culture and internet slang.
- Built using VSCode's TextMate grammar and language configuration.
