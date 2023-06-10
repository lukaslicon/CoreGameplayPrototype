
class Intro extends Cinematics {
    constructor() {
        super('intro', 'intro');
    }
    onEnter() {
        this.fadeInScene();
        this.add.text(560,560, "Core Gameplay Prototype").setFontSize(50);
        this.add.text(760,760, "Click anywhere to start next game.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('npcScreen'));
        });
    }
}
    