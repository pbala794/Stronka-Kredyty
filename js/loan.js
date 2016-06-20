
    $( "#slider-1" ).slider({
       value: 60,
       animate:"slow",
       orientation: "horizontal"
    });



// SLIDE RANGE CALC



function showPay() {
	
	var amount = $('#cash').val();
		months = $('#months').val(),
		percent = $('#percent').val();	

		$('#cash').change(function() {

			$('input[name="rate"]').val($('#cash').val());


			console.log($('#cash').val());

		})

		$('#cash').on('input', function() {
			$('input[name="rate"]').val($('#cash').val());
		})

		
	 // pay.innerText = cash * percent / (1 - (Math.pow(1/(1 + percent), months)));

	// payment = principle * monthly interest/(1 - (1/(1+MonthlyInterest)*Months))

}

showPay();

