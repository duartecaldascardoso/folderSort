# A prompt to generate a sorting algorithm based on user indications and directory summary.

SORTING_PROMPT = """
You are an expert in file organization and sorting algorithms. Based on the user's instructions and the provided directory summary, 
generate a Python function that sorts files in a given directory.
The function should take a directory path as input and organize the files according to the user's specifications. 
The function should handle various file types and ensure that files are moved to appropriate subdirectories based on their characteristics.
The function should be efficient and robust, handling edge cases such as:
- Empty directories
- Non-existent directories
- Files with no specific sorting criteria
The function should not modify the original files but rather create a new structure for organization. 
Ensure that the function is well-documented with comments explaining each step of the process.

User Instructions:
{user_instructions}

Directory Summary:
{directory_summary}
"""
