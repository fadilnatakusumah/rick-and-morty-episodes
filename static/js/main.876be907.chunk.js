(window["webpackJsonprick-and-morty-app"]=window["webpackJsonprick-and-morty-app"]||[]).push([[1],{20:function(e,t,n){e.exports=n(38)},25:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),l=n.n(c),o=(n(25),n(3)),i=n(5),u=n(6),s=(n(35),n(8));function m(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("h5",null,"Loading...")},r.a.createElement(e,t))}}var p=m(r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,131))}))),d=m(r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,132))})));var f=function(){return r.a.createElement(s.b,null,r.a.createElement("div",{className:"pages"},r.a.createElement(o.b,null,(function(e){var t=e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.c,null,r.a.createElement(p,{path:"".concat(t.pathname,"/")}),r.a.createElement(d,{path:"".concat(t.pathname,"/favorites")})))}))),r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",null,r.a.createElement(o.a,{to:"/"},r.a.createElement(i.a,{icon:u.b}),r.a.createElement("div",null,"Home"))),r.a.createElement("div",null,r.a.createElement(o.a,{to:"/favorites"},r.a.createElement(i.a,{icon:u.a}),r.a.createElement("div",null,"Favorites")))))},v=n(13),E=n(14),b=n(17),h=n(15),O=n(18);n(36),n(37);var y=function(e){var t=e.children;return r.a.createElement("div",{className:"phone-container"},r.a.createElement("div",{className:"phone-case"},r.a.createElement("div",{className:"speaker"}),r.a.createElement("div",{className:"screen"},t),r.a.createElement("div",{className:"buttons-container"},r.a.createElement("button",{onClick:function(){return alert("THIS WEB WAS MADE BY @fadilnatakusumah")}}))))},j=function(e){function t(){return Object(v.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:"wrapper"},r.a.createElement(y,null,e))}}]),t}(a.Component);l.a.render(r.a.createElement(j,null,r.a.createElement(f,null)),document.getElementById("root"))},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var a=n(16),r=n(12),c=n(0),l=n.n(c);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={episodes:[],favorites:[]},s=Object(c.createContext)(u);function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DATA":return i({},e,{episodes:t.payload._embedded.episodes});case"ADD_FAV":case"REMOVE_FAV":return i({},e,{favorites:t.payload});default:return e}}var p=function(e){var t=e.children,n=Object(c.useReducer)(m,u),r=Object(a.a)(n,2),o=r[0],i=r[1];return console.log("state",o),l.a.createElement(s.Provider,{value:{state:o,dispatch:i}},t)}}},[[20,2,3]]]);
//# sourceMappingURL=main.876be907.chunk.js.map