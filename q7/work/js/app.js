
$(function(){
  //アカウント作成ボタンをクッリクした時に項目・入力内容を取得
  $(".btn__submit").on("click", function(){
    //ブラウザのコンソールに入力項目を出力
    console.log($($(".label__text")[0].outerHTML).children().empty().parent().text().trim());
    //ブラウザのコンソールに入力蘭のidのバリューを取得し入力内容を出力
    console.log($("#family__name").val());
    
    //ブラウザのコンソールに入力項目を出力
    console.log($($(".label__text")[1].outerHTML).children().empty().parent().text().trim());
    //ブラウザのコンソールに入力蘭のidのバリューを取得し入力内容を出力
    console.log($("#given__name").val());
    
    //ブラウザのコンソールに入力項目を出力
    console.log($($(".label__text")[2].outerHTML).children().empty().parent().text().trim());
    //ブラウザのコンソールに各選択の選択されたオプションのバリューを取得し選択内容を出力
    console.log($(".year").val()+"年"+$(".month").val()+"月"+$(".day").val()+"日");
    
    //ブラウザのコンソールに入力項目を出力
    console.log($($(".label__text")[3].outerHTML).children().empty().parent().text().trim());
    //ブラウザのコンソールにチェックされたラジオボタンのバリューを取得し出力
    console.log($('input[name="gender"]:checked').val());
    
    //ブラウザのコンソールに入力項目を出力
    console.log($($(".label__text")[4]).text());
    //ブラウザのコンソールに選択されたオプションのバリューを取得し出力
    console.log($(".occupation").val());
    
    //ブラウザのコンソールに入力項目を出力
    console.log($($(".label__text")[5].outerHTML).children().empty().parent().text().trim());
    //ブラウザのコンソールに入力蘭のidのバリューを取得し入力内容を出力
    console.log($("#account__name").val());
    
    //ブラウザのコンソールに入力項目を出力
    console.log($($(".label__text")[6].outerHTML).children().empty().parent().text().trim());
    //ブラウザのコンソールに入力蘭のidのバリューを取得し入力内容を出力
    console.log($("#email").val());
    
    //ブラウザのコンソールに入力項目を出力
    console.log($($(".label__text")[7].outerHTML).children().empty().parent().text().trim());
    //ブラウザのコンソールに入力蘭のidのバリューを取得し入力内容を出力
    console.log($("#password").val());
    
    //ブラウザのコンソールに入力項目を出力
    console.log($($(".label__text")[8].outerHTML).children().empty().parent().text().trim());
    //ブラウザのコンソールに入力蘭のidのバリューを取得し入力内容を出力
    console.log($("#duplication__password").val());
    
    //ブラウザのコンソールに入力項目を出力
    console.log($($(".label__text")[9].outerHTML).children().empty().parent().text().trim());
    //ブラウザのコンソールに入力蘭のidのバリューを取得し入力内容を出力
    console.log($("#address").val());
    
    //ブラウザのコンソールに入力項目を出力
    console.log($($(".label__text")[10].outerHTML).children().empty().parent().text().trim());
    //ブラウザのコンソールに入力蘭のidのバリューを取得し入力内容を出力
    console.log($("#tel").val());
    
    //ブラウザのコンソールに項目タイトルを出力
    console.log($($(".content__title")[3]).text());
    //選択された項目のvalue値を取得する繰り返し処理
    $(".subscription__checkbox:checked").each(function(){
      //変数に選択された項目のvalue値取得処理を代入
      const checkBox = $(this).val();
      //ブラウザのコンソールに変数の処理内容を出力
      console.log(checkBox);
    })
  });
});