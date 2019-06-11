/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

var mymodule = (function() {

    var empty_location = null;
    var started = false;

    $(document).ready(function() {
        init();

        $("#shufflebutton").click(shuffle);

        $("#changePic").click(changeBackground);

    });

    var init = function() {

        var divs = $("#puzzlearea div");

        // initialize each piece        
        divs.each(function(i) {
            var div = divs[i];

            // calculate x and y for this piece
            var x = ((i % 4) * 100);
            var y = (Math.floor(i / 4) * 100);

            // set basic style and background
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            // div.style.backgroundImage = 'url("background.jpg")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

            // store x and y for later
            div.x = x;
            div.y = y;

            //set id
            $(this).attr("id", "square_" + (x / 100 + 1) + "_" + (y / 100 + 1));

        });

        divs.each(function() {
            //set class to movable piece of tile
            if (is_movable(this)) {
                $(this).addClass("movablepiece");
            }

            //set event handler to each tile
            $(this).click(function() {
                move_tile(this);
            });
        });

    };

    function move_tile(tile) {

        if (is_movable(tile)) {

            //relocate the tile
            tile.style.left = empty_location.x + 'px';
            tile.style.top = empty_location.y + 'px';
            tile.style.backgroundPosition = -empty_location.x + 'px ' +
                    (-empty_location.y) + 'px';
            tile.x = empty_location.x;
            tile.y = empty_location.y;
            $(tile).attr("id", "square_" + (tile.x / 100 + 1) + "_" +
                    (tile.y / 100 + 1));

            //remove the class from previously movable tiles
            $(".puzzlepiece").removeClass("movablepiece");

            //add movablepiece class to the neighbours of the new empty tile
            $(".puzzlepiece").each(function(i) {
                if (is_movable(this)) {
                    $(this).addClass("movablepiece");
                }
            });
        }

        if (started) {
            //congratulate if the game is won
            if (is_won()) {
                alert("Congra");
            }
        }
    }
    function is_movable(tile) {
        //is left neighbour empty tile?
        if ((tile.x - 100) >= 0) {
            if (!is_tile(tile.x - 100, tile.y)) {
                empty_location = {x: tile.x - 100, y: tile.y};
                return true;
            }
        }
        //is top neighbour empty tile?
        if ((tile.y - 100) >= 0) {
            if (!is_tile(tile.x, tile.y - 100)) {
                empty_location = {x: tile.x, y: tile.y - 100};
                return true;
            }
        }
        //is right neighbour  empty tile?
        if ((tile.x + 100) <= 300) {
            if (!is_tile(tile.x + 100, tile.y)) {
                empty_location = {x: tile.x + 100, y: tile.y};
                return true;
            }
        }
        //is bottom neighbour  empty tile?
        if ((tile.y + 100) <= 300) {
            if (!is_tile(tile.x, tile.y + 100)) {
                empty_location = {x: tile.x, y: tile.y + 100};
                return true;
            }
        }
        return false;
    }

    function is_tile(x, y) {
        var div = $("#square_" + (x / 100 + 1) + "_" + (y / 100 + 1));
        if (div.length == 0) {
            return false;
        }
        else {
            return true;
        }
    }

    function shuffle() {
        started = false;

        //choose one of the movable pieces randomly and move it and repeat this 500 times
        for (var j = 0; j < 500; j++) {
            var movables = $(".puzzlepiece.movablepiece");
            var i = parseInt(Math.random() * movables.length);
            move_tile(movables[i]);
        }

        started = true;
    }

    function is_won() {
        var isWon = true;

        //check if each div is in its initial location before any shuffle was doen      
        $(".puzzlepiece").each(function(i) {
            var x = ((i % 4) * 100);
            var y = (Math.floor(i / 4) * 100);
            if ($(this).attr("id") != ("square_" + (x / 100 + 1) + "_" +
                    (y / 100 + 1))) {
                isWon = false;
                return false;
            }

        });

        return isWon;
    }

    function changeBackground() {
        
       
		    if ($(".puzzlepiece").css("backgroundImage").replace(')','').split('/').pop().replace("\"","") == "background.jpg") {
                $(".puzzlepiece").css("backgroundImage", 'url("background3.jpg")');
            }
        else if ($(".puzzlepiece").css("backgroundImage").replace(')','').split('/').pop().replace("\"","") == "background3.jpg") {
                $(".puzzlepiece").css("backgroundImage", 'url("background2.jpg")');
            }
       
            else {
                $(".puzzlepiece").css("backgroundImage", 'url("background.jpg")');
            }
        
    }





})();
