/**
 * Created by duhlarik on 5/9/17.
 */
$(document).ready(function(){
    $('#term').focus(function(){
        var full = $("#poster").has("img").length ? true : false;
        if(full === false){
            $('#poster').empty();
        }
    });
});

var getPoster = function(){
    var film = $('#term').val();
    if(film === ''){
        $('#poster').html("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something.</h2>");
    } else {
        $('#poster').html("<h2 class='loading'>Your poster is on its way!</h2>");
        $.getJSON("http://api.themoviedb.org/2.1/Movie.search/en/json/23afca60ebf72f8d88cdcae2c4f31866/" + film + "?callback=?", function(json) {
            if(json !== "Nothing found.") {
                $('#poster').html('<h2 class="loading">Well, gee whiz! We found you a poster!</h2><img id="thePoster" src=' + json[0].poster[0].image.url + '/>');
            }
        })
    }
};