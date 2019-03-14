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
            frames: this.anims.generateFrameNumbers("RUN", {
                frames: [2,3,4,5,6,7]
                //frames: [0,1]
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
            key: "swing", 
            frameRate: 15, 
            repeat: -1,
            frames: this.anims.generateFrameNumbers("SWING", {
                frames: [1,2,3,4,5]
            })
        });
        
        this.load.image("ground2",  "./assets/ground2.png");
        this.load.image("saw", "./assets/saw.png");
    }
   
    create() {
        

        console.log("Loaded Level1");

        

        this.add.image(0,0, "Level1Scene").setOrigin(0).setDepth(0); //setting the lvl 
        this.pauseButton = this.physics.add.sprite(550, 25, "PauseButton").setOrigin(0).setDepth(1).setScale(0.5);
        this.pauseButton.body.allowGravity = false;
        this.pauseButton.setInteractive();

        this.pauseButton.on("pointerup", ()=>{
            console.log("clicked Pause");
            this.scene.pause();
            this.scene.launch(CST.SCENES.PAUSE);
            //this.scene.start(CST.SCENES.MENU);
        })
        
        this.harun = this.physics.add.sprite(25,550, "idle");
        
        this.harun.setCollideWorldBounds(true);
        


        this.keyboard = this.input.keyboard.addKeys("W, A, S, D, P");
        this.cameras.main.setBounds(0,0,2400,800);
        this.physics.world.setBounds(0,0,2400,800);

        this.cameras.main.startFollow(this.harun);//THIS ONE LINE DOES THE FUCKING CAMERA THING IM GONNA KILL MYSELF
        this.cameras.main.setFollowOffset(-300,200);
       
        //this.add.image(545,367,'saw').setScale(0.065).setDepth(1);
        var saw = this.physics.add.staticGroup();
        saw.create(543,367, 'saw').setScale(0.065).refreshBody();

        saw.create(560,600, 'saw').setScale(0.065).refreshBody();
        saw.create(570,615, 'saw').setScale(0.065).refreshBody();
        saw.create(580,630, 'saw').setScale(0.065).refreshBody();
       // saw.create(593,633, 'saw').setScale(0.065).refreshBody();

        saw.create(1040,370, 'saw').setScale(0.1).refreshBody();
        saw.create(1095,370, 'saw').setScale(0.1).refreshBody();

        saw.create(730, 205, "saw").setScale(0.065).refreshBody();

        saw.create(700,173, 'saw').setScale(0.065).refreshBody();

        saw.create(785,160, 'saw').setScale(0.065).refreshBody();

        saw.create(885,270, 'saw').setScale(0.065).refreshBody();
        
        
      //  this.path = new Phaser.Curves.Line(10, 20, 1,   )

        var platforms = this.physics.add.staticGroup();
        
        //.refreshBody().setAlpha(0)

        platforms.create(200,652, "ground2").setScale(700,4).refreshBody().setAlpha(0);
       // platforms.create(600, 400, "ground2").setAlpha(0);
        platforms.create(50, 250, "ground2").setAlpha(0);
        //adding new platforms~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LEFT TREE SIDE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        platforms.create(110,409, 'ground2').setScale(20,4).refreshBody().setAlpha(0);//done need fine tunning
        platforms.create(290,605, 'ground2').setScale(55,5).refreshBody().setAlpha(0);//done need fine tunning
        platforms.create(410,560, 'ground2').setScale(50,4).refreshBody().setAlpha(0);//done need fine tunning
        platforms.create(322,500, 'ground2').setScale(28,4).refreshBody().setAlpha(0);//done 
        platforms.create(240,480, 'ground2').setScale(26,6).refreshBody().setAlpha(0);//done 
        platforms.create(134,460, 'ground2').setScale(47,4).refreshBody().setAlpha(0);//done 
        platforms.create(110,300, 'ground2').setScale(20,4).refreshBody().setAlpha(0);//done 
        //platforms.create(110,320, 'ground2').setScale(20,4).refreshBody().setAlpha(0);//done 
        platforms.create(110,350, 'ground2').setScale(20,4).refreshBody().setAlpha(0);//done 
       // platforms.create(110,385, 'ground2').setScale(20,4).refreshBody().setAlpha(0);//
        platforms.create(10,407, 'ground2').setScale(35,4).refreshBody().setAlpha(0);//
        platforms.create(10,350, 'ground2').setScale(35,4).refreshBody().setAlpha(0);//
        platforms.create(10,285, 'ground2').setScale(35,4).refreshBody().setAlpha(0);//
        platforms.create(160,245, 'ground2').setScale(15,4).refreshBody().setAlpha(0);//done need fine tunning
        platforms.create(435,230, 'ground2').setScale(260,30).refreshBody().setAlpha(0);//done need fine tunning
        platforms.create(530,455, 'ground2').setScale(4,195).refreshBody().setAlpha(0);//done TREE LEFT SIDE LONG
        platforms.create(738,184, 'ground2').setScale(48,12).refreshBody().setAlpha(0);//done 
        platforms.create(788,161, 'ground2').setScale(12,11).refreshBody().setAlpha(0);//done 
        platforms.create(810,142, 'ground2').setScale(13,11).refreshBody().setAlpha(0);//done 
        platforms.create(645,283, 'ground2').setScale(5,20).refreshBody().setAlpha(0);//done need fine tunningd
        platforms.create(710,320, 'ground2').setScale(65,10).refreshBody().setAlpha(0);
        platforms.create(647,348, 'ground2').setScale(4,15).refreshBody().setAlpha(0);//vertical platform on the right side
        platforms.create(792,297, 'ground2').setScale(20,6).refreshBody().setAlpha(0);
        platforms.create(852,285, 'ground2').setScale(40,8).refreshBody().setAlpha(0);
        platforms.create(539,507, 'ground2').setScale(5,140).refreshBody().setAlpha(0);
        platforms.create(645,518, 'ground2').setScale(3,75).refreshBody().setAlpha(0);
        platforms.create(670,425, 'ground2').setScale(60,4).refreshBody().setAlpha(0);
        platforms.create(767,407, 'ground2').setScale(35,4).refreshBody().setAlpha(0);
        platforms.create(825,403, 'ground2').setScale(32,4).refreshBody().setAlpha(0);
        platforms.create(893,383, 'ground2').setScale(32,4).refreshBody().setAlpha(0);
        platforms.create(972,367, 'ground2').setScale(45,4).refreshBody().setAlpha(0);
        //----------------------------------------TREE DONE---------------------------------------------------------------------------

        //---------------------------------------UNDER TOWER PART---------------------------------------------------------------------
        platforms.create(932,676, 'ground2').setScale(45,4).refreshBody().setAlpha(0);
        platforms.create(985,703, 'ground2').setScale(45,4).refreshBody().setAlpha(0);
        platforms.create(1040,741, 'ground2').setScale(45,10).refreshBody().setAlpha(0);
        platforms.create(1116,765, 'ground2').setScale(45,10).refreshBody().setAlpha(0);
        platforms.create(1205,745, 'ground2').setScale(45,25).refreshBody().setAlpha(0);
        platforms.create(1140,656, 'ground2').setScale(30,7).refreshBody().setAlpha(0);
        platforms.create(2046,685, 'ground2').setScale(800,35).refreshBody().setAlpha(0);
        platforms.create(1235,700, 'ground2').setScale(15,6).refreshBody().setAlpha(0);
        platforms.create(1141,423, 'ground2').setScale(6,227).refreshBody().setAlpha(0);
        platforms.create(1265,423, 'ground2').setScale(6,227).refreshBody().setAlpha(0);

        //--------------------------------------TOWER---------------------------------------------------------------------------------
        platforms.create(1140,200, 'ground2').setScale(43,10).refreshBody().setAlpha(0);
        platforms.create(1269,200, 'ground2').setScale(40,10).refreshBody().setAlpha(0);
        platforms.create(1235,584, 'ground2').setScale(25,10).refreshBody().setAlpha(0);
        platforms.create(1235,430, 'ground2').setScale(25,7).refreshBody().setAlpha(0);
        platforms.create(1200,380, 'ground2').setScale(60,7).refreshBody().setAlpha(0);
        platforms.create(1200,315, 'ground2').setScale(60,7).refreshBody().setAlpha(0);
        platforms.create(1200,260, 'ground2').setScale(60,7).refreshBody().setAlpha(0);
        platforms.create(1175,496, 'ground2').setScale(28,10).refreshBody().setAlpha(0);//Done


        //  This adjusts the collision body size to be a 100x50 box.
        //  50, 25 is the X and Y offset of the newly sized box.
        
       
        this.harun.body.setSize(45,45,true);
        this.harun.setBounce(0.2);
        this.harun.body.checkCollision.up = false;
        //this.harun.body.checkCollision.left = false;
        //this.harun.body.checkCollision.right = false;
        this.physics.add.collider(this.harun, platforms);
        this.physics.world.addCollider(this.harun, this.saw);
        this.physics.add.overlap(this.harun, saw, this.sawHit, null, this);

        
    }
    sawHit (harun, saw){
    //this.harun.disableBody(true, true);
    console.log("DEAD");
    this.harun.x = 25;
    this.harun.y = 550;
  //  this.harun.disableBody(false, false);
    }


    update(delta) {
        
        var isRunning = false;

        //this is where the magic happens, D works FINE need help with logic for A, too tired atm
        if(this.keyboard.D.isDown ){
            
            


            this.harun.body.setSize(45,45,true);
            this.harun.setVelocityX(160);
            this.harun.flipX = false;
            this.harun.setOffset(0,0);
            if(this.harun.x >= 1697){
                this.pauseButton.allowDrag = false;
            }else {
                this.pauseButton.x = this.harun.x + 500;
            }
            //this.harun.setY(625);
            
            this.harun.anims.play("runRight", true).setScale(1);
            
            console.log("X = " + this.harun.x);
            console.log("Y = " + this.harun.y);
            
 
 
        } 
        else if (this.keyboard.A.isDown === true) {

            this.harun.body.setSize(45,45,true);
            this.harun.setVelocityX(-160);
            this.harun.flipX = true;
            this.harun.setOffset(45,0);
            if(this.harun.x >= 1697){
                this.pauseButton.allowDrag = false;
            }else {
                this.pauseButton.x = this.harun.x + 500;
            }
            
            //this.harun.setY(625);
            this.harun.anims.play("runRight", true).setScale(1);
            console.log("X = " + this.harun.x);
            console.log("Y = " + this.harun.y);
            
        }
        else if(this.keyboard.S.isDown ){

 //Check for collision here with enemy

            //this.harun.setOffset(45,45);
            console.log("S was pushed");
            if(this.harun.flipX){
                this.harun.body.setSize(100,45,true).setOffset(0,0);
                this.harun.setVelocityX(0);
                this.harun.anims.play("swing", true).setScale(1);
            }else{
            this.harun.body.setSize(100,45,true).setOffset(45,0);
            this.harun.setVelocityX(0);
            this.harun.anims.play("swing", true).setScale(1);
            }
        }else {
        
            this.harun.setVelocityX(0);
            this.harun.body.setSize(45,45,true);
            this.harun.anims.play("idle", true).setScale(1);
            this.harun.setOffset(0,0);
            //this.harun.setY(600);
            
           }
 
      if(this.keyboard.W.isDown && this.harun.body.touching.down){
        console.log("W was pushed");
        if(this.harun.x > 1153 && this.harun.x < 1263){
            this.harun.setVelocityY(-250);
            
        }else {
            this.harun.setVelocityY(-200);
        }
      }

       
      
 
       
      
    }

    render() {

        this.game.debug.cameraInfo(this.game.camera, 32, 32);
    
    }
    
}
