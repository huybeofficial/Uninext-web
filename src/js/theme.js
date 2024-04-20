// js Document

    // Created on   : 23/05/2018.
    // Theme Name   : Charles-Business-Consulting HTML Template.
    // Version      : 1.0.
    // Author       : @CreativeGigs.
    // Developed by : Jubayer al hasan. (jubayer.hasan1991@gmail.com)


(function($) {
    "use strict";
    
    
    $(document).on ('ready', function (){
        
        // -------------------- Navigation Scroll
        $(window).on('scroll', function (){   
          var sticky = $('.theme-menu-wrapper'),
          scroll = $(window).scrollTop();
          if (scroll >= 190) sticky.addClass('fixed');
          else sticky.removeClass('fixed');

        });

        // ------------------------------ Theme Menu 
        var menu= $("#mega-menu-holder");
          if(menu.length) {
            menu.slimmenu({
              resizeWidth: '991',
              animSpeed:'medium',
              indentChildren: true,
            });
          }


        // ------------------------------- WOW Animation 
        var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       80,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();


        
        // -------------------- Remove Placeholder When Focus Or Click
        $("input,textarea").each( function(){
            $(this).data('holder',$(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder','');
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder',$(this).data('holder'));
            });     
        });
        
        // -------------------- From Bottom to Top Button
            //Check to see if the window is top if not then display button
        $(window).on('scroll', function (){
          if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn();
          } else {
            $('.scroll-top').fadeOut();
          }
        });
            //Click event to scroll to top
        $('.scroll-top').on('click', function() {
          $('html, body').animate({scrollTop : 0},200);
          return false;
        });



        // --------------------------- Theme Main Banner Slider One
        var banner = $("#theme-main-banner");
        if (banner.length) {
          banner.camera({ //here I declared some settings, the height and the presence of the thumbnails 
            height: '780px',
            pagination: true,
            navigation: false,
            thumbnails: false,
            playPause: false,
            pauseOnClick: false,
            autoPlay:true,
            hover: false,
            overlayer: true,
            loader: 'none',
            minHeight: '400px',
            time: 3000,
          });
        };



        // ----------------------------- Counter Function
        var timer = $('.timer');
        if(timer.length) {
            timer.appear(function () {
              timer.countTo();
          })
        }

        // ------------------------------------- Fancybox
        var fancy = $ (".fancybox");
        if(fancy.length) {
          fancy.fancybox({
            arrows: true,
            animationEffect: "zoom-in-out",
            transitionEffect: "zoom-in-out",
          });
        }


         // ------------------------------ Language Switcher
         
      var plang = $('#language_switcher');
         console.log('plang', plang);
         
      if (plang.length) {
        // Add event listener to each button in the dropdown
        $('#language_switcher button').click(function () {
          // Get the value of the clicked button
          var lang = $(this).val();

          // Call the changeLanguage function with the selected language
          changeLanguage(lang);

          // Reload the page
          location.reload();
        });
      }

        // ------------------------------- Feature Slider
        var tSlider = $ (".top-features-slide");
        if(tSlider.length) {
            tSlider.owlCarousel({
              loop:true,
              nav:false,
              dots:false,
              autoplay:true,
              autoplayTimeout:4000,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    500:{
                        items:2
                    },
                    992:{
                        items:3
                    },
                    1300:{
                        items:4,
                        autoplay:false,
                    }
                },
          })
        }


        // ------------------------------- Testimonial Slider 
        var mSlider = $ (".testimonial-slider");
        if(mSlider.length) {
            mSlider.owlCarousel({
              loop:true,
              nav:false,
              dots:true,
              autoplay:true,
              autoplayTimeout:4000,
              smartSpeed:1000,
              autoplayHoverPause:true,
              lazyLoad:true,
              items:1
          })
        }


        // ------------------------------- Partner Slider
        var pSlider = $ (".partner-slider");
        if(pSlider.length) {
            pSlider.owlCarousel({
              loop:true,
              nav:false,
              dots:false,
              autoplay:true,
              autoplayTimeout:4000,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    },
                    1200:{
                        items:5
                    }
                },
          })
        }

        // -------------------------------  Latest News Slider
        var rpSlider = $ (".latest-news-slider");
        if(rpSlider.length) {
            rpSlider.owlCarousel({
              loop:true,
              nav: false,
              dots:false,
              autoplay:true,
              margin:30,
              autoplayTimeout:3500,
              smartSpeed:1200,
              autoplayHoverPause:true,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    576:{
                        items:2
                    },
                    992:{
                        items:3
                    }
                },
          })
        }


        // -------------------------------  Core Value Slider
      $(document).ready(function () {
        var rpSlider = $(".core-value-slider");
        if (rpSlider.length) {
          rpSlider.owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            margin: 30,
            minHeight: 550,
            autoplayTimeout: 3000,
            smartSpeed: 1400,
            autoplayHoverPause: true,
            lazyLoad: true,
            responsive: {
              0: {
                items: 1
              },
              576: {
                items: 2
              },
              992: {
                items: 3
              }
            },
          })

          // Add click event to the left button
          $('.fa-angle-left').click(function () {
            rpSlider.trigger('prev.owl.carousel');
          });

          // Add click event to the right button
          $('.fa-angle-right').click(function () {
            rpSlider.trigger('next.owl.carousel');
          });
        }
      });


        // -------------------------------  Related Post Slider
        var rpSlider = $ (".related-post-slider");
        if(rpSlider.length) {
            rpSlider.owlCarousel({
              loop:true,
              nav: false,
              dots:false,
              autoplay:true,
              autoplayTimeout:4000,
              smartSpeed:1200,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:1
                    },
                    576:{
                        items:2
                    }
                },
          })
        }


        // -------------------------------  Related Product Slider
        var rpSlider = $ (".related-product-slider");
        if(rpSlider.length) {
            rpSlider.owlCarousel({
              loop:true,
              nav: false,
              dots:false,
              autoplay:true,
              margin:30,
              autoplayTimeout:4000,
              smartSpeed:1200,
              lazyLoad:true,
              responsive:{
                    0:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    }
                },
          })
        }




        // -------------------------------  Compnay Branch Address
        var baSlider = $ (".address-slider");
        if(baSlider.length) {
            baSlider.owlCarousel({
              loop:true,
              nav: false,
              dots:false,
              autoplay:true,
              autoplayTimeout:2000,
              smartSpeed:1200,
              lazyLoad:true,
              autoplayHoverPause:true,
              responsive:{
                    0:{
                        items:1
                    },
                    500:{
                        items:2
                    },
                    768:{
                        items:3
                    },
                    992:{
                        items:4
                    }
                },
          })
        }


        // --------------------------------- Contact Form Validation
          if($('.form-validation').length){
            $('.form-validation').validate({ // initialize the plugin
              rules: {
                name: {
                  required: true
                },
                email: {
                  required: true,
                  email: true
                },
                web: {
                  required: true
                },
                phone: {
                  required: true
                },
                message: {
                  required: true
                }
              },
              // submitHandler: function(form) {
              //   $(form).ajaxSubmit({
              //     success: function() {
              //       $('.form-validation :input').attr('disabled', 'disabled');
              //       $('.form-validation').fadeTo( "slow", 1, function() {
              //           $(this).find(':input').attr('disabled', 'disabled');
              //           $(this).find('label').css('cursor','default');
              //           $('#alert-success').fadeIn();
              //         });
              //       },
              //       error: function() {
              //         $('.form-validation').fadeTo( "slow", 1, function() {
              //           $('#alert-error').fadeIn();
              //         });
              //       }
              //     });
              // }
            });
          }



          // ---------------------------------- Validation Alert
          var closeButton = $ (".closeAlert");
            if(closeButton.length) {
                closeButton.on('click', function(){
                  $(".alert-wrapper").fadeOut();
                });
                closeButton.on('click', function(){
                  $(".alert-wrapper").fadeOut();
                })
            }


          // -------------------------------- Accordion Panel
          if ($('.theme-accordion > .panel').length) {
            $('.theme-accordion > .panel').on('show.bs.collapse', function (e) {
                  var heading = $(this).find('.panel-heading');
                  heading.addClass("active-panel");
                  
            });
            $('.theme-accordion > .panel').on('hidden.bs.collapse', function (e) {
                var heading = $(this).find('.panel-heading');
                  heading.removeClass("active-panel");
                  //setProgressBar(heading.get(0).id);
            });
            $('.panel-heading a').on('click',function(e){
                if($(this).parents('.panel').children('.panel-collapse').hasClass('in')){
                    e.stopPropagation();
                }
            });
          };


          // ------------------------- Product Quantity
          var inputVal = $("#product-value");
          if(inputVal.length) {
            $("#value-decrease").on('click', function() {
                var v= inputVal.val()-1;
                if(v>=inputVal.attr('min'))
                inputVal.val(v)
              });

            $("#value-increase").on('click', function() {
              var v= inputVal.val()*1+1;
              if(v<=inputVal.attr('max'))
              inputVal.val(v)
            });
          }
        

        
    });

    
    $(window).on ('load', function (){ // makes sure the whole site is loaded

        // -------------------- Site Preloader
        $('#loader').fadeOut(); // will first fade out the loading animation
        $('#loader-wrapper').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(100).css({'overflow':'visible'});


        // ------------------------ Chart Js
        if($("#chartContainer").length) {
          var chart = new CanvasJS.Chart("chartContainer", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            animationEnabled: true,
            zoomEnabled: true,
            data: [{
              type: "area",
              dataPoints: []
            }]
          });

          addDataPoints(1000);  
          chart.render();

          function addDataPoints(noOfDps) {
            var xVal = chart.options.data[0].dataPoints.length + 1, yVal = 100;
            for(var i = 0; i < noOfDps; i++) {
              yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
              chart.options.data[0].dataPoints.push({x: xVal,y: yVal}); 
              xVal++;
            }
          }
        }


    })

    // change language function
    let currentLang = 'en';

    // Function to update content based on selected language
    function updateContent(langData) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (key.includes('.')) {
                const keys = key.split('.');
                let temp = langData;
                keys.forEach(k => {
                    temp = temp[k];
                });
                element.textContent = temp;
            } else {
                element.textContent = langData[key];
            }
            // check element has attribute href to change link
            // if (element.hasAttribute('href') && !element.getAttribute('href').includes(currentLang + '/')) {
            //     element.setAttribute('href', currentLang + '/' + element.getAttribute('href'));
            // }
        });
    }

    // // Function to set the language preference
    function setLanguagePreference(lang) {
        localStorage.setItem('language', lang);
        // location.reload();
    }

    // // Function to fetch language data
    const fetchLanguageData = async (lang) => {
        const response = await fetch(`languages/${lang}.json`);
        return response.json();
    }

    // // Function to change language
    const changeLanguage = async (lang) => {
        // document.documentElement.lang = lang;
        currentLang = lang;
        await setLanguagePreference(lang);
        
        const langData = await fetchLanguageData(lang);
        updateContent(langData);
        // var plang = $('#polyglotLanguageSwitcher');
        // if (plang.length) {
        //     plang.find('li').removeClass('polyglot-selected');
        //     plang.find('li[data-value="' + lang + '"]').addClass('polyglot-selected');
        // }
        // toggleArabicStylesheet(lang); // Toggle Arabic stylesheet
    }

    // // // Call updateContent() on page load
  window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'en';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
    $('#polyglot-language-options').val(userPreferredLanguage);

    // check language
    let selectLanguage = localStorage.getItem('language') || 'en';
    if (selectLanguage == 'vi') {
      changeLanguage('vi');
      document.querySelector('.img-lang').src = "images/home/vi.webp";
    } else {
      changeLanguage('en');
    }
  });
})(jQuery)