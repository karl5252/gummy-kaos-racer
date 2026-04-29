import Phaser from "phaser";
import { logger } from "../utils/Logger.js";
import { Player } from "../Player.js";
import Bear from "../Bear.js";

export class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    const { width, height } = this.scale;

    this.player = new Player(this, width / 2, height / 2);
    // Ensure player starts within bounds
    this.player.x = Phaser.Math.Clamp(this.player.x, 0, this.scale.width);
   this.player.y = Phaser.Math.Clamp(this.player.y, 0, this.scale.height);
    // after sprite replace with rectangle, we need to set the physics body manually
    //this.player = this.scene.physics.add.image(width / 2, height / 2, 'car');
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
