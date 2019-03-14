import { CST } from "../CST";
export class OptionsScene extends Phaser.Scene{
    constructor() {
        super({
            key: CST.SCENES.OPTIONS
        })
        
    }


    create(){
        this.add.image(0,0, "OptionsScreen").setOrigin(0).setDepth(0);
        let returnButton = this.add.image(325, 210, "ReturnButton").setOrigin(0).setDepth(1);
        var checked = false;
        let checkBox = this.add.image(245, 730, "CheckRectangle").setOrigin(0).setDepth(1);
        var chek = this.add.image(255, 717, "checked").setOrigin(0).setDepth(1).setScale(0.1).setVisible(false);

        returnButton.setInteractive();

        returnButton.on("pointerup", ()=>{
            this.scene.stop();
            this.scene.resume(CST.SCENES.MENU);
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