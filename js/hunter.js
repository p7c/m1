!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.version="2.5.5",e.stringfy=function(t){if(t&&"object"===(void 0===t?"undefined":o(t))){var e=encodeURIComponent;return Object.keys(t).map(function(n){return n+"="+e(t[n])}).join("&")}},e.extend=function(t){var e=arguments;if(e.length>=2)for(var n=1,o=e.length;n<o;n++)for(var r in e[n])t[r]=e[n][r];return t},e.filterParam=function(t){var e=arguments;if(e.length>=2)for(var n=1,o=e.length;n<o;n++)delete t[e[n]]},e.getCookie=function(t){for(var e=document.cookie.split("; "),n=0;n<e.length;n++){var o=e[n].split("=");if(o[0]==t)return decodeURI(o[1])}},e.getPageId=function(){var t=document.URL.split("//")[1];return-1!==t.indexOf("?")&&(t=t.split("?")[0]),t}},function(t,e,n){"use strict";var o=n(0),r=c(n(2)),i=c(n(5)),a=c(n(6)),d=c(n(7)),u=c(n(8));function c(t){return t&&t.__esModule?t:{default:t}}var s="https://hunter-report.dui88.com";window.HUNTER_CONFIG=window.HUNTER_CONFIG||{};var l=window.CFG||{};window.HUNTER_CONFIG.pageId=HUNTER_CONFIG.pageId||l.skinName||l.id||(0,o.getPageId)(),r.default.init({url:s+"/report"}),i.default.init({url:s+"/report/ajax"}),a.default.init({url:s+"/report/doJoin"}),d.default.init({url:s+"/report/doJoinAll"}),u.default.init({url:s+"/report/customized"})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=a(n(3)),i=a(n(4));function a(t){return t&&t.__esModule?t:{default:t}}e.default={init:function(t){var e,n={client:HUNTER_CONFIG.client,appId:CFG.appId||"",pageId:HUNTER_CONFIG.pageId,slotId:CFG.slotId||"",consumerId:CFG.consumerId||"",activityId:CFG.activityId||"",version:o.version,url:location.href,a_oId:(0,o.getCookie)("_coll_oId")||""};if(r.default){var a=(0,o.extend)(n,r.default,i.default);e={},a=(0,o.extend)(a,e),(new Image).src=t.url+"?"+(0,o.stringfy)(a)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t={cache:["domainLookupStart","fetchStart"],dns:["domainLookupEnd","domainLookupStart"],tcp:["connectEnd","connectStart"],req:["responseStart","requestStart"],res:["responseEnd","responseStart"],dom:["domContentLoadedEventStart","domLoading"],readycb:["domContentLoadedEventEnd","domContentLoadedEventStart"],fasrt:["domComplete","domContentLoadedEventEnd"],loadcb:["loadEventEnd","loadEventStart"],ready:["domContentLoadedEventEnd","fetchStart"],load:["loadEventEnd","fetchStart"]},e={},n=window.performance||window.msPerformance||window.webkitPerformance;if(!n||!n.timing)return null;var o=n.timing;return Object.keys(t).map(function(n){var r=o[t[n][0]],i=o[t[n][1]],a=Math.round(r-i);a>=0&&a<36e5&&(e[n]=a)}),e}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r,i=(o=navigator.connection?navigator.connection.effectiveType:"",r=window.screen||{},{network:o,width:r.width,height:r.height});e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=window.HUNTER_CONFIG.client;e.default={init:function(t){var e=window.XMLHttpRequest.prototype.open;window.XMLHttpRequest.prototype.open=function(){try{var n=arguments[0],i=arguments[1]?arguments[1].split("?")[0]:void 0;if(i&&!i.match(/\/\/(.+\.)?.+\..+/)){var a=void 0;this.addEventListener("readystatechange",function(){if(1===this.readyState&&(a=(new Date).getTime()),4===this.readyState){var e=this.status,d=(new Date).getTime()-a,u=this.response?this.response.length:0,c={client:r,version:o.version,url:i,status:e,method:n,rt:d,rs:u};200!==e&&0!==e&&((new Image).src=t.url+"?"+(0,o.stringfy)(c))}})}}catch(t){}return e.apply(this,[].slice.call(arguments))}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(0),window.CFG,window.HUNTER_CONFIG;e.default={init:function(t){var e=window.XMLHttpRequest.prototype.open;window.XMLHttpRequest.prototype.open=function(){var t=arguments[1]?arguments[1].split("?")[0]:void 0;return t&&this.addEventListener("readystatechange",function(){if(1===this.readyState&&t.match(/token\/getToken/g)&&new Date,4===this.readyState&&200===this.status&&t.match(/(activity|pluginTools)\/result/g))try{JSON.parse(this.response).data.orderId&&(window.HUNTER_CONFIG.a_oId="taw-"+JSON.parse(this.response).data.orderId)}catch(t){}}),e.apply(this,[].slice.call(arguments))}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=window.CFG,i=window.HUNTER_CONFIG;e.default={init:function(t){var e=function(){return this};e.prototype.start=function(){this.startTime=1*new Date},e.prototype.end=function(){if(this.startTime){var e={client:i.client,version:o.version,appId:r.appId||"",pageId:i.pageId,time:1*new Date-this.startTime,a_oId:(0,o.getCookie)("_coll_oId")||i.a_oId||"",activityId:r.activityId||"",slotId:r.slotId||"",consumerId:r.consumerId||""};(new Image).src=t.url+"?"+(0,o.stringfy)(e)}},window.reportDoJoinAll=new e(t)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=n(0),i=window.CFG,a=window.HUNTER_CONFIG;e.default={init:function(t){window.reportCustomized=function(e){if(e.field){var n=o({client:a.client,version:r.version,appId:i.appId||"",pageId:a.pageId},e);(new Image).src=t.url+"?"+(0,r.stringfy)(n)}}}}}]);
//# sourceMappingURL=hunter.js.map