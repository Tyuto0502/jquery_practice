//Q1-1 読み込み時に文字の色変化

$(function(){
  //ページをロードしたときにボタン内の文字色を変換
  $("#q1").css("color","green");
});


//Q1-2 クリックしてボタンの色変更

$(function(){
  //クリックしたときにボタン(q2)の色を変更
  $("#q2").on("click", function(){
    //.cssでスタイルを取得しボタン(q2)の色を変更
    $(this).css("background","pink");
  });
});


//Q1-3 クリックしてフェードアウト

$(function(){
  //クリックしてボタン(q3)がフェードアウト
  $("#q3").on("click",function(){
    //3秒かけてボタン(q3)をフェードアウト
    $(this).fadeOut(3000);
  });
});


//Q1-4 クリックしてサイズ変更

$(function(){
  //クリックしてボタン(q4)を拡大
  $("#q4").on("click",function(){
    //クラス「large」を追加してボタン(q4)を拡大
    $(this).addClass("large");
  });
});


//Q1-5 クリックしてDOMの挿入

$(function(){
  //クリックしてDOMを挿入
  $("#q5").on("click",function(){
    //DOM(<button id="q5" class="btn"></button>)の前にDOM(要素)を追加
    $(this).before("<b>DOMの前</b>"),
    //DOM(<button id="q5" class="btn"></button>)の後ろにDOM(要素)を追加
    $(this).after("<b>DOMの後</b>"),
    //DOM(<button id="q5" class="btn"></button>)内の先頭にDOM(要素)を追加
    $(this).prepend("<b>DOMの中の前</b>"),
    //DOM(<button id="q5" class="btn"></button>)内の末尾にDOM(要素)を追加
    $(this).append("<b>DOMの中の後</b>");
  });
});


//Q1-6 クリックして移動

$(function(){
  //クリックしてボタン(q6)を移動
  $("#q6").on("click",function(){
    //斜め右下へ2秒かけて移動
    $(this).animate({"marginTop":100,"marginLeft":100}, 2000);
  });
});


//Q1-7 クリックしてidのノードをコンソールで表示
$(function(){
  //クリックしてidのノード取得
  $("#q7").on("click",function(){
    //id = q7のノードをコンソールへ出力
    console.log(q7);
  });
});


//Q1-8 ホバー時にサイズ変更
$(function(){
  //マウスカーソルをボタンにあわせた時にボタン拡大
  $("#q8").on("mouseenter",function(){
    //クラス「large」を追加してボタン(q8)を拡大
    $(this).addClass("large");
  }),
  //マウスカーソルがボタンから離れた時にボタン縮小(拡大前サイズへ)
  $("#q8").on("mouseleave",function(){
    //クラス「large」を削除して元のサイズへ
    $(this).removeClass("large");
  });
});


//Q1-9 クリックして配列のアラート表示
$(function(){
  //クリックしたときにアラート表示
  $("#q9 li").on("click",function(){
    //indexを指定して要素の何番目か取得
    const alertNum = $("#q9 li").index(this);
    //アラート表示
    alert(alertNum);
  });
});


//Q1-10 Q10をクリックしてQ11を操作
$(function(){
  //Q10をクリックしてQ11文字を大きく
  $("#q10 li").on("click",function(){
    //indexを指定して要素の何番目か取得
    const className = $("#q10 li").index(this);
    //子要素を取得しクラス追加
    $("#q11 li").eq(className).addClass("large-text");
    //コンソールへ子要素が取得されクラスが追加されているか結果を表示
    console.log($("#q11 li").eq(className));
  });
});