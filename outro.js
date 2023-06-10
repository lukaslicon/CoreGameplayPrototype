
class outro extends Cinematics {
    constructor() {
        super('outro', 'outro');
    }
    onEnter() {
        this.fadeInScene();
        this.add.text(560,560, "Core Gameplay Prototype Done!").setFontSize(50);
        this.add.text(760,760, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('intro'));
        });
    }
}
    