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
//kakusi1.js
//--------------------



//=====================================//
// 隠し機能1〜スレ一覧を操作する〜
// -createdckにチェックが入っていたら　⇒　スレ一覧を「作成順」に表示する
// -sbezckにチェックが入っていたら　⇒　スレ一覧にて、スレタイ毎に改行して表示する


function kakusi1(){

	chrome.storage.local.get(
	["sbezck","createdck"],function(items){
		//スレ一覧を「作成順」に表示する
		if ( items.createdck ){
				console.log("exec orderByCreated");
				orderByCreated();
		}

		//スレ一覧にて、スレタイ毎に改行して表示する
		if( items.sbezck ){
				console.log("exec subbackEZ");
				subbackEZ();
		}

	});




	//-----------------------
	// 関数：orderByCreated
	// スレ一覧を「作成順」に表示する

	// おーぷん２ちゃんねる：プログラム技術板のブックマークレットスレより、先人の知恵を拝借します。
	// see URL http://toro.open2ch.net/test/read.cgi/tech/1372630732/24-25

	//◆ここから
	function orderByCreated(){
		var d=document;
		var n=d.getElementsByTagName('a');
		var p=n[0].parentNode;
		var a=new Array();
		for(var i=n.length-1;i>=0;i--){
			a.push(n[i]);
			p.removeChild(n[i])
			}
		//a.sort(function(a,b){return a.href<b.href;});
		a.sort(function(a,b){return a.href<b.href?1:-1;});
		for(var i=0;i<a.length;i++){
			p.appendChild(a[i]);
		//var br=d.createElement('br');
		//a[i].appendChild(br);
		}
	}
	//◆ここまで

	//
	//
	//-----------------------


	//-----------------------
	// 関数：subbackEZ
	// スレ一覧(http://*.open2ch.net/*/subback.html)を、スレタイ毎に改行して表示する

	function subbackEZ(){	
				$("body").css("background-color","honeydew");
				$("a").after("<br>");
				$("a").hover(function(){$(this).css("background-color","cyan")},function(){$(this).css("background-color","transparent")});
				$("small").css("font-size","18px");			
	}

	//
	//
	//-----------------------

}
