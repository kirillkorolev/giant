$(document).ready(function() {
  $(".reviews__slider").slick({
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    dots: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false
        }
      }
    ]
  });
});
$(document).ready(function() {
  $(".screenshots__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: "linear",
    touchMove: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          variableWidth: false
        }
      }
    ]
  });
});
