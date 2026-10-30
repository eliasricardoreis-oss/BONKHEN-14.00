(function(){
'use strict';
var logEl=document.getElementById('log');
function log(s){if(logEl){logEl.textContent+='\n'+s;}}
function byId(id){return document.getElementById(id);}
function setText(id,value){var el=byId(id);if(el){el.textContent=value;}}
function detectConsole(){
 var ua=(navigator.userAgent||'')+' '+(navigator.platform||'');
 var name='Non identifiée';
 if(/PlayStation\s*4|\bPS4\b/i.test(ua)){name='PlayStation 4';}
 else if(/PlayStation\s*5|\bPS5\b/i.test(ua)){name='PlayStation 5';}
 else if(/PlayStation/i.test(ua)){name='PlayStation (modèle non identifié)';}
 else if(/Windows|Macintosh|Linux|Android|iPhone|iPad/i.test(ua)){name='Ordinateur / appareil mobile';}
 setText('consoleState',name);setText('firmwareState','Non déterminable');setText('browserState',navigator.userAgent||'User-Agent indisponible');
 log('[DETECT] Appareil : '+name+'.');log('[INFO] Le navigateur ne permet pas d’authentifier le firmware.');
}
function testBrowser(){
 var tests=[['JavaScript',typeof window!=='undefined'],['XMLHttpRequest',typeof XMLHttpRequest!=='undefined'],['JSON',typeof JSON!=='undefined'],['localStorage',false],['Canvas',false]];
 try{tests[3]=['localStorage',!!window.localStorage];}catch(e){}
 try{tests[4]=['Canvas',!!document.createElement('canvas').getContext];}catch(e){}
 var ok=0;for(var i=0;i<tests.length;i++){log((tests[i][1]?'[OK] ':'[INFO] ')+tests[i][0]);if(tests[i][1])ok++;}
 setText('browserCapabilities',ok+'/'+tests.length+' tests disponibles');
}
function init(){
 detectConsole();testBrowser();
 byId('showlog').addEventListener('click',function(){byId('logpanel').classList.toggle('visible');});
 byId('clearlog').addEventListener('click',function(){logEl.textContent='[BONKHEN] Journal effacé.';});
 byId('check').addEventListener('click',function(){setText('resourceState','Ressources binaires non incluses dans ce dépôt source');log('[INFO] Aucun binaire exécuté.');});
 log('[READY] Host diagnostic prêt.');log('[LOCK] Module HEN désactivé : chaîne 14.00 non vérifiée.');
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();