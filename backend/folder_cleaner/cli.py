import os

import typer
from pathlib import Path
from folder_cleaner.core.alphabetical_sorter import AlphabeticalSorter
from folder_cleaner.core.chronological_order import TimeBasedSorter
from folder_cleaner.organizer_graph.graph import graph
from folder_cleaner.organizer_graph.state import InputOrganizerState

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
async def ai_sort(instruction: str):
    """Sort files using AI based on your instruction and current path."""

    path = Path.cwd()
    if not path.is_dir():
        typer.echo("Current path is not a directory.")
        raise typer.Exit(code=1)

    final_key = os.getenv("API_KEY")
    # Let's not do anything with the key for now, only check if it's provided.
    if not final_key:
        typer.echo(
            "API key not provided. Use --api-key or set the API_KEY environment variable."
        )
        raise typer.Exit(code=1)

    # Invoking the langgraph AI
    initial_state = InputOrganizerState(
        path=path,
        user_indication=instruction,
        user_flags=[],
    )

    result = await graph.ainvoke(initial_state)


#
# TBD. CLI commands for community-developed strategies. Here, the calls are delegated to the core module, which will handle the logic.
#


if __name__ == "__main__":
    app()
