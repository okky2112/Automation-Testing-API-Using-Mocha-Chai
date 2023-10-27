const request_url = require("supertest")("http://barru.pythonanywhere.com");
const expect = require("chai").expect;

describe("API Login", function () { // TES SCENARIO
  it("Verify Success Login with valid email and password", async function () { // TEST CASE
    const response = await request_url // INI BUAT NGARAH KE URL BARRU.PYTHONANYWHERE.COM
      .post("/login") // INI ENDPOINT SETELAH .COM
      .send({ email: "tester@jago.com", password: "testerjago" }); // INI SESUAI BODY

    expect(response.body.status).to.eql('SUCCESS_LOGIN');
    expect(response.body.message).to.eql('Anda Berhasil Login');
  });
});