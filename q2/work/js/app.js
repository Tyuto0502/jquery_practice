$(function() {
  //Openボタンをクリックするとモーダルウィンドウが表示
  $(".modal_open_button").on("click",function(){
    //モーダルウィンドウの要素をフェードインで表示
    $(".modal_win").fadeIn();
  });
  //モーダルウィンドウの「X」をクリックしてウィンドウを閉じる
  $(".modal_close_button").on("click",function(){
    //モーダルウィンドウの要素をフェードアウトし非表示
    $(".modal_win").fadeOut();
  });
});