/** @type {import ("../typings/phaser")} */
import {LoadScene} from "./Scenes/LoadScene";
import {MenuScene} from "./Scenes/MenuScene";
import { Level1 } from "./Scenes/Level1";
let game = new Phaser.Game({
    width: 800,
    height: 800,
    scene: [
        LoadScene,
        MenuScene,//dont forget to add scenes as you make them otherwise you wont see them
        Level1


    ],
    render:{
        pixelArt: true
    }
});