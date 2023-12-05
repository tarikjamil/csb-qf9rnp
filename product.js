document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".slider1", {
    type: "slider",
    perPage: 2,
    perMove: 1,
    pagination: false,
    gap: "48rem",
    breakpoints: {
      991: {
        // Tablet
        perPage: 1,
        gap: "24rem",
        arrows: false,
      },
      767: {
        // Mobile Landscape
        perPage: 1,
        gap: "24rem",
        arrows: false,
      },
      479: {
        // Mobile Portrait
        perPage: 1,
        gap: "24rem",
        arrows: false,
      },
    },
  });
  splide.mount();
});
