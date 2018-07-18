$(".project-carousel").slick({
  dots: true,
  infinite: false,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false
      }
    }
  ]
});


$(".testimonial-carousel").slick({
  dots: true,
  infinite: false,
  speed: 600,
  autoplay: false,
  arrows: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false
      }
    }
  ]
});
