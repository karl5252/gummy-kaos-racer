import Phaser from "phaser";
import {logger} from "../utils/Logger.js";
import {Player} from "../Player.js";
import Bear from "../Bear.js";

export class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    const { width, height } = this.scale;

    this.player = new Player(this, width / 2, height / 2);

      this.bear = new Bear(
      this,
      Phaser.Math.Between(0, this.scale.width),
      Phaser.Math.Between(0, this.scale.height),
      "bear-o",
      this.player
    );

    this.bear.setCollideWorldBounds(true);


    logger.info("GameScene created");
  }

  update(time, delta) {
    // Game logic and updates go here
    this.player.update();
    this.bear.update(time,delta);
  }
}
