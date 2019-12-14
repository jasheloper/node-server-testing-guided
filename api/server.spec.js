const server = require("./server.js");
const request = require("supertest"); //supertest tests multiple endpoints @ same time & on different ports

// EACH TEST SHOULD ONLY TEST 1 THING   : BEST PRACTICE

describe("server.js", () => {
  // we are testing   :   that our environment is the testing environment

  test("should be the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /", () => {
    it("should return 200 OK", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("should be json", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });

    it("should return the right object", async () => {
      const res = await request(server).get("/");
      expect(res.body).toEqual({ api: "up" });
    });
  });
});
