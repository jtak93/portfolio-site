$(document).ready(function() {
  console.log("app.js loaded!")
  var $main = $("main");
  var $template = $("#template");
  homeTemplate = $('#home').html()
  $template.html(homeTemplate)
  // initiate sidenav
  $('.button-collapse').sideNav({
      menuWidth: 200,
      closeOnClick: true
    }
  );
  $('.parallax').parallax();

  // Animations
  welcomeMsgAnim();

  function welcomeMsgAnim() {
    $('#welcomeMsg').css({"visibility":"visible"});
    $('#welcomeMsg').addClass('animated fadeInUp');
    $('#welcomeMsg').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
      $('#welcomeMsg2').css({"visibility":"visible"});
      $('#welcomeMsg2').addClass('animated fadeInUp')
      $('#welcomeMsg2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
        $('#welcomeMsg3').css({"visibility":"visible"});
        $('#welcomeMsg3').addClass('animated fadeInUp');
        $('#welcomeMsg3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
          $('#welcomeMsgBtn').css({"visibility":"visible"});
          $('#welcomeMsgBtn').addClass('animated fadeIn');
          addAboutEvent();
        });
      });
    });
  }


  // Events
  addAboutEvent()
  addPortfolioEvent()
  addContactEvent()
  addBrandEvent()
  function addELoungeInfoEvent() {
    $('.e-lounge-info-btn').on('click', () => {
      var template = $('#e-lounge-info').html();
      var $infoTemplate = $('.project-desc')
      $infoTemplate.html(template);
    })
  }

  function addBBInfoEvent() {
    $('.bbc-info-btn').on('click', () => {
      var template = $('#bbc-info').html();
      var $infoTemplate = $('.project-desc')
      $infoTemplate.html(template);
    })
  }

  function addLarkInfoEvent() {
    $('.lark-info-btn').on('click', () => {
      var template = $('#lark-info').html();
      var $infoTemplate = $('.project-desc')
      $infoTemplate.html(template);
    })
  }

  function addAboutEvent() {
    $('.about').on('click', () => {
      var template = $('#about').html();
      $template.html(template);
      $('.parallax').parallax();
      $('.carousel').carousel();
      addPortfolioEvent()
    })
  }

  function addPortfolioEvent() {
    $('.portfolio').on('click', () => {
      var template = $('#portfolio').html();
      $template.html(template);
      $('.carousel.carousel-slider').carousel({full_width: true});
      addELoungeInfoEvent();
      addBBInfoEvent();
      addLarkInfoEvent();
    })
  }

  function addContactEvent() {
    $('.contact').on('click', () => {
      var template = $('#contact').html();
      $template.html(template);
      $('.parallax').parallax();
    })
  }

  function addBrandEvent() {
    $('.brand-logo').on('click', () => {
      var template = $('#home').html();
      $template.html(template);
      $('.parallax').parallax();
      welcomeMsgAnim();
    })
  }

});
