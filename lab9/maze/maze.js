let rice=false;
$(document).ready(function(){
    $("#boundary1").mouseover(gettingRed);
    $("#boundary2").mouseover(gettingRed);
    $("#boundary3").mouseover(gettingRed);
    $("#boundary4").mouseover(gettingRed);
    $("#boundary5").mouseover(gettingRed);
    $("#start").click(start);
    $("#end").click(end);


});
function gettingRed(){
    if(rice){
        $(this).css("background-color","#ff8888").addClass("hovered");
    }
}
function start() {
  rice = true;
    $("div.boundary").removeClass("hovered").css("background-color", "#eeeeee");
    $("#status").text('Click the "S" to begin.');
    return rice;
}
function end() {
    if (rice) {
       rice = false;
        if (checkResult()) {
            $("#status").text('You lose! Click the "S" to begin again.');
        } else {
            $("#status").text('You win :). Click the "S" to begin again.');
        }
    } else {
        alert('Click the "S" to begin.');
    }
}

function checkResult() {
    return $("div").hasClass("hovered");
}