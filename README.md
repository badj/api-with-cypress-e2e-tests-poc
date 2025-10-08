# Node.js CRUD API with Swagger Documentation and Cypress E2E Tests - POC

## Overview

This project is a boilerplate Node.js API server built with **Express** supporting **CRUD operations** for a simple `Item` entity. It features:

- **Swagger UI documentation** for easy API reference and exploration
- **Jest and supertes unit tests** to verify all API endpoints accurately
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

## Unit Tests

Unit tests are implemented in Jest and supertest inside the `__tests__/` directory to verify all API endpoints accurately.

- Tests each /items CRUD endpoint for correctness and error handling
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

PASS  __tests__/app.test.js
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

PASS __tests__/app.test.js
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
***

## Folder Structure

```
├── __tests__/
    └── app.test.js  # Unit tests for API
├── app.js           # Express app and API logic
├── package.json
├── server.js        # Express app server start logic
```

***

## TODO

1. Create a TOC
2. Create Cypress tests for all CRUD operations
3. Create Github actions with workflows to deploy the app and test the app in Docker with Cypress 

***

## License

MIT License. Feel free to use, modify, and share!

***
