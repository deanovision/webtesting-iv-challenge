const request = require("supertest");
const recipes = require("./recipes-model");
const db = require("../dbConfig");

describe("POST", () => {
  beforeEach(async () => {
    await db("recipes").truncate();
  });
  test("should return 201", () => {
    const recipe = { name: "Pizza" };
    return recipes.insert(recipe).then(rec => {
      expect(rec.name).toEqual("Pizza");
    });
  });
});
describe("DELETE", () => {
  // beforeEach(async () => {
  //   await db("recipes").truncate();
  // });
  test("should return 200", () => {
    const id = 1;
    return recipes.remove(id).then(recId => {
      expect(recId).toEqual(id);
    });
  });
});
