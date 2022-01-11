$(document).ready(function () {
    $('.slide-news-right').slick({
        infinite: false,
        slidesToShow: 1, 
        slidesToScroll: 1, 
        arrows: true, 
        dots: false
    });
    $("#form-ticket").on('click', 'input:checkbox', function() {
        $(this).closest('p').toggleClass('active', this.checked);
    });

    $("#btn-close-bar").click(function(){
        $(".longform-bar-fixbottom-2").addClass("shortbar-longform");
    });
    $('.screenshot_slider').slick({
        centerMode: true,
        slidesToShow: 5,
        dots: false,
        arrows: true,
        swipe: true,
        swipeToSlide: true,
    });
});