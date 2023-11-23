
$(function(){
  //セレクトメニューを変更した時に表示カテゴリーが変化
  $(".select-box").on("change", function(){
    //.select-boxのオプションの値を取得し変数定義
    const value = $(".select-box").val();
    //.food-listの子要素を取得し変数定義
    const list_child = $(".food-list").children();
    //.food-list liを変数定義
    const list = $(".food-list li");
    //条件分岐でセレクトメニューのオプションの値が"all”の時の処理
    if(value === "all") {
      //全リスト項目を表示
      $(list).show();
    } else {
      //リスト項目の要素数分ループ処理を指定
      $.each(list, function(index, list_child){
        //.food-listの子要素のdata属性を取得と変数定義
        const data = $(list_child).data("category-type");
        if(value === data) {
          //選択したセレクトメニューのオプションの値とデータの値が一致した場合項目を表示
          $(list_child).show();
        } else {
          //選択したセレクトメニューのオプションの値とデータの値が一致しなかった場合項目を非表示
          $(list_child).hide();
        };
      });
    };
  });
});
