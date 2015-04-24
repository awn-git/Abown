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
//background.js
//--------------------



//=====================================//
// onCompletedを使い、
// "http://*.open2ch.net/ajax/get_res*"が鯖からスレに読み込まれたら
// content_scripts.jsを実行する
//

chrome.webRequest.onCompleted.addListener(function(onc){
		chrome.tabs.executeScript(onc.tabId,{file:"content_scripts.js"});
},{urls: ["http://*.open2ch.net/ajax/get_res*"]});

//
//
//=====================================//



//=====================================//
// chrome.contextMenus.createを使って
// コンテキストメニュー作成する
//


//コテあぼーん(親)
chrome.contextMenus.create({
        type: 'normal',
        id: '1',
        contexts:['selection'],
        title: 'コテあぼーん'
    });


//コテあぼーん（ハード）
chrome.contextMenus.create({
        type: 'normal',
        parentId:'1',
        id: '11',
        contexts:['selection'],
        title: 'ハードあぼーんにする',

        onclick:function(info){
        	chrome.tabs.query({title: "おぷしょんぺーじ"},function(tabs){
        	
        	//おぷしょんぺーじが開いていたら強制終了	
	        	if( tabs[0] !== undefined ){
	        		alert("おぷしょんぺーじは閉じてね！");
	        		return;
	        	}

	        //選択した文字列を取得
	        	infostr = info.selectionText;

	        //ストレージに格納
	        	chrome.storage.local.get(["h_a_list"],function(items){
	        		old_item = [];
	        		if( items.h_a_list != ""){
	        			old_item = old_item.concat(items.h_a_list);
	        		}

	        		if( confirm("（　＾＾）" + infostr + "を追加するかお？") ){
	        			new_item = [];
	        			new_item = old_item.concat(infostr);
	        			chrome.storage.local.set({"h_a_list":new_item},function(){
							alert("（　＾＾）保存したお");
	        			});

	        		}else{
	        			alert("（　＾＾）保存してないお");
	        		}
	        	});

	        });
        }
    
});



//コテあぼーん（ソフト）
chrome.contextMenus.create({
        type: 'normal',
        parentId:'1',
        id: '12',
        contexts:['selection'],
        title: 'ソフトあぼーんにする',

        onclick:function(info){
        	chrome.tabs.query({title: "おぷしょんぺーじ"},function(tabs){
        	
        	//おぷしょんぺーじが開いていたら強制終了	
	        	if( tabs[0] !== undefined ){
	        		alert("おぷしょんぺーじは閉じてね！");
	        		return;
	        	}

	        //選択した文字列を取得
	        	infostr = info.selectionText;


	        //ストレージに格納
	        	chrome.storage.local.get(["s_a_list"],function(items){
	        		old_item = [];
	        		if( items.s_a_list != ""){
	        			old_item = old_item.concat(items.s_a_list);
	        		}
	        		
	        		if( confirm("（　＾＾）" + infostr + "を追加するかお？") ){
	        			new_item = [];
	        			new_item = old_item.concat(infostr);
	        			chrome.storage.local.set({"s_a_list":new_item},function(){
							alert("（　＾＾）保存したお");
	        			});

	        		}else{
	        			alert("（　＾＾）保存してないお");
	        		}
	        	});
        });
    }
});



//NGワード
chrome.contextMenus.create({
        type: 'normal',
        id: '2',
        contexts:['selection'],
        title: 'NGワードにする',

        onclick:function(info){
        	chrome.tabs.query({title: "おぷしょんぺーじ"},function(tabs){
        	
        	//おぷしょんぺーじが開いていたら強制終了	
	        	if( tabs[0] !== undefined ){
	        		alert("おぷしょんぺーじは閉じてね！");
	        		return;
	        	}

	        //選択した文字列を取得
	        	infostr = info.selectionText;


	        //ストレージに格納
	        	chrome.storage.local.get(["ng_word_list"],function(items){
	        		old_item = [];
	        		if( items.ng_word_list != ""){
	        			old_item = old_item.concat(items.ng_word_list);
	        		}
	        		
	        		if( confirm("（　＾＾）" + infostr + "を追加するかお？") ){
	        			new_item = [];
	        			new_item = old_item.concat(infostr);
	        			chrome.storage.local.set({"ng_word_list":new_item},function(){
							alert("（　＾＾）保存したお");
	        			});

	        		}else{
	        			alert("（　＾＾）保存してないお");
	        		}
	        	});
        });
    }
});        



//NGスレタイ
chrome.contextMenus.create({
        type: 'normal',
        id: '3',
        contexts:['selection'],
        title: 'NGスレタイにする',

        onclick:function(info){
        	chrome.tabs.query({title: "おぷしょんぺーじ"},function(tabs){
        	
        	//おぷしょんぺーじが開いていたら強制終了	
	        	if( tabs[0] !== undefined ){
	        		alert("おぷしょんぺーじは閉じてね！");
	        		return;
	        	}

	        //選択した文字列を取得
	        	infostr = info.selectionText;


	        //ストレージに格納
	        	chrome.storage.local.get(["ng_th_list"],function(items){
	        		old_item = [];
	        		if( items.ng_th_list != ""){
	        			old_item = old_item.concat(items.ng_th_list);
	        		}
	        		
	        		if( confirm("（　＾＾）" + infostr + "を追加するかお？") ){
	        			new_item = [];
	        			new_item = old_item.concat(infostr);
	        			chrome.storage.local.set({"ng_th_list":new_item},function(){
							alert("（　＾＾）保存したお");
	        			});

	        		}else{
	        			alert("（　＾＾）保存してないお");
	        		}
	        	});
        });
    }
});  



//NGTWID
chrome.contextMenus.create({
        type: 'normal',
        id: '4',
        contexts:['selection'],
        title: 'NGTWIDにする',

        onclick:function(info){
        	chrome.tabs.query({title: "おぷしょんぺーじ"},function(tabs){
        	
        	//おぷしょんぺーじが開いていたら強制終了	
	        	if( tabs[0] !== undefined ){
	        		alert("おぷしょんぺーじは閉じてね！");
	        		return;
	        	}

	        //選択した文字列を取得
	        	infostr = info.selectionText;


	        //ストレージに格納
	        	chrome.storage.local.get(["ng_tw_list"],function(items){
	        		old_item = [];
	        		if( items.ng_tw_list != ""){
	        			old_item = old_item.concat(items.ng_tw_list);
	        		}
	        		
	        		if( confirm("（　＾＾）" + infostr + "を追加するかお？") ){
	        			new_item = [];
	        			new_item = old_item.concat(infostr);
	        			chrome.storage.local.set({"ng_tw_list":new_item},function(){
							alert("（　＾＾）保存したお");
	        			});

	        		}else{
	        			alert("（　＾＾）保存してないお");
	        		}
	        	});
        });
    }
});             


//
//
//=====================================//