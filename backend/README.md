1. **Prerequisites**
   - Ensure Python 3.9 or higher is installed on your system. You can download it from the [Python official website](https://www.python.org/).
   - Install Poetry, a tool for dependency management and packaging in Python. You can find installation instructions on the [Poetry official website](https://python-poetry.org/docs/).

2. **Install Poetry**
   - To install Poetry, use the following command:
     ```bash
     curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
     ```
     For Windows, use PowerShell:
     ```powershell
     (Invoke-WebRequest -Uri https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py -UseBasicParsing).Content | python -
     ```
   - After installation, restart your terminal to ensure the `poetry` command is recognized.
   - Verify the installation by running:
     ```bash
     poetry --version
     ```

3. **Clone the Repository**
   - Clone the Manatees project repository to your local machine.
     ```bash
     git clone https://github.com/gwicho38/manatees.git
     cd manatees/backend  # Navigate to the backend directory
     ```

4. **Install Dependencies with Poetry**
   - Inside the backend directory, use Poetry to install the project dependencies.
     ```bash
     poetry install
     ```

5. **Run the Python Backend in Development Mode**
   - Start the Python backend using Uvicorn, an ASGI server, in development mode with live reload.
     ```bash
     poetry run uvicorn app.main:app --reload
     ```