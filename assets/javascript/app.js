// Trivia Content String Variables

var questions = {
	"q1" : "Which is the only country to have played in each and every World Cup?",
	"q2" : "Which is the only American Football team to go a whole season undefeated, including the Super Bowl?",
	"q3" : "Which is the only NBA player to win 11 championships in their career as a player?",
	"q4" : "Which golf tournament did Tiger Woods win by 12 strokes in 1997 to record his first major championship win?",
	"q5" : "Which is the player to ever hit an MLB home run and score an NFL touchdown in the same week?",
    "q6" : "The very first Wimbledon tournament was scheduled in 1877 as a fundraiser for which sport?",
    "q7" : "Which sport are the movies The Natural and Moneyball about?",
    "q8" : "Which boxer is known as the Godfather of boxing?",
}

var answers = {
    "q1" : ["England", "Argentina", "Brazil", "Germany"],
	"q2" : ["Dallas Cowboys", "Miami Dolphins", "New England Patriots", "Green Bay Packers"],
	"q3" : ["Frank Ramsey", "Magic Johnson", "Michael Jordan", "Bill Russell"],
	"q4" : ["The Masters", "The Open Championship", "The US Open", "PGA Championship"],
	"q5" : ["Jim Thorpe", "Deion Sanders", "Bo Jackson", "Ace Parker"],
    "q6" : ["Croquet", "Golf", "Soccer", "Cricket"],
    "q7" : ["Football", "Baseball", "Soccer", "Basketball"],
    "q8" : ["Sugar Ray Leonard", "Mike Tyson", "Oscar De La Hoya", "Muhammad Ali"],
}

var correctAnswers = {
	"q1" : "Brazil",
	"q2" : "Miami Dolphins",
	"q3" : "Bill Russell",
	"q4" : "The Masters",
	"q5" : "Deion Sanders",
    "q6" : "Croquet",
    "q7" : "Baseball",
    "q8" : "Muhammad Ali",
}

var images = {
	"q1" : "./assets/images/brazil.png",
	"q2" : "./assets/images/MiamiDolphins.png",
	"q3" : "./assets/images/Bill_Russell.jpg",
	"q4" : "./assets/images/TheMasters.jpg",
	"q5" : "./assets/images/DeionSanders.jpg",
    "q6" : "./assets/images/croquet.jpg",
    "q7" : "./assets/images/baseball.jpeg",
    "q8" : "./assets/images/MuhammadAli.jpg",
}

// Additional Variables

var timeRemaining = 20;
var intervalId = "";
var currentQuestion = 1;
var correct = 0;
var incorrect = 0;
var unanswered = 0;


// Function to clear content (for restart) + create button to start.

function start () {
    $("#content").empty();
    var startBtn = $("<button>");
    startBtn.text("Start");
    startBtn.addClass("btn btn-primary start");
    $("#content").append(startBtn);
};

function decrement() {
    intervalId = setInterval(decrement, 1000);
    timeRemaining--;
    $("#time").html("Time Remaining: " + time + " Seconds");
  };
