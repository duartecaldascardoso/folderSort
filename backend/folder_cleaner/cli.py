import typer
from pathlib import Path
from folder_cleaner.core.alphabetical_sorter import AlphabeticalSorter

#
# State and app initialization
#

app = typer.Typer(help="📁 A tool to clean and organize folders.")


class AppState:
    careful: bool = False


state = AppState()


@app.callback()
def main(
    careful: bool = typer.Option(
        False,
        "--careful",
        "-c",
        help="Simulate sorting in a dummy folder with empty files.",
    ),
):
    """Folder Sort CLI"""
    state.careful = careful


#
# CLI commands dedicated to most common use cases, not developed by the community.
#


@app.command("alphabetical")
def alphabetical_sort():
    """Sort files into folders A-Z based on the first letter of their name."""
    folder_path = Path.cwd()
    sorter = AlphabeticalSorter(careful=state.careful)
    sorter.sort(folder_path)
    typer.echo("Sorted files alphabetically.")


@app.command("filetype")
def filetype_sort():
    """Sort files into folders by file extension/type."""
    typer.echo("Filetype sorting not implemented yet.")


@app.command("ai")
def ai_sort(instruction: str):
    """Sort files using AI based on your instruction."""
    typer.echo(f"AI instruction received: '{instruction}' (careful={state.careful})")


#
# TBD. CLI commands for community-developed strategies. Here, the calls are delegated to the core module, which will handle the logic.
#


if __name__ == "__main__":
    app()
