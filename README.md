# Node.js CRUD API with Swagger Documentation and Cypress E2E Tests - POC

## Overview

This project is a boilerplate Node.js API server built with **Express** supporting **CRUD operations** for a simple `Item` entity. It features:

- **Swagger UI documentation** for easy API reference and exploration
- **TODO:** 
  - **End-to-End tests** using Cypress that verify both the availability of Swagger docs and the functionality of every CRUD endpoint

Ideal for learning, prototyping, or as a base for new RESTful services.

***

## Features

- **Express API** with full CRUD for items
- **Swagger UI** at `/api-docs` for live documentation
- **In-memory data storage** (easy to swap with any database)
- **TODO:** 
  - **Cypress E2E tests**:

***

## Getting Started

### Requirements

- Node.js (v14+ recommended)
- npm


### Installation

```bash
git clone <this-repo>
cd <project-folder>
npm install
```


***

## Running the Application

### Start the Server

```bash
node app.js
```

- API accessible at: `http://localhost:3333`
- Swagger API docs accessible at: `http://localhost:3333/api-docs`

***

## API Endpoints

| Method | Endpoint | Description |
| :-- | :-- | :-- |
| GET | `/items` | List all items |
| GET | `/items/:id` | Get item by ID |
| POST | `/items` | Create a new item |
| PUT | `/items/:id` | Update an item by ID |
| DELETE | `/items/:id` | Delete an item by ID |

- See complete request/response schemas at `/api-docs`.

***

## API Documentation

- **Swagger UI** auto-generates API docs based on code comments and Swagger OpenAPI definitions.
- Interactive API explorer found at `/api-docs`.

***

## Folder Structure

```
├── app.js          # Express app and API logic with Swagger
├── package.json
```

***

## TODO

1. Create a TOC
2. Create Unit tests for all API endpoints / operations as part of the app startup 
3. Create Cypress tests for all CRUD operations
4. Create Github actions with workflows to deploy the app and test the app in Docker with Cypress 

***

## License

MIT License. Feel free to use, modify, and share!

***
