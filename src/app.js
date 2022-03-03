$(document).ready(function () {
    $('.slide-news-right').slick({
        infinite: false,
        slidesToShow: 1, 
        slidesToScroll: 1, 
        arrows: true, 
        dots: false
    });
    $('body').on('click', '#form-ticket input:checkbox', function() {
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
    $("#btn-readmore-cmt").click(function(){
        $("#box-review-comment").toggleClass("active");
    });
    // append popup img giấy phép
    var htmlPopupImg = $( '<div class="popup-img"><div class="overlay"></div><div class="img-show"><span class="btn-close">X</span><img src=""></div></div>');
    $('body').on('click', '.lst-prize img', function() {
		var $src = $(this).attr("src");
        $( "body" ).append(htmlPopupImg);
        $(".popup-img").show();
        $(".img-show img").attr("src", $src);
	});
    $('body').on('click', '.btn-close, .overlay', function() {
        $(".popup-img").hide();
    });
    // end append popup img giấy phép
   
});

$(function(){				
    var $win = $(window); 
    var $box = $("#btn-open-chat");
    
     $win.on("click.Bst", function(event){		
        if ( 
            $box.has(event.target).length == 0 
        &&
            !$box.is(event.target) 
        ){
            $box.removeClass("active");
        } else {
            $box.addClass("active");
        }
    });
});