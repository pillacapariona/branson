$(document).ready(function() {
  $("body").tooltip({ selector: '[data-toggle=tooltip]'
  });
  $('.mdb-select').materialSelect();
  $('.carousel').carousel({
  interval: 2500
  })
});

$(".js-range-slider").ionRangeSlider( {
  skin: "round",
  type: "double",
  from: 100,
  to: 500,
  min: 0,
  max: 500,
  prefix: "S/."
});
