// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var l=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,u=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,w=/(\..*[^0])0*e/;function v(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=u.call(i,w,"$1e"),i=u.call(i,y,"e"),i=u.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=u.call(i,p,"e+0$1"),i=u.call(i,g,"e-0$1"),e.alternate&&(i=u.call(i,d,"$1."),i=u.call(i,h,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===f.call(e.specifier)?f.call(i):s.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,E=isNaN,S=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function j(e){var r,t,i,a,o,l,s,f,u,p,g,d,h;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,f=0;f<e.length;f++)if("string"==typeof(i=e[f]))l+=i;else{if(r=void 0!==i.precision,!(i=k(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,E(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=v(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(p=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+m(h):m(h)+p)),l+=i.arg||"",s+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,t,i,n;for(t=[],n=0,i=x.exec(e);i;)(r=e.slice(n,x.lastIndex-i[0].length)).length&&t.push(r),t.push(I(i)),n=x.lastIndex,i=x.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function T(e){var r,t;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[F(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return j.apply(null,r)}var A=Object.prototype,O=A.toString,V=A.__defineGetter__,N=A.__defineSetter__,P=A.__lookupGetter__,$=A.__lookupSetter__,C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(e,r)||$.call(e,r)?(i=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&V&&V.call(e,r,t.get),o&&N&&N.call(e,r,t.set),e};function R(e,r,t){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){return"number"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString,U=Object.prototype.hasOwnProperty,M="function"==typeof Symbol?Symbol:void 0,X="function"==typeof M?M.toStringTag:"",Y=W()?function(e){var r,t,i,n,a;if(null==e)return L.call(e);t=e[X],a=X,r=null!=(n=e)&&U.call(n,a);try{e[X]=void 0}catch(r){return L.call(e)}return i=L.call(e),r?e[X]=t:delete e[X],i}:function(e){return L.call(e)},z=Number,q=z.prototype.toString,B=W();function D(e){return"object"==typeof e&&(e instanceof z||(B?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Y(e)))}function H(e){return G(e)||D(e)}R(H,"isPrimitive",G),R(H,"isObject",D);var J=Number.POSITIVE_INFINITY,K=z.NEGATIVE_INFINITY,Q=Math.floor;function ee(e){return Q(e)===e}function re(e){return e<J&&e>K&&ee(e)}function te(e){return G(e)&&re(e)}function ie(e){return D(e)&&re(e.valueOf())}function ne(e){return te(e)||ie(e)}function ae(e){return te(e)&&e>0}function oe(e){return ie(e)&&e.valueOf()>0}function ce(e){return ae(e)||oe(e)}R(ne,"isPrimitive",te),R(ne,"isObject",ie),R(ce,"isPrimitive",ae),R(ce,"isObject",oe);var le=4294967295;function se(e){return 0===e&&1/e===J}function fe(e){return 0===e&&1/e===K}function ue(e){return e!=e}var pe="function"==typeof Float64Array,ge="function"==typeof Float64Array?Float64Array:null,de="function"==typeof Float64Array?Float64Array:void 0,he=function(){var e,r,t;if("function"!=typeof ge)return!1;try{r=new ge([1,3.14,-3.14,NaN]),t=r,e=(pe&&t instanceof Float64Array||"[object Float64Array]"===Y(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?de:function(){throw new Error("not implemented")};function be(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return function(e,r){var t,i,n,a,o,c,l,s;if(1===arguments.length)t=[0,0],o=e;else{if(!("object"==typeof(s=e)&&null!==s&&"number"==typeof s.length&&ee(s.length)&&s.length>=0&&s.length<=le))throw new TypeError(be("1Ih9a",e));t=e,o=r}if(!ae(o))throw new TypeError(be("1Ih9b",o));return i=new he(o),n=J,a=K,l=-1,c=0,function(e){var r,s,f;if(0===arguments.length)return 0===c?null:t;if(l=(l+1)%o,ue(e))c=o,n=e,a=e;else if(c<o)c+=1,(e<n||e===n&&fe(e))&&(n=e),(e>a||e===a&&se(e))&&(a=e);else if(i[l]===n&&e>n||i[l]===a&&e<a||ue(i[l])){for(n=e,a=e,f=0;f<o;f++)if(f!==l){if(ue(s=i[f])){n=s,a=s;break}(s<n||s===n&&fe(s))&&(n=s),(s>a||s===a&&se(s))&&(a=s)}}else if(e<n)n=e;else if(e>a)a=e;else if(0===e){if(r=fe(e),e===n)if(i[l]===n&&fe(i[l])&&!1===r){for(n=e,f=0;f<o;f++)if(f!==l&&fe(i[f])){n=i[f];break}}else r&&(n=e);if(e===a)if(i[l]===a&&se(i[l])&&r){for(a=e,f=0;f<o;f++)if(f!==l&&se(i[f])){a=i[f];break}}else!1===r&&(a=e)}return i[l]=e,t[0]=n,t[1]=a,t}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmminmax=r();
//# sourceMappingURL=index.js.map