!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n=document.getElementById("color");n.addEventListener("input",(function(){var e=n.value;document.documentElement.style.setProperty("--color",e)}))},function(e,t){var n=document.getElementById("font");n.addEventListener("input",(function(){var e=n.value;document.documentElement.style.setProperty("--font",e)}))},function(e,t){var n=document.getElementById("size");n.addEventListener("input",(function(){var e=n.value;document.documentElement.style.setProperty("--size",e)}))},function(e,t,n){"use strict";n.r(t);n(4),n(0),n(1),n(2);console.log("HELLO 🚀 I'm trying to make a notepad");var o=document.querySelector(".text--js"),r=document.querySelector(".save--js"),u=document.querySelector(".load--js"),c=document.querySelector(".clear--js");r.addEventListener("click",(function(){localStorage.setItem("saved",o.value),console.log("saved")})),u.addEventListener("click",(function(){o.value=localStorage.getItem("saved",o.value),console.log("loaded")})),c.addEventListener("click",(function(){o.value="",console.log("cleared")}))},function(e,t,n){}]);