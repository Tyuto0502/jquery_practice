$(function(){
  //タブにマウスカーソルをあわせた時にメニュー表示される
  $(".dropdwn li").hover(
    //マウスがタブに来たときにメニュー内容をスライドダウンして表示
    function(){
    $(".dropdwn_menu:not(:animated)",this).slideDown();
    },
    //マウスがタブから離れたときにメニュー内容をスライドアップして非表示
    function(){
      $(".dropdwn_menu",this).slideUp();
    }
  );
});