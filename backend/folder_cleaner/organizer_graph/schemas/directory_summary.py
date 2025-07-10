from pydantic import BaseModel


class DirectorySummary(BaseModel):
    """A summary of a directory's contents, including the number of files and directories."""

    total_files: int
    """Total number of files in the directory."""

    total_directories: int
    """Total number of directories in the directory."""

    five_most_predominant_extensions: dict[str, int]
    """A dictionary mapping file extensions to their counts."""

    subfolder_depths: list[int]
    """List of depths of subfolders relative to the root directory."""

    file_names: list[str]
    """List of file names in the directory."""