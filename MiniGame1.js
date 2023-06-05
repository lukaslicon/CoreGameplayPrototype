
playerVelocity = 2500;

class MiniGame1 extends Phaser.Scene {
    constructor() {
        super('MiniGame1')
        this.shadedRectangle = null; // Reference to the currently shaded rectangle

    }
    create(){
        this.add.image(960,540 , 'game1bg');
        game1score = 0;
        this.dmg = this.sound.add("dmg");
        this.catch = this.sound.add("catch");
        //  player rectangle
        this.player = this.physics.add.image(960, 590, 'app').setScale(1.3).setBounce(.6, .6);
        this.player.body.setCollideWorldBounds(true); 
        
        this.timeLeft = gameOptions.initialTime;
        
//boundaries/goals
        //top
        this.groupTop = this.physics.add.group({
            key: 'topHouse',
            frameQuantity: 13,
            immovable: true
        });
        //bot
        this.groupBot = this.physics.add.group({
            key: 'bottomHouse',
            frameQuantity: 13,
            immovable: true
        });
        //left
        this.groupLeft = this.physics.add.group({
            key: 'leftHouse',
            frameQuantity: 4,
            immovable: true
        });
        //right
        this.groupRight = this.physics.add.group({
            key: 'rightHouse',
            frameQuantity: 4,
            immovable: true
        });

//boarders
        //bottom
        this.bottomSide = this.physics.add.group({
            key: 'boarder',
            frameQuantity: 14,
            immovable: true

        });
        //top
        this.topSide = this.physics.add.group({
            key: 'boarder',
            frameQuantity: 14,
            immovable: true

        });
        //left
        this.leftSide = this.physics.add.group({
            key: 'side',
            frameQuantity: 8,
            immovable: true

        });
        //right
        this.rightSide = this.physics.add.group({
            key: 'side',
            frameQuantity: 8,
            immovable: true

        });

        //line placements
        const topLine = new Phaser.Geom.Line(80, 0, 1980, 0);
        const bottomLine = new Phaser.Geom.Line(80, 1080, 1980, 1080);
        const leftLine = new Phaser.Geom.Line(0, 40, 0, 1140);
        const rightLine = new Phaser.Geom.Line(1920, 40, 1920, 1140);
        //house placements
        const topSquare = new Phaser.Geom.Line(150, 0, 1910, 0);
        const botSquare = new Phaser.Geom.Line(150, 1080, 1910, 1080);
        const leftSquare = new Phaser.Geom.Line(0, 110, 0, 1210);
        const rightSquare = new Phaser.Geom.Line(1920, 110, 1920, 1210);

        //place houses
        Phaser.Actions.PlaceOnLine(this.groupTop.getChildren(),topSquare);
        Phaser.Actions.PlaceOnLine(this.groupBot.getChildren(),botSquare);
        Phaser.Actions.PlaceOnLine(this.groupLeft.getChildren(),leftSquare);
        Phaser.Actions.PlaceOnLine(this.groupRight.getChildren(),rightSquare);

        //place lines
        Phaser.Actions.PlaceOnLine(this.topSide.getChildren(),topLine);
        Phaser.Actions.PlaceOnLine(this.bottomSide.getChildren(),bottomLine);   
        Phaser.Actions.PlaceOnLine(this.leftSide.getChildren(),leftLine);  
        Phaser.Actions.PlaceOnLine(this.rightSide.getChildren(),rightLine);           


        //invert on click effect
        this.input.on('pointerdown', (pointer) => {
            if (Phaser.Geom.Rectangle.Contains(this.player.getBounds(), pointer.x, pointer.y)) {
                const velocityX = Phaser.Math.Between(-playerVelocity, playerVelocity); // Random X velocity
                const velocityY = Phaser.Math.Between(-playerVelocity, playerVelocity); // Random Y velocity
                this.player.setVelocity(velocityX, velocityY);
            }
        });
//collisions for each group
        //TOP COLLISIONS
        this.groupTop.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle, (player, rectangle) => {
                rectangle.destroy();  // Destroy the rectangle the player collided with
                this.catch.play();
                game1score++;  // Increment the score

                if (game1score >= 12) {
                this.player.body.moves = false;
                //fade
                this.cameras.main.fadeOut(1500);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.scene.start('npcScreen');
                }, this);
                }

            }, null, this);
        });             

        //BOTTOM COLLISIONS
        this.groupBot.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle, (player, rectangle) => {
                rectangle.destroy();  // Destroy the rectangle the player collided with
                this.catch.play();
                game1score++;  // Increment the score
                if (game1score >= 12) {
                this.player.body.moves = false;
                //fade
                this.cameras.main.fadeOut(1500);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.scene.start('npcScreen');
                }, this);
                }

            }, null, this);
        });             

        //LEFT COLLISIONS
        this.groupLeft.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle, (player, rectangle) => {
                rectangle.destroy();  // Destroy the rectangle the player collided with
                this.catch.play();
                game1score++;  // Increment the score

                if (game1score >= 12) {
                this.player.body.moves = false;
                //fade
                this.cameras.main.fadeOut(1500);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.scene.start('npcScreen');
                }, this);
                }

            }, null, this);
        });             
        
        //RIGHT COLLISIONS
        this.groupRight.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle, (player, rectangle) => {
                rectangle.destroy();  // Destroy the rectangle the player collided with
                this.catch.play();
                game1score++;  // Increment the score
                if (game1score >= 12) {
                this.player.body.moves = false;
                //fade
                this.cameras.main.fadeOut(1500);
                this.cameras.main.once('camerafadeoutcomplete', function (camera) {
                    this.scene.start('npcScreen');
                }, this);;
                }

            }, null, this);
        });             
        this.bottomSide.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle);
        });       
        this.topSide.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle);
        });    
        this.leftSide.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle);
        });       
        this.rightSide.getChildren().forEach(rectangle => {
            this.physics.add.collider(this.player, rectangle);
        });           
        
        //game info
        let housingText = this.add.text(540, 500, 'Quick! Get in 12 housing apps!').setStyle({ fontSize: 50, color: '#fff' })
        this.time.delayedCall(3000, () => {
            this.tweens.add({
                targets: housingText,
                alpha: 0,
                duration: 1000 // This is the duration of the fade out
            });
        }, [], this);

        let HUD = this.add.text(590, 900, 'Click the player to move.').setStyle({ fontSize: 50, color: '#fff' })
        this.time.delayedCall(5000, () => {
            this.tweens.add({
                targets: HUD,
                alpha: 0,
                duration: 1000 // This is the duration of the fade out
            });
        }, [], this);
        //score
        this.add.text(100, 122, 'Score: ').setStyle({ fontSize: 50, color: '#fff' })
        this.scoreCount = this.add.text(300,126).setStyle({ fontSize: 50, color: '#fff' })


        //reset to middle button
        let reset = this.add.image(37.5, 1042.5 , 'reset').setInteractive();
        reset.on('pointerdown', () => {
            this.player.x = 960;
            this.player.y = 590;
        });

        // timer bar        
        this.add.image(game.config.width / 2, game.config.height / 8, "timerBarBackground"); //background bar
        let timer = this.add.sprite(game.config.width / 2, game.config.height / 8, "timerBar");
        this.timerMask = this.add.sprite(timer.x, timer.y, "timerBar");
        this.timerMask.visible = false;
        timer.mask = new Phaser.Display.Masks.BitmapMask(this, this.timerMask);
        this.gameTimer = this.time.addEvent({
            delay: 1000,
            callback: function(){
                this.timeLeft = this.timeLeft - 1;
                //bar width divided by the number of seconds moves bar
                let stepWidth = this.timerMask.displayWidth / gameOptions.initialTime*1;
                this.timerMask.x -=  stepWidth;
                if(this.timeLeft <= 0){
                    this.dmg.play();
                    this.timeLeft = 60;
                    housing = this.score;
                    this.cameras.main.fadeOut(1000, 0, 0, 0)
                    this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                        this.scene.start('Homeless', {}, { alpha: 0, duration: 1000 });
                    })
                }
            },
            callbackScope: this,
            loop: true
        });
        
        // timer seconds
        this.add.text(720, 122, 'Time: ').setStyle({ fontSize: 25, color: '#fff' })
        this.secondCount = this.add.text(795,122).setStyle({ fontSize: 25, color: '#fff' })

        //fade
        this.fadeInScene();

    }
    update(){
        this.scoreCount.setText(game1score);
        this.secondCount.setText(this.timeLeft);
    }
    fadeInScene(){
        this.cameras.main.setAlpha(0);
        this.tweens.add({
            targets: this.cameras.main,
            alpha: 1,
            duration: 1000,
            ease: 'Linear', 
            onComplete: function() {
            console.log("Fade-in complete");
            }
        });
    }
}

class Homeless extends Phaser.Scene {
    constructor() {
        super('Homeless');
    }
    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.add.text(560,560, "You failed!").setFontSize(50);
        this.add.text(660,660, "You are now homeless...").setFontSize(20);
        this.add.text(760,760, "Click anywhere to continue.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('npcScreen'));
        });
    }
}
    

