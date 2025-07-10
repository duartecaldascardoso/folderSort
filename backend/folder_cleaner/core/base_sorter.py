from abc import ABC, abstractmethod
from pathlib import Path
from pydantic import BaseModel, Field


class BaseSorterStrategy(BaseModel, ABC):
    """Base class for all file sorting strategies. Used for metadata and an abstract sort() method."""

    developer_tag: str = Field(
        ..., description="Tag or name of the developer who created the strategy"
    )
    code_snippet: str = Field(
        ..., description="A code snippet illustrating the core logic of the strategy"
    )
    cli_command: str = Field(
        ..., description="The CLI subcommand or identifier for this strategy"
    )

    class Config:
        arbitrary_types_allowed = True
        extra = "forbid"

    @abstractmethod
    def sort(self, folder_path: Path) -> None:
        """Perform the sorting directly on the user's filesystem.

        Args:
            folder_path (Path): The folder on which to apply the sorting strategy.
        """
        pass
