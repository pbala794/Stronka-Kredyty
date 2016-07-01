(function() {


// STICKY NAVIGATION

	$(document).ready(function() {
		

	   var stickyNavTop = $('.main-nav').offset().top;

	   var stickyNav = function(){
		   var scrollTop = $(window).scrollTop();

		   if (scrollTop > stickyNavTop) { 

		      $('.main-nav').addClass('nav-fixed');
		      $('.main-nav').removeClass('main-nav');
		      $('.contact-panel').css('transform', 'translateY(-30px)');
		      $('.contact-panel').css('transition', 'all .5s ease');


		   } else {

		   	  $('.nav-fixed').addClass('main-nav');
		      $('.main-nav').removeClass('nav-fixed');
		      $('.contact-panel').css('transform', 'translateY(0)');
		      $('.contact-panel').css('transition', 'all .5s ease');

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


		document.addEventListener('click', function() {
		    document.getElementById('show-panel').style.display = 'none';
		}, false);

		document.getElementById('show-contact-info').addEventListener('click', function(e) {
		    var menu = document.getElementById('show-panel');
		    if(menu.style.display == 'none')
		        menu.style.display = 'flex';
		    else
		        menu.style.display = 'none';
			    e.preventDefault();
			    e.stopPropagation();
			    return false;
		}, false);




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


		if (open < 9 || open > 17) {
		    console.log("close time");
		    $('.open-hours .dot').addClass('close');
		    $('.open-hours p').html('<p>Teraz nieczynne</p>');
		} else {
			$('.open-hours .dot').removeClass('close');
			 $('.open-hours p').html('<p>Teraz czynne</p>');
		}







	});		// $READY END


// 	function loopSlideText() {

// 		console.log('interval');

// 		var InAnimationName = 'animated slideInRight',
// 			outAnimationName = 'animated slideOutLeft',
// 			animationEnd = 'webkitAnimationEnd, mozAnimationEnd, MSAnimationEnd, oanimationend, animationend';

// 		$('#heading1').addClass(InAnimationName).on(animationEnd, function() {
// 			$('#heading1').removeClass("animated slideInRight");
// 			$('#heading1').addClass(outAnimationName);
// 			console.log('removed class');
// 		});


// 		$('#heading2').addClass(InAnimationName).on(animationEnd, function() {
// 			$('#heading2').removeClass('animated slideInRight');
// 			$('#heading2').addClass(outAnimationName);
// 		});
// 	};

// setInterval(loopSlideText, 5000);




})();	// SELF INVOKING FN END




// IMAGE SHOWCASE INIT FUNCTION

	$(function(){
		// Trigger maximage
		$('#maximage').maximage();
	});







// TEXT ANIMATION


	// var InAnimationName = 'animated slideInRight',
	// 	outAnimationName = 'animated slideOutLeft',
	// 	animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';


	// function animatedTextNext() {
	// 	$('#heading2').addClass(InAnimationName).delay(6000).queue(function(next) {

	// 			$('#heading2').removeClass(InAnimationName);
	// 			$('#heading2').addClass(outAnimationName);
	// 	});
	// };





	// function animatedText(callback) {

	// 	$('#heading1').addClass(InAnimationName).delay(4000).queue(function(next) {
			
	// 			$(this).removeClass(InAnimationName);
	// 			$(this).addClass(outAnimationName);
	// 			console.log('removed class');

	// 			next();
			
	// 	});


	//     if (typeof callback !== 'function') {
	//      callback = false;
	//     }

	//     if (callback) {
	//          callback();
	//     }
	// };


	// animatedText(animatedTextNext);
