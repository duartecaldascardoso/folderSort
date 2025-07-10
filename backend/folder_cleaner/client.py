import argparse
import sys
from pathlib import Path

from folder_cleaner.core.alphabetical_sorter import AlphabeticalSorter


def main():
    print("🔧 Tool loaded.")
    parser = argparse.ArgumentParser(
        description="A CLI tool to clean and organize folders.",
        formatter_class=argparse.RawTextHelpFormatter,
    )

    parser.add_argument(
        "-a",
        "--alphabetical",
        action="store_true",
        help="Organize files alphabetically (A-Z folders)",
    )
    parser.add_argument(
        "-ai",
        "--artificial_intelligence",
        type=str,
        help="Organize files based on instruction (uses AI)",
    )
    parser.add_argument(
        "-f",
        "--filetype",
        action="store_true",
        help="Organize files by type (e.g., images, documents)",
    )

    args = parser.parse_args()
    target_path = Path.cwd()

    if args.alphabetical:
        sorter = AlphabeticalSorter()
        sorter.sort(target_path)

    return 0


if __name__ == "__main__":
    sys.exit(main())
