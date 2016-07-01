$(document).ready(function() {

	// $('.credit-container').on('click', function(e) {

	
	// 	console.log('działa');


	// 	$('#load-div').show('ease-out');

	// });


	$('#money-credit').on('click', function(e) {
		e.preventDefault();

		if($('#money-div').is(':hidden')) {
			console.log('hidden');
			$('#company-div').hide('ease-out');
			$('#consolidation-div').hide('ease-out');
			$('#money-div').show('ease-out');
		} else {
			$('#money-div').hide('ease-out');
		}
	});

	$('#company-credit').on('click', function(e) {
	e.preventDefault();

	if($('#company-div').is(':hidden')) {
		console.log('hidden');
		$('#money-div').hide('ease-out');
		$('#consolidation-div').hide('ease-out');
		$('#company-div').show('ease-out');
	} else {
		$('#company-div').hide('ease-out');
	}
	});

	$('#consolidation-credit').on('click', function(e) {
		e.preventDefault();

		if($('#consolidation-div').is(':hidden')) {
			console.log('hidden');
			$('#company-div').hide('ease-out');
			$('#money-div').hide('ease-out');
			$('#consolidation-div').show('ease-out');
		} else {
			$('#consolidation-div').hide('ease-out');
		}
	});		

	$('#house-credit').on('click', function(e) {
		e.preventDefault();

		if($('#house-div').is(':hidden')) {
			console.log('hidden');
			$('#company-div').hide('ease-out');
			$('#money-div').hide('ease-out');
			$('#house-div').show('ease-out');
		} else {
			$('#house-div').hide('ease-out');
		}
	});		

	$('#refinance-credit').on('click', function(e) {
		e.preventDefault();

		if($('#refinance-div').is(':hidden')) {
			console.log('hidden');
			$('#company-div').hide('ease-out');
			$('#money-div').hide('ease-out');
			$('#refinance-div').show('ease-out');
		} else {
			$('#refinance-div').hide('ease-out');
		}
	});		

	$('#car-credit').on('click', function(e) {
		e.preventDefault();

		if($('#car-div').is(':hidden')) {
			console.log('hidden');
			$('#company-div').hide('ease-out');
			$('#money-div').hide('ease-out');
			$('#car-div').show('ease-out');
		} else {
			$('#car-div').hide('ease-out');
		}
	});		

	$('#consolidation-credit').on('click', function(e) {
		e.preventDefault();

		if($('#consolidation-div').is(':hidden')) {
			console.log('hidden');
			$('#company-div').hide('ease-out');
			$('#money-div').hide('ease-out');
			$('#consolidation-div').show('ease-out');
		} else {
			$('#consolidation-div').hide('ease-out');
		}
	});		

	$('#consolidation-credit').on('click', function(e) {
		e.preventDefault();

		if($('#consolidation-div').is(':hidden')) {
			console.log('hidden');
			$('#company-div').hide('ease-out');
			$('#money-div').hide('ease-out');
			$('#consolidation-div').show('ease-out');
		} else {
			$('#consolidation-div').hide('ease-out');
		}
	});		
});