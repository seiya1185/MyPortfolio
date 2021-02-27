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

// ----- スクロール部分の実装（PC部分のみ） -----
if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
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
}
// ----- PCのスクロール部分終了 -----

