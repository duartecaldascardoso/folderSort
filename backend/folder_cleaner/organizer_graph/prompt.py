# A prompt to generate a sorting algorithm based on user indications and directory summary.

SORTING_PROMPT = """
You are a Python developer tasked with creating a file organization script.

Your goal is to write a Python script that organizes files in the **current working directory** according to the **user instructions** and the **directory summary** provided.

**Requirements:**
- Follow Python best practices and PEP-8 standards to ensure readability and maintainability.
- The script must be safe: it should not delete or modify file contents — only move files.
- Do not use any external libraries beyond Python’s standard library.
- The script must handle errors gracefully, including:
  - Non-existent or invalid directories (although it will be run in a valid one)
  - Empty directories
  - Files that do not fit any sorting criteria
- The script must run when executed directly (`if __name__ == '__main__':`) and work in-place (inside the current working directory).
- Include **clear inline comments** to explain each major step of the process.

**Additional Notes:**
- Use functions to encapsulate logic where possible.
- You may create subfolders inside the directory as needed for sorting.
- Avoid hardcoded paths: rely on `os.getcwd()` or passed arguments.
- Prefer clarity over cleverness.

The generated file name should be suggestive about the type of sorting it performs and how. 

---

**Current Directory Path**:  
{directory_path}

**User Instructions**:  
{user_instructions}

**Directory Summary**:  
{directory_summary}
"""

