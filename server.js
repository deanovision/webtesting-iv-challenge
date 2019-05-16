const express = require("express");
const server = express();
const recipes = require("./data/recipes/recipes-model");
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send("connected to api");
});
server.get("/recipes", (req, res) => {
  recipes
    .get()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "error getting recipes" });
    });
});
server.post("/recipes", (req, res) => {
  recipes
    .insert(req.body)
    .then(recipe => {
      res.status(201).json(recipe);
    })
    .catch(err => {
      console.log(err);
      res.status(500);
    });
});
module.exports = server;
