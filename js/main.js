$(document).ready(function() {
  console.log("app.js loaded!")
  var $main = $("main");
  var $template = $("#template");
  homeTemplate = $('#home').html()
  $template.html(homeTemplate)
  $('.button-collapse').sideNav({
      menuWidth: 300,
      closeOnClick: true
    }
  );

  $('.about').on('click', () => {
    var template = $('#about').html();
    console.log(template)
    console.log("clicked")
    $template.html(template);
    $('.parallax').parallax();
    $('.carousel').carousel();
  })

  $('.portfolio').on('click', () => {
    console.log('clicked!')
    var template = $('#portfolio').html();
    $template.html(template);
    $('.carousel.carousel-slider').carousel({full_width: true});
    console.log(template)
  })

  $('.contact').on('click', () => {
    console.log('clicked!')
    var template = $('#contact').html();
    $template.html(template);
    console.log(template)
  })

});
