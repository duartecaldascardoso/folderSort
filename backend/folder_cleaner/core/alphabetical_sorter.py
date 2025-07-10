import shutil
from pathlib import Path
from string import ascii_uppercase
from .base_sorter import BaseSorterStrategy

class AlphabeticalSorter(BaseSorterStrategy):
    def __init__(self):
        super().__init__(
            developer_tag="caldasdcardoso",
            code_snippet="Sort files into folders by first letter of filename.",
            cli_command="alphabetical"
        )

    def sort(self, folder_path: Path) -> None:
        print(f"📁 Sorting folder: {folder_path}")
        files = [f for f in folder_path.iterdir() if f.is_file()]
        if not files:
            print("⚠️ No files to sort.")
            return

        for letter in ascii_uppercase:
            matching_files = [f for f in files if f.name[0].upper() == letter]
            if not matching_files:
                continue

            target_dir = folder_path / letter
            target_dir.mkdir(exist_ok=True)
            print(f"📂 Moving {len(matching_files)} files to '{letter}/'")

            for file in matching_files:
                dest = target_dir / file.name
                shutil.move(str(file), dest)
