$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: false,
  smartSpeed: 1500,
  margin: 10,
  dots: false,
  nav: true,
  navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
});

var $videoSrc;
$(".btn-play").click(() => {
  $videoSrc = $(this).data("src");
});
$("#videoModal").on("shown.bs.modal", (e) => {
  $("#video").attr(
    "src",
    $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
  );
});
$("#videoModal").on("hide.bs.modal", function (e) {
  $("video").attr("src", $videoSrc);
});
jQuery;
