(function($) {
  'use strict';

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader')
        .delay(100)
        .fadeOut('slow', function() {
          $(this).remove();
        });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.nav-item a, .back-to-top').click(function(link) {
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 25
        },
        1000
      );
  });

  var nav = $('nav');
  var navHeight = nav.outerHeight();

  /*--/ ScrollReveal /Easy scroll animations for web and mobile browsers /--*/
  window.sr = ScrollReveal();
  sr.reveal('.foo', { duration: 1000, delay: 15 });

  /*--/ Carousel owl /--*/
  $('#carousel').owlCarousel({
    loop: true,
    margin: -1,
    items: 1,
    nav: true,
    navText: [
      '<i class="ion-ios-arrow-back" aria-hidden="true"></i>',
      '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });

  /*--/ Animate Carousel /--*/
  $('.intro-carousel').on('translate.owl.carousel', function() {
    $('.intro-content .intro-title')
      .removeClass('zoomIn animated')
      .hide();
    $('.intro-content .intro-price')
      .removeClass('fadeInUp animated')
      .hide();
    $('.intro-content .intro-title-top, .intro-content .spacial')
      .removeClass('fadeIn animated')
      .hide();
  });

  $('.intro-carousel').on('translated.owl.carousel', function() {
    $('.intro-content .intro-title')
      .addClass('zoomIn animated')
      .show();
    $('.intro-content .intro-price')
      .addClass('fadeInUp animated')
      .show();
    $('.intro-content .intro-title-top, .intro-content .spacial')
      .addClass('fadeIn animated')
      .show();
  });

  /*--/ Navbar Collapse /--*/
  $('.navbar-toggle-box-collapse').on('click', function() {
    $('body')
      .removeClass('box-collapse-closed')
      .addClass('box-collapse-open');
  });
  $('.close-box-collapse, .click-closed').on('click', function() {
    $('body')
      .removeClass('box-collapse-open')
      .addClass('box-collapse-closed');
    $('.menu-list ul').slideUp(700);
  });

  /*--/ Navbar Menu Reduce /--*/
  $(window).trigger('scroll');
  $(window).bind('scroll', function() {
    var pixels = 0;
    var top = 0;
    if ($(window).scrollTop() > pixels) {
      $('.navbar-default').addClass('navbar-reduce');
      $('.navbar-default').removeClass('navbar-trans');
    } else {
      $('.navbar-default').addClass('navbar-trans');
      $('.navbar-default').removeClass('navbar-reduce');
    }
    if ($(window).scrollTop() > top) {
      $('.scrolltop-mf').fadeIn(1000, 'easeInOutExpo');
    } else {
      $('.scrolltop-mf').fadeOut(1000, 'easeInOutExpo');
    }
  });

  /*--/ Property owl /--*/
  $('#property-carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      769: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  /*--/ Property owl owl /--*/
  $('#property-single-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: [
      '<i class="ion-ios-arrow-back" aria-hidden="true"></i>',
      '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'
    ],
    responsive: {
      0: {
        items: 1
      }
    }
  });

  /*--/ News owl /--*/
  $('#new-carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      769: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  /*--/ Testimonials owl /--*/
  $('#testimonial-carousel').owlCarousel({
    margin: 0,
    autoplay: true,
    nav: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeInUp',
    navText: [
      '<i class="ion-ios-arrow-back" aria-hidden="true"></i>',
      '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'
    ],
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });
  $('.intro-item').ripples({
    dropRadius: 10,
    perturbance: 0.01
  });
})(jQuery);
ScrollOut({
  onShown: function(el) {
    // remove the class
    el.classList.remove('animated');

    // force reflow
    void el.offsetWidth;

    // re-add the animated cl
    el.classList.add('animated');
  }
});

function validateForm() {
  document.getElementById('status').innerHTML = "Sending...";
  formData = {
      'name'     : $('input[name=name]').val(),
      'email'    : $('input[name=email]').val(),
      'subject'  : $('input[name=subject]').val(),
      'message'  : $('textarea[name=message]').val()
  };


 $.ajax({
  url : "mail.php",
  type: "POST",
  data : formData,
  success: function(data, textStatus, jqXHR)
  {

      $('#status').text(data.message);
      if (data.code) //If mail was sent successfully, reset the form.
      $('#contact-form').closest('form').find("input[type=text], textarea").val("");
  },
  error: function (jqXHR, textStatus, errorThrown)
  {
      $('#status').text(jqXHR);
  }
});



};
