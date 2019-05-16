const db = require("../dbConfig");

module.exports = {
  insert,
  remove,
  get
};
async function insert(recipe) {
  const id = await db("recipes").insert(recipe);
  return await db("recipes")
    .where({ id: id[0] })
    .first();
}
async function remove(id) {
  return db("recipes")
    .where({ id })
    .del()
    .then(res => {
      if (res) {
        return id;
      } else {
        return "not found";
      }
    });
}
function get() {
  return db("recipes");
}
