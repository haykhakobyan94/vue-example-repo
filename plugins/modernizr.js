/*! modernizr 3.9.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-inlinesvg-webp-mq-prefixed-prefixedcss-printshiv-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(e){var t=b.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),S?b.className.baseVal=t:b.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=i(S?"svg":"body"),e.fake=!0),e}function s(e,n,r,o){var s,l,u,c,f="modernizr",d=i("div"),p=a();if(parseInt(r,10))for(;r--;)u=i("div"),u.id=o?o[r]:f+(r+1),d.appendChild(u);return s=i("style"),s.type="text/css",s.id="s"+f,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),l=n(d,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=c,b.offsetHeight):d.parentNode.removeChild(d),!!l}function l(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function f(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(u(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+u(t[o])+":"+r+")");return i=i.join(" or "),s("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"===c(e,null,"position")})}return n}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t,o,a){function s(){c&&(delete T.style,delete T.modElem)}if(a=!r(a,"undefined")&&a,!r(o,"undefined")){var u=f(e,o);if(!r(u,"undefined"))return u}for(var c,p,m,A,h,v=["modernizr","tspan","samp"];!T.style&&v.length;)c=!0,T.modElem=i(v.shift()),T.style=T.modElem.style;for(m=e.length,p=0;p<m;p++)if(A=e[p],h=T.style[A],l(A,"-")&&(A=d(A)),T.style[A]!==n){if(a||r(o,"undefined"))return s(),"pfx"!==t||A;try{T.style[A]=o}catch(e){}if(T.style[A]!==h)return s(),"pfx"!==t||A}return s(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function A(e,t,n){var o;for(var i in e)if(e[i]in t)return!1===n?e[i]:(o=t[e[i]],r(o,"function")?m(o,n||t):o);return!1}function h(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+_.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?p(s,t,o,i):(s=(e+" "+B.join(a+" ")+a).split(" "),A(s,t,n))}function v(e,t){if("object"==typeof e)for(var n in e)U(e,n)&&v(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2===r.length&&(i=i[r[1]]),void 0!==i)return Modernizr;t="function"==typeof t?t():t,1===r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&!1!==t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}var g=[],y={_version:"3.9.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){g.push({name:e,fn:t,options:n})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=y,Modernizr=new Modernizr;var w=[],b=t.documentElement,S="svg"===b.nodeName.toLowerCase(),C=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return s("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"===(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();y.mq=C;var E="Moz O ms Webkit",_=y._config.usePrefixes?E.split(" "):[];y._cssomPrefixes=_;var x={elem:i("modernizr")};Modernizr._q.push(function(){delete x.elem});var T={style:x.elem.style};Modernizr._q.unshift(function(){delete T.style});var B=y._config.usePrefixes?E.toLowerCase().split(" "):[];y._domPrefixes=B,y.testAllProps=h;var N=function(t){var r,o=prefixes.length,i=e.CSSRule;if(void 0===i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),(r=t.replace(/-/g,"_").toUpperCase()+"_RULE")in i)return"@"+t;for(var a=0;a<o;a++){var s=prefixes[a];if(s.toUpperCase()+"_"+r in i)return"@-"+s.toLowerCase()+"-"+t}return!1};y.atRule=N;var R=y.prefixed=function(e,t,n){return 0===e.indexOf("@")?N(e):(-1!==e.indexOf("-")&&(e=d(e)),t?h(e,t,n):h(e,"pfx"))};y.prefixedCSS=function(e){var t=R(e);return t&&u(t)};S||function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,u(t)}function i(e){var t=S[e[w]];return t||(t={},b++,e[w]=b,S[b]=t),t}function a(e,n,r){if(n||(n=t),h)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():y.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||g.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),h)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;a<l;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function u(e){e||(e=t);var r=i(e);return!C.shivCSS||A||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),h||l(e,r),e}function c(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,i=RegExp("^(?:"+r().join("|")+")$","i"),a=[];o--;)t=n[o],i.test(t.nodeName)&&a.push(t.applyElement(f(t)));return a}function f(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(_+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function d(e){for(var t,n=e.split("{"),o=n.length,i=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+_+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(i,a),n[o]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,a=i(e),s=e.namespaces,l=e.parentWindow;return!x||e.printShived?e:(void 0===s[_]&&s.add(_),l.attachEvent("onbeforeprint",function(){t();for(var i,a,s,l=e.styleSheets,u=[],f=l.length,p=Array(f);f--;)p[f]=l[f];for(;s=p.pop();)if(!s.disabled&&E.test(s.media)){try{i=s.imports,a=i.length}catch(e){a=0}for(f=0;f<a;f++)p.push(i[f]);try{u.push(s.cssText)}catch(e){}}u=d(u.reverse().join("")),o=c(e),r=n(e,u)}),l.attachEvent("onafterprint",function(){p(o),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var A,h,v=e.html5||{},g=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,w="_html5shiv",b=0,S={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",A="hidden"in e,h=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){A=!0,h=!0}}();var C={elements:v.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==v.shivCSS,supportsUnknownElements:h,shivMethods:!1!==v.shivMethods,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=C,u(t);var E=/^$|\b(?:all|print)\b/,_="html5shiv",x=!h&&function(){var n=t.documentElement;return!(void 0===t.namespaces||void 0===t.parentWindow||void 0===n.applyElement||void 0===n.removeNode||void 0===e.attachEvent)}();C.type+=" print",C.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=C)}(void 0!==e?e:this,t);var U;!function(){var e={}.hasOwnProperty;U=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),y._l={},y.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},y._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){y.addTest=v}),Modernizr.addAsyncTest(function(){function e(e,t,n){function r(t){var r=!(!t||"load"!==t.type)&&1===o.width;v(e,"webp"===e&&r?new Boolean(r):r),n&&n(t)}var o=new Image;o.onerror=r,o.onload=r,o.src=t}var t=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],n=t.shift();e(n.name,n.uri,function(n){if(n&&"load"===n.type)for(var r=0;r<t.length;r++)e(t[r].name,t[r].uri)})}),Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),function(){var e,t,n,o,i,a,s;for(var l in g)if(g.hasOwnProperty(l)){if(e=[],t=g[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(Modernizr[s[0]]&&(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean)||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),w.push((o?"":"no-")+s.join("-"))}}(),o(w),delete y.addTest,delete y.addAsyncTest;for(var Q=0;Q<Modernizr._q.length;Q++)Modernizr._q[Q]();e.Modernizr=Modernizr}(window,document);