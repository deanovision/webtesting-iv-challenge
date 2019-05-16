const request = require("supertest");
const server = require("./server");
const db = require("./data/dbConfig");

describe("GET", () => {
  test("should return 200 status OK", () => {
    return request(server)
      .get("/recipes")
      .expect(200);
  });
  // test('should return list of recipes', ()=> {
  //   return request(server).get('/recipes').then(res => {
  //     expect(res.body).toBe(200)
  //   })
  // })
});
describe("POST", () => {
  beforeEach(async () => {
    await db("recipes").truncate();
  });
  test("should return 201", () => {
    const recipe = { name: "Chicken" };
    return request(server)
      .post("/recipes")
      .send(recipe)
      .expect(201);
  });
});
