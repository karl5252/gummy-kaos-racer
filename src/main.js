import Phaser from 'phaser'
import {Boot} from "./scenes/Boot.js";
import {GameScene} from "./scenes/GameScene.js";

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 1200,
	height: 840,
    backgroundColor: '#028af8',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }, // No gravity for top-down
            fps: 120,
            debug: false,
            debugShowBody: true,
            debugShowStaticBody: true
        }
    },
    scale: {
        width: window.innerWidth,
        height: window.innerHeight,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
	scene: [
        Boot,
        //Preloader,
        //MainMenu,
        GameScene
    ],
}

export default new Phaser.Game(config)
