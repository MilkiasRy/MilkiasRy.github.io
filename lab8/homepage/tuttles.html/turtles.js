$(function() {
    //ASSIGN THE SCROLL EVENT HANDLER HERE
    // in case window height is initially taller than animals
    //turtles();
  });
  
  function turtles() {
    while ( HAVE SCROLLED BEYOND THE SCREEN) {
      $(document.body).append(
        ANOTHER TURTLE
      );
    }
  }
  $(function() {
    $(document).scroll(turtles);
    // in case window height is initially taller than animals
    turtles();
  });
  
  function turtles() {
    while ($(window).scrollTop() + $(window).height() >= $(document).height()) {
      $(document.body).append(
        $('<div>')
          .addClass('turtle')
      );
    }
  }