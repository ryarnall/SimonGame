$("#testRun").click(addToSequence);

var simonClicks = [];
var indexCounter = 0;

var currentStreak = 0;
var	longestStreak = 0;

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

function updateStreaks() {	
	if (currentStreak > longestStreak) {
		longestStreak = currentStreak;		
	}
	$("#currentStreak").text(currentStreak);
	$("#longestStreak").text(longestStreak);
}


function checkClicks() {
	var waitingShape = simonClicks[indexCounter].attr("id");
	if ($(this).attr("id") == waitingShape) {
		console.log("correct");
		indexCounter += 1;

		if (indexCounter >= simonClicks.length) {
			currentStreak = simonClicks.length;
			updateStreaks();

			setTimeout(addToSequence, 1000);
		}	
	}	else {
		console.log("nope");
		simonClicks = [];
		currentStreak = 0;
		updateStreaks();
	}
}

$(".shape").on("click", checkClicks);
