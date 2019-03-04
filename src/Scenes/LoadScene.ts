import { CST } from "../CST";
export class LoadScene extends Phaser.Scene{
    constructor() {
        super({
            key: CST.SCENES.LOAD
        })
    } //ALL OF THE ABOVE MANDATORY FOR ALL THE SCENES, JUST MAKE SURE TO CHANGE CLASS NAME AND THE KEY FOR EACH SCENE

    init() {

    }

    preload(){

        //LOADING ALL THE ASSETS WE'RE GONNA USE
        this.load.image("TitleScreen", "./assets/TitleScreen.png");

        this.load.image("StartButton", "./assets/StartButton.png");

        this.load.image("OptionsButton", "./assets/OptionsButton.png");

        this.load.image("Level1Scene", "./assets/level.png");

        //FOR SPRITESHEETS YOU HAVE TO GIVE IT THE HEIGHT AND FRAME OF ONE SPRITE ENGINE TAKES CARE OF THE REST
        this.load.spritesheet("RUN", "./assets/Haru'unRunningsword2.png", { //THE CAPITAL RUN HERE IS THE KEY WHICH WE USE TO REFER TO THIS SPRITESHEET
            frameHeight: 45,
            frameWidth: 90
        } );

        this.load.spritesheet("IDLE", "./assets/IDLE.png", {
            frameHeight: 90,
            frameWidth: 90
        } );

        this.load.spritesheet("BEAM", "./assets/HRBEAM.png", {
            frameHeight: 45,
            frameWidth: 120
        } );

        this.load.spritesheet("SLASH", "./assets/HRSLASH.png", {
            frameHeight: 117,
            frameWidth: 250
        } );

        this.load.spritesheet("SWING", "./assets/HRSWING.png", {
            frameHeight: 86,
            frameWidth: 113
        } );

        //this is how you load the audio pretty simple, there are more options to play with it but its not our priority
        this.load.audio("TitleScreenMusic", "./assets/TitleMusic.mp3");

        //create loading bar

        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff //white
            }

        })

        /*
        Loader Events:
            complete - when done loading everything
            progress - loader number progress in decimal
        */

        //simulate large load THIS IS TO MAKE IT LOAD LONGER SO WE HAVE TIME TO LOAD THE ASSETS, so far i didnt see the need for it
        /*
        for(let i = 0; i < 100; i++){
            this.load.spritesheet("HaruunRunning" + i, "./assets/Haru'unRunningsword2.png", {
                frameHeight: 45,
                frameWidth: 90
            } );
        }*/

        //WHILE ITS LOADING THIS IS WHAT ITS DISPLAYING ON THE SCREEN
        this.load.on("progress", (percent)=> {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
            console.log(percent);
        })

        this.load.on("complete", () => {
            console.log("done"); //this is what we get once the loading is complete
        })

    }

    create(){
        this.scene.start(CST.SCENES.MENU, "Hello From Load Scene"); //we load the menu scene and we send it data in this case a strin
    }
}