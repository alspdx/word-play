$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();
    var splitWords = userInput.split(" ");
    var newSentence = [];
    splitWords.forEach(function(splitWord) {
      if (splitWord.length >= 3) {
        newSentence.push(splitWord)
      };
    });
    var reverseWords = newSentence.reverse().join(" ");

    $("#sentence-here").text(reverseWords)
  });
});
