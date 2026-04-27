import Phaser from 'phaser';
import {logger} from '../utils/Logger.js';

export class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    preload() {
        this.load.image("bear-o", "assets/bears/bear_orange.png");
        this.load.image("bear-y", "assets/bears/bear_yellow.png");
        this.load.image("bear-r", "assets/bears/bear_red.png");
    }

    create() {
        const {width, height} = this.scale;

        this.player = this.add.rectangle(
            width / 2,
            height / 2,
            50,
            50,
            0x00ff00
        );

        this.cursors = this.input.keyboard.createCursorKeys();

        this.initBear("bear-o");
        this.initBear("bear-y");
        this.initBear("bear-r");

        logger.info('GameScene created');
    }

    update() {
        const speed = 3;

        if (this.cursors.left.isDown) this.player.x -= speed;
        if (this.cursors.right.isDown) this.player.x += speed;
        if (this.cursors.up.isDown) this.player.y -= speed;
        if (this.cursors.down.isDown) this.player.y += speed;
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