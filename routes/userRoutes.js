const express = require("express");
const router = express.Router();

const users = require("../data/users");

//IDNEX - users route
router.get("/", (req, res) => {
  res.json(users);
});

//CREATE ROUTE - POST - create new user
router.post("/", (req, res) => {
  if (req.body.name && req.body.username) {
    if (users.find((user) => user.username == req.body.username)) {
      res.json({ error: "username already taken" });
      return;
    }
    const user = {
      id: users[users.length - 1].id + 1,
      name: req.body.name,
      username: req.body.username,
    };
    users.push(user);
    res.json(user);
  } else {
    res.json({ error: "Insufficient data" });
  }
});

//SHOW - GET - show one user
router.get("/:id", (req, res, next) => {
  const user = users.find((user) => user.id === +req.params.id);
  if (user) res.json(user);
  else next();
});

//UPDATE - PATCH - update a user (id)
router.patch("/:id", (req, res, next) => {
  const user = users.find((user, index) => {
    if (user.id === +req.params.id) {
      for (const key in req.body) {
        users[index][key] = req.body[key];
      }
      return true;
    }
  });
  if (user) res.json(user);
  else next();
});

//DELETE - DELETE - delete a user (id)
router.delete("/:id", (req, res, next) => {
  const user = users.find((user, index) => {
    if (user.id === +req.params.id) {
      users.splice(index, 1);
      return true;
    }
  });
  if (user) {
    res.json(user);
    console.log("account deleted");
    res.redirect("/");
  } else next();
});

module.exports = router;
