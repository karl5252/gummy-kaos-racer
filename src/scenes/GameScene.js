import Phaser from 'phaser';
import { logger } from '../utils/Logger.js';

export class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    create() {
        const { width, height } = this.scale;

        this.player = this.add.rectangle(
            width / 2,
            height / 2,
            50,
            50,
            0x00ff00
        );

        this.cursors = this.input.keyboard.createCursorKeys();

        logger.info('GameScene created');
    }

    update() {
        const speed = 3;

        if (this.cursors.left.isDown) this.player.x -= speed;
        if (this.cursors.right.isDown) this.player.x += speed;
        if (this.cursors.up.isDown) this.player.y -= speed;
        if (this.cursors.down.isDown) this.player.y += speed;
    }
}