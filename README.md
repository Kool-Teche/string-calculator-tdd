## String Calculator TDD Kata

This project implements the String Calculator using Test-Driven Development (TDD) in Node.js and TypeScript.

## Getting Started

🔹 Prerequisites
Ensure you have Node.js (v20+) and npm installed. You can check your version using:

```bash
node -v
npm -v
```

### Setup Instructions

1️⃣ Clone the repository

```bash
git clone https://github.com/Kool-Teche/string-calculator-tdd.git
cd string-calculator-tdd
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Initialize Jest with TypeScript support

```bash
npx ts-jest config:init
```

Running Tests (TDD Cycle)

Execute all tests using Jest:

```bash
npx jest
```

To run tests in watch mode (for continuous development):

```bash
npx jest --watch
```

### Features Implemented Using TDD

✅ Returns 0 for an empty string <br>
✅ Supports adding numbers separated by commas (,) <br>
✅ Supports new line (\n) as a delimiter <br>
✅ Allows custom delimiters (//[delimiter]\n[numbers]) <br>
✅ Throws an exception for negative numbers <br>

### TDD Process Followed

This project follows the Red-Green-Refactor cycle:

1️⃣ RED: Write a failing test <br>
2️⃣ GREEN: Write the simplest code to pass the test <br>
3️⃣ REFACTOR: Clean up the implementation while keeping tests green <br>

**🚀 Happy Coding!**
