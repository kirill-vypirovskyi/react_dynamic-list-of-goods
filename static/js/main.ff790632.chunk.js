(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var r=e(4),o=e.n(r),c=e(5),a=e(6),s=e(3),u=e.n(s),i=e(1),d=(e(12),e(0)),l=function(t){var n=t.goods;return Object(d.jsx)("ul",{children:n.map((function(t){return Object(d.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function b(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){var n;return t.ok?null!==(n=t.headers.get("content-type"))&&void 0!==n&&n.includes("application/json")?t.json():Promise.reject(new Error("Content type is not supported")):Promise.reject(new Error("".concat(t.status," - ").concat(t.statusText)))}))}var f;!function(t){t[t.ALL=0]="ALL",t[t.FIRST5=1]="FIRST5",t[t.RED=2]="RED"}(f||(f={}));var p=function(){var t=Object(i.useState)([]),n=Object(a.a)(t,2),e=n[0],r=n[1],o=function(){var t=Object(c.a)(u.a.mark((function t(n){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=n,t.next=t.t0===f.ALL?3:t.t0===f.FIRST5?7:t.t0===f.RED?11:15;break;case 3:return t.next=5,b();case 5:return e=t.sent,t.abrupt("break",16);case 7:return t.next=9,b().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)}));case 9:return e=t.sent,t.abrupt("break",16);case 11:return t.next=13,b().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 13:return e=t.sent,t.abrupt("break",16);case 15:throw new Error("unknown sort type");case 16:r(e);case 17:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return o(f.ALL)},children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return o(f.FIRST5)},children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return o(f.RED)},children:"Load red goods"}),Object(d.jsx)(l,{goods:e})]})};o.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ff790632.chunk.js.map