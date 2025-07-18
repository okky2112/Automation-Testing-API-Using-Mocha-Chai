# 🔎 API Automation Testing with Mocha & Chai

This repository contains a setup for **automated API testing** using [Mocha](https://mochajs.org/) as the test runner and [Chai](https://www.chaijs.com/) for assertions. It supports structured and maintainable API test cases, data-driven testing, and easy integration into CI/CD pipelines.

---

## 📦 Tech Stack

- **Node.js**
- **Mocha** – Test runner
- **Chai** – Assertion library
- **Chai HTTP** – HTTP request assertions
- **Supertest / Axios (optional)** – for advanced HTTP handling

---

## 📁 Project Structure

📦 api-tests/
┣ 📂 test/ # Test cases
┃ ┣ 📜 users.test.js
┣ 📂 utils/ # Helpers / API clients
┃ ┣ 📜 request.js
┣ 📂 data/ # Test data (optional)
┃ ┣ 📜 user-data.json
┣ 📜 .env # Environment variables (e.g., baseURL, tokens)
┣ 📜 .gitignore
┣ 📜 package.json
┗ 📜 README.md


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/api-tests.git
cd api-tests
```

2. Install Dependencies
bash

npm install

3. Set Up Environment Variables
Create a .env file in the root directory:

env

BASE_URL=https://gorest.co.in/public/v2
TOKEN=your_api_token_here

🧪 Running Tests
Run all test cases
bash

npm test

Run specific test file
bash

npx mocha test/users.test.js

🧾 Example Test Case (users.test.js)
javascript

const chai = require("chai");
const chaiHttp = require("chai-http");
require("dotenv").config();

const expect = chai.expect;
chai.use(chaiHttp);

const BASE_URL = process.env.BASE_URL;
const TOKEN = process.env.TOKEN;

describe("Users API", () => {
  it("should fetch users successfully", (done) => {
    chai
      .request(BASE_URL)
      .get("/users")
      .set("Authorization", `Bearer ${TOKEN}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  it("should create a new user", (done) => {
    chai
      .request(BASE_URL)
      .post("/users")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send({
        name: "John Doe",
        gender: "male",
        email: `john${Date.now()}@mail.com`,
        status: "active"
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property("id");
        done();
      });
  });
});

🧼 Best Practices
Use .env to store sensitive configs

Separate test logic from test data

Organize tests by feature/module

Use hooks (before, after) for setup/cleanup

🤖 CI/CD Integration
Easily integrate with tools like GitHub Actions, GitLab CI, or Jenkins:

yaml
- name: Run API Tests
  run: |
    npm install
    npm test

📄 License
This project is licensed under the MIT License.
