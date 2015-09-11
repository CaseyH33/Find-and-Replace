var findAndReplace = function(string, find_word, change_word) {
    //Split input string into an array of individual words
    var input_array = string.split(" ");
    //Loop through all the words in the array
    for(var i=0; i<input_array.length; i++) {
        if(input_array[i].toLowerCase() === find_word.toLowerCase()) {
            //Current word matches the word to replace , both regardless of capitalization,
            //replace the current word with the replacement word
            input_array[i] = change_word;
        }
    }
    return input_array;
};

$(function() {
  $("form#find_replace").submit(function(event) {
    //Get inputs from html form
    var input_string = $("input#input_string").val();
    var find_word = $("input#find_word").val();
    var change_word = $("input#change_word").val();
    var result = findAndReplace(input_string, find_word, change_word);

    $(".output").empty();
    //Show the result as a string with a space between words
    $(".output").text(result.join(" "));
    $("#result").show();
    event.preventDefault();
  });
});
