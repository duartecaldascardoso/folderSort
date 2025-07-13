from pydantic import BaseModel, Field


class SortingAlgorithm(BaseModel):
    """The sorting algorithm obtained by invoking an LLM with the user instructions and directory summary."""

    generated_code: str = Field(description="The generated code.")

    code_explanation: str = Field(
        description="The explanation of the sorting algorithm."
    )
