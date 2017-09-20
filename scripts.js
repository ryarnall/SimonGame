$("#testRun").click(lightUp);

var simonClicks = [];
var indexCounter = 0;

function randomShape() {
	var random = Math.floor(Math.random()*$(".shape").length);
	return $(".shape").eq(random);
}

function displaySimonClicks() {
	currentShape = simonClicks[indexCounter];
	// console.log(currentShape);

	currentShape.addClass("buttonActive");
	setTimeout(function() {
		currentShape.removeClass("buttonActive");
		indexCounter += 1;
		if (indexCounter < simonClicks.length) {
			displaySimonClicks();
		} else {
			indexCounter = 0;
		}
	}, 1000);
	


}

function lightUp() {
	var newShape = randomShape();
	simonClicks.push(newShape);

	displaySimonClicks();
}



function checkClicks() {
	if ($(this).attr("id") == simonClicks[indexCounter]) {
		console.log("correct");
		indexCounter += 1;
		console.log("simonClickedTimes =", simonClickedTimes);	
	}	else {
		console.log("nope");
		simonClicks = [];
	}
}

$(".shape").click(checkClicks);
