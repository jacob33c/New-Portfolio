$(document).ready(function() {
  $('.carousel').carousel({
      pause: false,
      interval: 0,
      keyboard:true
  });
});

$(".card-img-top").mouseover(function() {
  console.log("card image has been hovered");
  $('.carousel-caption').removeClass("hidden");
  $('.card-img-top').addClass("blurry");
});

$(".card").mouseleave(function() {
  console.log("card has been hovered");
  $('.carousel-caption').addClass("hidden");
  $('.card-img-top').removeClass("blurry");

});
