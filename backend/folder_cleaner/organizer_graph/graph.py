import asyncio
import os
from pathlib import Path

from langchain.chat_models import init_chat_model
from langchain_core.messages import HumanMessage
from langgraph.constants import END
from langgraph.graph import StateGraph, START

from folder_cleaner.organizer_graph.prompt import SORTING_PROMPT
from folder_cleaner.organizer_graph.schemas.directory_summary import DirectorySummary
from folder_cleaner.organizer_graph.schemas.sorting_algorithm import SortingAlgorithm
from folder_cleaner.organizer_graph.state import OrganizerState, InputOrganizerState
from dotenv import load_dotenv
load_dotenv()

async def _explore_directory_content(state: InputOrganizerState):
    """Explore the folder and extract high-level structure information."""

    root_path = Path(state.path)
    file_extensions = []
    subfolder_depths = []
    total_files = 0
    total_directories = 0

    for directory_path, directory_names, filenames in os.walk(root_path):
        total_files += len(filenames)
        total_directories += len(directory_names)

        for f in filenames:
            ext = Path(f).suffix.lower()
            if ext:
                file_extensions.append(ext)

        depth = len(Path(directory_path).relative_to(root_path).parts)
        subfolder_depths.append(depth)

    file_type_frequency: dict[str, int] = {}

    for extension in file_extensions:
        if extension in file_type_frequency:
            file_type_frequency[extension] += 1
        else:
            file_type_frequency[extension] = 1

    five_most_predominant_extensions = sorted(
        file_type_frequency.items(), key=lambda x: x[1], reverse=True
    )[:5]
    predominant_file_types = {
        extension: count for extension, count in five_most_predominant_extensions
    }
    file_names = os.listdir(root_path)

    directory_summary = DirectorySummary(
        total_files=total_files,
        total_directories=total_directories,
        five_most_predominant_extensions=predominant_file_types,
        subfolder_depths=subfolder_depths,
        file_names=file_names,
    )

    return {"directory_summary": directory_summary}


async def _generate_sorting_algorithm(state: OrganizerState):
    """Using an LLM to generate a sorting algorithm based on the indications and on the directory summary."""
    api_key = os.environ.get("API_KEY")
    if not api_key:
        raise EnvironmentError("API_KEY environment variable not set.")

    model = init_chat_model(model="gpt-4o-mini", api_key=api_key)

    # Create the prompt
    prompt = SORTING_PROMPT.format(
        user_instructions=state.user_indication,
        directory_summary=state.directory_summary,
    )

    response = await model.with_structured_output(SortingAlgorithm).ainvoke(
        [HumanMessage(content=prompt)]
    )

    return {
        "sorting_algorithm": response,
    }


# Builder configuration of the graph
builder = StateGraph(OrganizerState)

# Nodes from the graph
builder.add_node("explore_directory_content", _explore_directory_content)
builder.add_node("generate_sorting_algorithm", _generate_sorting_algorithm)

# Edges from the graph
builder.add_edge(START, "explore_directory_content")
builder.add_edge(
    "explore_directory_content", "generate_sorting_algorithm"
)
builder.add_edge("generate_sorting_algorithm", END)

graph = builder.compile()


# Main method to run the graph in testing mode
async def main():
    current_path = Path(__file__).parent.resolve()
    # Create initial state
    initial_state = InputOrganizerState(
        path=current_path,
        user_indication="Create a script which will organize files by date and  type",
        user_flags=[],
    )

    # Run the graph
    result = await graph.ainvoke(initial_state)

    # Print the summary result
    print("\n--- Directory Summary ---")
    print(result.directory_summary.json(indent=2))


if __name__ == "__main__":
    asyncio.run(main())
