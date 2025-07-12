from abc import ABC, abstractmethod
from pathlib import Path
from pydantic import BaseModel, Field


class BaseSorterStrategy(BaseModel, ABC):
    """Base class for all file sorting strategies. Used for metadata and base sort handling."""

    developer_tag: str = Field(
        ..., description="Unique identifier for the developer or strategy author."
    )
    code_snippet: str = Field(
        ..., description="Short description of the sorting logic or code snippet."
    )
    cli_command: str = Field(
        ..., description="Command line usage associated with the strategy."
    )
    careful: bool = Field(
        False,
        description="If True, simulate sorting in a fake directory with empty files",
    )

    class Config:
        arbitrary_types_allowed = True
        extra = "forbid"

    def sort(self, folder_path: Path) -> None:
        """Non-overridable entry point. Prepares a path and delegates to subclass."""
        target_path = self.prepare_target_path(folder_path)
        self._sort_logic(target_path)

    @abstractmethod
    def _sort_logic(self, target_path: Path) -> None:
        """Override this to implement strategy logic."""
        pass

    def prepare_target_path(self, folder_path: Path) -> Path:
        """Return either the actual folder or a fake experiment folder if in careful mode."""
        if self.careful:
            experiment_dir = folder_path / f"experiment_{folder_path.name}"
            experiment_dir.mkdir(exist_ok=True)
            self._create_empty_file_structure(folder_path, experiment_dir)
            return experiment_dir
        return folder_path

    @staticmethod
    def _create_empty_file_structure(source_path: Path, dest_path: Path) -> None:
        """Replicate the file structure with empty files only (no content copied)."""
        for item in source_path.iterdir():
            if item.is_file():
                (dest_path / item.name).touch()
