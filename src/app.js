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
        $(".longform-bar-fixbottom-2").removeClass("support-active");
        $(".longform-bar-fixbottom-2").removeClass("product-active");
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
    $(".btn-loadmore-mb").click(function(){
        $(this).parents(".para-text").addClass("active");
    });
   
    // onchange input number by price 
    $(document).on("change", ".input-number", function () {
        if ($(this).val() < 1) {
            $(this).val(1);
        }
        var num_price = parseInt($(this).val()) * parseInt(price);
        var price_num = num_price.toLocaleString();
        $(this).parents().parents(".box-price").children(".total-price").children(".box-cell-price").val(price_num + ' VND');
    });
    $("#open-support-active").click(function(){
        $(".longform-bar-fixbottom-2").removeClass("shortbar-longform");
        $(".longform-bar-fixbottom-2").removeClass("product-active");
        $(".longform-bar-fixbottom-2").toggleClass("support-active");
    });
    $("#open-product-slide").click(function(){
        $(".longform-bar-fixbottom-2").removeClass("shortbar-longform");
        $(".longform-bar-fixbottom-2").removeClass("support-active");
        $(".longform-bar-fixbottom-2").toggleClass("product-active");
    });
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


$(function () {
    set_($('#number-max'), 100); //count form 1
    set_($('#number-max-2'), 100); //count form 2

    function set_(_this, max) {
        var block = _this.parent();

        block.find(".increase").click(function () {
            var currentVal = parseInt(_this.val());
            console.log(currentVal);

            if (currentVal != NaN && currentVal + 1 <= max) {
                _this.val(currentVal + 1);
                var num_price = (currentVal + 1) * parseInt(price);
                var price_num = num_price.toLocaleString();
                block.parents().parents(".box-price").children(".total-price").children(".box-cell-price").val(price_num + ' VND');
            }
        });
        block.find(".decrease").click(function () {
            var currentVal = parseInt(_this.val());

            if (currentVal != NaN && currentVal > 1) {
                _this.val(currentVal - 1);
                var num_price = (currentVal - 1) * parseInt(price);
                var price_num = num_price.toLocaleString();
                block.parents().parents(".box-price").children(".total-price").children(".box-cell-price").val(price_num + ' VND');
            }
        });
    }
});
