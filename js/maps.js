
    var map;

    function initMap() {
        // Enabling new cartography and themes
        google.maps.visualRefresh = true;

        var pos = new google.maps.LatLng(50.675387,20.104681);

        // Setting starting options
        var mapOptions = {
            center: pos,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };


        // Getting Map DOM Element
        var mapElement = document.getElementById('map');

        // Creating a map with DOM element
        map = new google.maps.Map(mapElement, mapOptions);
    }

