import Phaser from "phaser";

export default class Bear extends Phaser.Physics.Arcade.Image {
  constructor(scene, x, y, texture, player) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setScale(1.5);
    this.body.allowGravity = false;

    this.playerRef = player;

    this.nextMoveTime = 0;
  }

  moveRandom() {
    const speedX = Phaser.Math.Between(-200, 200);
    const speedY = Phaser.Math.Between(-200, 200);

    this.setVelocity(speedX, speedY);
  }

  flee() {
    const playerX = this.playerRef.player.x;
    const playerY = this.playerRef.player.y;

   let x = Phaser.Math.Between(0, this.scene.scale.width);
   let y = Phaser.Math.Between(0, this.scene.scale.height);

       while (x === playerX && y === playerY) {
        x = Phaser.Math.Between(0, this.scene.scale.width);
        y = Phaser.Math.Between(0, this.scene.scale.height);
    }
      this.setVelocity(x - this.x, y - this.y);
    }
  

  update(time , delta) {
    if (time > this.nextMoveTime) {
      this.flee();
      this.nextMoveTime = time + 2000;
    }
  }    }
