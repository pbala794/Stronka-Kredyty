$(document).ready(function() {

	$('.credit-container').on('click', function(e) {

		e.preventDefault();
		console.log('działa');

		$('#load-div').show('ease-out');

	});


});