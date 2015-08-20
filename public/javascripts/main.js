// Instructions content:
var dial1text = "<p>caseworker login: caseworker1@gmail.com<br>password: password1</p><p>donor login: donor1@gmail.com<br>password: password1</p>"
var dial2text = "<p>professor login: philco@ga.co<br>password: phil</p><p>student login: neuhaus87@gmail.com<br>password: david</p>"
var dial3text = "Have Fun!</p>"




$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();


  $("area[href^=#]").on("click", function(e){
    e.preventDefault()
    var destination = $(this).attr("href").replace("#", "")
    var dial = $(this).attr("alt")
    $("iframe").attr("src", destination);
    openPanel();
    printInstructions(dial);
    loadingSequence();

  });

});





// on page load, gif is neuhausneuhaus

var openPanel = function(){
  $("#panel-cover").attr("class","animated flipOutX");
}

var printInstructions = function(dial){
  if (dial == "dial1"){
    $("#instruction-content").html(dial1text)
  } else if (dial == "dial2"){
    $("#instruction-content").html(dial2text)
  } else if (dial == "dial3"){
    $("#instruction-content").html(dial3text)
  }
}

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


