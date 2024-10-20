import { k } from "./kaplayCtx";
import mainMenu from "./sence/mainMenu";

//loadでアセットを持ってくる
//パスの指定ではルートのように扱える

k.loadSprite("chemical-gb","graphics/chemicakl-bg.png");
k.loadSprite("plateforms","graphics/platforms.png");
k.loadSprite("sonic","graphics/sonic.png",{
    sliceX: 8,
    sliceY: 2,
    anims:{
        //最初のフレームは０としてカウント
        run: {from: 0, to: 7, loop: true, speed :30 } ,
        jump : {from: 0, to: 7, loop: true, speed :30 } 
    },
});

k.loadSprite("ring","graphics/ring.png",{
    sliceX : 16,
    silceY : 1,
    anims : {
        spin : {from : 0, to : 15, loop : true , speed : 30},
    },
});

k.loadSprite("motobug", "graphics/motobug.png",{
    sliceX : 5,
    silceY : 1,
    anims : {
        run : {from :0 , to : 4 , loop : true , speed : 8},
    },
});

k.loadFont("mania", "fonts/mania.tff");

k.loadSound("city", "sounds/city.mp3");



k.scene("main-menu" , mainMenu );

k.scene("gameover" , () => {

});

k.scene("game" , () => {

});

k.go("main-menu");