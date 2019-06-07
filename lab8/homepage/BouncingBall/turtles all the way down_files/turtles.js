$(function() {
    $(window).scroll(
    //ASSIGN THE SCROLL EVENT HANDLER HERE
    // in case window height is initially taller than animals
    turtles)
    turtles();
  });
  
  function turtles() {
    while ($(window).scrollTop() + $(window).height() >= $(document).height()) {
      $(document.body).append($('<div>').addClass('turtle'));
         }
  }