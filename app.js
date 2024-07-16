require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const fs = require("fs");
const bodyParser = require("body-parser"); //POST, PATCH

const videogames_Data = require("./data/video-games.json");
const user1games_Data = require("./data/user1-games");
const user2games_Data = require("./data/user2-games");

const accountRoute = require("./routes/accountRoutes");

const users = require("./data/users");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: true }));
app.use("/public", express.static(__dirname + "/public"));

app.set("views", "views");
app.set("view engine", "ejs");

//HOME
app.get("/", (req, res) => {
  res.render("home", { data: videogames_Data });
});
app.get("/login", (req, res) => {
  const username = req.body.username;
  //   console.log(username);
  res.render("login");
});

//USER
app.get("/user", (req, res) => {
  const username = req.body.username;
  //   console.log(username);
  if (username == users.username)
    res.render("games", {
      data: videogames_Data,
      games: user1games_Data,
      name: username,
    });
  else {
    res.render("games", {
      data: videogames_Data,
      games: user2games_Data,
      name: username,
    });
  }
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

//ACCOUNT
// app.get("/account", (req, res) => {
//   res.render("account");
// });
app.use("/account", accountRoute);

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
