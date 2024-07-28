// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,u=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,w=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=u.call(n,w,"$1e"),n=u.call(n,y,"e"),n=u.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=u.call(n,p,"e+0$1"),n=u.call(n,g,"e-0$1"),e.alternate&&(n=u.call(n,d,"$1."),n=u.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):s.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,E=Array.isArray;function S(e){return e!=e}function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,n,a,o,l,s,f,u,p,g,d,h;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,f=0;f<e.length;f++)if("string"==typeof(n=e[f]))l+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,S(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+m(h):m(h)+p)),l+=n.arg||"",s+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,n,i;for(t=[],i=0,n=x.exec(e);n;)(r=e.slice(i,x.lastIndex-n[0].length)).length&&t.push(r),t.push(I(n)),i=x.lastIndex,n=x.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function T(e){var r,t;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return j.apply(null,r)}var A=Object.prototype,O=A.toString,V=A.__defineGetter__,N=A.__defineSetter__,P=A.__lookupGetter__,$=A.__lookupSetter__,C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(e,r)||$.call(e,r)?(n=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&V&&V.call(e,r,t.get),o&&N&&N.call(e,r,t.set),e};function R(e,r,t){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){return"number"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString,U=Object.prototype.hasOwnProperty,M="function"==typeof Symbol?Symbol:void 0,X="function"==typeof M?M.toStringTag:"",Y=W()?function(e){var r,t,n,i,a;if(null==e)return L.call(e);t=e[X],a=X,r=null!=(i=e)&&U.call(i,a);try{e[X]=void 0}catch(r){return L.call(e)}return n=L.call(e),r?e[X]=t:delete e[X],n}:function(e){return L.call(e)},z=Number,q=z.prototype.toString,B=W();function D(e){return"object"==typeof e&&(e instanceof z||(B?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Y(e)))}function H(e){return G(e)||D(e)}R(H,"isPrimitive",G),R(H,"isObject",D);var J=Number.POSITIVE_INFINITY,K=z.NEGATIVE_INFINITY,Q=Math.floor;function ee(e){return Q(e)===e}function re(e){return e<J&&e>K&&ee(e)}function te(e){return G(e)&&re(e)}function ne(e){return D(e)&&re(e.valueOf())}function ie(e){return te(e)||ne(e)}function ae(e){return te(e)&&e>0}function oe(e){return ne(e)&&e.valueOf()>0}function ce(e){return ae(e)||oe(e)}R(ie,"isPrimitive",te),R(ie,"isObject",ne),R(ce,"isPrimitive",ae),R(ce,"isObject",oe);var le=4294967295;function se(e){return 0===e&&1/e===J}function fe(e){return 0===e&&1/e===K}function ue(e){return e!=e}var pe="function"==typeof Float64Array,ge="function"==typeof Float64Array?Float64Array:null,de="function"==typeof Float64Array?Float64Array:void 0,he=function(){var e,r,t;if("function"!=typeof ge)return!1;try{r=new ge([1,3.14,-3.14,NaN]),t=r,e=(pe&&t instanceof Float64Array||"[object Float64Array]"===Y(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?de:function(){throw new Error("not implemented")};function be(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return function(e,r){var t,n,i,a,o,c,l,s;if(1===arguments.length)t=[0,0],o=e;else{if(!("object"==typeof(s=e)&&null!==s&&"number"==typeof s.length&&ee(s.length)&&s.length>=0&&s.length<=le))throw new TypeError(be("1Ih9a",e));t=e,o=r}if(!ae(o))throw new TypeError(be("1Ih9b",o));return n=new he(o),i=J,a=K,l=-1,c=0,function(e){var r,s,f;if(0===arguments.length)return 0===c?null:t;if(l=(l+1)%o,ue(e))c=o,i=e,a=e;else if(c<o)c+=1,(e<i||e===i&&fe(e))&&(i=e),(e>a||e===a&&se(e))&&(a=e);else if(n[l]===i&&e>i||n[l]===a&&e<a||ue(n[l])){for(i=e,a=e,f=0;f<o;f++)if(f!==l){if(ue(s=n[f])){i=s,a=s;break}(s<i||s===i&&fe(s))&&(i=s),(s>a||s===a&&se(s))&&(a=s)}}else if(e<i)i=e;else if(e>a)a=e;else if(0===e){if(r=fe(e),e===i)if(n[l]===i&&fe(n[l])&&!1===r){for(i=e,f=0;f<o;f++)if(f!==l&&fe(n[f])){i=n[f];break}}else r&&(i=e);if(e===a)if(n[l]===a&&se(n[l])&&r){for(a=e,f=0;f<o;f++)if(f!==l&&se(n[f])){a=n[f];break}}else!1===r&&(a=e)}return n[l]=e,t[0]=i,t[1]=a,t}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmminmax=r();
//# sourceMappingURL=browser.js.map
