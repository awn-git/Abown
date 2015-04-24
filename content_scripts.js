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
//content_scripts.js
//--------------------



//=====================================//
// DOM読み込み時に実行する関数群

//初期化
init_storage();


//Abown初回起動時以降実行される
chrome.storage.local.get(
	[
	"kote_hard",
	"kote_soft",
	"gazo_hard",
	"gazo_soft",
	"ng_hard",
	"th_hard",
	"tw_hard",
	"h_a_list",
	"s_a_list",
	"ng_word_list",
	"ng_th_list",
	"ng_tw_list"
	],function(items){

	//==================
	// http://*.open2ch.net/*配下で実行


		//変数退避
		hard_abone_list = items.h_a_list;
		soft_abone_list = items.s_a_list;
		ng_word_listt = items.ng_word_list;
		ng_th_listt = items.ng_th_list;
		ng_tw_listt = items.ng_tw_list;


		//ハードあぼーんのみ実行
		if(items.kote_hard - items.kote_soft == 1){
			if( hard_abone_list != [] ){
				console.log("exec hardAboner");
				hardAboner();
			}
		}

		//ソフトあぼーんのみ実行
		if(items.kote_soft - items.kote_hard == 1){
			if( soft_abone_list != [] ){
				console.log("exec softAboner");
				softAboner();
			}
		}

		//ハードあぼーんもソフトあぼーんも実行
		if(items.kote_hard * items.kote_soft == 1){
			if( hard_abone_list != [] ){
				console.log("exec hardAboner");
				hardAboner();
			}

			if( soft_abone_list != [] ){
				console.log("exec softAboner");
				softAboner();
			}

		}

		//画像のハードあぼーんを実行
		if( items.gazo_hard == 1){
			console.log("exec hardGazoAboner");
			hardGazoAboner();
		}

		//画像のソフトあぼーんを実行
		if( items.gazo_soft == 1){
			console.log("exec softGazoAboner");
			softGazoAboner();				
		}

		//NGワードのハードあぼーんを実行
		if( items.ng_hard == 1){
			if( ng_word_listt != [] ){
				console.log("exec hardNgAboner");
				hardNgAboner();					
			}
		}

		//NGスレタイのハードあぼーんを実行
		if( items.th_hard == 1){
			if( ng_th_listt != [] ){
				console.log("exec hardThAboner");
				hardThAboner();
			}
		}

		//NGTWIDのハードあぼーんを実行
		if( items.tw_hard == 1){
			if( ng_tw_listt != [] ){
				console.log("exec hardTwAboner");
				hardTwAboner();
			}
		}
	}
);


//
//
//
//=====================================//


//=====================================//
//
// chrome.storage.localが書き換わった時に発火する関数（ページのリロードをするだけ）
//

chrome.storage.onChanged.addListener(function(changes, namespace) {
 		location.reload(true);
 	}
);

//
//
//=====================================//



//=====================================//
//
// 各種あぼーん関数
//


//関数：hardAboner
//指定したコテの書き込みを非表示にする。
function hardAboner(){
	$.each(hard_abone_list,function(){
		if( this != "" ){
			var $temph = $("dl dt font:contains('"+this+"'),dl dt a:contains('"+this+"'):not('.id')");
			$temph.html("<b>こてあぼーん</b>");
			$temph.parent().next().css("visibility","hidden");
			$temph.parent().next().children().css("visibility","hidden");
		}
	})
};

//関数：softAboner
//指定したコテの名前を「名無しさん＠おーぷん」にする。
function softAboner(){
	$.each(soft_abone_list,function(){
		if( this != "" ){
			var $temps = $("dl dt font:contains('"+this+"'),dl dt a:contains('"+this+"'):not('.id')");
			$temps.html("<b>名無しさん＠おーぷん</b>");
		}
	})
};

//関数：hardGazoAboner
//画像を非表示にする
function hardGazoAboner(){
	var $hga = $(".thread img[src!='http://open2ch.net/image/twitter/twicon.png'] + .thread img[src!='http://open.open2ch.net/image/icon/bubble_dark.png']");
	$hga.css("visibility","hidden");

	var $hpi = $(".mesg .pic");
	$hpi.css("visibility","hidden");
	$hpi.parent().parent().css("visibility","hidden");

	var $hpl = $("img.pic.lazy");
	$hpl.css("visibility","hidden");
	$hpl.parent().parent().css("visibility","hidden");
};

//関数：softGazoAboner
//画像を薄くする
function softGazoAboner(){
	var $sga = $(".thread img[src!='http://open2ch.net/image/twitter/twicon.png'] + .thread img[src!='http://open.open2ch.net/image/icon/bubble_dark.png']");
//	$sga.css("opacity","0.3");
	var $filterval = 'blur(3px)';//ぼかしフィルタblurのパラメータ。数字を大きくすればさらにぼかすことができる。
	$sga.css('-webkit-filter',$filterval);

	var $spi = $(".mesg .pic");
	$spi.css('-webkit-filter',$filterval);

	var $spl = $("img.pic.lazy");
	$spl.css('-webkit-filter',$filterval);
	$spl.parent().parent().css('-webkit-filter',$filterval);

};

//関数：hardNgAboner
//NGワードを含むスレを非表示にする
function hardNgAboner(){
	$.each(ng_word_listt,function(){
		if( this != "" ){
			$(".thread dl dd:contains('"+this+"')").css("visibility","hidden");
		}
	});
};

//関数：hardTwAboner
//NGTWIDを含むスレを非表示にする
function hardTwAboner(){
	$.each(ng_tw_listt,function(){
		if( this != ""){
			$hta = $("dl dt a:contains('ID:tw"+this+"')");
			$hta.html("ついったーあぼーん");
			$hta.parent().parent().next().css("visibility","hidden");
			$hta.parent().parent().next().children().css("visibility","hidden");
			$hta.parent().prev().html("<b>ついったーあぼーん</b>");
		}
	});
};



//関数：hardThAboner
//NGスレタイを非表示にする
function hardThAboner(){
	//subback.htmlの時
//	if( (location.href).indexOf("subback.html") > 0 ) {
		$.each(ng_th_listt,function(){
			if( this != "" ){
				//NGワードを含むスレタイを除外
		  		$("#topThreads a:contains('"+this+"')").empty(); //板トップのスレ一覧から
	  			$("#trad a:contains('" +this+ "')").prev().empty();//スレ一覧(subback.html)から
	  			$("#trad a:contains('" +this+ "')").empty();//スレ一覧(subback.html)から 				
			}
		});
//	};
};



//
//
//=====================================//



//=====================================//
//
// 隠し機能
//

// スレ一覧の操作を実行する
if( (location.href).indexOf("subback.html") > 0 ){
	kakusi1();
}

//
//
//
//=====================================//