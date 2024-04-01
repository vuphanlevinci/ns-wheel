// 6 sectors apricot

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

  createLamps: function (scene) {
    scene.lampsArray = [];
    var angle = (Math.PI * 2) / this.lamps.count;
    var piD2 = Math.PI / 2;

    for (var i = 1; i < this.lamps.count; i++) {
      var _angle = -angle * i - piD2;
      var _cos = Math.cos(_angle);
      var _sin = Math.sin(_angle);

      var posX = this.lamps.offset * _cos;
      var posY = this.lamps.offset * _sin;
      scene.lamp = new Lamp(scene, posX, posY);
      scene.lamp.on();
      scene.lampsArray.push(scene.lamp);
    }
  },
};
