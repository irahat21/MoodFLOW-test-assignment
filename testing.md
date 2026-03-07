# Testing Documentation

## Overview

This project uses automated testing to help the team catch bugs early, verify that core functionality works as expected, and prevent broken code from being merged into the main branch.

The testing setup covers both the backend and frontend:

- **Backend:** Jest, ts-jest, and Supertest
- **Frontend:** Jest and React Testing Library

In addition, a **GitHub Actions CI pipeline** automatically runs tests and coverage checks on pushes and pull requests.

---

## Testing Frameworks Chosen

### Backend

The backend uses:

- **Jest** as the main test runner
- **ts-jest** so Jest can run TypeScript files
- **Supertest** for testing Express routes and API endpoints

### Frontend

The frontend uses:

- **Jest** as the main test runner
- **React Testing Library** for rendering and testing React/Next.js components
- **jest-environment-jsdom** to simulate a browser-like environment during tests

---

## Test Organization

Tests are stored in the same project as the code they test.

This follows the requirement that tests should be kept with the codebase while remaining separate from production deployment behavior.

### Backend examples

- `backend/src/utils/add.ts`
- `backend/src/utils/add.test.ts`

### Frontend examples

- `frontend/src/app/page.tsx`
- `frontend/src/app/page.test.tsx`

### Notes on placement

Backend tests use file names such as:

- `*.test.ts`

Frontend tests use file names such as:

- `*.test.tsx`

Keeping tests close to the code they test makes them easier to find, maintain, and update.

---

## Example Tests Added

### Backend example test

A simple backend unit test was added to verify that the Jest backend setup works correctly.

Example:

- `backend/src/utils/add.test.ts`

This test confirms that a small function behaves as expected and provides a model for future backend unit tests.

### Frontend example test

A simple frontend test was added to verify that the homepage renders successfully.

Example:

- `frontend/src/app/page.test.tsx`

This test confirms that the frontend testing setup works and provides a model for future UI/component tests.

---

## Running Tests Locally

### Backend

Navigate to the backend directory:
```bash
cd backend
```

Run the backend test suite:
```bash
npm test
```
This command runs all backend test files (such as *.test.ts) using Jest

Generate a backend test coverage report:
```bash
npm run test:coverage
```
This command runs the tests and produces a coverage report showing how much of the backend code is covered by automated tests

#### Frontend

Navigate to the frontend directory:
```bash
cd frontend
```

Run the frontend test suite:
```bash
npm test
```
This command runs all frontend test files (such as *.test.tsx) using Jest and React Testing Library

Generate a frontend test coverage report:
```bash
npm run test:coverage
```
This command runs the tests and produces a coverage report showing how much of the frontend code is covered by automated tests


## Continuous Integration (CI)

This project uses **GitHub Actions** to automatically run tests whenever code is pushed or a pull request is created.

The CI workflow configuration is located at:
.github/workflows/ci.yml


### What CI Does

The CI pipeline automatically performs the following steps:

1. **Checks out the repository**  
   Downloads the project code to the CI runner.

2. **Sets up Node.js**  
   Installs the required Node.js environment used by the project.

3. **Installs backend dependencies**  
   Runs `npm ci` inside the `backend` directory to install backend packages.

4. **Runs backend tests**  
   Executes backend unit tests using Jest.

5. **Generates backend test coverage**  
   Runs `npm run test:coverage` to measure backend test coverage.

6. **Installs frontend dependencies**  
   Runs `npm ci` inside the `frontend` directory.

7. **Runs frontend tests**  
   Executes frontend tests using Jest and React Testing Library.

8. **Generates frontend test coverage**  
   Runs `npm run test:coverage` to measure frontend test coverage.

### When CI Runs

The CI workflow automatically runs when:

- code is **pushed to the `main` branch**
- code is **pushed to the `testing-setup` branch**
- a **pull request targeting `main` is opened or updated**

This ensures that all tests are executed automatically whenever new code changes are introduced.