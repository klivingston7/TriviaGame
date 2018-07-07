
var answers = ["Brazil", "Miami Dolphins", "Bill Russell", "The Masters", "Deion Sanders", "Croquet", "Baseball", "Muhammad Ali"]

var questionWrappers = $(".question-wrapper")
var image = $(".picture")
var score = $(".tally")

var i = 0

var totalRight = 0
var totalWrong = 0

var showQuestion = function() {
  
  $.each(questionWrappers, function(key, value){
    $(value).removeClass("active")
    $(image).addClass("hide")
    $(score).addClass("hide")		
  });

  $(questionWrappers[i]).addClass("active");

  i += 1

  if ((i - 1) == questionWrappers.length) {
    $('.tally').show();
  }
}

showQuestion();

var updateTotals = function() {
  $(score).addClass("hide")	
  $(".total-right").text(totalRight)
  $(".total-wrong").text(totalWrong)
  $(".total-unanswered").text(questionWrappers.length - totalRight - totalWrong)
}

$("li").click(function() {
  $("li").removeClass("green");
  $("li").removeClass("red");
  if ($.inArray($(this).text(), answers) > -1) {
    console.log("true")
    $(this).addClass("green")
    $(image[i]).addClass("active");
    $(this).parents(".question-wrapper").find(".picture").slideDown()
    totalRight += 1
    setTimeout(function() {showQuestion()}, 3000)
    
  } else {
    console.log("false")
    $(this).addClass("red")
    $(this).parents(".question-wrapper").append("<h3>Sorry the correct answer was " + answers[i-1] + "!</h3>")
    totalWrong += 1
    setTimeout(function() {showQuestion()}, 3000)
  }

  updateTotals();

})
