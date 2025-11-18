$(document).ready(function () {
  setTimeout(function () {
    $("body").addClass("loaded");
  }, 2000);

  // document.getElementsByTagName("body")[0].style.cursor = "url('images/brush.png'), auto";

  $("#MainWrapper").fadeIn(2000);

  //Web Font
  WebFontConfig = {
    google: {
      families: [
        "Lato:400,700,900,300,300italic,100:latin",
        "Roboto+Slab:400,100,300,700:latin",
      ],
    },
  };
  (function () {
    var wf = document.createElement("script");
    wf.src =
      ("https:" == document.location.protocol ? "https" : "http") +
      "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
    wf.type = "text/javascript";
    wf.async = "true";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(wf, s);
  })();
});
