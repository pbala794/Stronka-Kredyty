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


		$('#show-contact-info').on('click', function(e) {
			console.log('contact');

			e.preventDefault();
		 
			$('.contact-panel').slideToggle('ease-in', function() {
				if ($(this).is(':visible'))
        		$(this).css('display','flex');
			});
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




})();

// IMAGE SHOWCASE INIT FUNCTION

	$(function(){
		// Trigger maximage
		jQuery('#maximage').maximage();
	});







