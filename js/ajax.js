$(document).ready(function() {

	// $('.credit-container').on('click', function(e) {

	
	// 	console.log('działa');


	// 	$('#load-div').show('ease-out');

	// });


	$('#warsaw').on('click', function(e) {
		e.preventDefault();

		if($('#load-div').is(':hidden')) {
			console.log('hidden');
			$('#load-div').show('ease-out');
		} else {
			$('#load-div').hide('ease-out');
		}
	});

		$('#ny').on('click', function(e) {
		e.preventDefault();

		if($('#load-div').is(':hidden')) {
			console.log('hidden');
			$('#load-div').show('ease-out');
		} else {
			$('#load-div').hide('ease-out');
		}
	});

	$('#london').on('click', function(e) {
		e.preventDefault();

		if($('#load-div').is(':hidden')) {
			console.log('hidden');
			$('#load-div').show('ease-out');
		} else {
			$('#load-div').hide('ease-out');
		}
	});		

});