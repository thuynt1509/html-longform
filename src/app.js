$(document).ready(function () {
    // $('.slide-news-right').owlCarousel({
    //     loop:false,
    //     margin:10,
    //     autoplay:true,
    //     nav:true,
    //     items: 1,
    //     dots: false
    // });
    $('.slide-news-right').slick({
        infinite: false,
        slidesToShow: 1, // Shows a three slides at a time
        slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
        arrows: true, // Adds arrows to sides of slider
        dots: false // Adds the dots on the bottom
      });
    $("#form-ticket").on('click', 'input:checkbox', function() {
        $(this).closest('p').toggleClass('active', this.checked);
    });

    $("#btn-close-bar").click(function(){
        $(".longform-bar-fixbottom-2").addClass("shortbar-longform");
    });
    var owl = $('.screenshot_slider').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: true,
        margin: 0,    
        autoplayTimeout: 4000,
        smartSpeed: 400,
        center: true,
        responsive: {
            0: {
                items: 5,
            },
            600: {
                items: 8
            },
            1200: {
                items: 7
            }
        }
    });
});