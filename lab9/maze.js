"use strict";
var state = "";
var count=0;
var started = false;
$(document).ready(function() {
    $(".boundary").mouseover(lost);

    $("#end").click(endofmaze);

    $("#start").click(start);

    $("#maze").mouseleave(function() {
        if (started) {
            lost();
        }
    });
});
function start() {
    state = "";
    $(".boundary").removeClass("youlose");
    $("#status").text("Click the \"S\" to begin.");
    started = true;
    count++;
}

function endofmaze() {
    if (state != "lost") {
        $("#status").text("You win after:]");
        count;
    } else {
        $("#status").text("Sorry, you lost, :[");
    }
    started = false;
}
function lost() {
    if (started && state != "lost") {
        $(".boundary").addClass("youlose");
        state = "lost";

    }
}