import Phaser from "phaser";

export default class Game extends Phaser.Scene {
  constructor() {
    super("hello-world");
  }

  preload() {
    this.load.image("bear-o", "src/assets/bears/bear_orange.png");
    this.load.image("bear-y", "src/assets/bears/bear_yellow.png");
	this.load.image("bear-r", "src/assets/bears/bear_red.png");
  }

  create() {
    this.initBear("bear-o");
    this.initBear("bear-y");
	 this.initBear("bear-r");
  }

  initBear(b) {
    const bear = this.physics.add.image(
      Phaser.Math.Between(0, this.scale.width),
      Phaser.Math.Between(0, this.scale.height),
      b,
    );
    bear.setScale(1.5);
    bear.body.allowGravity = false;
    const speedX = Phaser.Math.Between(-200, 200);
    const speedY = Phaser.Math.Between(-200, 200);

    bear.setVelocity(speedX, speedY);
    bear.setCollideWorldBounds(true);
    bear.setBounce(1, 1);
  }
  update() {}
}
