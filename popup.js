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
//popup.js
//--------------------



//=====================================//
//
// popupページの保存ボタンを押した時の動作(chrome.storageに値を格納する)
//
//

$("#hozon").click(function(){

	if( $("#gazo_hard").prop("checked") && $("#gazo_soft").prop("checked") == true ){
		$("#tear").val("画像あぼーんは２つ同時チェック不可！！");
		setTimeout(function(){$("#tear").val("");},3000);
		return;
	}

	if( $("#kote_hard").prop("checked") == true ){//ハードあぼーんがチェックされた時
		chrome.storage.local.set({"kote_hard":1},function(){});
	}else{
		chrome.storage.local.set({"kote_hard":0},function(){});
	}

	if( $("#kote_soft").prop("checked") == true ){//ソフトあぼーんがチェックされた時
		chrome.storage.local.set({"kote_soft":1},function(){});
	}else{
		chrome.storage.local.set({"kote_soft":0},function(){});
	}

	if( $("#gazo_hard").prop("checked") == true ){
		chrome.storage.local.set({"gazo_hard":1},function(){});
	}else{
		chrome.storage.local.set({"gazo_hard":0},function(){});
	}

	if( $("#gazo_soft").prop("checked") == true ){
		chrome.storage.local.set({"gazo_soft":1},function(){});
	}else{
		chrome.storage.local.set({"gazo_soft":0},function(){});
	}

	if( $("#ng_hard").prop("checked") == true ){
		chrome.storage.local.set({"ng_hard":1},function(){});
	}else{
		chrome.storage.local.set({"ng_hard":0},function(){});
	}

	if( $("#tw_hard").prop("checked") == true ){
		chrome.storage.local.set({"tw_hard":1},function(){});
	}else{
		chrome.storage.local.set({"tw_hard":0},function(){});
	}

	if( $("#th_hard").prop("checked") == true ){
		chrome.storage.local.set({"th_hard":1},function(){});
	}else{
		chrome.storage.local.set({"th_hard":0},function(){});
	}

	$("#tear").val("ほぞんしますた");

	setTimeout(function(){$("#tear").val("");},3000);


});

//
//
//
//=====================================//


//=====================================//
//
//popupページがロードされた時の動作(chrome.storageから値を呼び出し、チェックボックスにセットする)
//
//

$(document).ready(function(){
	ini_st = init_storage();
	
	chrome.storage.local.get(["kote_soft","kote_hard","gazo_hard","gazo_soft","ng_hard","th_hard","tw_hard"],function(items){

		if( items.kote_hard == 1){
			$("#kote_hard").prop("checked",true);
		}else{
			$("#kote_hard").prop("checked",false);
		}

		if( items.kote_soft == 1){
			$("#kote_soft").prop("checked",true);
		}else{
			$("#kote_soft").prop("checked",false);
		}

		if( items.gazo_hard == 1){
			$("#gazo_hard").prop("checked",true);
		}else{
			$("#gazo_hard").prop("checked",false);
		}

		if( items.gazo_soft == 1){
			$("#gazo_soft").prop("checked",true);
		}else{
			$("#gazo_soft").prop("checked",false);
		}

		if( items.ng_hard == 1){
			$("#ng_hard").prop("checked",true);
		}else{
			$("#ng_hard").prop("checked",false);
		}

		if( items.th_hard == 1){
			$("#th_hard").prop("checked",true);
		}else{
			$("#th_hard").prop("checked",false);
		}

		if( items.tw_hard == 1){
			$("#tw_hard").prop("checked",true);
		}else{
			$("#tw_hard").prop("checked",false);
		}

	})
});

//
//
//
//=====================================//