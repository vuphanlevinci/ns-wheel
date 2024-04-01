var wheelConfig = {
  assetPath: "custom/", // relative path to asset folder
  fontName: "coiny_54", // bitmap font name (.png, .xml)
  centerOffsetX: 0, // wheel offset from canvas center X
  centerOffsetY: -160, // wheel offset from canvas center Y
  prizeTextTint: 0xffffff, // prize text color (above the spin button)
  sectorsTextTint: 0xffffff, // sectors text color
  offsetSectText: 130, // sector text position offset
  offsetSectIcon: 210, // sector icon position offset
  // sectors config
  sectors: [
    {
      win: "30 minutes infinite life",
      text: "10",
      isBigWin: false,
      icon: "heart",
      quantity: 0,
    },
    {
      win: "Brush booster x1",
      text: "20",
      isBigWin: false,
      icon: "brush",
      quantity: 0,
    },
    {
      win: "Color bomb booster x1",
      text: "30",
      isBigWin: false,
      icon: "color_bomb",
      quantity: 100,
    },
    {
      win: "Cannon booster x1",
      text: "40",
      isBigWin: false,
      icon: "cannon",
      quantity: 50,
    },
    {
      win: "200 coins",
      text: "50",
      isBigWin: false,
      icon: "coin",
      quantity: 100,
    },
    {
      win: "TNT booster x1",
      text: "60",
      isBigWin: false,
      icon: "tnt",
      quantity: 0,
    },
  ],

  sprites: [
    {
      fileName: null, // filename or null
      name: "background",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 0,
    },
    {
      fileName: "SpinButton.png",
      name: "spinbutton",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 550,
    },
    {
      fileName: "SpinButtonHover.png",
      name: "spinbutton_hover",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 650,
    },
    {
      fileName: "LightSector_6.png",
      name: "lightsector",
      originX: 0.5,
      originY: 1,
      offsetX: 0,
      offsetY: 3,
    },
    {
      fileName: "Pointer.png",
      name: "pointer",
      originX: 0.5,
      originY: 0.2,
      offsetX: 0,
      offsetY: -360,
    },
    {
      fileName: "CenterPin.png",
      name: "centerpin",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 30,
    },
    {
      fileName: null,
      name: "spinarrow",
      originX: 0.5,
      originY: 0.5,
      offsetX: 240,
      offsetY: -85,
    },
    {
      fileName: "Wheel_6.png", //5
      name: "wheel",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 0,
    },
    {
      fileName: "WheelBorder.png",
      name: "wheelborder",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 3,
    },
    {
      fileName: "Lamp.png",
      name: "lamp_off",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 93,
    },
    {
      fileName: "LampOn.png",
      name: "lamp_on",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 93,
    },
    {
      fileName: "Heart.png",
      name: "heart",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 93,
    },
    {
      fileName: "Coin.png",
      name: "coin",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 93,
    },
    {
      fileName: "Brush.png",
      name: "brush",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 93,
    },
    {
      fileName: "ColorBomb.png",
      name: "color_bomb",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 93,
    },
    {
      fileName: "Cannon.png",
      name: "cannon",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 93,
    },
    {
      fileName: "TNT.png",
      name: "tnt",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 93,
    },
    {
      fileName: "Rocket.png",
      name: "rocket",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 93,
    },
    {
      fileName: "Dice.png",
      name: "dice",
      originX: 0.5,
      originY: 0.5,
      offsetX: 0,
      offsetY: 93,
    },
  ],

  lamps: {
    count: 10,
    offset: 340,
  },

  // wheel spin duration range, in milliseconds
  rotationTimeRange: {
    min: 3000,
    max: 4000,
  },

  // wheel rounds before it stops
  wheelRounds: {
    min: 3,
    max: 4,
  },

  // degrees the wheel will rotate in the opposite direction before it stops
  backSpin: {
    min: 1,
    max: 4,
  },
  lightTweenDuration: 500,
};

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
    res.render("game", { wheelConfig: JSON.stringify(wheelConfig) });
  } else {
    res.redirect("/");
  }
});

app.get("/game", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
