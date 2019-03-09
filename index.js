$(document).ready(function() {
  $("#drpi1").click(function() {
    alert("WARNING!! : Changing the text color doesn't necessarily improvee the visibility, the purpose is to show the DOM manipulation.");
    $("div").css({
      color: "#fb3569"
    });
    $("h3").css({
      color: "#fb3569"
    });
  });


  $("#drpi2").click(function() {
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

  $("#drpi3").click(function() {
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
    $(".contact-me").css('background-color', '#a6e3e9');
    $(".Education").css('background-image', 'none');
    $(".Education").css('background-color', '#65c6c4');
    $(".bottom-container").css('background-color', '#cbf1f5');
  });

  $("#drpi4").click(function() {
    location.reload();
  });

  $("#navhomebtn").click(function() {
    $(".hamburg").click();
  });

  $("#navaboutbtn").click(function() {
    $(".hamburg").click();
  });

  $("#navexpbtn").click(function() {
    $(".hamburg").click();
  });

  $("#navedubtn").click(function() {
    $(".hamburg").click();
  });

  $("#navcontactbtn").click(function() {
    $(".hamburg").click();
  });

  $(".btnEminus").click(function() {
    $(".cardEminus").fadeToggle(700);
    $(".btnEminus").toggleClass("active");
  });

  $(".btnIBM").click(function() {
    $(".cardIBM").fadeToggle(700);
    $(".btnIBM").toggleClass("active");
  });

  $(".btnEA").click(function() {
    $(".cardEA").fadeToggle(700);
    $(".btnEA").toggleClass("active");
  });

  $(".fa-arrow-down").animate({
    opacity: 0.50,
    bottom: "100",
    height: "toggle"
  }, 1000, function() {});


  function loop() {
    // $('.fa-arrow-down').css({bottom:120});
    $('.fa-arrow-down').animate({
      opacity: 0.50,
      bottom: "100",
      height: "toggle"
    }, 1000, function() {});
  }
  loop();


  if ($(document).width() <= 990) {
    $(".btnEminus").toggleClass("btn-block");
    $(".btnIBM").toggleClass("btn-block");
    $(".btnEA").toggleClass("btn-block");

  }

  $("#contact").mouseover(function() {
    $("#contact").toggleClass("transformSize");
  });

  // $(window).scrolling(function(){
  //   var scrollTop = $(window).scrollTop();
  //
  // });

  $(".btnCursuri").click(function() {
    $(".cursuriPar").toggleClass("btnZoom");
  });



});
