$(document).ready(function() {
  console.log("app.js loaded!")
  var $main = $("main");
  var $template = $("#template");
  var $aboutMe = $('#about-me');
  homeTemplate = $('#home').html()
  $template.html(homeTemplate)

  $aboutMe.on('click', () => {
    var template = $('#about').html();
    console.log(template)
    console.log("clicked")
    $template.html(template);
    $('.parallax').parallax();
    $('.carousel').carousel();
    $(".button-collapse").sideNav();
  })

  $('#portfolio-link').on('click', () => {
    console.log('clicked!')
    var template = $('#portfolio').html();
    $template.html(template);
    $('.carousel.carousel-slider').carousel({full_width: true});
    console.log(template)
  })

});
