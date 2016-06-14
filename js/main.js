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

	});


})();


