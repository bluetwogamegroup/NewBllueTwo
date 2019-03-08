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
        
        this.harun = this.physics.add.sprite(750,600, "idle");
        
        this.harun.setCollideWorldBounds(true);
        


        this.keyboard = this.input.keyboard.addKeys("W, A, S, D");
        this.cameras.main.setBounds(0,0,2400,800);
        this.physics.world.setBounds(0,0,2400,800);

        this.cameras.main.startFollow(this.harun);//THIS ONE LINE DOES THE FUCKING CAMERA THING IM GONNA KILL MYSELF
        this.cameras.main.setFollowOffset(-300,200);
       
        var platforms = this.physics.add.staticGroup();
    
        platforms.create(200,652, "ground").setScale(700,4).refreshBody();
       // platforms.create(600, 400, "ground");
        platforms.create(50, 250, "ground");
        //adding new platforms~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LEFT TREE SIDE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        platforms.create(110,409, 'ground').setScale(20,4).refreshBody();//done need fine tunning
        platforms.create(290,605, 'ground').setScale(55,5).refreshBody();//done need fine tunning
      //  platforms.create(380,550, 'ground').setScale(20,4).refreshBody();//done need fine tunning
        platforms.create(322,500, 'ground').setScale(28,4).refreshBody();//done 
        platforms.create(240,480, 'ground').setScale(26,6).refreshBody();//done 
        platforms.create(134,460, 'ground').setScale(47,4).refreshBody();//done 
        platforms.create(110,300, 'ground').setScale(20,4).refreshBody();//done 
        platforms.create(110,320, 'ground').setScale(20,4).refreshBody();//done 
        platforms.create(110,350, 'ground').setScale(20,4).refreshBody();//done 
        platforms.create(110,385, 'ground').setScale(20,4).refreshBody();//
        platforms.create(10,407, 'ground').setScale(35,4).refreshBody();//
        platforms.create(10,350, 'ground').setScale(35,4).refreshBody();//
        platforms.create(10,285, 'ground').setScale(35,4).refreshBody();//
        platforms.create(160,245, 'ground').setScale(15,4).refreshBody();//done need fine tunning
        platforms.create(435,230, 'ground').setScale(260,30).refreshBody();//done need fine tunning
       // platforms.create(530,455, 'ground').setScale(1,195).refreshBody();//done TREE LEFT SIDE LONG
        platforms.create(738,184, 'ground').setScale(48,12).refreshBody();//done 
        platforms.create(788,161, 'ground').setScale(12,11).refreshBody();//done 
        platforms.create(810,142, 'ground').setScale(13,11).refreshBody();//done 
        platforms.create(651,283, 'ground').setScale(1,20).refreshBody();//done need fine tunningd
        platforms.create(710,320, 'ground').setScale(65,10).refreshBody();
        platforms.create(651,348, 'ground').setScale(1,15).refreshBody();//vertical platform on the right side
        platforms.create(792,297, 'ground').setScale(20,6).refreshBody();
        platforms.create(852,285, 'ground').setScale(40,8).refreshBody();
        //platforms.create(543,507, 'ground').setScale(1,140).refreshBody();
       // platforms.create(645,518, 'ground').setScale(3,75).refreshBody();
        platforms.create(670,425, 'ground').setScale(60,4).refreshBody();
        platforms.create(767,407, 'ground').setScale(35,4).refreshBody();
        platforms.create(825,403, 'ground').setScale(32,4).refreshBody();
        platforms.create(893,383, 'ground').setScale(32,4).refreshBody();
        platforms.create(972,367, 'ground').setScale(45,4).refreshBody();
        //----------------------------------------TREE DONE---------------------------------------------------------------------------

        //---------------------------------------UNDER TOWER PART---------------------------------------------------------------------
        platforms.create(932,676, 'ground').setScale(45,4).refreshBody();
        platforms.create(985,703, 'ground').setScale(45,4).refreshBody();
        platforms.create(1040,741, 'ground').setScale(45,10).refreshBody();
        platforms.create(1116,765, 'ground').setScale(45,10).refreshBody();
        platforms.create(1205,745, 'ground').setScale(45,25).refreshBody();
        platforms.create(1140,656, 'ground').setScale(30,7).refreshBody();
        platforms.create(2046,685, 'ground').setScale(800,35).refreshBody();
        platforms.create(1235,700, 'ground').setScale(15,6).refreshBody();
        platforms.create(1139,423, 'ground').setScale(4,227).refreshBody();
        platforms.create(1263,423, 'ground').setScale(4,227).refreshBody();

        //--------------------------------------TOWER---------------------------------------------------------------------------------
        platforms.create(1140,200, 'ground').setScale(43,10).refreshBody();
        platforms.create(1269,200, 'ground').setScale(40,10).refreshBody();
        platforms.create(1235,584, 'ground').setScale(25,10).refreshBody();
        platforms.create(1235,430, 'ground').setScale(25,7).refreshBody();
        platforms.create(1200,380, 'ground').setScale(60,7).refreshBody();
        platforms.create(1200,315, 'ground').setScale(60,7).refreshBody();
        platforms.create(1200,260, 'ground').setScale(60,7).refreshBody();
        platforms.create(1175,496, 'ground').setScale(28,10).refreshBody();//Done









        //  This adjusts the collision body size to be a 100x50 box.
        //  50, 25 is the X and Y offset of the newly sized box.
        
       
        this.harun.body.setSize(45,90,0,0);
        this.harun.setBounce(0.2);
        this.physics.add.collider(this.harun, platforms);
    }
    update(delta) {
        
        var isRunning = false;
        
        //this is where the magic happens, D works FINE need help with logic for A, too tired atm
        if(this.keyboard.D.isDown ){
            
            console.log("d is down");



            this.harun.setVelocityX(160);
            this.harun.flipX = false;
            //this.harun.setY(625);
            
            this.harun.anims.play("runRight", true);
            
            
 
 
        } 
        else if (this.keyboard.A.isDown === true) {

            console.log("a is down");
            this.harun.setVelocityX(-160);
            this.harun.flipX = true;
            //this.harun.setY(625);
            this.harun.anims.play("runRight", true);
            
        }else {
        
        this.harun.setVelocityX(0);
        this.harun.anims.play("idle", true);
        //this.harun.setY(600);
        
       }

      if(this.keyboard.W.isDown && this.harun.body.touching.down){
        console.log("W was pushed");
        this.harun.setVelocityY(-200);
    
      }
       
 
       
    }

    render() {

        this.game.debug.cameraInfo(this.game.camera, 32, 32);
    
    }
    
}