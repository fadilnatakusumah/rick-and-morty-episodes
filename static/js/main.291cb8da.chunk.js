(window["webpackJsonprick-and-morty-app"]=window["webpackJsonprick-and-morty-app"]||[]).push([[1],{13:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(23),r=n(17),c=n(0),l=n.n(c);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={episodes:[],favorites:[]},s=Object(c.createContext)(u);function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DATA":return i({},e,{episodes:t.payload._embedded.episodes});case"ADD_FAV":case"REMOVE_FAV":return i({},e,{favorites:t.payload});default:return e}}var d=function(e){var t=e.children,n=Object(c.useReducer)(m,u),r=Object(a.a)(n,2),o=r[0],i=r[1];return console.log("state",o),l.a.createElement(s.Provider,{value:{state:o,dispatch:i}},t)}},27:function(e,t,n){e.exports=n(42)},32:function(e,t,n){},37:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),l=n.n(c),o=n(5),i=(n(32),n(4)),u=n(8),s=n(9),m=(n(37),n(13)),d=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,135))})),p=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,136))}));var f=function(){return r.a.createElement(m.b,null,r.a.createElement("div",{className:"pages"},r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("h4",null,"Loading...")},r.a.createElement(d,null))}}),r.a.createElement(i.a,{path:"/favorites",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("h4",null,"Loading...")},r.a.createElement(p,null))}}))),r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},r.a.createElement(u.a,{icon:s.b}),r.a.createElement("div",null,"Home"))),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/favorites"},r.a.createElement(u.a,{icon:s.a}),r.a.createElement("div",null,"Favorites")))))},E=n(20),v=n(21),b=n(24),h=n(22),O=n(25);n(40),n(41);var y=function(e){var t=e.children;return r.a.createElement("div",{className:"phone-container"},r.a.createElement("div",{className:"phone-case"},r.a.createElement("div",{className:"speaker"}),r.a.createElement("div",{className:"screen"},t),r.a.createElement("div",{className:"buttons-container"},r.a.createElement("button",{onClick:function(){return alert("THIS WEB WAS MADE BY @fadilnatakusumah")}}))))},j=function(e){function t(){return Object(E.a)(this,t),Object(b.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:"wrapper"},r.a.createElement(y,null,e))}}]),t}(a.Component);l.a.render(r.a.createElement(j,null,r.a.createElement(o.a,null,r.a.createElement(f,null))),document.getElementById("root"))}},[[27,2,3]]]);
//# sourceMappingURL=main.291cb8da.chunk.js.map