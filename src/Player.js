import Phaser from 'phaser';
import {DEPTH} from "./constants/Depth.js";

export class Player {
    constructor(scene, x, y) {
        this.scene = scene;

        this.speed = 0;
        this.maxSpeed = 4;
        this.acceleration = 0.2;
        this.friction = 0.98;
        this.rotationSpeed = 0.04;

        this.player = this.scene.add.rectangle(x, y, 60, 30, 0x00ff00).setDepth(DEPTH.CARS);
        this.cursors = this.scene.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursors.up.isDown) {
            this.speed += this.acceleration;
        } else if (this.cursors.down.isDown) {
            this.speed -= this.acceleration;
        }

        this.speed = Phaser.Math.Clamp(this.speed, -this.maxSpeed, this.maxSpeed);

        if (this.cursors.left.isDown) {
            this.player.rotation -= this.rotationSpeed;
        }
        if (this.cursors.right.isDown) {
            this.player.rotation += this.rotationSpeed;
        }

        this.player.x += Math.cos(this.player.rotation) * this.speed;
        this.player.y += Math.sin(this.player.rotation) * this.speed;

        this.speed *= this.friction;
    }
}