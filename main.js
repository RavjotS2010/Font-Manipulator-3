leftWrist_x=0;
rightWrist_x=0;
diffrence=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,130);

    canvas = createCanvas(800,500);
    canvas.position(430,110);

    poseNet= ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotPoses);
}   

function modelDone() {
    console.log("Posenet Is on and working!");
}

function draw() {
    background("#5196e3");
    document.getElementById("font_size").innerHTML="Font Size Of The Text Is "+diffrence+"px";
    fill("white");
    textSize(diffrence);
    text('King Ravjot',50,400);
}

function gotPoses(results,error){
if(error){
    console.error(error);
}
if(results.length>0) {
    console.log(results);

    rightWrist_x = results[0].pose.rightWrist.x;
    leftWrist_x = results[0].pose.leftWrist.x;
    diffrence= floor(leftWrist_x - rightWrist_x);


    console.log("rightwrist_x ="+results[0].pose.rightWrist.x+"rightwrist_y = "+results[0].pose.rightWrist.y);
    console.log("leftwrist_x ="+results[0].pose.leftWrist.x+"leftwrist_y = "+results[0].pose.leftWrist.y);
}
}