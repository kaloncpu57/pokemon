$(function () {
  $("#chromeLogo").click(function () {
    $("#browserSelect").fadeOut(250, function () {
      $("#chrome1").show();
      $("#chrome").fadeIn();
    });
  });

  $("#firefoxLogo").click(function () {
    $("#browserSelect").fadeOut(250, function () {
      $("#firefox1").show();
      $("#firefox").fadeIn();
    });
  });

  $("#operaLogo").click(function () {
    $("#browserSelect").fadeOut(250, function () {
      $("#opera1").show();
      $("#opera").fadeIn();
    });
  });

  $(".back").click(function () {
    $(".instructions:visible").fadeOut(250, function () {
      $("#browserSelect").fadeIn();
    });
  });

  $(".next").click(function () {
    var i = $(this).attr("data-index");
    var n = $(this).attr("data-next");
    $("#" + i).fadeOut(250, function () {
      $("#" + n).fadeIn();
    });
  });
});

var character = ["bear", "beetle", "crab", "dolphin", "koala", "panda", "penguin", "unicorn"][Math.floor(Math.random() * 8)];
$("#favicon").attr("href", "../characters/" + character + ".svg");
