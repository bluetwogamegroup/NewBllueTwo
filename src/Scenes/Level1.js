import { CST } from "../CST";
import { LoadScene } from "./LoadScene";
import { createPartiallyEmittedExpression } from "typescript";
export class Level1 extends Phaser.Scene{
    
    constructor() {
        super({
            key: CST.SCENES.LEVEL1
        })
        var harun;
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
            frames: this.anims.generateFrameNumbers("IDLE", {
                //frames: [2,3,4,5,6,7]
                frames: [0,1]
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
        
        this.load.image("ground",  "./assets/ground.png");
    }
    create() {
        

        console.log("Loaded Level1");

        

        this.add.image(0,0, "Level1Scene").setOrigin(0).setDepth(0); //setting the lvl 
        
        /* this.harun = this.physics.add.sprite(200,600, "IDLE").setScale(1).play("idle"); //initializing sprite so that it can be used

        this.runRightHarun = this.physics.add.sprite(this.harun.x,this.harun.y  + 25, "RUN").setScale(1).play("runRight").setVisible(false);

        this.idleLeftHarun = this.physics.add.sprite(this.harun.x,this.harun.y + 25, "RUN").setScale(1).play("idleLeft").setVisible(false);

        this.runLeftHarun = this.physics.add.sprite(this.idleLeftHarun.x,this.idleLeftHarun.y +25, "RUN").setScale(1).play("runLeft").setVisible(false);

        this.slashHarun = this.physics.add.sprite(325,575, "RUN").setScale(1).play("slash").setVisible(false);



        window.runRightHarun = this.runRightHarun; //making it global so we can use it outside this shithole
        window.harun = this.harun;
        
        
        
        window.idleLeftHarun = this.idleLeftHarun;
        window.runLeftHarun = this.runLeftHarun;
        window.slashHarun = this.slashHarun; */

        this.harun = this.physics.add.sprite(200,600, "idle");
        
        this.harun.setCollideWorldBounds(true);
        


        this.keyboard = this.input.keyboard.addKeys("W, A, S, D");

        this.cameras.main.startFollow(this.harun);//THIS ONE LINE DOES THE FUCKING CAMERA THING IM GONNA KILL MYSELF
        this.cameras.main.setFollowOffset(-300,200);
       
        var platforms = this.physics.add.staticGroup();
    
        platforms.create(200, 680, "ground").setScale(40).refreshBody();
        platforms.create(600, 400, "ground");
        platforms.create(50, 250, "ground");

        this.physics.add.collider(this.harun, platforms);
    }
update(delta) {
        
        var isRunning = false;
        
        //this is where the magic happens, D works FINE need help with logic for A, too tired atm
        if(this.keyboard.D.isDown ){
            
            console.log("d is down");

            /* this.harun.flipX = false;
            this.runRightHarun.flipX = false;

            this.harun.setVisible(false);
            this.runRightHarun.setVisible(true);

            this.harun.x = this.harun.x + 2;
            this.runRightHarun.x = this.harun.x;

            this.runRightHarun.play("runRight", true); */

            this.harun.setVelocityX(160);
            this.harun.flipX = false;
            //this.harun.setY(625);
            
            this.harun.anims.play("runRight", true);
            
            
 
 
        } 
        else if (this.keyboard.A.isDown === true) {
            /* this.harun.flipX = true;
            this.runRightHarun.flipX = true;

            this.harun.setVisible(false);
            this.runRightHarun.setVisible(true);

            this.harun.x = this.harun.x - 2;
            this.runRightHarun.x = this.harun.x;

            this.runRightHarun.play("runRight", true);
            this.isflipped = true; */
            console.log("a is down");
            this.harun.setVelocityX(-160);
            this.harun.flipX = true;
            //this.harun.setY(625);
            this.harun.anims.play("runRight", true);
            
            
        

       } else if(this.keyboard.W.isDown && this.harun.body.touching.down){
        console.log("W was pushed");
        this.harun.setVelocityY(-400);
    
       
       }else {
        
        this.harun.setVelocityX(0);
        this.harun.anims.play("idle", true);
        //this.harun.setY(600);
        console.log("Im Idle");
       }

 
       
    }

    render() {

        this.game.debug.cameraInfo(this.game.camera, 32, 32);
    
    }
    
}