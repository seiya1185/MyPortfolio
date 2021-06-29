// ----- ヘッダーのサイズを変更する -----

$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".header__inner").addClass("small");
    } else {
      $(".header__inner").removeClass("small");
    }
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".header__inner__logo").addClass("small");
    } else {
      $(".header__inner__logo").removeClass("small");
    }
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".nav__list").addClass("small");
    } else {
      $(".nav__list").removeClass("small");
    }
  });
});

// ----- ヘッダーのサイズを変更する -----

// ページ内リンクの設定 --------

$(function () {
  $('a[href*="#"]').click(function () {
    var target = $($(this).attr("href")).offset().top;

    target -= 50;

    $("html, body").animate({ scrollTop: target }, 500);

    return false;
  });
});

// ------ ページ内リンク ------

// スライドイン ---------

// PC版のみ上からスライド
if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
  $(function () {
    $(window).scroll(function () {
      const wHeight = $(window).height();
      const scrollAmount = $(window).scrollTop();
      const delayTime = 500;
      $(".slideX").each(function (i) {
        const targetPosition = $(this).offset().top;
        if (scrollAmount > targetPosition - wHeight + 60) {
          $(this)
            .delay(i * delayTime)
            .queue(() => {
              $(this).addClass("fadeInDown").dequeue();
            });
        }
      });
    });
  });
}

// スマホ版のみ横からスライド
if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
  $(function () {
    $(window).scroll(function () {
      const wHeight = $(window).height();
      const scrollAmount = $(window).scrollTop();
      const delayTime = 500;
      $(".slideX").each(function (i) {
        const targetPosition = $(this).offset().top;
        if (scrollAmount > targetPosition - wHeight + 60) {
          $(this)
            .delay(i * delayTime)
            .queue(() => {
              $(this).addClass("fadeInDown").dequeue();
              $(this).addClass("slide-left").dequeue();
            });
        }
      });
    });
  });
}

// スライドインここまで --------

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
  $(".hamburger__link").click(function () {
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

$(".slider").slick({
  autoplay: false, //自動的に動き出すか。初期値はfalse。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  speed: 500, //スライドのスピード。初期値は300。
  slidesToShow: 3, //スライドを画面に3枚見せる
  slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
  centerMode: true, //要素を中央ぞろえにする
  variableWidth: true, //幅の違う画像の高さを揃えて表示
  dots: true, //下部ドットナビゲーションの表示
});

// テーブルエルのハイライト ---------

$(function () {
  // セルをマウスオーバー
  $("td").hover(
    function () {
      $(this).parent().addClass("target");
    },
    function () {
      $(".target").removeClass("target");
    }
  );
});

// テーブルセルのハイライトここまで ---------

$(function () {
  $(window).scroll(function () {
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    const delayTime = 200;
    $(".slideY").each(function (i) {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 60) {
        $(this)
          .delay(i * delayTime)
          .queue(() => {
            $(this).addClass("fadeInDown").dequeue();
          });
      }
    });
  });
});


particlesJS("particles-js", {
	"particles":{
		"number":{
			"value":30,//この数値を変更すると桜の数が増減できる
			"density":{
				"enable":true,
				"value_area":1121.6780303333778
			}
		},
		"color":{
			"value":"#fff"
		},
		"shape":{
			"type":"image",//形状は画像を指定
			"stroke":{
				"width":0,
			},
			"image":{
				"src":"img/common/flower.png",//【重要】画像を指定！桜の画像を設定してください。
				"width":120,
				"height":120
			}
		},
		"opacity":{
			"value":0.06409588744762158,
			"random":true,
			"anim":{
				"enable":false,
				"speed":1,
				"opacity_min":0.1,
				"sync":false
			}
		},
		"size":{
			"value":8.011985930952697,
			"random":true,//サイズをランダムに
			"anim":{
				"enable":false,
				"speed":4,
				"size_min":0.1,
				"sync":false
			}
		},
		"line_linked":{
			"enable":false,
		},
		"move":{
			"enable":true,
			"speed":7,//この数値を小さくするとゆっくりな動きになる
			"direction":"bottom-right",//右下に向かって落ちる
			"random":false,//動きはランダムにしない
			"straight":false,//動きをとどめない
			"out_mode":"out",//画面の外に出るように描写
			"bounce":false,//跳ね返りなし
			"attract":{
				"enable":false,
				"rotateX":281.9177489524316,
				"rotateY":127.670995809726
			}
		}
	},
	"interactivity":{
		"detect_on":"canvas",
		"events":{
			"onhover":{
				"enable":false,
			},
			"onclick":{
				"enable":false,
			},
			"resize":true
		}
	},
	"retina_detect":false
});
