// 기본 스테이지 설정
var stage = null;
var renderer = null

// 각종 그래픽 좌표
var EYE_ROWS = 34;
var EYE_COLS = 19;
var EYE_OFFSET_X = 158;
var EYE_OFFSET_Y = 191;

var MOUTH_ROWS = 142;
var MOUTH_COLS = 21;
var MOUTH_OFFSET_X = 300;
var MOUTH_OFFSET_Y = 462;

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

    var leftEyeGrid = drawEye(ANGRY_EYE1, true)
    var rightEyeGrid = drawEye(ANGRY_EYE1, false)
    var mouthGrid = drawMouth(ANGRY_MOUTH1);

    var eyeAnimationFrames = [ANGRY_EYE1,ANGRY_EYE2,ANGRY_EYE3,ANGRY_EYE4,ANGRY_EYE5
        ,ANGRY_EYE6,ANGRY_EYE7,ANGRY_EYE8,ANGRY_EYE9,ANGRY_EYE10,ANGRY_EYE11,ANGRY_EYE12];

    var mouthAnimationFrames = [ANGRY_MOUTH1,ANGRY_MOUTH2,ANGRY_MOUTH3,ANGRY_MOUTH4,ANGRY_MOUTH5
        ,ANGRY_MOUTH6,ANGRY_MOUTH7,ANGRY_MOUTH8,ANGRY_MOUTH9,ANGRY_MOUTH10,ANGRY_MOUTH11,ANGRY_MOUTH12];

    animate(mouthGrid, mouthAnimationFrames);
    animate(rightEyeGrid, eyeAnimationFrames);
    animate(leftEyeGrid, eyeAnimationFrames);
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
                currentGraphics.alpha = 0.3;
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

        var x = (i % EYE_ROWS) * 3.1 + EYE_OFFSET_X;
        var y = (i / EYE_ROWS) * 3.1 + EYE_OFFSET_Y;
        var graphics = getGraphicsUnit(left ? 1010 - x : x, y);

        graphics.alpha = data[i] > 1 ? 1 : 0.3;

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

        var x = (i % MOUTH_ROWS) * 3 + MOUTH_OFFSET_X;
        var y = Math.floor(i / MOUTH_ROWS) * 4 + MOUTH_OFFSET_Y;

        var graphics = getGraphicsUnit(x, y);
        graphics.alpha = data[i] > 1 ? 1 : 0.3;

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