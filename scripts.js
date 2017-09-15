$("#testRun").click(lightUp);



function randomShape() {
	var random = Math.floor(Math.random()*$(".shape").length);
	console.log("from randomShape:", $(".shape").eq(random));
	return $(".shape").eq(random);
}

function lightUp() {
	var aShape = randomShape();

	aShape.addClass("buttonActive");
	setTimeout(function(){ aShape.removeClass("buttonActive"); }, 1000);
}


