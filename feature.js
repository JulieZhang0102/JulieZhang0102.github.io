$(document).ready(function(){

    // Initialize Swiper for Mindpeace tester list display
    var swiper_test_list = new Swiper('#Mindpeace_tests', {
        autoplay: { delay: 3000,},
        centeredSlides: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
        },
      });

      // Initialize Swiper for Mindpeace development strategy display
      var swiper_strategy_list = new Swiper('#Mindpeace_development', {
          autoplay: { delay: 3000,},
          centeredSlides: true,
          observer: true,
          observeParents: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
          },
        });

      // Initialize Swiper for PAMS excel experiments display
      var swiper_excel_list = new Swiper('#PAMS_experiments', {
          autoplay: { delay: 3000,},
          centeredSlides: true,
          observer: true,
          observeParents: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
          },
        });

      
      // Initialize Swiper for Wegmans Ideas display
      var swiper_ideas_list = new Swiper('#Wegmans_ideas', {
        autoplay: { delay: 3000,},
        centeredSlides: true,
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
        },
      });


        $('.nav-pills .nav-link').on('shown.bs.tab', function(e) {
          var href = $(this).attr('href');
          var top_of_href = $(href).offset().top;
          var top_of_screen = $(window).scrollTop();
          if (top_of_screen > top_of_href) {
            $('html, body').animate({
            scrollTop: top_of_href - 150
          }, 80);
          }
        });

    });