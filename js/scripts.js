var findAndReplace = function(string, find_word, change_word) {
    var input_array = string.split(" ");
    for(var i=0; i<input_array.length; i++) {
        if(input_array[i].toLowerCase() === find_word.toLowerCase()) {
            input_array[i] = change_word;
        }
    }
    return input_array;
};

$(function() {
  $("form#find_replace").submit(function(event) {
    var input_string = $("input#input_string").val();
    var find_word = $("input#find_word").val();
    var change_word = $("input#change_word").val();
    var result = findAndReplace(input_string, find_word, change_word);

    $(".output").empty();
    $(".output").text(result.join(" "));
    $("#result").show();
    event.preventDefault();
  });
});
