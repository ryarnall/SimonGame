$("#testRun").click(addToSequence);

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

function addToSequence() {
	var newShape = randomShape();
	simonClicks.push(newShape);

	indexCounter = 0;
	displaySimonClicks();
}



function checkClicks() {
	var waitingShape = simonClicks[indexCounter].attr("id");
	if ($(this).attr("id") == waitingShape) {
		console.log("correct");
		indexCounter += 1;

		if (indexCounter >= simonClicks.length) {
			setTimeout(addToSequence, 1000);
		}	
	}	else {
		console.log("nope");
		simonClicks = [];
	}
}

$(".shape").click(checkClicks);
