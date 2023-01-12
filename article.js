$(".package-grid").on("mouseenter mouseleave", function () {
  $(this).children(".image-package").toggleClass("is--active");
});

// Split text into characters using absolute positioning.
let text;
// Split the text up
function runSplit() {
  text = new SplitType(".scroll-animation", {
    types: "lines",
    lineClass: "split-line"
  });
}

runSplit();
// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    text.revert();
    runSplit();
  }
});

let text2;
// Split the text up
function runSplit2() {
  text2 = new SplitType(".is--hero-split", {
    types: "lines",
    lineClass: "loading-animation"
  });
}

runSplit2();
// Update on window resize
let windowWidth2 = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth2 !== $(window).innerWidth()) {
    windowWidth2 = $(window).innerWidth();
    text2.revert();
    runSplit2();
  }
});

gsap.registerPlugin(ScrollTrigger);

$(".scroll-animation").each(function (index) {
  let triggerElement = $(this);
  // let myText = $(this).find(".split-text");
  let targetElement = $(this).find(".split-line");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.from(targetElement, {
    duration: 1,
    delay: 0.3,
    y: "50rem",
    opacity: 0,
    ease: "Quint.easeOut",
    stagger: {
      amount: 0.1,
      from: "0"
    }
  });
});

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.from(".loading-animation", {
    y: "200%",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1
  });
}
pageLoad();

//$(".split-line").wrap("<div class='overflow_hidden'></div>");
//$(".is--loadin1").wrap("<div class='overflow-hidden'></div>");
