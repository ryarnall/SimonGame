$("#testRun").click(addToSequence);

var simonClicks = [];
var indexCounter = 0;

var currentStreak = 0;
var	longestStreak = 0;

//returns a random shape from the displayed shapes
function randomShape() {
	var random = Math.floor(Math.random()*$(".shape").length);
	return $(".shape").eq(random);
}

//causes each shape in the sequence array to "blink" in order
function displaySimonClicks() {
	currentShape = simonClicks[indexCounter];
	currentShape.addClass("buttonActive");

	setTimeout(function() {
		currentShape.removeClass("buttonActive");
		indexCounter += 1;

		if (indexCounter < simonClicks.length) {
			setTimeout(displaySimonClicks, 500);
		} else {
			indexCounter = 0;
		}
	}, 1000);
}

//adds a new random shape to the sequence then calls function displaySimonClicks
function addToSequence() {
	var newShape = randomShape();
	simonClicks.push(newShape);

	indexCounter = 0;
	displaySimonClicks();	
}

//updates the streak counters' displays
function updateStreaks() {	
	if (currentStreak > longestStreak) {
		longestStreak = currentStreak;		
	}
	$("#currentStreak").text(currentStreak);
	$("#longestStreak").text(longestStreak);
}

//checks if the user clicked space matches the next in the sequence
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
		$("#popUp").fadeIn();
	}
}

//sets the click handler for the shapes
$(".shape").on("click", checkClicks);


$("#playAgain").click(newGame);

function newGame() {
	$("#popUp").fadeOut();
	setTimeout(addToSequence, 1000);
}