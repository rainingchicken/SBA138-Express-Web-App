require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");
const bodyParser = require("body-parser"); //POST, PATCH

const videogames_Data = require("./data/video-games.json");
const user1games_Data = require("./data/user1-games");
const user2games_Data = require("./data/user2-games");

const userRoute = require("./routes/userRoutes");
const users = require("./data/users");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { data: videogames_Data });
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/user", (req, res) => {
  const username = req.body.username;
  res.render("games", {
    data: videogames_Data,
    games: user1games_Data,
    name: username,
  });
});
app.post("/user", (req, res) => {
  const username = req.body.username;
  let game = req.body.selection;
  const newTitle = { Title: game };
  user1games_Data.push(newTitle);
  res.render("games", {
    data: videogames_Data,
    games: user1games_Data,
    name: username,
  });
});

// app.get("/account", (req, res) => {
//   res.render("account");
// });
app.use("/account", userRoute);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
