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
    if (position - getPosition(event) > 50) { // 50px以上移動しなければスワイプと判断しない
      direction = 'top'; //上と検知
    } else if (position - getPosition(event) < -50){  // 50px以上移動しなければスワイプと判断しない
      direction = 'bottom'; //下と検知
    }
  }

  //横方向の座標を取得
  function getPosition(event) {
    return event.originalEvent.touches[0].pageX;
  }
});


// ------ スライド部分 ------
$(function() {
  // スクロールのスピード（700ミリ秒に設定）
  var duration = 700;

  // リストの順番を変更（4番目を1番最初にする）
  $("#slide ul").prepend($("#slide li:last-child"));

  // リストの位置を変更（画像を1枚分ずらす）
  $("#slide ul").css("top", -250);

});