(window["webpackJsonprick-and-morty-app"]=window["webpackJsonprick-and-morty-app"]||[]).push([[5],{131:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(8),o=n(45),c=n.n(o),s=n(44),l=n(5),u=n(6);t.default=function(){var e=Object(r.useContext)(i.a),t=e.state,n=e.dispatch;Object(r.useEffect)((function(){0===t.episodes.length&&Object(s.a)(n)}));var o=t.episodes;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",{style:{textAlign:"center"}},"Choose your favorite episodes"),o.length>0&&o.map((function(e){return a.a.createElement("div",{style:{textAlign:"center",marginBottom:"10px"}},a.a.createElement("div",{style:{textAlign:"center",position:"relative"}},a.a.createElement("img",{alt:e.name,src:e.image.original,width:330,style:{borderRadius:"10px"}}),a.a.createElement("span",{onClick:function(){return Object(s.b)(e,t,n)},style:{color:(r=e.id,t.favorites.find((function(e){return e.id===r}))?"red":"black"),position:"absolute",right:"40px",bottom:"10px",fontSize:"2em",cursor:"pointer"}},a.a.createElement(l.a,{icon:u.a}))),a.a.createElement("div",{style:{textAlign:"left",padding:"5px 20px"}},a.a.createElement("span",null,a.a.createElement("label",{style:{fontSize:"2em"}},e.name),a.a.createElement("a",{href:e.url,rel:"noopener noreferrer",target:"_blank",style:{textDecoration:"none",marginLeft:"10px"}},"Look it up")),c()(e.summary)));var r})))}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(72),a=n(61),i=n.n(a),o=n(62),c=n(63),s=n.n(c),l=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes",e.next=3,s.a.get("https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes");case 3:if(200===(n=e.sent).status){e.next=6;break}return e.abrupt("return",t({type:"ERROR",payload:null}));case 6:return e.abrupt("return",t({type:"FETCH_DATA",payload:n.data}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e,t,n){if(t.favorites.find((function(t){return t.id===e.id}))){var a=t.favorites.filter((function(t){return t.id!==e.id}));return console.log("newFav",a),n({type:"REMOVE_FAV",payload:a})}return n({type:"ADD_FAV",payload:[].concat(Object(r.a)(t.favorites),[e])})}},57:function(e,t){}}]);
//# sourceMappingURL=5.7a95a24b.chunk.js.map