/* change homepage slideshow images to mobile responsive */
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("slides1").src = "imgs/mobile-balloon.jpg";
        document.getElementById("slides2").src = "imgs/mobile-dust.jpg";
          document.getElementById("slides3").src = "imgs/mobile-moss.jpeg";
}
}
    
// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 1200px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});

/* when user scrolls down, hide nav. When they scroll up, show nav. */
