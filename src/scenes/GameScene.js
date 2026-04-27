import Phaser from 'phaser';
import {logger} from '../utils/Logger.js';
import {Player} from "../Player.js";

export class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    create() {
        const {width, height} = this.scale;

        this.player = new Player(this, width / 2, height / 2);
        // Ensure player starts within bounds
        this.player.x = Phaser.Math.Clamp(this.player.x, 0, this.scale.width);
        this.player.y = Phaser.Math.Clamp(this.player.y, 0, this.scale.height);
        // after sprite replace with rectangle, we need to set the physics body manually
        //this.player = this.scene.physics.add.image(width / 2, height / 2, 'car');
        //this.player.setCollideWorldBounds(true);

        // bears
        this.initBear("bear-o");
        this.initBear("bear-y");
        this.initBear("bear-r");

        logger.info('GameScene created');
    }

    update() {
        // Game logic and updates go here
        this.player.update();


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
}