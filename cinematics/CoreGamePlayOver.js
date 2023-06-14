
class Outro extends  Cinematics {
    constructor() {
        super('outro')
    }
    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.fullScreenButton();
        this.add.text(560,560, "Core Gameplay TESTING OVER...\n     next is cinematics").setFontSize(50);
    }
}