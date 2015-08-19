console.log("main.js is online")



$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();


  $("area[href^=#]").on("click", function(e){
    e.preventDefault()
    var destination = $(this).attr("href").replace("#", "")
    $("iframe").attr("src", destination)
    loadingSequence();

  });

});





// on page load, gif is neuhausneuhaus


var loadingSequence = function(iframe) {
  // #loading-gif attr display inline (or change zindex?)
  
  var randomGif = function(){
    return "/images/loadinggifs/giphy" + Math.floor(Math.random() * (38))+".gif";
  }

  $("#loading-gif").show();

  $("#loading-gif").attr("src", randomGif());
  setTimeout(function(){
    $("#loading-gif").attr("src", randomGif())
  }, 400);
  setTimeout(function(){
    $("#loading-gif").attr("src", randomGif())
  }, 1400);
  setTimeout(function(){
    $("#loading-gif").hide();
    $("iframe").show(); 
  }, 1900);

  // until iframe loaded, short gif, long gif, short gif...
  // #loading-gif attr display none
}


// exitSequence()
  //glitch iframe for 1000ms, then loadingSequence()


