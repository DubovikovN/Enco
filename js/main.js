$(document).ready(function(){
    $(".owl-carousel1").owlCarousel(
        {
            loop:true, 
            autoplay: true,
            autoplaySpeed: 1000,
            autoplayTimeout: 5000,
        }
    );



    $(".owl-carousel2").owlCarousel(
        {
            items:2,
            loop:true, 
            autoplay: true,
            autoplaySpeed: 1000,
            autoplayTimeout: 5000,
            margin:16,

        }
    );

  });