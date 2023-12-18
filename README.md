# Manatees Project: Query Orchestration with NodeJS and Docker

## Description

This project aims to provide a robust and scalable solution for handling complex queries in a distributed environment.

## Team

- **Name**: Manatees
- **Member**: Luis E. Fernandez de la Vara
- **NetID**: luisef2

## Project Overview

### Topic

The project focuses on implementing an unstructured search application that utilizes query orchestration. It involves a web client for query input, a query router, and backend services powered by pre-trained models to process and respond to queries.

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
- **ML Classifiers**: Open-source NLP classifiers

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

## NodeJS Client

[Client Walkthrough](client/README.md)

## Server Walkthrough

[Server Walkthrough](backend/README.md)
