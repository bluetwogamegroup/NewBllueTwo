
import { LoadScene } from "./Scenes/LoadScene.js";
import { MenuScene } from "./Scenes/MenuScene.js";
import  { Level1 }  from "./Scenes/Level1.js";
import  { PauseScene }  from "./Scenes/PauseScene.js";
import   { OptionsScene }  from "./Scenes/OptionsScene.js"; 
/** @type {import("../typings/phaser")} */



let game = new Phaser.Game({
    width: 800,
    height: 800,
    scene: [
        LoadScene,
        MenuScene,//dont forget to add scenes as you make them otherwise you wont see them
        Level1,
        PauseScene,
        OptionsScene


    ],
    render:{
        pixelArt: true
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y:300},
            debug: true
        }
    },
    audio: {
        disableWebAudio: true
    }
});