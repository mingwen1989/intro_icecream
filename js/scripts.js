$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["icecream1", "icecream2", "icecream3", "icecream4", "icecream5", "icecream6"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();
  });
});
