// 기본 스테이지 설정
var stage = null;
var renderer = null

// 각종 그래픽 좌표
var EYE_ROWS = 11;
var EYE_COLS = 7;
var EYE_OFFSET_X = 158;
var EYE_OFFSET_Y = 189;

var MOUTH_ROWS = 47;
var MOUTH_COLS = 7;
var MOUTH_OFFSET_X = 305;
var MOUTH_OFFSET_Y = 470;

var EMOTIONS = ['Angry', 'Fear', 'Happy', 'Sad', 'Surprise', 'Neutral']

var socket = io('http://localhost:8007');
socket.on('emotion', function (data) {
    var chunks = data.split(",");
    console.log(EMOTIONS[Number(chunks[0])], ":", chunks[1]);
});

function init() {

    stage = new PIXI.Container();
    renderer = PIXI.autoDetectRenderer(
        1024,
        768,
        {view: document.getElementById("game-canvas")}
    );

    PIXI.loader.add("Veloster_Rearview.jpg")
               .add("ball.png")
               .load(main);
}

function main() {
    
    var background = new PIXI.Sprite(
        PIXI.loader.resources["Veloster_Rearview.jpg"].texture
    );
    
    stage.addChild(background);

    var leftEyeGrid = drawEye(SMILE_EYE1, true)
    var rightEyeGrid = drawEye(SMILE_EYE1, false)
    var mouthGrid = drawMouth(NORMAL_MOUTH);

    var smileEyeAnimationFrames = [
        NORMAL_EYE, SMILE_EYE0,
        SMILE_EYE1, SMILE_EYE2,
        SMILE_EYE3, SMILE_EYE4,
        SMILE_EYE4, SMILE_EYE4,
        NORMAL_EYE, SMILE_EYE4,
        NORMAL_EYE, SMILE_EYE4,
        SMILE_EYE4, SMILE_EYE4,
        SMILE_EYE4, SMILE_EYE3,
        SMILE_EYE2, SMILE_EYE1,
        SMILE_EYE0
    ];

    var smileMouthAnimationFrames = [
        NORMAL_MOUTH, SMILE_MOUTH0,
        SMILE_MOUTH1, SMILE_MOUTH2,
        SMILE_MOUTH3, SMILE_MOUTH4,
        SMILE_MOUTH4, SMILE_MOUTH4,
        SMILE_MOUTH4, SMILE_MOUTH4,
        SMILE_MOUTH4, SMILE_MOUTH4,
        SMILE_MOUTH4, SMILE_MOUTH4,
        SMILE_MOUTH4, SMILE_MOUTH3,
        SMILE_MOUTH2, SMILE_MOUTH1,
        SMILE_MOUTH0
    ];

    var sadEyeAnimationFrames = [
        NORMAL_EYE, SAD_EYE0,
        SAD_EYE1, SAD_EYE2,
        SAD_EYE3, SAD_EYE4,
        SAD_EYE4, SAD_EYE4,
        SAD_EYE5, SAD_EYE6,
        SAD_EYE7, SAD_EYE4,
        SAD_EYE4, SAD_EYE5,
        SAD_EYE6, SAD_EYE7, 
        SAD_EYE4, SAD_EYE3,
        SAD_EYE3, SAD_EYE1,
        SAD_EYE0
    ];

    var sadMouthAnimationFrames = [
        NORMAL_MOUTH, SAD_MOUTH0,
        SAD_MOUTH1, SAD_MOUTH2,
        SAD_MOUTH3, SAD_MOUTH3,
        SAD_MOUTH2, SAD_MOUTH3,
        SAD_MOUTH3, SAD_MOUTH3,
        SAD_MOUTH2, SAD_MOUTH3,
        SAD_MOUTH3, SAD_MOUTH3,
        SAD_MOUTH2, SAD_MOUTH3,
        SAD_MOUTH3, SAD_MOUTH3,
        SAD_MOUTH2, SAD_MOUTH1,
        SAD_MOUTH0
    ]

    animate(leftEyeGrid, sadEyeAnimationFrames);
    animate(rightEyeGrid, sadEyeAnimationFrames);
    animate(mouthGrid, sadMouthAnimationFrames);
    renderer.render(stage);
}


function fluctuateGrid(list) {
    for (var i = 0; i < list.length; i++) {
        var graphics = list[i];
        list[i].alpha = Math.random();
    }

}

function animate(target, frames) {

    var currentFrame = 0;

    setInterval(()=> {

        var j = 0;
        for (var i = 0; i < frames[currentFrame].length; i++) {

            if (frames[currentFrame][i] < 1) {
                continue;
            }

            var currentGraphics = target[Math.min(j++, target.length - 1)];
            
            if (frames[currentFrame][i] > 1) {
                currentGraphics.alpha = 1;
            } else {
                currentGraphics.alpha = 0.1;
            }
        }

        if (currentFrame >= frames.length - 1) {
            currentFrame = 0;
        } else {
            currentFrame++;
        }

        renderer.render(stage);
    
    }, 100);
}

function drawEye(data, left = true) {

    var list = [];

    for (var i = 0; i < EYE_ROWS * EYE_COLS; i++){
        // 0은 그리지 않는다.
        if (data[i] < 1) {
            continue;
        }

        var x = (i % EYE_ROWS) * 9.5 + EYE_OFFSET_X;
        var y = (i / EYE_ROWS) * 9.5 + EYE_OFFSET_Y;
        var graphics = getGraphicsUnit(left ? 1013 - x : x, y);

        graphics.alpha = data[i] > 1 ? 1 : 0.1;

        stage.addChild(graphics);
        list.push(graphics);
    }

    return list;

}

function drawMouth(data) {

    var list = [];

    for (var i = 0; i < MOUTH_ROWS * MOUTH_COLS; i++){

        // 0은 그리지 않는다.
        if (data[i] < 1) {
            continue;
        }

        var x = (i % MOUTH_ROWS) * 9+ MOUTH_OFFSET_X;
        var y = Math.floor(i / MOUTH_ROWS) * 9 + MOUTH_OFFSET_Y;

        var graphics = getGraphicsUnit(x, y);
        graphics.alpha = data[i] > 1 ? 1 : 0.1;

        stage.addChild(graphics);
        list.push(graphics);
    }

    return list;
}


function getGraphicsUnit(x, y) {

    var ballSprite = new PIXI.Sprite(PIXI.loader.resources["ball.png"].texture);
    ballSprite.x = x;
    ballSprite.y = y;

    return ballSprite;
}