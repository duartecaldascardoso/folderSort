import os
from pathlib import Path
from typing import Optional

"""
Idea: 
The existing organizing methods should be invoked as chainable methods.
This means that each method should return the directory object itself after performing its operation.
This allows for method chaining, enabling users to call multiple organizing methods in a single line.
"""


def organize_alphabetically(directory: Path):
    pass


def organize_by_instruction(directory: Path, instruction: str):
    pass


def organize_by_filetype(directory: Path):
    pass


# TODO refactor into a class invocation
def clean_directory(directory: Path, alpha: bool, instr: Optional[str], filetype: bool):
    if alpha:
        organize_alphabetically(directory)
    elif instr:
        organize_by_instruction(directory, instr)
    elif filetype:
        organize_by_filetype(directory)
    else:
        print(f"Removing empty directories from {directory}...")
        for root, dirs, files in os.walk(directory, topdown=False):
            for d in dirs:
                full_path = os.path.join(root, d)
                if not os.listdir(full_path):
                    print(f"Removing empty directory: {full_path}")
                    os.rmdir(full_path)
