from pathlib import Path
from typing import TypedDict, Optional

from folder_cleaner.organizer_graph.schemas.directory_summary import DirectorySummary


class InputOrganizerState(TypedDict):
    """Input state passed to the organizer."""

    """Current path location from which the organizer is invoked."""
    path: Path

    """Set of instructions provided by the user in how to organize the files in the current folder."""
    user_indication: str

    """List of flags passed via CLI to the organizer."""
    user_flags: Optional[list[str]]

class OrganizerState(InputOrganizerState):
    """State of the organizer graph."""

    """Obtained code from the LLM with the given user instructions."""
    organized_code: str

    """Directory summary of the current folder."""
    directory_summary: DirectorySummary