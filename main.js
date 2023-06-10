'use strict';

// Phaser game configuration
let config = {
    type: Phaser.AUTO,
    pixelArt: true,
    zoom: 1,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0
            },
            debug: false,
            debugShowVelocity: false
        }
    },
    scene: [Load, Intro, npcScreen, MiniGame1, MiniGame2, MiniGame3, Fail, Fail2, outro, UI, Homeless],
    title: "Mini Game Prototype",
    scaleMode: Phaser.Scale.ScaleModes.RESIZE,
    autoRound: true,
    orientation: 'auto'
};
let game = new Phaser.Game(config);
