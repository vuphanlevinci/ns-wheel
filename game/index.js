const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("login", { title: "Hey", message: "Hello there!" });
});

app.post("/game", (req, res) => {
  res.render("game", { title: "Hey", message: "Hello there!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
