$(function(){
  //タブをクリックしたした時にタブのコンテンツを切り替える
  $(".nav li").on("click",function(){
    //タブ要素の何番目かを取得する
    $(".nav li").index(this);
    //ホームコンテンツ要素にクラス名「is-hidden」を追加
    $(".description li").addClass("is-hidden");
    //ホームコンテンツ要素の何番目かを取得しクラス名「is-hidden」を削除
    $(".description li").eq($(".nav li").index(this)).removeClass("is-hidden");
  });
});