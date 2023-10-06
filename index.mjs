// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function d(d,l){var a,j,h,p,v,b,c;if(1===arguments.length)a=[0,0],v=d;else{if(!e(d))throw new TypeError(f("1Ih9a,Hy",d));a=d,v=l}if(!s(v))throw new TypeError(f("1Ih9b,Hn",v));return j=new m(v),h=n,p=o,c=-1,b=0,g;function g(s){var e,n,o;if(0===arguments.length)return 0===b?null:a;if(c=(c+1)%v,r(s))b=v,h=s,p=s;else if(b<v)b+=1,(s<h||s===h&&i(s))&&(h=s),(s>p||s===p&&t(s))&&(p=s);else if(j[c]===h&&s>h||j[c]===p&&s<p||r(j[c])){for(h=s,p=s,o=0;o<v;o++)if(o!==c){if(n=j[o],r(n)){h=n,p=n;break}(n<h||n===h&&i(n))&&(h=n),(n>p||n===p&&t(n))&&(p=n)}}else if(s<h)h=s;else if(s>p)p=s;else if(0===s){if(e=i(s),s===h)if(j[c]===h&&i(j[c])&&!1===e){for(h=s,o=0;o<v;o++)if(o!==c&&i(j[o])){h=j[o];break}}else e&&(h=s);if(s===p)if(j[c]===p&&t(j[c])&&e){for(p=s,o=0;o<v;o++)if(o!==c&&t(j[o])){p=j[o];break}}else!1===e&&(p=s)}return j[c]=s,a[0]=h,a[1]=p,a}}export{d as default};
//# sourceMappingURL=index.mjs.map
