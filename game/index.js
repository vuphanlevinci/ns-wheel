const config = require("./public/custom/js/wheel_config_6");

const sectors = [
  {
    win: "30 minutes infinite life",
    text: "1",
    isBigWin: false,
    icon: "heart",
    quantity: 0,
  },
  {
    win: "Brush booster x1",
    text: "2",
    isBigWin: false,
    icon: "brush",
    quantity: 0,
  },
  {
    win: "Color bomb booster x1",
    text: "3",
    isBigWin: false,
    icon: "color_bomb",
    quantity: 100,
  },
  {
    win: "Cannon booster x1",
    text: "4",
    isBigWin: false,
    icon: "cannon",
    quantity: 50,
  },
  {
    win: "200 coins",
    text: "5",
    isBigWin: false,
    icon: "coin",
    quantity: 100,
  },
  {
    win: "TNT booster x1",
    text: "6",
    isBigWin: false,
    icon: "tnt",
    quantity: 0,
  },
];

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
  if (req?.body?.username) {
    const configs = {
      ...config.wheelConfig,
      sectors: sectors,
    };
    res.render("game", { wheelConfig: JSON.stringify(configs) });
  } else {
    res.redirect("/");
  }
});

app.get("/game", async (req, res) => {
  //   res.redirect("/");
  const configs = {
    ...config.wheelConfig,
    sectors: sectors,
  };
  res.render("game", { wheelConfig: JSON.stringify(configs) });
});

app.get("/names", (req, res) => {
  res.json({
    test: "ss",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
