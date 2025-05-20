$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
     rtl: true,
     items: 4,
     loop: true, 
     margin: 0,
     nav: false,
     dots: true,
     center: false,
     autoplay: true,
     slideBy: 3,
     autoplayTimeout : 5000,
     autoplayHoverPause: true, 
     autoWidth: false,
     responsiveClass: true,
     responsive:{
         0:{ items:1 }, 
         600:{ items:2 },
         1000:{ items:3 },
         1200: { items: 4 }
    }
  });
});
