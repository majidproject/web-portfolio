$(document).ready(function(){
  $('.custom-banner-slider').owlCarousel({
    rtl: true,
    items: 4,
    loop: true,
    margin: 16,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    slideTransition: 'linear',
    navText: [
      '<i class="fas fa-chevron-right"></i>',
      '<i class="fas fa-chevron-left"></i>'
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 }
    }
  });
});
