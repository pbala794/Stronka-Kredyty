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
		console.log('test');

	   var stickyNavTop = $('.main-nav').offset().top;

	   var stickyNav = function(){
		   var scrollTop = $(window).scrollTop();

		   if (scrollTop > stickyNavTop) { 
		      $('.main-nav').addClass('nav-fixed');
		   } else {
		      $('.main-nav').removeClass('nav-fixed');
		    }
   		};

	   stickyNav();

	   $(window).scroll(function() {
	      stickyNav();
	   });
   });

})();