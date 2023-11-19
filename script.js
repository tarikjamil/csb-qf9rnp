gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();

  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5,
  });

  // Add a label to mark the starting point of simultaneous animations
  tl.add("loadingAnimationsStart");

  // Add the 'loading' animation and set its position to the label
  tl.from(
    "[animation=loading]",
    {
      y: "20rem",
      opacity: "0",
      stagger: { each: 0.1, from: "start" },
      ease: "Quint.easeOut",
      duration: 1,
    },
    "loadingAnimationsStart"
  ); // <-- position parameter set to the label
}

pageLoad();

// img parallax
$(".img-parallax").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.to(targetElement, {
    y: "-15%",
  });
});

// img parallax
$(".hero-img").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.to(targetElement, {
    y: "-15%",
  });
});

$(".img-parallax-reverse").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.to(targetElement, {
    y: "15%",
  });
});

// text parallax
$(".text-parallax").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.fromTo(
    targetElement,
    {
      x: "15%",
    },
    {
      x: "-15%",
    }
  );
});

//torro parallax
$(".torro-circle").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.fromTo(
    targetElement,
    {
      scale: 0.7,
    },
    {
      scale: 1.3,
    }
  );
});

//shape parallax
$(".parallax-animation-2").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.fromTo(
    targetElement,
    {
      y: "32rem",
    },
    {
      y: "-32rem",
    }
  );
});

$(".parallax-animation").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.fromTo(
    targetElement,
    {
      y: "-32rem",
    },
    {
      y: "+32rem",
    }
  );
});

// navbar menu hamburger click
$(".menu-link").click(function () {
  let clicks = $(this).data("clicks");
  if (clicks) {
    // odd clicks
    gsap.to(".is--navbar-load", {
      y: "10rem",
      duration: 0.2,
      opacity: 0,
      ease: "Quint.easeOut",
      stagger: {
        each: 0.1,
        from: "end",
      },
    });
  } else {
    // even clicks
    gsap.fromTo(
      ".is--navbar-load",
      {
        y: "10rem",
        opacity: 0,
      },
      {
        duration: 0.5,
        delay: 0.4,
        y: "0rem",
        opacity: 1,
        ease: "Quint.easeOut",
        stagger: {
          each: 0.1,
        },
      }
    );
  }
  $(this).data("clicks", !clicks);
});

// navbar menu hamburger click
$(".dropdown-parent").click(function () {
  let clicks = $(this).data("clicks");
  if (clicks) {
    // odd clicks
    gsap.to(".dropdown-link", {
      y: "10rem",
      duration: 0.2,
      opacity: 0,
      ease: "Quint.easeOut",
      stagger: {
        each: 0.1,
        from: "end",
      },
    });
  } else {
    // even clicks
    gsap.fromTo(
      ".dropdown-link",
      {
        y: "10rem",
        opacity: 0,
      },
      {
        duration: 0.5,
        delay: 0.4,
        y: "0rem",
        opacity: 1,
        ease: "Quint.easeOut",
        stagger: {
          each: 0.1,
        },
      }
    );
  }
  $(this).data("clicks", !clicks);
});

// scroll text
$(".scroll-animation").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.from(targetElement, {
    duration: 1,
    delay: 0.3,
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut",
  });
});

// scroll into footer
$(".section.is--footer").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".is--footer-text-animation");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
    },
  });
  tl.from(targetElement, {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut",
    stagger: {
      amount: 0.2,
      from: "0",
    },
  });
});

// lines-horizontal
$(".line").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top",
    },
  });
  tl.fromTo(
    targetElement,
    {
      opacity: 0,
      width: "0%",
    },
    {
      duration: 1,
      delay: 0.3,
      opacity: 1,
      width: "100%",
      ease: "Quint.easeOut",
      stagger: {
        amount: 0.3,
        from: "0",
      },
    }
  );
});

function adjustPadding() {
  document.querySelectorAll(".grid--2els").forEach(function (el) {
    if (el.parentElement.classList.contains("padding")) {
      el.parentElement.classList.add("padding-modified");
    } else {
      el.parentElement.classList.remove("padding-modified");
    }
  });
}

// Run on page load
adjustPadding();

// Run on window resize
window.addEventListener("resize", function () {
  if (window.innerWidth <= 991) {
    adjustPadding();
  } else {
    // Remove the class if the screen is wider than 991px
    document.querySelectorAll(".padding-modified").forEach(function (el) {
      el.classList.remove("padding-modified");
    });
  }
});
