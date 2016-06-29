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

});