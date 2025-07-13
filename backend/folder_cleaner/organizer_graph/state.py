from pathlib import Path
from typing import Optional
from pydantic import BaseModel

from folder_cleaner.organizer_graph.schemas.directory_summary import DirectorySummary
from folder_cleaner.organizer_graph.schemas.sorting_algorithm import SortingAlgorithm


class InputOrganizerState(BaseModel):
    """Input state passed to the organizer."""
    path: Path
    user_indication: str
    user_flags: Optional[list[str]] = []


class OrganizerState(InputOrganizerState):
    """Full state of the organizer graph."""
    organized_code: Optional[str] = None
    directory_summary: Optional[DirectorySummary] = None
    sorting_algorithm: Optional[SortingAlgorithm] = None
