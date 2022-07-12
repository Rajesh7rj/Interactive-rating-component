var clickedNum = 0;
var numClass = ["1", "2", "3", "4", "5"]

$(".num1").css("background-color", "hsl(217, 12%, 63%)");
$(".num1").css("color", "white");

$(".num1").mouseover(function () {
  $(".num1").css("background-color", " hsl(25, 97%, 53%)");
});
$(".num1").mouseout(function () {
  $(".num1").css("background-color", "hsl(217, 12%, 63%)");
});

$("button").mouseover(function () {
  $("button").css("background-color", " white");
  $("button").css("color", "hsl(25, 97%, 53%)");
});
$("button").mouseout(function () {
  $("button").css("background-color", "hsl(25, 97%, 53%)");
  $("button").css("color", "white");
});

$("span").click(function () {
  $(".num1").css("background-color", " hsl(240, 1%, 27%)")
  $(".num1").css("color", "hsl(217, 12%, 63%)")
  $(".num" + clickedNum).css("background-color", " hsl(240, 1%, 27%)")
  $(".num" + clickedNum).css("color", "hsl(217, 12%, 63%)")
  clickedNum = $(this).text();
  $(".num" + clickedNum).css("background-color", "hsl(25, 97%, 53%)");
  $(".num" + clickedNum).css("color", "white");
  $(".num1").mouseout(function () {
    $(".num1").css("background-color", "hsl(25, 97%, 53%)");
    $(".num1").css("color", "white");
  });
});

$("button").click(function () {
  $("div:first").removeClass("card1-index");
  if (clickedNum === 0) {
    $("div:first").addClass("card1-index");
  }
  $("a:first").html(clickedNum);
});

