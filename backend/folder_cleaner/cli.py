import os

import typer
from pathlib import Path
from folder_cleaner.core.alphabetical_sorter import AlphabeticalSorter
from folder_cleaner.core.chronological_order import TimeBasedSorter

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
        help="Simulate sorting in a dummy folder with empty files before actual sorting (useful for experimenting).",
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


@app.command("time")
def time_based_sort(time_measure: str):
    """Sort files into folders by creation time. Accepts one of the following time measures: 'day', 'week', 'month', 'year'."""
    folder_path = Path.cwd()

    sorter = TimeBasedSorter.model_construct(
        developer_tag="caldasdcardoso",
        code_snippet="Sort files into folders by creation time.",
        cli_command="time",
        careful=state.careful,
        time_measure=time_measure,
    )

    sorter.sort(folder_path)
    typer.echo("Sorted files by the times they were created at.")


@app.command("ai")
def ai_sort(
    instruction: str,
    api_key: str = typer.Option(
        None,
        "--api-key",
        help="Your API key (or set API_KEY environment variable).",
    ),
):
    """Sort files using AI based on your instruction."""
    final_key = api_key or os.getenv("API_KEY")
    if not final_key:
        typer.echo(
            "API key not provided. Use --api-key or set the API_KEY environment variable."
        )
        raise typer.Exit(code=1)


#
# TBD. CLI commands for community-developed strategies. Here, the calls are delegated to the core module, which will handle the logic.
#


if __name__ == "__main__":
    app()
