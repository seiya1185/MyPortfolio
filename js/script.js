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

// ------ 実績のスワイプ部分 -----

$(document).ready(function()
{

  var duration = 700;

  $("#slide ul").prepend($("#slide li:last-child"));

  $("#slide ul").css("top", -250);

  $(window).on('touchmove.noScroll', function(e) {
    e.preventDefault();
    });

	/** ①指が触れたか検知 */
	$("#swipe").on("touchstart", start_check);

	/** ②指が動いたか検知 */
	$("#swipe").on("touchmove", move_check);

	/** ③指が離れたか検知 */
	$("#swipe").on("touchend", end_check);

	/** 変数宣言 */
	var moveY, posiY;


	// ④タッチ開始時の処理
	function start_check(event)
	{
		/** 現在の座標取得 */
		posiY = getY(event);

		/** 移動距離状態を初期化 */
		moveY = '';

		/** 表示メッセージを初期化 */
		msgY = '';
	}

	// ⑤スワイプ中の処理
	function move_check(event)
	{


		if (posiY - getY(event) > 70) // 70px以上移動でスワイプと判断
		{
			/** 下→上と判断 */
			moveY = "top";
		}
		else if (posiY - getY(event) < -70)  // 70px以上移動でスワイプと判断
		{
			/** 上→下と判断 */
			moveY = "bottom";
		}
	}

	// ⑥指が離れた時の処理
	function end_check(event)
	{


		if (moveY == "top")
		{
			$("#slide ul").animate({"top" : "-=250px" },
      duration, function() {
        $(this).append($("#slide li:first-child"));
        $(this).css("top", -250);
      });
		}
		else (moveY == "bottom")
		{
			$("#slide ul").animate({"bottom" : "-=250px" },
      duration, function() {
        $(this).prepend($("#slide li:last-child"));
        $(this).css("bottom", -250);
      });
		}



	}


	// 座標取得処理
	function getY(event)
	{
		//縦方向の座標を取得
		return (event.originalEvent.touches[0].pageY);
	}


});

// ------ 実績のスワイプ部分ここまで -----

