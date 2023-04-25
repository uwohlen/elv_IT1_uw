var lastScrollTop = 0;

var navbar = document.getElementById("navbar");


// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.

window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....

    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {

    navbar.style.transition = "400ms";

    navbar.style.transform = "translateY(-100%)";

    navbar.style.backgroundColor = "var(--primary)";

    } else if (st < lastScrollTop) {

    navbar.style.transition = "500ms";

    navbar.style.transform = "translateY(0)"

    navbar.style.display = "flex";

    navbar.style.backgroundColor = "var(--primary)";

    } // else was horizontal scroll

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

}, false);