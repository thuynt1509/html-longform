/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

$(document).ready(function () {
  $('.slide-news-right').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false
  });
  $('body').on('click', '#form-ticket input:checkbox', function () {
    $(this).closest('p').toggleClass('active', this.checked);
  });
  $("#btn-close-bar").click(function () {
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
    swipeToSlide: true
  });
  $("#btn-readmore-cmt").click(function () {
    $("#box-review-comment").toggleClass("active");
  }); // append popup img giấy phép

  var htmlPopupImg = $('<div class="popup-img"><div class="overlay"></div><div class="img-show"><span class="btn-close">X</span><img src=""></div></div>');
  $('body').on('click', '.lst-prize img', function () {
    var $src = $(this).attr("src");
    $("body").append(htmlPopupImg);
    $(".popup-img").show();
    $(".img-show img").attr("src", $src);
  });
  $('body').on('click', '.btn-close, .overlay', function () {
    $(".popup-img").hide();
  }); // end append popup img giấy phép

  $(".btn-loadmore-mb").click(function () {
    $(this).parents(".para-text").addClass("active");
  }); // onchange input number by price 

  $(document).on("change", ".input-number", function () {
    if ($(this).val() < 1) {
      $(this).val(1);
    }

    var num_price = parseInt($(this).val()) * parseInt(price);
    var price_num = num_price.toLocaleString();
    $(this).parents().parents(".box-price").children(".total-price").children(".box-cell-price").val(price_num + ' VND');
  });
  $("#open-support-active").click(function () {
    $(".longform-bar-fixbottom-2").removeClass("shortbar-longform");
    $(".longform-bar-fixbottom-2").removeClass("product-active");
    $(".longform-bar-fixbottom-2").toggleClass("support-active");
  });
  $("#open-product-slide").click(function () {
    $(".longform-bar-fixbottom-2").removeClass("shortbar-longform");
    $(".longform-bar-fixbottom-2").removeClass("support-active");
    $(".longform-bar-fixbottom-2").toggleClass("product-active");
  });
});
$(function () {
  var $win = $(window);
  var $box = $("#btn-open-chat");
  $win.on("click.Bst", function (event) {
    if ($box.has(event.target).length == 0 && !$box.is(event.target)) {
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

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style-longform-nn6.scss":
/*!*************************************!*\
  !*** ./src/style-longform-nn6.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/button-support-page.scss":
/*!**************************************!*\
  !*** ./src/button-support-page.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css-fix-select-2.scss":
/*!***********************************!*\
  !*** ./src/css-fix-select-2.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/docs/assets/main": 0,
/******/ 			"docs/assets/css-fix-select-2": 0,
/******/ 			"docs/assets/button-support-page": 0,
/******/ 			"docs/assets/style-longform-nn6": 0,
/******/ 			"docs/assets/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktailwind_html_boilerplate"] = self["webpackChunktailwind_html_boilerplate"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["docs/assets/css-fix-select-2","docs/assets/button-support-page","docs/assets/style-longform-nn6","docs/assets/main"], () => (__webpack_require__("./src/app.js")))
/******/ 	__webpack_require__.O(undefined, ["docs/assets/css-fix-select-2","docs/assets/button-support-page","docs/assets/style-longform-nn6","docs/assets/main"], () => (__webpack_require__("./src/main.scss")))
/******/ 	__webpack_require__.O(undefined, ["docs/assets/css-fix-select-2","docs/assets/button-support-page","docs/assets/style-longform-nn6","docs/assets/main"], () => (__webpack_require__("./src/style-longform-nn6.scss")))
/******/ 	__webpack_require__.O(undefined, ["docs/assets/css-fix-select-2","docs/assets/button-support-page","docs/assets/style-longform-nn6","docs/assets/main"], () => (__webpack_require__("./src/button-support-page.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["docs/assets/css-fix-select-2","docs/assets/button-support-page","docs/assets/style-longform-nn6","docs/assets/main"], () => (__webpack_require__("./src/css-fix-select-2.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;