difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas=createCanvas(550, 550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("black");
    fill("white");
    textSize(difference);
    text("Miss Lulu", 100,400);
    
}

function modelLoaded(){
    console.log("PoseNet se inicializó")
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference= floor(leftWristX-rightWristX);
        console.log("muñeca derecha: "+leftWristX+" muñeca izquierda: "+rightWristX+" diferencia: "+difference);
    }
}