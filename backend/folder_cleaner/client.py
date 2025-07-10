import argparse
import sys
from pathlib import Path

from folder_cleaner.folderOrganizer import clean_directory


def main():
    parser = argparse.ArgumentParser(
        description="A CLI tool to clean and organize folders.",
        formatter_class=argparse.RawTextHelpFormatter,
    )

    parser.add_argument(
        "-a",
        "--alphabetical",
        action="store_true",
        help="Organize files alphabetically",
    )
    parser.add_argument(
        "-ai",
        "--artificial_intelligence",
        type=str,
        help="Organize files based on user instruction - this will use AI to interpret the instruction",
    )
    parser.add_argument(
        "-f",
        "--filetype",
        action="store_true",
        help="Organize files by their type (e.g. images, documents)",
    )
    parser.add_argument(
        "-d",
        "--directory",
        type=str,
        default=".",
        help="Target directory to clean (default is current directory)",
    )

    args = parser.parse_args()

    directory = Path(args.directory).resolve()

    clean_directory(
        directory=directory,
        alpha=args.alphabetical,
        instr=args.artificial_intelligence,
        filetype=args.filetype,
    )

    return 0


if __name__ == "__main__":
    sys.exit(main())
