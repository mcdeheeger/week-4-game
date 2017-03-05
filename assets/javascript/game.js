$(document).ready(function(){
// Generates a random number between 19-120
// ***QUESTION
var randomNumber = Math.floor((Math.random() * 102) + 19);

// Generatos a random number for each crystal
var blue = Math.floor((Math.random() * 12) + 1)
var green = Math.floor((Math.random() * 12) + 1)
var red = Math.floor((Math.random() * 12) + 1)
var yellow = Math.floor((Math.random() * 12) + 1)

// Inital Values
yourNumber = 0;
wins = 0;
losses = 0;

// Adds number generated for each color and compares the the value of "yourNumber" with the "randomNumber". If the values are equal, then player wins; if "yourNumber" is greather than "randomNumber", then player loses.
$(".blueGemStatic").click(function() {
	yourNumber = yourNumber + blue;
	$("#yourNumber").text(yourNumber);
	if (yourNumber === randomNumber) {
		$("#yourNumber").text(0)
		youWin()
		reset();
	} else if (yourNumber > randomNumber){
		$("#yourNumber").text(0)
		youLose()
		reset();
	}
});

$(".greenGemStatic").click(function() {
	yourNumber = yourNumber + green;
	$("#yourNumber").text(yourNumber);
	if (yourNumber === randomNumber) {
		$("#yourNumber").text(0)
		youWin()
		reset();
	} else if (yourNumber > randomNumber) {
		$("#yourNumber").text(0)
		youLose()
		reset();
	}
});

$(".redGemStatic").click(function() {
	yourNumber = yourNumber + red;
	$("#yourNumber").text(yourNumber);
	if (yourNumber === randomNumber) {
		$("#yourNumber").text(0)
		youWin()
		reset();
	} else if (yourNumber > randomNumber) {
		$("#yourNumber").text(0)
		youLose()
		reset();
	}
});

$(".orangeGemStatic").click(function() {
	yourNumber = yourNumber + yellow;
	$("#yourNumber").text(yourNumber);
	if (yourNumber === randomNumber) {
		$("#yourNumber").text(0)
		youWin()
		reset();
	} else if (yourNumber > randomNumber) {
		$("#yourNumber").text(0)
		youLose()
		reset();
	}
});


// Display the random generated number trying to be reached
$("#randomNumber").html(randomNumber);


// Starting a new game after win or lose
function reset() {
	// Reset your number to zero
	yourNumber = 0;
	// Generates a random number for a new game
	// *** toggle with var here
	randomNumber = Math.floor((Math.random() * 102) + 19);
	// Display the new random number on the page
	$("#randomNumber").html(randomNumber);
	// Generate new values for each of the crystals
	blue = Math.floor((Math.random() * 12) + 1)
	green = Math.floor((Math.random() * 12) + 1)
	red = Math.floor((Math.random() * 12) + 1)
	yellow = Math.floor((Math.random() * 12) + 1)
	
}

// When player wins run function...
function youWin() {
	alert("You are a gem!");
	wins++;
	$("#wins").text(wins);
}

// When player loses run functio...
function youLose() {
	alert("You need some polishing...");
	losses++;
	$("#losses").text(losses);
}

// jQuery controlling hover and click effects
$(".blueGemStatic").hover(function(){
        $(this).attr("src", "assets/images/blueGemGif.gif");
        }, function(){
        $(this).attr("src", "assets/images/blueGemStatic.png");
    });
$(".blueGemStatic").click(function(){
        blueClick.setAttribute('src', "assets/audio/gemAudio1.mp3"); blueClick.play();
    });

$(".greenGemStatic").hover(function(){
        $(this).attr("src", "assets/images/greenGemGif.gif");
        }, function(){
        $(this).attr("src", "assets/images/greenGemStatic.png");
    });
$(".greenGemStatic").click(function(){
        greenClick.setAttribute('src', "assets/audio/gemAudio2.mp3"); greenClick.play();
    });

$(".redGemStatic").hover(function(){
        $(this).attr("src", "assets/images/redGemGif.gif");
        }, function(){
        $(this).attr("src", "assets/images/redGemStatic.png");
    });
$(".redGemStatic").click(function(){
        redClick.setAttribute('src', "assets/audio/gemAudio3.mp3"); redClick.play();
    });

$(".orangeGemStatic").hover(function(){
        $(this).attr("src", "assets/images/orangeGemGif.gif");
        }, function(){
        $(this).attr("src", "assets/images/orangeGemStatic.png");
    });
$(".orangeGemStatic").click(function(){
		orangeClick.setAttribute('src', "assets/audio/gemAudio4.mp3"); orangeClick.play();
    });

$(".theme-button").on("click", function() {
        audioElement.play();
      });

      $(".pause-button").on("click", function() {
        audioElement.pause();
      });

// Background Music and other audio references
var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "assets/audio/theme.mp3");

var blueClick = document.createElement("audio");
      blueClick.setAttribute("src", "assets/audio/gemAudio1.mp3");

var greenClick = document.createElement("audio");
      greenClick.setAttribute("src", "assets/audio/gemAudio2.mp3");

var redClick = document.createElement("audio");
      redClick.setAttribute("src", "assets/audio/gemAudio3.mp3");

var orangeClick = document.createElement("audio");
      orangeClick.setAttribute("src", "assets/audio/gemAudio4.mp3");
});