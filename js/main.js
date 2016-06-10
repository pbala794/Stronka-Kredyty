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

   	});




var map = {

    makeMap: function() {

        var loc = this.location.split(","),
            pos = new google.maps.LatLng(loc[0], loc[1]);

        var mapOptions = {
            zoom: 16,
            center: pos,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.mapObj = new google.maps.Map(document.querySelector("#map"), mapOptions);
        this.destination = pos;

        var marker = new google.maps.Marker({
            map: this.mapObj,
            position: pos,
            animation: google.maps.Animation.BOUNCE,
            icon: this.options.mapMarker
        });

    },

    handleRoute: function(result, status) {

        if(status != google.maps.DirectionsStatus.OK || !result.routes[0]) {
            alert("Wprowadziłeś złe dane!");
            return false;
        }

        this.pathRender.setDirections(result);
        this.fromInput.value = result.routes[0].legs[0].start_address;
    },

    prepareRoute: function(coords) {

        var renderOptions = {
            map: this.mapObj,
            polylineOptions: {
                strokeColor: "#ff0000",
                strokeWeight: 4,
                strokeOpacity: 0.8
            },
            suppressMarkers: true
        }

        this.pathRender.setOptions(renderOptions);

        var pathData = {
            origin: coords ? coords : this.fromInput.value,
            destination: this.destination,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        }

        this.path.route(pathData, this.handleRoute.bind(this));

    },

    getGeoData: function() {

        navigator.geolocation.getCurrentPosition(
            function(position) {
                this.prepareRoute(position.coords.latitude + "," + position.coords.longitude);
            }.bind(this),
            function(errorObj) {
                alert("Wystąpił błąd! Odśwież stronę i spróbuj ponownie.");
            },
            {
                enableHighAccuracy: true
            }
        );

    },

    checkGeoSupport: function() {

        if(navigator.geolocation) {
            var findPositionButton = document.querySelector("#findPosition");

            findPositionButton.classList.remove("hidden");

            findPositionButton.onclick = function(e) {
                e.preventDefault();

                this.getGeoData();
            }.bind(this);
        }

    },

    init: function(options) {

        if(!options.location) return;

        try { google.maps.event.addDomListener(window, "load", this.makeMap.bind(this)); } catch(e) { return; };

        this.options = options;
        this.location = this.options.location;
        this.form = document.querySelector("#mapForm");

        this.fromInput = document.querySelector("#from");
        this.path = new google.maps.DirectionsService(),
        this.pathRender = new google.maps.DirectionsRenderer();

        this.form.onsubmit = function(e) {
            e.preventDefault();

            this.prepareRoute();
        }.bind(this);

        this.checkGeoSupport();

    }

}

map.init({
    location: "52.16235,21.071409",
    mapMarker: "template/images/map_marker.png"
});


})();