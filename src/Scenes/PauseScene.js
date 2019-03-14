import { CST } from "../CST";
export class PauseScene extends Phaser.Scene{
    constructor() {
        super({
            key: CST.SCENES.PAUSE
        })
        
    }


    create(){
        this.add.image(0,0, "OptionsScreen").setOrigin(0).setDepth(0);
        let returnButton = this.add.image(325, 210, "ResumeButton").setOrigin(0).setDepth(1);
        let exitButton = this.add.image(325, 650, "ExitButton").setOrigin(0).setDepth(1);
        var checked = false;
        let checkBox = this.add.image(245, 730, "CheckRectangle").setOrigin(0).setDepth(1);
        var chek = this.add.image(255, 717, "checked").setOrigin(0).setDepth(1).setScale(0.1).setVisible(false);

        returnButton.setInteractive();

        returnButton.on("pointerup", ()=>{
            
            this.scene.stop();
            this.scene.resume(CST.SCENES.LEVEL1);
            
            //this.scene.start(CST.SCENES.MENU);
        })

        exitButton.setInteractive();

        exitButton.on("pointerup", ()=>{
            this.scene.stop();
            this.scene.stop(CST.SCENES.LEVEL1);
            this.scene.start(CST.SCENES.MENU);
            
            //this.scene.start(CST.SCENES.MENU);
        })
    
        checkBox.setInteractive();
        checkBox.on("pointerup", ()=>{

            if(checked ){
                console.log("music on");
                chek.setVisible(false);
                this.sound.resumeAll();
            }
        
            if(!checked){
            console.log("MusicOff");
            chek.setVisible(true);
            this.sound.pauseAll();
            
            } 
        
            checked = !checked;
        
        })
    }












}