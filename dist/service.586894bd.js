parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"lBJs":[function(require,module,exports) {
var e=document.querySelector(".header-fixed");window.addEventListener("scroll",function(){document.body.scrollTop>600||document.documentElement.scrollTop>600?e.classList.add("active"):e.classList.remove("active")});var t=function(e){var t=e.dataset.slide;r.classList.remove("package","translate","live-stream","transcript","internet"),r.classList.add(t)},r=document.querySelector(".service-slide"),c=r.querySelectorAll(".slide-button");c.forEach(function(e){e.addEventListener("click",function(){return t(e)})});var n=function(e){var t=parseInt(a.dataset.price,10),r=parseInt(e.dataset.direction,10);a.dataset.price=t+r},a=document.querySelector(".prices").querySelector(".container-main"),o=a.querySelectorAll(".price-button");console.log(a),o.forEach(function(e){e.addEventListener("click",function(){return n(e)})});
},{}]},{},["lBJs"], null)