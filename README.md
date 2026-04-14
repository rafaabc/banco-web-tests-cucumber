# banco-web-tests-cucumber

> End-to-end test suite for the Banco Web application, using Cucumber.js with Selenium WebDriver and a BDD approach.

---

## 📋 Table of Contents

- [About](#-about)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running the Tests](#-running-the-tests)
- [Project Structure](#-project-structure)
- [Test Scenarios](#-test-scenarios)
- [Related Repositories](#-related-repositories)

---

## 🎯 About

This repository contains the automated end-to-end test for the [Banco Web](https://github.com/juliodelimas/banco-web) application, written in BDD style using Cucumber.js and Selenium WebDriver.

Gherkin scenarios document and validate the login with valid credentials. The project requires both **Banco API** and **Banco Web** to be running locally before executing the tests.

---

## 🛠️ Tech Stack

| Tool | Version | Role |
|---|---|---|
| Node.js | ≥ 18.x | JavaScript runtime |
| @cucumber/cucumber | ^12.8.0 | BDD framework / test runner |
| selenium-webdriver | ^4.43.0 | Browser automation |

---

## ⚙️ Prerequisites

Make sure the following are installed and running before executing the tests.

### Local tools

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (bundled with Node.js)
- A WebDriver matching your browser (e.g. [ChromeDriver](https://chromedriver.chromium.org/) for Google Chrome)

### ⚠️ Required services

The tests depend on two external applications that **must be running** before execution:

**1. Banco API** — REST + GraphQL API backed by MySQL
- Repository: [https://github.com/juliodelimas/banco-api](https://github.com/juliodelimas/banco-api)
- Requires: Node.js and MySQL configured
- Runs on ports `3000` (REST) and `3001` (GraphQL)
- Follow the repository README to set up the `.env` file and initialize the database

```bash
# Inside the banco-api directory
npm install
npm run rest-api
```

**2. Banco Web** — Frontend application under test
- Repository: [https://github.com/juliodelimas/banco-web](https://github.com/juliodelimas/banco-web)
- Requires: **Banco API** already running
- Runs on port `4000` by default

```bash
# Inside the banco-web directory
npm install
npm run server
```

> Visit `http://localhost:4000` to confirm the application is up before running the tests.

---

## 🚀 Installation

1. Clone this repository:

```bash
git clone https://github.com/rafaabc/banco-web-tests-cucumber.git
cd banco-web-tests-cucumber
```

2. Install dependencies:

```bash
npm install
```

---

## ▶️ Running the Tests

With both **Banco API** and **Banco Web** running, execute the full test suite:

```bash
npm test
```

To run a specific feature file:

```bash
npx cucumber-js features/<file-name>.feature
```

To run with detailed output:

```bash
npx cucumber-js --format progress-bar
```

---

## 📁 Project Structure

```
banco-web-tests-cucumber/
├── features/
│   ├── *.feature            # Gherkin scenarios
│   └── step_definitions/    # Step implementations in JavaScript
├── cucumber.js              # Cucumber configuration (profiles, paths, format)
├── package.json             # Project dependencies and scripts
└── .gitignore
```

---

## 🧪 Test Scenarios

### Login

| Scenario | Credentials | Expected Result |
|---|---|---|
| Login with valid credentials | `julio.lima` / `123456` | Redirects to the authenticated area |

The Login feature uses a Scenario Outline with an Examples table, covering multiple valid credential combinations in a single scenario definition.

---

## 🔗 Related Repositories

| Repository | Description |
|---|---|
| [juliodelimas/banco-api](https://github.com/juliodelimas/banco-api) | REST + GraphQL API — required dependency |
| [juliodelimas/banco-web](https://github.com/juliodelimas/banco-web) | Web application under test — required dependency |