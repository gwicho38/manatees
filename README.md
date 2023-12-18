# Manatees Project: Query Orchestration with NodeJS and Docker

## Description

The Manatees project is an innovative approach to unstructured search applications, leveraging the power of query orchestration and microservices architecture using Docker. This project aims to provide a robust and scalable solution for handling complex queries in a distributed environment.

## Team

- **Name**: Manatees
- **Member**: Luis E. Fernandez de la Vara
- **NetID**: luisef2

## Project Overview

### Topic

The project focuses on implementing an unstructured search application that utilizes query orchestration. It involves a user-friendly web client for query input, a sophisticated query router, and backend services powered by pre-trained models to process and respond to queries.

### Architecture

- **Client**: A simple, single-search client that routes queries to the orchestrator. It will be containerized using Docker.
- **Orchestrator**: An event-driven NodeJS service endpoint that interfaces with a Python classification service to categorize queries as either imperative or descriptive, routing them accordingly.
- **Imperative Service**: Processes imperative queries and returns actionable instructions.
- **Descriptive Service**: Handles descriptive queries and provides detailed explanations.

Each component is containerized using Docker, allowing for flexible deployment and management.

### Importance

This project is significant due to its:
- **Lightweight Architecture**: A declarative and scalable service architecture using Docker.
- **Advanced Query Classification**: Efficient routing based on query type.
- **Extensibility**: Potential applications in various domains like intrusion detection.

### Technologies

- **Frontend**: JavaScript (NodeJS)
- **Text Processing**: Python, with potential use of C/C++
- **Containerization**: Docker
- **ML Classifiers**: Open-source NLP classifiers and OpenVINO Framework's [Text Prediction Toolkit](https://docs.openvino.ai/2023.1/notebooks/223-text-prediction-with-output.html).

### Expected Outcome

The application aims for high precision with moderate recall capabilities.

### Evaluation

The system will be evaluated through manual labeling and classification of queries by volunteers.

## Workload Justification

The project is estimated to require a minimum of 20 hours, distributed as follows:
- Networking flow and client setup: 5-10 hours
- ML classifier integration: 5-10 hours
- Docker-based deployment: 5-10 hours

---

### Building and Running the Manatees Project

#### Node.js Client

1. **Prerequisites**
   - Ensure Node.js is installed on your system. You can download it from [Node.js official website](https://nodejs.org/).

2. **Clone the Repository**
   - Clone the Manatees project repository to your local machine.
     ```bash
     git clone https://github.com/gwicho38/manatees.git
     cd manatees/client  # Navigate to the client directory
     ```

3. **Install Dependencies**
   - Inside the client directory, install the necessary Node.js dependencies.
     ```bash
     npm install
     ```

4. **Run the Node.js Client**
   - Start the Node.js client application.
     ```bash
     npm start
     ```

#### Python Backend with Poetry

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

#### Docker Containerization

For instructions on how to containerize and run the Node.js client and Python backend using Docker, refer to the [Containerization Instructions](#containerization-instructions) section.
