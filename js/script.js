  // ----- ヘッダーのサイズを変更する -----

  $(function() {
    $(window).scroll(function(){
      if($(window).scrollTop() > 100) {
        $(".header__inner").addClass("small");
      }else{
        $(".header__inner").removeClass("small");
      }
    });
    $(window).scroll(function(){
      if($(window).scrollTop() > 100) {
        $(".header__inner__logo").addClass("small");
      }else{
        $(".header__inner__logo").removeClass("small");
      }
    });
    $(window).scroll(function(){
      if($(window).scrollTop() > 100) {
        $(".nav__list").addClass("small");
      }else{
        $(".nav__list").removeClass("small");
      }
    });
  });

  // ----- ヘッダーのサイズを変更する -----



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

$('.slider').slick({
  autoplay: false,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  speed: 500,//スライドのスピード。初期値は300。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  centerMode: true,//要素を中央ぞろえにする
  variableWidth: true,//幅の違う画像の高さを揃えて表示
  dots: true,//下部ドットナビゲーションの表示
});
