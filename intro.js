
class intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }
    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.add.text(560,560, "Core Gameplay Prototype").setFontSize(50);
        this.add.text(760,760, "Click anywhere to start game 1.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('npcScreen'));
        });
    }
}
    