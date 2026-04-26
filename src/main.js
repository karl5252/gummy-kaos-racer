import Phaser from "phaser";
import Game from "/src/Game";


const config = {
  type: Phaser.AUTO,
  parent: "game",
  backgroundColor: "#33A5E7",

  scale: {
    width: window.innerWidth,
    height: window.innerHeight,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },

  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 750 }
    }
  },

  scene: [Game]
};

new Phaser.Game(config);