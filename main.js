noseX=0;
noseY=0;

function preload(){

} 

function setup(){
    canvas= createCanvas(350,350);
    canvas.center();
    video= createCapture(VIDEO);
    video.center();
    video.size(350,350);
    video.hide();

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);


}
function modelloaded(){
    console.log('PoseNet is initialized');

}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}
function draw(){
    image(video,0,0,350,350);
}