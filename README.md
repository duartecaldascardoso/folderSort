# 📁 folderSort

**folderSort** is a CLI tool that helps users clean and organize folders using both rule-based and AI-assisted strategies. Designed with extensibility in mind, it allows developers to contribute new sorting strategies tied to their identity and CLI command.

---

## Features

**Built-in Sorters**  
- `alphabetical`: Organize files into folders A–Z based on the first character of their name.
- `filetype`: (Coming soon) Sort files by file extension
- `ai`: Use AI to categorize files based on natural language instructions.

**Careful Mode**  
  Use `-c` to simulate file organization in a fake directory named `experiment_{original_folder_name}` using **empty placeholder files**, preserving your data during testing.

**Developer-Driven Architecture**  
  Every sorting strategy is tied to a developer tag and snippet of the implementation logic. This creates a collaborative CLI ecosystem where community developers can contribute creative strategies.

---

## Installation (Editable Mode for Development)

If you're cloning this repo and want to run it locally for development:

```bash
git clone https://github.com/duartecaldascardoso/folderSort
cd folder-sort/backend

# Install the app in editable mode
pip install -e .
```

Now you can invoke the CLI tool from anywhere:
    
```bash
folder-sort --help
```


## Contributing New Sorting Strategies

    The architecture is built for extensibility. Each sorting strategy should:
    
    Inherit from BaseSorterStrategy
    
    Implement the .sort() method
    
    Define:
    1. developer_tag: Your name or alias
    2. code_snippet: Core idea in pseudocode or summary
    3. cli_command: The name used to trigger your strategy from the CLI


## Development & Testing

Use --careful mode to avoid modifying your real files. Organize any test directory from your current shell working directory.

