$(document).ready(function() {
    $('.menu-toggler').on('click',function() {
      $(this).toggleClass('open');
      $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click',function() {
      $('.menu-toggler').removeClass('open');
      $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
      }, 2000);
    });

    $('#down').on('click', function() {
      $('html, body').animate({
        scrollTop: $('#about').offset().top - 100
      }, 2000);
    });

    $('#up').on('click', function() {
      $('html, body').animate({
        scrollTop: 0
      }, 2000);
    });

    AOS.init({
      easing: 'ease',
      duration: 1800,
      once: true
    });

    $('.modal-close-bar').on('click',function() {
      $(this).toggleClass('modal--hidden');
      $('.modal').toggleClass('modal--hidden');
    });
});

var modal = document.getElementById("BugDemoModal");
var btn = document.getElementById("ViewBugDemo");
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
