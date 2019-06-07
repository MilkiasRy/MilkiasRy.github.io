let gender;
$(function(){
    prepopulate();
    getGender();
    $('#add').click(populate);
    $('#kill').click(kill);
    $('#cleanup').click(removeDead); 
    $('#stomp').click(stomp); 
    $('#enrage').click(enrageRaptor); 
    $('#patrol').click(patrol); 
})
function prepopulate(){
    $('#people .person').addClass('boy')
}
function populate(){
      gender= getGender();
    $("#people .person").each(function(index,e){
            if(index<5)
         $('#people').append($('<div>').addClass('person '+ gender));  
    });
}
function getGender() {
    return $('input:checked').val();
     
}
function kill(gender) {
     //let gender=getGender();
     var peeps = $('#people .' + gender);
    for (var i = 0; i < peeps.length / 5; i++) {
        var randomIndex = Math.floor(Math.random() * peeps.length);
        $(peeps[randomIndex]).removeClass(gender);
        // so future kills won't choose splat victims
        $(peeps[randomIndex]).addClass('splat');
    }
}
function removeDead(){
    $("#people .splat").remove();
}
// Stomp! button event handler
function stomp() {
    $('#raptor').css('top', function(idx, old) {
        return ((parseInt(old) + 75) % 150) + 'px';
    });
    kill('boy');
    kill('girl');
}

// Enrage! button event handler
function enrageRaptor() {
    // If enraged -- go back to normal, else get ENRAGED
    if ($('#raptor').hasClass('enrage')) {
        $('h1').first().removeClass('enrage');
        $('#raptor')
            .removeClass('enrage')
            .width(function(idx, old) {
                return old - 50;
            });
    } else {
        $('h1').first().addClass('enrage');
        $('#raptor')
            .addClass('enrage')
            .width(function(idx, old) {
                return old + 50
            });
    }
}
// Patrol! event handler code (advanced)
var timer;

function patrol() {
    clearInterval(timer);
    timer = setInterval(patrolRight, 20);
}

function patrolRight() {
    $('#raptor').css('left', function(idx, old) {
        if (parseInt(old) >= 300) {
            clearInterval(timer);
            timer = setInterval(patrolLeft, 20);
        }
        return parseInt(old) + 4 + 'px'
    });
}
function patrolLeft() {
    $('#raptor').css('left', function(idx, old) {
        if (parseInt(old) <= 10) {
            clearInterval(timer);
            $(this).css({
                'top': '5px',
                'left': '10px'
            });
        }
        return parseInt(old) - 4 + 'px';
    });
}