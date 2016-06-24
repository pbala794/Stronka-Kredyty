(function() {

// STICKY NAVIGATION

	$(document).ready(function() {
		

	   var stickyNavTop = $('.main-nav').offset().top;

	   var stickyNav = function(){
		   var scrollTop = $(window).scrollTop();

		   if (scrollTop > stickyNavTop) { 

		      $('.main-nav').addClass('nav-fixed');
		      $('.main-nav').removeClass('main-nav');
		   } else {

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



		// SLIDE DOWN CONTACT PANEL


		$('#show-contact-info').on('click', function() {
			console.log('contact');

			if ($('#contact-info').hasClass('contact-panel')) {
				console.log('ma klase');
				$('#contact-info').addClass('contact-panel-active');
			} 
			else if ($('#contact-info').hasClass('contact-panel-active')) {
				
				$('#contact-info').removeClass('contact-panel-active');
				console.log('nie ma klasy');

			}
			
		});




	   // PAGE TRANSITIONS

	   window.addEventListener("beforeunload", function () {
		  document.body.classList.add("animate-out");
		});





	   // OWL CAROUSEL

	    var owl = $('.owl-carousel'),
	    	owlPromo = $('#owl-slider');


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



		// SLICK SLIDER


		  $('.slick-slider').slick({
		  	adaptiveHeight: true,
		  	autoplay: true,
		  	arrows: true
		  });





		// Open hour dot script

		var date = new Date(),
		open = date.getHours();


		if (open < 8 || open > 17) {
		    console.log("close time");
		    $('.open-hours .dot').addClass('close');
		    $('.open-hours p').html('<p>Teraz nieczynne</p>');
		} else {
			$('.open-hours .dot').removeClass('close');
			 $('.open-hours p').html('<p>Teraz czynne</p>');
		}







	});		// $READY END



	// JQUERY CALC PLUGIN

	$(".calculator").accrue();


})();

// IMAGE SHOWCASE INIT FUNCTION

	$(function(){
		// Trigger maximage
		jQuery('#maximage').maximage();
	});







