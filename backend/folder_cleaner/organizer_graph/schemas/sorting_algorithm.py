from pydantic import BaseModel, Field


class SortingAlgorithm(BaseModel):
    """The sorting algorithm obtained by invoking an LLM with the user instructions and directory summary."""

    generated_code: str = Field(description="The generated code.")

    code_explanation: str = Field(
        description="The explanation of the sorting algorithm."
    )

    file_name: str = Field(description="The name of the file, including the extension, where the sorting algorithm will be saved.")
