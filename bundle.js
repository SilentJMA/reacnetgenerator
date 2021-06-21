/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={20:e=>{"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=n.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var o=a(r[0]);o!==r[0]&&(t[r[0]]=o)}r=n.exec(e)}t["%C2"]="�";for(var s=Object.keys(t),c=0;c<s.length;c++){var i=s[c];e=e.replace(new RegExp(i,"g"),t[i])}return e}(e)}}},806:e=>{"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var s=n[a],c=e[s];(o?-1!==t.indexOf(s):t(s,c,e))&&(r[s]=c)}return r}},153:e=>{const t=(e,t,r)=>e.length?t.filter((t=>r(t,e))):t;e.exports={searchspecies:(e,r)=>t(e,r,((e,t)=>t.includes(e.s))),searchreaction:(e,r)=>t(e,r,((e,t)=>e.l.concat(e.r).some((e=>t.includes(e)))))}},563:(e,t,r)=>{"use strict";const n=r(610),o=r(20),a=r(500),s=r(806),c=Symbol("encodeFragmentIdentifier");function i(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function u(e,t){return t.decode?o(e):e}function p(e){return Array.isArray(e)?e.sort():"object"==typeof e?p(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function d(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function m(e){const t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function g(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function f(e,t){i((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return(t,r,n)=>{const o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&u(r,e).includes(e.arrayFormatSeparator);r=a?u(r,e):r;const s=o||a?r.split(e.arrayFormatSeparator).map((t=>u(t,e))):null===r?r:u(r,e);n[t]=s};case"bracket-separator":return(t,r,n)=>{const o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!o)return void(n[t]=r?u(r,e):r);const a=null===r?[]:r.split(e.arrayFormatSeparator).map((t=>u(t,e)));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){if(""===o)continue;let[e,s]=a(t.decode?o.replace(/\+/g," "):o,"=");s=void 0===s?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?s:u(s,t),r(u(e,t),s,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=g(r[e],t);else n[e]=g(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce(((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=p(r):e[t]=r,e}),Object.create(null))}t.extract=m,t.parse=f,t.stringify=(e,t)=>{if(!e)return"";i((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[",o,"]"].join("")]:[...r,[l(t,e),"[",l(o,e),"]=",l(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[l(t,e),"[]"].join("")]:[...r,[l(t,e),"[]=",l(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{const t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,o)=>void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[l(r,e),t,l(o,e)].join("")]:[[n,l(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,l(t,e)]:[...r,[l(t,e),"=",l(n,e)].join("")]}}(t),o={};for(const t of Object.keys(e))r(t)||(o[t]=e[t]);const a=Object.keys(o);return!1!==t.sort&&a.sort(t.sort),a.map((r=>{const o=e[r];return void 0===o?"":null===o?l(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?l(r,t)+"[]":o.reduce(n(r),[]).join("&"):l(r,t)+"="+l(o,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:f(m(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:u(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[c]:!0},r);const n=d(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o,{sort:!1}),s=Object.assign(a,e.query);let i=t.stringify(s,r);i&&(i=`?${i}`);let u=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u=`#${r[c]?l(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${i}${u}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[c]:!1},n);const{url:o,query:a,fragmentIdentifier:i}=t.parseUrl(e,n);return t.stringifyUrl({url:o,query:s(a,r),fragmentIdentifier:i},n)},t.exclude=(e,r,n)=>{const o=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,o,n)}},500:e=>{"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},610:e=>{"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,(e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},632:e=>{"use strict";e.exports=$},310:e=>{"use strict";e.exports=$.jsrender},337:e=>{"use strict";e.exports=$.magnificPopup},387:e=>{"use strict";e.exports=$.paginationjs},852:e=>{"use strict";e.exports=$.selectpicker},851:e=>{"use strict";e.exports=anime},217:e=>{"use strict";e.exports=bootstrap},680:e=>{"use strict";e.exports=d3},835:e=>{"use strict";e.exports=jsnx},15:e=>{"use strict";e.exports=regeneratorRuntime}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{"use strict";const{searchspecies:e,searchreaction:t}=r(153);r.g.$=r.g.jQuery=r(632),r.g.regeneratorRuntime=r(15),r(217),r.g.anime=window.anime=r(851),r(310),r(387),r(337),r(852);var n,o=new((n=(n=r(835)).default||n).Graph);$((function(){var e;$(".citation").html($("#citationTmpl").html()),e=$(document)[0].getElementById("canvas"),n.draw(o,{element:e,d3:r(680),layoutAttr:{charge:-1e3,linkDistance:300,gravity:.05},panZoom:{enabled:!1},nodeShape:"image",nodeAttr:{title:e=>e.label,"xlink:href"(e){var t='<circle cx="50" cy="50" r="45" stroke="#00f" stroke-width="2" fill="#fff" />';return"data:image/svg+xml;base64,"+window.btoa('<svg class="spec" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">'+t+a(e.node)+"</svg>")},ondblclick:e=>`clearTimeout(timer1);G.removeNode('${e.node}');`,onmousedown:"isdrag = false;timer2 = setTimeout(function(){isdrag = true}, 300);",onmouseup:e=>`if(!isdrag){clearTimeout(timer2);clearTimeout(timer1);timer1 = setTimeout(function(){addnode('${e.node}')}, 300);}else{isdrag=false}`,width:100,height:100,x:-50,y:-50},nodeStyle:{border:"1px solid #ddd"},edgeStyle:{fill:"#999"},edgeAttr:{ondblclick:e=>`G.removeEdge('${e.edge[0]}','${e.edge[1]}');`},stickyDrag:!0},!0),$("#canvassec").addClass("mfp-hide"),$("#canvasbutton").show(),function(){if(s($("#rngdata").html()))return;const e=r(563),t=e.parse(location.search).jdata;t?$.get(decodeURIComponent(t),(function(e){s(e)||p()}),"text"):p()}()}));const a=e=>rngdata.speciessvg[e];function s(e){try{return function(e){r.g.rngdata=e,i(),c()}(JSON.parse(e)),!0}catch(e){return console.log(e),!1}}function c(){if(rngdata.species.length>1){var e=[{value:1,text:"All"}];e=e.concat([...rngdata.species.keys()].slice(1).map((e=>({value:e+1,text:`Time ${e}`})))),$("#timeselect").html($.templates("#optionTimeTmpl").render(e)),$("#timeselectli").removeClass("d-none"),$("select#timeselect").on("change",(function(){u($(this).val())}))}rngdata.reactionsabcd.length&&$("#reactionsabcd").removeClass("d-none"),u(1)}function i(){const e=["network","species","reactions","reactionsabcd"].filter((e=>rngdata[e]));e.forEach((e=>$(`#${e}`).show())),$("#navs").append($.templates("#navTmpl").render(e)),$("#buttons").html($.templates("#buttonTmpl").render(e)),$('a.js-scroll-trigger[href*="#"]:not([href="#"])').on("click",(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if((e=e.length?e:$(`[name=${this.hash.slice(1)}]`)).length)return anime({targets:"html, body",scrollTop:e.offset().top-72,duration:1e3,easing:"easeInOutExpo"}),!1}}))}function l(e,t,r,n,o){$(o).pagination({dataSource:e,pageSize:t,callback:function(e,t){e.forEach((e=>{const t=[];["s","l","r"].map((t=>e[t])).filter(Boolean).forEach((e=>{"string"==typeof e?t.push(e):t.push(...e)})),e.svg=Object.assign({},...t.map((e=>({[e]:a(e)}))))})),$(n).html($.templates(r).render(e)),$(".popup-modal").magnificPopup({type:"inline",preloader:!1})}})}function u(r){const n=rngdata.species[r-1],o=rngdata.reactions[r-1],a=rngdata.reactionsabcd,s=rngdata.speciesshownum,c=rngdata.reactionsshownum;$("#networkresult").html(rngdata.network[r-1]),l(n,s,"#specTmpl","#speciesresult","#speciespager"),l(o,c,"#reacTmpl","#reactionsresult","#reactionspager"),l(a,c,"#reacabcdTmpl","#reactionsabcdresult","#reactionsabcdpager"),$("#speciesselect").html($.templates("#optionTmpl").render(n)),$("#reactionsselect").html($.templates("#optionTmpl").render(n)),$("#reactionsabcdselect").html($.templates("#optionTmpl").render(n)),$("select#speciesselect").on("change",(function(){l(e($(this).val(),n),s,"#specTmpl","#speciesresult","#speciespager")})),$("select#reactionsselect").on("change",(function(){l(t($(this).val(),o),c,"#reacTmpl","#reactionsresult","#reactionspager")})),$("select#reactionsabcdselect").on("change",(function(){l(t($(this).val(),a),c,"#reacabcdTmpl","#reactionsabcdresult","#reactionsabcdpager")})),$(".selectpicker").selectpicker("refresh")}function p(){$("#buttons").html($("#loadTmpl").html()),$("#loadbutton").on("change",(function(e){const t=e.target.files[0],r=new FileReader;r.onload=function(e){s(e.target.result)},r.readAsText(t)}))}window.$=$,window.addnode=function(e){o.addNode(e),e in rngdata.linkreac&&rngdata.linkreac[e].forEach((t=>{o.addNode(t),o.addEdge(t,e)}))},window.savesvg=function(){var e='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+$(".jsnx")[0].outerHTML+"</svg>",t=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),r=URL.createObjectURL(t),n=document.createElement("a");n.href=r,n.download="network.svg",n.click(),window.URL.revokeObjectURL(r)},window.clearnode=function(){o.nodes().foreach((e=>o.removeNode(e)))},window.G=o,window.timer1=null,window.timer2=null,window.isdrag=!1})()})();