import { CST } from "../CST";
import { LoadScene } from "./LoadScene";
export class Level1 extends Phaser.Scene{
    
    constructor() {
        super({
            key: CST.SCENES.LEVEL1
        })
    }

    //preloading all the scenes cuz its a level and we dont wanna wait for enginge to grab them
    preload() {
        this.anims.create({
            key: "idle", 
            frameRate: 10, 
            repeat: -1,
            frames: this.anims.generateFrameNumbers("IDLE", {
                frames: [0,1]
            })
        });

        this.anims.create({
            key: "idleLeft", 
            frameRate: 5, 
            repeat: -1,
            frames: this.anims.generateFrameNumbers("IDLE", {
                frames: [1,0]
            })
        });

        this.anims.create({
            key: "runRight", 
            frameRate: 7, 
            repeat: -1,
            frames: this.anims.generateFrameNumbers("RUN", {
                frames: [2,3,4,5,6,7]
            })
        });

        this.anims.create({
            key: "runLeft", 
            frameRate: 7, 
            repeat: -1,
            frames: this.anims.generateFrameNumbers("RUN", {
                frames: [7,6,5,4,3,2]
            })
        });

        this.anims.create({
            key: "slash", 
            frameRate: 60, 
            repeat: -1,
            frames: this.anims.generateFrameNumbers("SLASH", {
                frames: [0,1,2,3,4,5,6,7,8]
            })
        });

    }
    create() {
        console.log("Loaded Level1");
        this.add.image(0,0, "Level1Scene").setOrigin(0).setDepth(0); //setting the lvl 
        
        this.idleHarun = this.add.sprite(100,600, "IDLE").setScale(1).play("idle"); //initializing sprite so that it can be used

        this.runRightHarun = this.add.sprite(this.idleHarun.x,this.idleHarun.y  + 25, "RUN").setScale(1).play("runRight").setVisible(false);

        this.idleLeftHarun = this.add.sprite(this.idleHarun.x,this.idleHarun.y + 25, "RUN").setScale(1).play("idleLeft").setVisible(false);

        this.runLeftHarun = this.add.sprite(this.idleLeftHarun.x,this.idleLeftHarun.y +25, "RUN").setScale(1).play("runLeft").setVisible(false);

        this.slashHarun = this.add.sprite(325,575, "RUN").setScale(1).play("slash").setVisible(false);



        window.runRightHarun = this.runRightHarun; //making it global so we can use it outside this shithole
        window.idleHarun = this.idleHarun;
        
        
        
        window.idleLeftHarun = this.idleLeftHarun;
        window.runLeftHarun = this.runLeftHarun;
        window.slashHarun = this.slashHarun;


        this.keyboard = this.input.keyboard.addKeys("W, A, S, D");

        this.cameras.main.startFollow(this.idleHarun);//THIS ONE LINE DOES THE FUCKING CAMERA THING IM GONNA KILL MYSELF
        this.cameras.main.setFollowOffset(-350,200);
        
    }
update(delta) {
        
        var isRunning = false;
        
        //this is where the magic happens, D works FINE need help with logic for A, too tired atm
        if(this.keyboard.D.isDown === true){
            
            console.log("d is down");

            this.idleHarun.flipX = false;
            this.runRightHarun.flipX = false;

            this.idleHarun.setVisible(false);
            this.runRightHarun.setVisible(true);

            this.idleHarun.x = this.idleHarun.x + 2;
            this.runRightHarun.x = this.idleHarun.x;

            this.runRightHarun.play("runRight", true);
            
            
 
 
        } 
        else if (this.keyboard.A.isDown === true) {
            this.idleHarun.flipX = true;
            this.runRightHarun.flipX = true;

            this.idleHarun.setVisible(false);
            this.runRightHarun.setVisible(true);

            this.idleHarun.x = this.idleHarun.x - 2;
            this.runRightHarun.x = this.idleHarun.x;

            this.runRightHarun.play("runRight", true);
            this.isflipped = true;
            console.log("a is down");

        
            
        

       }else {
        this.idleHarun.setVisible(true);
        this.runRightHarun.setVisible(false);
        console.log("d is up");
       }
       
    }

    render() {

        this.game.debug.cameraInfo(this.game.camera, 32, 32);
    
    }
    
}