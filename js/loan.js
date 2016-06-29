$(document).ready(function() {

	$("#range-slider1").ionRangeSlider({
	    type: "single",
	    min: 1000,
	    max: 10000,
	    from: 5000,
	    keyboard: true,
	    onStart: function (data) {
	        console.log("onStart");
	    },
	    onChange: function (data) {
	        console.log("onChange");
	    },
	    onFinish: function (data) {
	        console.log("onFinish");
	    },
	    onUpdate: function (data) {
	        console.log("onUpdate");
	    }
	});	

	$("#range-slider2").ionRangeSlider({
    type: "single",
    min: 1,
    max: 10,
    from: 2,
    keyboard: true,
    onStart: function (data) {
        console.log("onStart");
    },
    onChange: function (data) {
        console.log("onChange");
    },
    onFinish: function (data) {
        console.log("onFinish");
    },
    onUpdate: function (data) {
        console.log("onUpdate");
    }
	});

	$("#range-slider3").ionRangeSlider({
    type: "single",
    min: 6,
    max: 48,
    from: 12,
    keyboard: true,
    onStart: function (data) {
        console.log("onStart");
    },
    onChange: function (data) {
        console.log("onChange");
    },
    onFinish: function (data) {
        console.log("onFinish");
    },
    onUpdate: function (data) {
        console.log("onUpdate");
    }
	});

});

	var range1 = $('#range-slider1'),
		input1 = $('#input1'),
		range2 = $('#range-slider2'),
		input2 = $('#input2'),
		range3 = $('#range-slider3'),
		input3 = $('#input3');

	var getVal = function(range, input) {
		var value = $(range).val();

		input.val(value);
	}

$(document).ready(function() {

	$(".calculator").accrue();

});