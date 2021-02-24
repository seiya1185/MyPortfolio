$(function () {
  //ハンバーガーメニュー
  $(".hamburger-btn").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".hamburger").addClass("active");
    } else {
      $(".hamburger").removeClass("active");
    }
  });
  $(".hamburger__list").click(function () {
    $(".hamburger,.hamburger-btn").removeClass("active");
  });

  //ヘッダー固定(SP)
  //fvを超えたらスクロールでheaderに色を付ける
  var mainPos = $(".fv").height();

  $(window).scroll(function () {
    if ($(window).scrollTop() > mainPos) {
      $(".header__inner").addClass("addColor");
    } else {
      $(".header__inner").removeClass("addColor");
    }
  });
});


// ------ スライドのスワイプ機能 ------
$(function() {
  $('#slide').on('touchstart', onTouchStart); //指が触れたか検知
  $('#slide').on('touchmove', onTouchMove); //指が動いたか検知
  var direction, position;

  //スワイプ開始時の横方向の座標を格納
  function onTouchStart(event) {
    position = getPosition(event);
    direction = ''; //一度リセットする
  }

  //スワイプの方向（top／bottom）を取得
  function onTouchMove(event) {

    var duration = 700;

    if (position - getPosition(event) > 50) { // 50px以上移動しなければスワイプと判断しない
      direction = 'top'; //上と検知

      $("#slide ul").animate({"top" : "-=250px" },
      duration, function() {
        $("#slide ul").append($("#slide li:first-child"));
        $("#slide ul").css("top", -250);
      });

    } else if (position - getPosition(event) < -50){  // 50px以上移動しなければスワイプと判断しない
      direction = 'bottom'; //下と検知

      $("#slide ul").animate({"bottom" : "-=250px" },
      duration, function() {
        $("#slide ul").prepend($("#slide li:last-child"));
        $("#slide ul").css("bottom", -250);
      });
    }
  }

  //横方向の座標を取得
  function getPosition(event) {
    return event.originalEvent.touches[0].pageX;
  }
});
// ------ スライド部分終了 ------

$(function() {

  var dir = -1;
  var duration = 700;

  $("#slide ul").prepend($("#slide li:last-child"));

  $("#slide ul").css("left", -850);

  function slide() {
    // スクロール方向の判断
  if (dir == -1) {
    $("#slide ul").animate({"left" : "-=850px" },
    duration, function() {
      $(this).append($("#slide li:first-child"));
      $(this).css("left", -850);
    });
 }else{
    $("#slide ul").animate({"left" : "+=850px" },
    duration, function() {
      $(this).prepend($("#slide li:last-child"));
      $(this).css("left", -850);
    });
  }
}

 // 前へ戻るボタン
  $("#prevBtn").click(function() {
    dir = 1;

    slide();
  });

 // 次へ進むボタン
  $("#nextBtn").click(function() {
    dir = -1;

    slide();
  });

 
});

