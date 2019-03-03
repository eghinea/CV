$(document).ready(function(){
$("#drpi1").click(function(){
  alert("WARNING!! : Changing the text color doesn't necessarily improvee the visibility, the purpose is to show the DOM manipulation.");
  $("div").css({color:"#fb3569"});
});


$("#drpi2").click(function(){
  alert("WARNING!! : Disabling Images doesn't necessarily improve the visibility, the purpose is to show the DOM manipulation.");
  $(".skillsi").css("visibility", "hidden");
  $(".card-img-top").css("visibility", "hidden");
  $(".top-container").css('background-image', 'none');
  $(".top-container").css('background-color', 'black');
  $(".skills").css('background-image', 'none');
  $(".skills").css('background-color', '#0ea5c6');
  $(".about").css('background-image', 'none');
  $(".about").css('background-color', 'white');
  $(".contact-me").css('background-image', 'none');
  $(".contact-me").css('background-color', '#5dc0a6');
  $(".Education").css('background-image', 'none');
  $(".Education").css('background-color', '#5dc0a6');




});

$("#drpi3").click(function(){
  alert("WARNING!! : Changing background doesn't necessarily improve the visibility, the purpose is to show the DOM manipulation.");
  $(".top-container").css('background-image', 'none');
  $(".top-container").css('background-color', '#113f67');
  $(".skills").css('background-image', 'none');
  $(".skills").css('background-color', '#408ab4');
  $(".about").css('background-image', 'none');
  $(".about").css('background-color', '#34699a');
  $(".profile").css('background-color', '#34699a');
  $(".accordion").css('background-color', '#34699a');
  $(".drop1").css('background-color', '#34699a');
  $("#collapseOne").css('background-color', '#34699a');
  $("#collapseTwo").css('background-color', '#34699a');
  $(".middle-container").css('background-color', '#34699a');
  $("#collapseThree").css('background-color', '#34699a');
  $(".contact-me").css('background-image', 'none');
  $(".contact-me").css('background-color', '#65c6c4');
  $(".Education").css('background-image', 'none');
  $(".Education").css('background-color', '#a6e3e9');
  $(".bottom-container").css('background-color', '#cbf1f5');
});

$("#drpi4").click(function(){
  location.reload();
});
});
