/** @type {import ("../typings/phaser")} */
/* import {LoadScene} from "./Scenes/LoadScene";
import {MenuScene} from "./Scenes/MenuScene";
import { Level1 } from "./Scenes/Level1";
import { PauseScene } from "./Scenes/PauseScene";
import { OptionsScene } from "./Scenes/OptionsScene"; */
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