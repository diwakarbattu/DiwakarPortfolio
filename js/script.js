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
(function () {
  var navbar = document.getElementById('navbarModern');
  var hamburger = document.getElementById('navHamburger');
  var drawer = document.getElementById('navMobileDrawer');

  /* Add .scrolled class when user scrolls past 10 px */
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); /* run once on page load */

  /* Toggle mobile drawer on hamburger click */
  hamburger.addEventListener('click', function () {
    var isOpen = drawer.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    drawer.setAttribute('aria-hidden', String(!isOpen));
  });

  /* Auto-close drawer when a link inside it is tapped */
  drawer.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      drawer.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    }
  });
})();