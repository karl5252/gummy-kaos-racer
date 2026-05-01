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

        this.sprite = scene.physics.add.sprite(x, y, `player`).setDepth(DEPTH.CARS);

        // Physics setup
        this.sprite.body.setGravity(0, 0);
        this.sprite.setCollideWorldBounds(true);
        this.cursors = this.scene.input.keyboard.createCursorKeys();
    }

    get x() {
        return this.sprite.x;
    }

    get y() {
        return this.sprite.y;
    }

    get rotation() {
        return this.sprite.rotation;
    }

    update() {
        if (this.cursors.up.isDown) {
            this.speed += this.acceleration;
        } else if (this.cursors.down.isDown) {
            this.speed -= this.acceleration;
        }

        this.speed = Phaser.Math.Clamp(this.speed, -this.maxSpeed, this.maxSpeed);

        if (this.cursors.left.isDown) {
            this.sprite.rotation -= this.rotationSpeed;
        }
        if (this.cursors.right.isDown) {
            this.sprite.rotation += this.rotationSpeed;
        }

        this.sprite.x += Math.cos(this.sprite.rotation) * this.speed;
        this.sprite.y += Math.sin(this.sprite.rotation) * this.speed;

        this.speed *= this.friction;
    }

    destroy() {
        this.sprite.destroy();
    }
}