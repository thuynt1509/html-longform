

$(document).ready(function () {
    
    $(window).scroll(function(e) {
        checkVisible();
    });
  
   
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
    $(document).on("click", ".increase", function () {
        var boxPrice = $(this).parents('.box-price');
        var currentVal = parseInt(boxPrice.find('.input-number').val());
        if (currentVal != NaN) {
            boxPrice.find('.input-number').val(currentVal + 1);
            var num_price = (currentVal + 1) * parseInt(price);
            var price_num = num_price.toLocaleString();
            boxPrice.find('.box-cell-price').val(price_num + ' VND');
        }
    });
    
    $(document).on("click", ".decrease", function () {
        var boxPrice = $(this).parents('.box-price');
        var currentVal = parseInt(boxPrice.find('.input-number').val());
        if (currentVal != NaN && currentVal > 1) {
            boxPrice.find('.input-number').val(currentVal - 1);
            var num_price = (currentVal - 1) * parseInt(price);
            var price_num = num_price.toLocaleString();
            boxPrice.find('.box-cell-price').val(price_num + ' VND');
        }
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


  
function checkVisible() {
    let check = false;
    $('.box-info-right').each(function() {
        if ($(this).visible()) {
            check = true;
        }
    });

    if (check) {
        $(".longform-bar-fixbottom-2").addClass('hidden-form');
    } else {
        $(".longform-bar-fixbottom-2").removeClass('hidden-form');
    }
}
 


(function($){
    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *       the user visible viewport of a web browser.
     *       can accounts for vertical position, horizontal, or both
     */
    var $w=$(window);
    $.fn.visible = function(partial,hidden,direction,container){

        if (this.length < 1)
            return;
	
	// Set direction default to 'both'.
	direction = direction || 'both';
	    
        var $t          = this.length > 1 ? this.eq(0) : this,
						isContained = typeof container !== 'undefined' && container !== null,
						$c				  = isContained ? $(container) : $w,
						wPosition        = isContained ? $c.position() : 0,
            t           = $t.get(0),
            vpWidth     = $c.outerWidth(),
            vpHeight    = $c.outerHeight(),
            clientSize  = hidden === true ? t.offsetWidth * t.offsetHeight : true;

        if (typeof t.getBoundingClientRect === 'function'){

            // Use this native browser method, if available.
            var rec = t.getBoundingClientRect(),
                tViz = isContained ?
												rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top :
												rec.top >= 0 && rec.top < vpHeight,
                bViz = isContained ?
												rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top :
												rec.bottom > 0 && rec.bottom <= vpHeight,
                lViz = isContained ?
												rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left :
												rec.left >= 0 && rec.left <  vpWidth,
                rViz = isContained ?
												rec.right - wPosition.left > 0  && rec.right < vpWidth + wPosition.left  :
												rec.right > 0 && rec.right <= vpWidth,
                vVisible   = partial ? tViz || bViz : tViz && bViz,
                hVisible   = partial ? lViz || rViz : lViz && rViz,
		vVisible = (rec.top < 0 && rec.bottom > vpHeight) ? true : vVisible,
                hVisible = (rec.left < 0 && rec.right > vpWidth) ? true : hVisible;

            if(direction === 'both')
                return clientSize && vVisible && hVisible;
            else if(direction === 'vertical')
                return clientSize && vVisible;
            else if(direction === 'horizontal')
                return clientSize && hVisible;
        } else {

            var viewTop 				= isContained ? 0 : wPosition,
                viewBottom      = viewTop + vpHeight,
                viewLeft        = $c.scrollLeft(),
                viewRight       = viewLeft + vpWidth,
                position          = $t.position(),
                _top            = position.top,
                _bottom         = _top + $t.height(),
                _left           = position.left,
                _right          = _left + $t.width(),
                compareTop      = partial === true ? _bottom : _top,
                compareBottom   = partial === true ? _top : _bottom,
                compareLeft     = partial === true ? _right : _left,
                compareRight    = partial === true ? _left : _right;

            if(direction === 'both')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
            else if(direction === 'vertical')
                return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
            else if(direction === 'horizontal')
                return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
        }
    };

})(jQuery);