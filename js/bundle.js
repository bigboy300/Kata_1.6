!function(e){var t={};function n(c){if(t[c])return t[c].exports;var o=t[c]={i:c,l:!1,exports:{}};return e[c].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5)},function(e,t,n){},function(e,t){var n=document.querySelector(".about-content__read-more"),c=document.querySelector(".text-content");window.innerWidth>768&&n.addEventListener("click",(function(){"Читать далее"===n.textContent?(c.style.height="auto",n.textContent="Свернуть",n.classList.add("read-more--close")):(n.textContent="Читать далее",c.style.height="158px",n.classList.remove("read-more--close"))})),window.innerWidth<768&&n.addEventListener("click",(function(){"Читать далее"===n.textContent?(c.style.height="auto",n.textContent="Свернуть"):(n.textContent="Читать далее",c.style.height="158px")}));var o=document.querySelector(".equipment-container"),r=document.getElementById("deviceBtn");r.addEventListener("click",(function(){"Показать всё"===r.textContent?(o.style.height="auto",r.textContent="Скрыть",r.classList.add("read-more--close")):(r.textContent="Показать всё",o.style.height="170px",r.classList.remove("read-more--close"))}))},function(e,t){var n=document.querySelector(".circle-btn--burger"),c=document.querySelector(".mobile-menu-block"),o=document.querySelector(".circle-btn--close-burger"),r=document.querySelector(".mute-area");function i(){c.classList.add("mobile-menu-block--hidden"),n.style.display="block"}n.addEventListener("click",(function(){c.classList.remove("mobile-menu-block--hidden"),n.style.display="none"})),o.addEventListener("click",i),r.addEventListener("click",i);var l=document.querySelector(".circle-btn--contact"),d=document.querySelector(".user-panel__circle-btn--contact"),a=document.querySelector(".call"),s=document.querySelector(".call__close-button"),u=a.querySelector(".mute-area");function m(){a.classList.add("call-block--hidden")}function f(){a.classList.remove("call-block--hidden")}l.addEventListener("click",f),d.addEventListener("click",f),s.addEventListener("click",m),u.addEventListener("click",m);var y=document.querySelector(".circle-btn--chat"),b=document.querySelector(".wrapper__circle-btn--chat"),p=document.querySelector(".feedback"),v=document.querySelector(".feedback__close-button"),h=p.querySelector(".mute-area");function k(){p.classList.remove("feedback--hidden")}function L(){p.classList.add("feedback--hidden")}y.addEventListener("click",k),b.addEventListener("click",k),v.addEventListener("click",L),h.addEventListener("click",L)},function(e,t){var n=document.getElementById("toggleButton"),c=Array.from(document.getElementsByClassName("block")).slice(8,11),o=Array.from(document.getElementsByClassName("block")).slice(6,11),r=!1;window.innerWidth<1120&&n.addEventListener("click",(function(){r?(o.forEach((function(e){e.style.display="none"})),n.textContent="Показать всё",n.classList.remove("read-more--close"),r=!1):(o.forEach((function(e){e.style.display="block"})),n.textContent="Скрыть",n.classList.add("read-more--close"),r=!0)})),window.innerWidth>1120&&n.addEventListener("click",(function(){r?(c.forEach((function(e){e.style.display="none"})),n.textContent="Показать всё",n.classList.remove("read-more--close"),r=!1):(c.forEach((function(e){e.style.display="block"})),n.textContent="Скрыть",n.classList.add("read-more--close"),r=!0)}));new Swiper(".swiper",{autoHeight:!0,direction:"horizontal",loop:!0,speed:500,slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:16})}]);
//# sourceMappingURL=bundle.js.map