/*
	만들 모듈부터 정리합시다.
	1. DOM코어 모듈
	2. function 자동구축 모듈
*/
var cid = function(id) { //getElementById
	var tmp = id === "body" ? document.body : document.getElementById(id);
	return tmp;
},
ctn = function(tn,id) { //getElementsByTagName
	var tmp = id ? cid(id).getElementsByTagName(tn) : document.body.getElementsByTagName(tn);
	return tmp;
}, 
ccn = function(cn,id,tn) {
	var tmp = id ? tn ? ctn(tn,id) : ctn('*',id) : ctn('*'), ln = tmp.length, i = 0, j = 0, atmp = {};
	for(i; i < ln; i++) {
		if(tmp[i].className === cn) {
			atmp[j] = tmp[i];
			j++;
		}
	};
	return atmp;
}, //getElementsByClassName
eac = function(tn,id,opt) {
	alert(opt);
}, //appendChild
eib = function(tn,id,opt) { }, //insertBefore
erm = function(tn,id) { }; //remove node
