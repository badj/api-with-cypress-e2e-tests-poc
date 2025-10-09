# Node.js CRUD API with Swagger Documentation and Cypress E2E Tests - POC

## Overview

This project is a boilerplate [Node.js](https://nodejs.org/en) API server built with [Express JS framework](https://expressjs.com/) supporting CRUD operations *(Create, Read, Update, Delete)* for a simple `Item` entity. It features:

- [**Swagger UI documentation**](https://swagger.io/) for easy API reference and exploration
- [**Jest**](https://jestjs.io/) **and** [**supertest**](https://www.npmjs.com/package/supertest) **unit tests** to verify all API endpoints accurately
- **End-to-End tests** using [Cypress](https://www.cypress.io/) that verify both the availability of Swagger docs and the functionality of every CRUD endpoint

Ideal for learning, prototyping, or as a base for new RESTful services.

[![Item API Deploy and E2E Cypress Tests](https://github.com/badj/api-with-cypress-e2e-tests-poc/actions/workflows/main.yml/badge.svg)](https://github.com/badj/api-with-cypress-e2e-tests-poc/actions/workflows/main.yml)

***

### Table of contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
  - [Start the Server](#start-the-server)
- [API Endpoints](#api-endpoints)
- [Swagger API Documentation](#swagger-api-documentation)
- [Test Coverage](#test-coverage)
  - [Unit Tests](#unit-tests)
  - [End-to-End Testing](#end-to-end-testing)
- [CI/CD with GitHub Actions](#cicd-with-github-actions)
- [Folder Structure](#folder-structure)
- [Customization](#customization)
- [TODO](#todo)
***

## Features

- **Express API** with full CRUD for items
- **Swagger UI** at `/api-docs` / [http://localhost:3333/api-docs](http://localhost:3333/api-docs) for live documentation
- **In-memory data storage** (easy to swap with any database)
- **Cypress End-to-End tests**:
  - Validate availability and accuracy of Swagger docs
  - Automated checks for all CRUD endpoint operations

[_⇡ Return to the Table of Contents_](#table-of-contents)

***

## Getting Started

### Requirements

- Node.js (v14+ recommended)
- npm

### Installation

- Clone the repo:
  ```terminaloutput
  git clone <this-repo>
  ```
- Change to the project folder:
  ```terminaloutput
  cd <project-folder>
  ```
- Install dependencies:
  ```bash
  npm install
  ```

[_⇡ Return to the Table of Contents_](#table-of-contents)

***

## Running the Application

### Start the Server

  ```bash
     node app.js
  ```

- API accessible at: [http://localhost:3333](http://localhost:3333)
- Swagger API docs accessible at: [http://localhost:3333/api-docs](http://localhost:3333/api-docs)

[_⇡ Return to the Table of Contents_](#table-of-contents)

***

## API Endpoints

| Method | Endpoint | Description |
| :-- | :-- | :-- |
| GET | `/items` | List all items |
| GET | `/items/:id` | Get item by ID |
| POST | `/items` | Create a new item |
| PUT | `/items/:id` | Update an item by ID |
| DELETE | `/items/:id` | Delete an item by ID |

- See complete request/response schemas at [/api-docs](http://localhost:3333/api-docs).

[_⇡ Return to the Table of Contents_](#table-of-contents)

***

## Swagger API Documentation

- **Swagger UI** auto-generates API docs based on code comments and Swagger OpenAPI definitions.
- Interactive API explorer found at [/api-docs](http://localhost:3333/api-docs).

[_⇡ Return to the Table of Contents_](#table-of-contents)

***
## Test Coverage

## Unit Tests

Unit tests are implemented in Jest and supertest inside the `tests/` directory to verify all API endpoints accurately.

- Tests each `/items` CRUD endpoint for correctness and error handling
- Runs in-memory (no DB required)

**Run tests manually:**

  ```bash
  npm test
  ```
  
- Expected output sample:

```terminaloutput
(main) % npm test                     

> nodejs-express-api-with-swagger-and-cypress-e2e-tests@1.0.0 test
> jest

 console.log
   Server running on http://localhost:3333

     at Server.log (app.js:191:13)

 console.log
   Swagger docs available at http://localhost:3333/api-docs

     at Server.log (app.js:192:13)

PASS  tests/app.test.js
 API Unit Tests
   ✓ should create an item (31 ms)
   ✓ should list items (3 ms)
   ✓ should get item by id (2 ms)
   ✓ should update item (2 ms)
   ✓ should delete item (4 ms)
   ✓ should return 404 for missing item (1 ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.31 s, estimated 1 s
Ran all test suites.

```

**Run unit tests automatically on server startup:**

  ```bash
     RUN_TESTS=true node server.js
  ```

- Expected output sample:

```terminaloutput
(main) % RUN_TESTS=true node server.js
Server running on http://localhost:3333
Swagger docs available at http://localhost:3333/api-docs
Server running on http://localhost:3333
Swagger docs available at http://localhost:3333/api-docs
Running unit tests...

> nodejs-express-api-with-swagger-and-cypress-e2e-tests@1.0.0 test
> jest

  console.log
    Server running on http://localhost:3333

      at Server.log (app.js:191:13)

  console.log
    Swagger docs available at http://localhost:3333/api-docs

      at Server.log (app.js:192:13)

PASS tests/app.test.js
  API Unit Tests
    ✓ should create an item (29 ms)
    ✓ should list items (3 ms)
    ✓ should get item by id (2 ms)
    ✓ should update item (2 ms)
    ✓ should delete item (2 ms)
    ✓ should return 404 for missing item (1 ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.265 s, estimated 1 s
Ran all test suites.
```

[_⇡ Return to the Table of Contents_](#table-of-contents)

***

## End-to-End Testing

> **Cypress End-to-End Tests**
> - The tests visits the [Swagger API docs](http://localhost:3333/api-docs) to verify the availability and correctness
> - The tests execute and validate all CRUD operations against the API

- Install Cypress:
  ```bash
     npm install --save-dev cypress
  ```
- Run tests with interactive Cypress GUI to select and run specific tests
  ```bash
  npx cypress open
  ```
- OR Run tests headless and no interactive Cypress GUI
  ```bash
  npx cypress run
  ```
- OR Run Unit tests, start the API Server, and run Cypress E2E tests in one command
  ```bash
  npm test && node server.js && npx cypress run
  ```

[_⇡ Return to the Table of Contents_](#table-of-contents)

***

## CI/CD with GitHub Actions

[![Item API Deploy and E2E Cypress Tests](https://github.com/badj/api-with-cypress-e2e-tests-poc/actions/workflows/main.yml/badge.svg)](https://github.com/badj/api-with-cypress-e2e-tests-poc/actions/workflows/main.yml)

> - CI is scheduled to run daily and will run on every push/PR
> - API is deployed in Docker and health-checked ➝ Unit tests (Jest) ensure API correctness on API server start ➝ E2E Cypress tests validate API and Swagger live :)
> - HTML reports are generated for each Cypress test run and uploaded as workflow artefacts.
> - See [.github/workflows/main.yml](.github/workflows/main.yml).

[_⇡ Return to the Table of Contents_](#table-of-contents)

***

## Folder Structure

```terminaloutput
├── .github/
    └── workflows/
        └── main.yml        # Wortkflow for GitHub Actions
├── tests/
    └── app.test.js         # Unit tests for API
├── app.js                  # Express app and API logic
└── cypress/
    └── e2e/
        └── api_crud.cy.js  # E2E tests for API and Swagger
├── package.json
├── server.js               # Express app server start logic
```

[_⇡ Return to the Table of Contents_](#table-of-contents)

***

## Customization

- Swap the in-memory array for a persistent database (MongoDB, PostgreSQL, etc.) as needed 
- Add new models, auth, environment config, and deployment scripts per your scaling needs

[_⇡ Return to the Table of Contents_](#table-of-contents)

***

## TODO

1. Integrate Cucumber BDD for the cypress end-to-end tests

[_⇡ Return to the Table of Contents_](#table-of-contents)

***
