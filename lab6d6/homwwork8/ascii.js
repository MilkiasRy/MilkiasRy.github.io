"use strict";
var animation = ANIMATIONS["Blank"];
var counter = 0;
var timer;
var userText;

function animationChange(){
     var option = document.getElementById("animation").value;
     animation=ANIMATIONS[option];
     clickStop();
     setDataOnStage();
}

function clickStart() {
        userText = document.getElementById('stage').value;

    if(animation !== null) {
        //var scenes = animation.split("=====\n");
        timer = setInterval(animate, 250);
        document.getElementById('btnStart').disabled=true;
        document.getElementById('btnStop').disabled=false;
        document.getElementById('animation').disabled=true;
        document.getElementById('turbo').disabled=false;
    }
}

function animate() {
    
        var scenes = animation.split("=====\n");
        var txt = document.getElementById('stage');
        if (counter === scenes.length-1) {
            txt.value = scenes[counter];
            counter = 0;
        } else {
            txt.value = scenes[counter];
            counter++;
        }
    

}

function changeSize(){
    var option = document.getElementById("size").value;
    var txt = document.getElementById('stage');
    txt.style.fontSize=option+"pt";
}

function turbo(){
    var ischecked = document.getElementById("turbo").checked;
    if(animation !== null) {
        clearInterval(timer);
        if(ischecked){
            timer=setInterval(animate, 50);
        }else {
             timer=setInterval(animate, 250);
        }
    }
}

function clickStop() {
    clearInterval(timer);
    counter=0;
    document.getElementById('stage').value = userText;
        document.getElementById('btnStop').disabled=true;
    document.getElementById('btnStart').disabled=false;
    document.getElementById('animation').disabled=false;
    document.getElementById('turbo').disabled=true;
}

function setDataOnStage()
{
	counter=0;
	var txt = document.getElementById('stage');
    txt.value=animation;
    document.getElementById('btnStop').disabled=true;
    document.getElementById('btnStart').disabled=false;
    document.getElementById('animation').disabled=false;
    document.getElementById('turbo').disabled=true;
}
