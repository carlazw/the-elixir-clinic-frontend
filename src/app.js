import '../styles/app.scss';
import $ from 'jquery';
window.$ = window.jQuery = $;

// import intlTelInput from 'intl-tel-input';
// var input = document.querySelector("#phone_number");
// window.intlTelInput(input);

import 'slick-carousel'
$('.slick-wrapper').slick({
    infinite: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    arrows: true,
    prevArrow: '<div class="slick-arrow-prev"><button class="white-bg"><span class="fa fa-arrow-left"></span> PREVIOUS</button></div>',
    nextArrow: '<div class="slick-arrow-next"><button class="white-bg">NEXT <span class="fa fa-arrow-right"></span></button></div>',
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});