(function() {


	// console.log('test');

	// var nav = $('.main-nav');

	// $(window).scroll(function() {
	// 	if ($(this).scrollTop() > 60) {
	// 		nav.addClass("nav-fixed");
	// 		// $('.nav-fixed').animate({
	// 		// 	opacity: 
	// 		// })
	// 	} else {
	// 		nav.removeClass("nav-fixed");
	// 	}
	// });


// STICKY NAVIGATION

	$(document).ready(function() {
		

	   var stickyNavTop = $('.main-nav').offset().top;

	   var stickyNav = function(){
		   var scrollTop = $(window).scrollTop();

		   if (scrollTop > stickyNavTop) { 
			  $('.top-menu').css('display', 'none');
		      $('.main-nav').addClass('nav-fixed');
		      $('.main-nav').removeClass('main-nav');
		   } else {
			  $('.top-menu').css('display', 'flex');
		   	  $('.nav-fixed').addClass('main-nav');
		      $('.main-nav').removeClass('nav-fixed');


		    }
   		};

	   stickyNav();

	   $(window).scroll(function() {
	      stickyNav();
	   });



	   $("#btn-scroll").click(function (e){
	   		e.preventDefault();

	        $('html, body').animate({
	            scrollTop: $(".main-text").offset().top - 70
	        }, 1000);
        });




	   // OWL CAROUSEL

	    var owl = $('.owl-carousel');

		owl.owlCarousel({
		    items:4,
		    loop:true,
		    merge:true,
		    autoplay:true,
		    autoplayTimeout:1000,
		    autoplayHoverPause:true,
		    responsive:{
		        678:{
		            mergeFit:true
		        },
		        1000:{
		            mergeFit:false
		        }
		    }
		});

	});


})();

// IMAGE SHOWCASE INIT FUNCTION

	$(function(){
		// Trigger maximage
		jQuery('#maximage').maximage();
	});









