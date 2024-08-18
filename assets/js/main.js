$(function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

$(".offer-slider").owlCarousel({
    responsiveClass: true,
    loop: true,
    margin: 0,
    autoplay: true,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,

        },
        1000: {
            items: 1,
        },
    }
});

$(".banner-slider").owlCarousel({
    responsiveClass: true,
    loop: true,
    margin: 0,
    autoplay: true,
    dots: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,

        },
        1000: {
            items: 1,
        },
    }
});

$(".category-slider").owlCarousel({
    responsiveClass: true,
    loop: true,
    margin: 20,
    autoplay: true,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 3,
        },
        600: {
            items: 4,

        },
        1000: {
            items: 6,
        },
    }
});

$(".product-slider").owlCarousel({
    responsiveClass: true,
    autoplay: true,
    loop: true,
    dots: false,
    margin: 20,
    navText: ['<i class="custom-prev-icon"></i>', '<i class="custom-next-icon"></i>'],
    responsive: {
        0: {
            nav: false,
            items: 2,
        },
        600: {
            nav: true,
            items: 3,

        },
        1000: {
            nav: true,
            items: 4,
        },
    }
});



$(".blog-slider").owlCarousel({
    responsiveClass: true,
    loop: false,
    margin: 40,
    autoplay: false,
    navText: ['<i class="custom-prev-icon"></i>', '<i class="custom-next-icon"></i>'],
    responsive: {
        0: {
            nav: false,
            dots: false,
            items: 1,
        },
        600: {
            nav: false,
            dots: false,
            items: 2,

        },
        1000: {
            nav: true,
            dots: false,
            items: 4,
        },
    }
});


$('.brand-logos').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
  

/////// Nice Select ///
$(".nice-option").niceSelect();

//// Price Range ///

var slider = document.getElementById('priceRange');
var priceRangeValue = document.getElementById('priceRange-value');

// Check if the elements exist
if (slider && priceRangeValue) {
    // Your code for creating the slider and updating the input field
    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        },
        format: {
            to: function (value) {
                return Math.round(value);
            },
            from: function (value) {
                return value.replace('$', '');
            }
        }
    });

    // Update input field with slider value
    slider.noUiSlider.on('update', function (values, handle) {
        priceRangeValue.textContent = '$' + values[0] + ' - $' + values[1];
    });
}




      //////  Counter Increament

  $(".count-increament").click(function (e) {
    var count = $(this).parent().find("input").val();
    count++;
    $(this).parent().find("input").val(count);
  });

  //////  Counter Decreament

  $(".count-decreament").click(function (e) {
    var count = $(this).parent().find("input").val();
    count--;
    if (count > 0) {
      $(this).parent().find("input").val(count);
    }
  });

  
// Toggle menu and icon
let clicked = false;
$('.menu-toggle').click(function(event) {
    event.preventDefault();
    var $menu = $('.category-menu > ul');
    $menu.toggle();
    
    var $icon = $(this).find('i');
    if ($menu.is(':visible')) {
        clicked = true;
      $icon.removeClass('bi-list').addClass('bi-x');
    } else {
        clicked = false;
      $icon.removeClass('bi-x').addClass('bi-list');
    }
  });

// Click outside to hide menu
$(document).click(function(event) {
    if(clicked == true){
        var $menu = $('.category-menu > ul');
        var $toggle = $('.menu-toggle');
        if ($menu.is(':visible') && !$(event.target).closest('.menu-toggle, .category-menu').length) {
            $menu.hide();
            $toggle.find('i').removeClass('bi-x').addClass('bi-list');
        }
    }
});


var header = $('.header-container');
var sticky = header.offset().top;

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        header.addClass('fixed');
        $('.offer-slider-section').removeClass('d-lg-block').hide();
    } else {
        header.removeClass('fixed');
        $('.offer-slider-section').addClass('d-lg-block').show();
    }
});


});
