$(function () {

	console.log('loan');
	
	$("#amount-slider").slider({
		orientation: "horizontal",
		range: "min",
		min: 1000,
		max: 300000,
		value: 100000,
		step: 1000,
		slide: function (event, ui) {
			$("#amount").text(ui.value);
			calculateMorgage();
		}
	});
	$("#amount").text($("#amount-slider").slider("value"));
	$("#interest-slider").slider({
		orientation: "horizontal",
		range: "min",
		min: 1.0,
		max: 20,
		value: 5,
		step: 0.25,
		slide: function (event, ui) {
			$("#interest").text(ui.value);
			calculateMorgage();
		}
	});
	$("#interest").text($("#interest-slider").slider("value"));
	$("#time-slider").slider({
		orientation: "horizontal",
		range: "min",
		min: 1,
		max: 30,
		value: 15,
		slide: function (event, ui) {
			$("#time").text(ui.value);
			calculateMorgage();
		}
	});
	$("#time").text($("#time-slider").slider("value"));

	function calculateMorgage() {
	    var amount = $("#amount").text();
		var interest = $("#interest").text() / 1200;
		var time = $("#time").text() * 12;
		var rate = amount * (interest * Math.pow(1 + interest, time)) / (Math.pow(1 + interest, time) - 1);
		$("#result").text(rate.toFixed(0));
	    //chart(amount, interest, rate, time)
		//$('.debug').html(amount + " " + interest + " " + time + " " +rate);
	}
	calculateMorgage();

	//function chart(principal, interest, monthly, payments) {
    //var graph = document.getElementById("graph");
    //graph.width = graph.width;

    //if (arguments.length == 0 || !graph.getContext) return;
    //var g = graph.getContext("2d");
    //var width = graph.width, height = graph.height;

    //function paymentToX(n) { return n * width/payments; }
    //function amountToY(a) { return height-(a * height/(monthly*payments*1.05));}

    //g.moveTo(paymentToX(0), amountToY(0));
    //g.lineTo(paymentToX(payments),
    //         amountToY(monthly*payments));
    //g.lineTo(paymentToX(payments), amountToY(0));
    //g.closePath();
    //g.fillStyle = "#f88";
    //g.fill();
    //g.font = "bold 12px sans-serif";
    //g.fillText("Total Interest Payments", 20,20);

    //var equity = 0;
    //g.beginPath();
    //g.moveTo(paymentToX(0), amountToY(0));
    //for(var p = 1; p <= payments; p++) {
    //    var thisMonthsInterest = (principal-equity)*interest;
    //    equity += (monthly - thisMonthsInterest);
    //    g.lineTo(paymentToX(p),amountToY(equity));
    //}
    //g.lineTo(paymentToX(payments), amountToY(0));
    //g.closePath();
    //g.fillStyle = "green";
    //g.fill();
    //g.fillText("Total Equity", 20,35);

    //var bal = principal;
    //g.beginPath();
    //g.moveTo(paymentToX(0),amountToY(bal));
    //for(var p = 1; p <= payments; p++) {
    //    var thisMonthsInterest = bal*interest;
    //    bal -= (monthly - thisMonthsInterest);
    //    g.lineTo(paymentToX(p),amountToY(bal));
    //}
    //g.lineWidth = 3;
    //g.stroke();
    //g.fillStyle = "black";
    //g.fillText("Loan Balance", 20,50);

    //g.textAlign="center";
    //var y = amountToY(0);
    //for(var year=1; year*12 <= payments; year++) {
    //    var x = paymentToX(year*12);
    //    g.fillRect(x-0.5,y-3,1,3);
    //    if (year == 1) g.fillText("Year", x, y-5);
    //    if (year % 5 == 0 && year*12 !== payments)
    //        g.fillText(String(year), x, y-5);
    //}

    //g.textAlign = "right";
    //g.textBaseline = "middle";
    //var ticks = [monthly*payments, principal];
    //var rightEdge = paymentToX(payments);
    //for(var i = 0; i < ticks.length; i++) {
    //    var y = amountToY(ticks[i]);
    //    g.fillRect(rightEdge-3, y-0.5, 3,1);
    //    g.fillText(String(ticks[i].toFixed(0)),
    //               rightEdge-5, y);
    //}
//}
});