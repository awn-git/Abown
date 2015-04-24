//////////////////////////////////////////////////////////////////////
//              ,,                                              
//      db     *MM                                              
//     ;MM:     MM                                              
//    ,V^MM.    MM,dMMb.   ,pW"Wq.`7M'    ,A    `MF'`7MMpMMMb.  
//   ,M  `MM    MM    `Mb 6W'   `Wb VA   ,VAA   ,V    MM    MM  
//   AbmmmqMA   MM     M8 8M     M8  VA ,V  VA ,V     MM    MM  
//  A'     VML  MM.   ,M9 YA.   ,A9   VVV    VVV      MM    MM  
//.AMA.   .AMMA.P^YbmdP'   `Ybmd9'     W      W     .JMML  JMML.
//////////////////////////////////////////////////////////////////////

//--------------------
//option.js
//--------------------



//=====================================//
//ほぞんボタン押下時
//フォームの値を元にストレージに値を格納する
//

$("#hozons").click(function(){


	if( confirm("（　＾＾）ほぞんするお？") ){
		$has = $("#h_a_list").val().split("\n");
		if( $has == "" ){ $has = []; }
		chrome.storage.local.set({"h_a_list":$has},function(){});

		$sas = $("#s_a_list").val().split("\n");
		if( $sas == "" ){ $sas = []; }
		chrome.storage.local.set({"s_a_list":$sas},function(){});

		$nwl = $("#ng_word_list").val().split("\n");
		if( $nwl == "" ){ $nwl = []; }
		chrome.storage.local.set({"ng_word_list":$nwl},function(){});

		$nthl = $("#ng_th_list").val().split("\n");
		if( $nthl == "" ){ $nthl = []; }
		chrome.storage.local.set({"ng_th_list":$nthl},function(){});

		$ntl = $("#ng_tw_list").val().split("\n");
		if( $ntl == "" ){ $ntl = []; }
		chrome.storage.local.set({"ng_tw_list":$ntl},function(){});



		//隠し機能：スレ一覧をスレタイごとに開業を入れて表示
		$sbezck = $("#sbez").prop("checked");
		chrome.storage.local.set({"sbezck":$sbezck},function(){});
		
		//隠し機能：スレ一覧を作成順で表示
		$createdck = $("#created").prop("checked");
		chrome.storage.local.set({"createdck":$createdck},function(){});




		alert("（　＾＾）ほぞんしたお");
	}else{
		alert("（　＾＾）ほぞんしてないお");
	}
});

//
//
//
//=====================================//


//=====================================//
//
//でふぉるとボタンをおした時
//

$("#defo").click(function(){
	if( confirm("（　＾＾）でふぉるとにもどすお？") ){

	//ストレージに値を格納
		chrome.storage.local.set({'h_a_list':["◆"]},function(){});//コテあぼーんハードは"◆"
		chrome.storage.local.set({'s_a_list':["◆"]},function(){});//コテあぼーんソフトは"◆"
		chrome.storage.local.set({'ng_word_list':[]},function(){});//NGワードは何も設定しない
		chrome.storage.local.set({'ng_th_list':[]},function(){});//NGスレタイは何も設定しない
		chrome.storage.local.set({'ng_tw_list':["@"]},function(){});//NGTWIDは"@"
		chrome.storage.local.set({'sbezck':false},function(){});//隠しオプションはチェックを外す
		chrome.storage.local.set({'createdck':false},function(){});//隠しオプションはチェックを外す

	//おぷしょんページの表示を変更
		$("#h_a_list").val("◆");
		$("#s_a_list").val("◆");
		$("#ng_word_list").val("");
		$("#ng_th_list").val("");
		$("#ng_tw_list").val("@");
		$("#sbez").prop("checked",false);
		$("#created").prop("checked",false);

		alert("（　＾＾）もどしたお");
	}else{
		alert("（　＾＾）もどしてないお")
	}

});

//
//
//
//=====================================//


//=====================================//
//
//おぷしょんぺーじを開いた時の処理
//

$(document).ready(function(){

//例の初期化処理を実行
init_storage();


//ストレージからNGワードなどを取得し、おぷしょんぺーじに表示する
chrome.storage.local.get(["h_a_list","s_a_list","ng_word_list","ng_th_list","ng_tw_list","sbezck","createdck"],function(items){
			$("#h_a_list").val( items.h_a_list.join("\n") );
			$("#s_a_list").val( items.s_a_list.join("\n") );
			$("#ng_word_list").val( items.ng_word_list.join("\n") );
			$("#ng_th_list").val( items.ng_th_list.join("\n") );
			$("#ng_tw_list").val( items.ng_tw_list.join("\n") );

			$("#sbez").prop("checked",items.sbezck);
			$("#created").prop("checked",items.createdck);
			
	});
});


//
//
//
//=====================================//