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
//init_storage.js
//--------------------



//=====================================//
// 拡張機能初回起動時にのみ実行される関数
//  -content_scripts.js(おーぷん２ちゃんねるにアクセス時)
//  -option.js(オプションページを開いた時)
//  -popup.js(ポップアップを開いた時)

function init_storage(){
	chrome.storage.local.get(
		[
		"kote_hard"
		],function(items){

		//初回起動時は、chrome.storage.localにkote_hardというkeyがそもそも存在しないので、
		//chrome.storage.localでkote_hardをgetすると、items.kote_hardはundefinedになる。
		if( items.kote_hard === undefined ){ 

		//せっていぺーじの値のデフォルト
			chrome.storage.local.set({'kote_hard':1},function(){});//[デフォルト]kote_hardを有効
			chrome.storage.local.set({'kote_soft':0},function(){});//[デフォルト]kote_softを無効
			chrome.storage.local.set({'gazo_hard':0},function(){});//[デフォルト]gazo_hardを無効
			chrome.storage.local.set({'gazo_soft':0},function(){});//[デフォルト]gazo_softを無効
			chrome.storage.local.set({'ng_hard':0},function(){});//[デフォルト]ng_hardを無効
			chrome.storage.local.set({'tw_hard':0},function(){});//[デフォルト]tw_hardを無効

		//おぷしょんぺーじの値のデフォルト
			chrome.storage.local.set({'h_a_list':["◆"]},function(){});//【デフォルト】コテあぼーん(ハード)に"◆"を設定
			chrome.storage.local.set({'s_a_list':["◆"]},function(){});//【デフォルト】コテあぼーん(ソフト)に"◆"を設定
			chrome.storage.local.set({'ng_word_list':[]},function(){});//【デフォルト】NGワードは何も設定しない
			chrome.storage.local.set({'ng_th_list':[]},function(){});//【デフォルト】NGスレタイは何も設定しない
			chrome.storage.local.set({'ng_tw_list':["@"]},function(){});//【デフォルト】NGTWIDは"@"を設定
			chrome.storage.local.set({'sbezck':false},function(){});//隠しオプションはチェックを外す
			chrome.storage.local.set({'createdck':false},function(){});//隠しオプションはチェックを外す

		//ページを再読み込み
		location.reload(true);
		}
	});
}

//
//
//
//=====================================//