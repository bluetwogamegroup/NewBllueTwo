import { CST } from "../CST";
export class MenuScene extends Phaser.Scene{
    constructor() {
        super({
            key: CST.SCENES.MENU
        })
    }

    //init function is used to pass and grab data from different scenes, could be useful for passing the hp and player stats
    init(data) { //paramater passed from LoadScene.js gets passed here
        console.log(data);
        console.log("I GOT IT");
    }

    preload(){
        
    }


    create(){

        //creating images
        let playButton = this.add.image(300, 250, "StartButton").setOrigin(0).setDepth(1);
        this.add.image(300, 500, "OptionsButton").setOrigin(0).setDepth(1);
        this.add.image(0,0, "TitleScreen").setOrigin(0).setDepth(0);

        //create sprites 
        //this can be removed i was just learning how to do stuff
        let hoverSprite = this.add.sprite(100,100, "IDLE");
        hoverSprite.setScale(2);
        hoverSprite.setVisible(false);
        /* THIS MAKES THE SOUND PLAY EVEN IF THE GAME TAB ISNT IN FOCUS, music was annoying after a while
        this.sound.pauseOnBlur = true;
        this.sound.play("TitleScreenMusic", {
            loop: true
        })
        */
       //creates the animation you see once you hover over the start button
        this.anims.create({
            key: "idle", 
            frameRate: 2, 
            repeat: -1,
            frames: this.anims.generateFrameNumbers("IDLE", {
                frames: [0,1]
            })
        })




        //button interaction
        //think this is pretty self explanatory
        playButton.setInteractive();

        playButton.on("pointerover", ()=>{
            hoverSprite.setVisible(true);
            hoverSprite.play("idle");
            hoverSprite.x = playButton.x;
            hoverSprite.y = playButton.y;
        })

        playButton.on("pointerout", ()=>{
            hoverSprite.setVisible(false);
        })

        playButton.on("pointerup", ()=>{
            console.log("OUTTA BITCH STOP CLICKIN")
            this.scene.start(CST.SCENES.LEVEL1);
        })
    }
}