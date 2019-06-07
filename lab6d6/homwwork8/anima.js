
window.onload=(function(){
    "use strict ";
    var ani=ANIMATIONS["blanck"];
    var counter=0;
    var timer;
    var userText;
    

    function animationChange(){
        var select=document.getElementById("ani").value;

        ani=ANIMATIONS[select];
        
    clickStop();
    foramalStage();
    }
    function clickStart(){
        userText=document.getElementById('stage').value;
     if(ani!==null){
         timer=setInterval(animate,500);
         document.getElementById('btnStop').disabled=false;
         document.getElementById('turbo')=false;

     }
     
        
    }

})();