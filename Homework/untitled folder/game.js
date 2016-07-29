var targetNum = Math.floor(Math.random() * 101) + 20;
var wins = 0;
var losses = 0;
var userScore = 0;
var redValue = Math.floor(Math.random() * 12 + 1)
var blueValue = Math.floor(Math.random() * 12 + 1);
var yellowValue = Math.floor(Math.random() * 12 + 1);
var greenValue = Math.floor(Math.random() * 12 + 1);

$(document).ready(function() {

	$('#randNum').html(targetNum);
	$('#userScore').html(userScore);
	
	// tried using the below function and calling it with redValue, etc. as arguments, but it was not working
	// function randNum(num) {
	// 	num = Math.floor(Math.random() * 12 + 1);
	// };

	function reset() {
		userScore = 0;
		targetNum = Math.floor(Math.random() * 101) + 20;
		redValue = Math.floor(Math.random() * 12 + 1)
		blueValue = Math.floor(Math.random() * 12 + 1);
		yellowValue = Math.floor(Math.random() * 12 + 1);
		greenValue = Math.floor(Math.random() * 12 + 1);
		$('#randNum').html(targetNum);
	};

	function numAdd() {
		if (userScore == targetNum) {
			$('#result').html("<p>You Won!</p>");
			wins++;
			$('#wins').html(wins);
			reset();
		} else if (userScore > targetNum) {
			$('#result').html("<p>You Lost!</p>");
			losses++;
			$('#losses').html(losses);
			reset();
		}
	};

	$('#red').click(function() {
		userScore += redValue;
		numAdd();
		$('#userScore').html(userScore);
	});
	$('#blue').click(function() {
		userScore += blueValue;
		numAdd();
		$('#userScore').html(userScore);	
	});
	$('#yellow').click(function() {
		userScore += yellowValue;
		numAdd();
		$('#userScore').html(userScore);	
	});
	$('#green').click(function() {
		userScore += greenValue;
		numAdd();
		$('#userScore').html(userScore);	
	});

});