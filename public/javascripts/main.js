// Contact screen flicker
$(document).ready(function() {
     setInterval(function() {
            var val = 1;
            if (Math.random() > 0.5) {
                val = Math.floor((Math.random()*10)+1);
            }
                
            $(".on-screen-text").css("text-shadow", "white 0 0 " + val + "px");
     }, 200);
});


// Instructions content:
var dial1text = "<p>caseworker login: caseworker1@gmail.com<br>password: password1</p><p>donor login: donor1@gmail.com<br>password: password1</p>"
var dial2text = "<p>professor login: philco@ga.co<br>password: phil</p><p>student login: neuhaus87@gmail.com<br>password: david</p>"
var dial3text = "Have Fun!</p>"



$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();


  $("area[href^=#h]").on("click", function(e){
    e.preventDefault()
    var destination = $(this).attr("href").replace("#", "")
    var dial = $(this).attr("alt")
    $("iframe").attr("src", destination);
    openPanel();
    lightblink();
    printInstructions(dial);
    loadingSequence();
  });

  $("area[href=#dial4]").on("click", function(e){
    e.preventDefault()
    console.log("potato");
    $("iframe").hide();
    $("#screen-text-title").hide();
    $("#screen-text-ul").hide();
    $("#loading-gif").show();
    $("#loading-gif").attr("src", "images/loadinggifs/giphy28.gif")
  });

  $("area[href=#dial5]").on("click", function(e){
    e.preventDefault()
    showcontactinfo()
  });



});


var showcontactinfo = function(){
  $("iframe").hide();
  $("#loading-gif").show();
  $("#loading-gif").attr("src", "/images/loadinggifs/loading4.gif")
  $("#screen-text-title").show();
  $("#screen-text-ul").show();
};


// on page load, gif is neuhausneuhaus

var openPanel = function(){
  $("#panel-cover").attr("class","animated flipOutX");
}

var lightblink = function(){
  for (var i=0; i< 500; i++){
    (function(n){
      window.setTimeout(function(){
        $("#red-light").toggle()
      }, (n*500))
    })(i)
  }
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
  };
  var randomLoopGif = function (){
    return "/images/loadinggifs/loading" + Math.floor(Math.random() * (6))+".gif"
  };
  $("#screen-text-title").hide();
  $("#screen-text-ul").hide();

  $("iframe").load(function() {
    $("#loading-gif").hide();
    $("iframe").show();

    // $("#loading-text").hide();//loadeventtest
    // $("#loaded-text").show();//loadeventtest

  });    


    $("#loading-gif").show();

    $("#loading-gif").attr("src", randomGif());
    setTimeout(function(){
      $("#loading-gif").attr("src", randomGif())
    }, 400);
    setTimeout(function(){
      $("#loading-gif").attr("src", randomGif())
    }, 1400);
    setTimeout(function(){
      $("#loading-gif").attr("src", randomLoopGif())
    }, 1900);
    // setTimeout(function(){
    //   $("#loading-gif").hide();
    //   $("iframe").show(); 
    // }, 1900);



  // until iframe loaded, short gif, long gif, short gif then looping gif...
  // #loading-gif attr display none
}


// exitSequence()
  //glitch iframe for 1000ms, then loadingSequence()


// Reload rwdimagemap coords on window resize
(function() {

  window.addEventListener("resize", resizeThrottler, false);

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an reloadImageMap execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        reloadImageMap();
     
       // The reloadImageMap will execute at a rate of 15fps
       }, 66);
    }
  }

  function reloadImageMap() {
    console.log("resizing!!!")
    $('img[usemap]').rwdImageMaps();
  }

}());

