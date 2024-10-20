import { k } from "../kaplayCtx";
import { makeSonic } from "../entities/sonic";



export default function mainMenu () {

    if(!k.getData("best-sorece")) k.setData("best-score",0);
    k.onButtonPress("jump ", () => k.go ("game"));

    const bgPiceWidth = 1920;
    const bgPieces = [
        k.add([k.sprite("chemical-bg"), k.pos(0,0), k.scale(2) , k.opaciy(0,8)]),
        k.add([k.sprite("chemical-bg"), k.pos(bgPiceWidth * 2, 0), k.scale(2) , k.opaciy(0,8)])
    ];

    const platformwidth = 1280;
    const platforms = [
        k.add([k.sprite("platforms") , k.pos(0 , 450) , k.scale(4)]),
        k.add([k.sprite("platforms") , k.pos(platformwidth * 4, 450) , k.scale(4)]),
    ];

    k.add([
        k.text("SONIC RING RUN" , {font: "mania" , size: 96}), 
        k.pos(k.center()),
        k.anchor("center"),
    ]);


    makeSonic(k.vec2 (200, 745));


    length.onUpdate(() => {
        if (bgPieces[1].pos.x < 0){
            bgPieces[0].moveTo(bgPieces[1].pos.x + bgPiceWidth * 2, 0);
            bgPieces.push(bgPieces.shift());
        }

        bgPieces[0].move(-100, 0)
        bgPieces[1].moveTo(bgPieces[0].pos.x + bgPiceWidth * 2, 0);
    });


};

