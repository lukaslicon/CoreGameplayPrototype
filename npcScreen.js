let music = false;
class npcScreen extends Phaser.Scene {
    constructor() {
        super('npcScreen')
    }
    create() {
        NPCmessage++;
        if(NPCmessage == 1){
            this.message1 = this.add.text(900, 780, "Did you know, traveler? The housing crisis that began in Santa Cruz, it became contagious, spreading far and wide. The world was unprepared... it was the first domino to fall in our collapse.", { 
                fontFamily: "pmd", 
                fill: "#ffffff", 
                align: "center",
                wordWrap: { width: 600 } // wrap words that exceed this width
            }).setOrigin(0.5).setAlpha(1).setFontSize(42); // set origin to center

            this.time.delayedCall(5000, () => {
                this.message1.destroy();
                //fade
                this.cameras.main.fadeOut(3000);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.scene.start('MiniGame1');
                }, this);
            }, [], this);
        }
        //second game
        if(NPCmessage == 2){
            let storymessage2 = "Then came the ghost slugs, appearing from nowhere, taking over everything. We needed exterminators, but there were too few, too late. It was a strange, slimy apocalypse.";
            this.message2 = this.add.text(900, 780, storymessage2, { 
                font: "42px pixelfont", 
                fill: "#ffffff", 
                align: "center",
                wordWrap: { width: 600 } // wrap words that exceed this width
            }).setOrigin(0.5).setAlpha(1); // set origin to center

            this.time.delayedCall(5000, () => {
                this.message2.destroy();
                this.cameras.main.fadeOut(3000);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.scene.start('MiniGame2');
                }, this);
            }, [], this);
        }
        //third game
        if(NPCmessage == 3){
            let storymessage3 = "Our once thriving land began to suffocate under toxic waste, the environment decayed, and we scrambled to save what was left. The animals, the fish, their survival hung by a thread. It was a desperate race against the clock."
            this.message3 = this.add.text(900, 780, storymessage3, { 
                font: "42px pixelfont", 
                fill: "#ffffff", 
                align: "center",
                wordWrap: { width: 600 } // wrap words that exceed this width
            }).setOrigin(0.5).setAlpha(1); // set origin to center
            this.time.delayedCall(5000, () => {
                this.message3.destroy();
                this.cameras.main.fadeOut(3000);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.scene.start('MiniGame3');
                }, this);
            }, [], this);
        }
        //outro
        if (NPCmessage == 4) {
            let storymessage4 = "You've heard my tales, seen the horrors that await. I believe you can make a difference, maybe even prevent this. Here, take this portal back to your world, learn from our future, and change yours.";
            this.message4 = this.add.text(900, 780, storymessage4, { 
                font: "42px pixelfont", 
                fill: "#ffffff", 
                align: "center",
                wordWrap: { width: 600 } // wrap words that exceed this width
            }).setOrigin(0.5).setAlpha(1); // set origin to center
            this.time.delayedCall(5000, () => {
                this.message3.destroy();
                this.cameras.main.fadeOut(3000);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.scene.start('MiniGame3');
                }, this);
            }, [], this);
    }

    }
    update() {
        }
    }