(window["webpackJsonprick-and-morty-app"]=window["webpackJsonprick-and-morty-app"]||[]).push([[4],{132:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(8),o=n(44),c=n(6),l=n(5),s=n(45),u=n.n(s);t.default=function(){var e=Object(r.useContext)(i.a),t=e.state,n=e.dispatch,s=t.favorites;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",{style:{textAlign:"center"}},"Your favorite episodes"),0===s.length&&a.a.createElement("div",{style:{width:"300px",height:"400px",textAlign:"center",margin:" auto",display:"flex",alignItems:"center"}},a.a.createElement("p",null,"You don't have any favorite episode :(")),s.length>0&&s.map((function(e){return a.a.createElement("div",{style:{textAlign:"center",marginBottom:"10px"}},a.a.createElement("div",{style:{textAlign:"center",position:"relative"}},a.a.createElement("img",{alt:e.name,src:e.image.original,width:330,style:{borderRadius:"10px"}}),a.a.createElement("span",{onClick:function(){return Object(o.b)(e,t,n)},style:{color:(r=e.id,t.favorites.find((function(e){return e.id===r}))?"red":"black"),position:"absolute",right:"40px",bottom:"10px",fontSize:"2em",cursor:"pointer"}},a.a.createElement(l.a,{icon:c.a}))),a.a.createElement("div",{style:{textAlign:"left",padding:"5px 20px"}},a.a.createElement("span",null,a.a.createElement("label",{style:{fontSize:"2em"}},e.name),a.a.createElement("a",{href:e.url,rel:"noopener noreferrer",target:"_blank",style:{textDecoration:"none",marginLeft:"10px"}},"Look it up")),u()(e.summary)));var r})))}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(72),a=n(61),i=n.n(a),o=n(62),c=n(63),l=n.n(c),s=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes",e.next=3,l.a.get("https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes");case 3:if(200===(n=e.sent).status){e.next=6;break}return e.abrupt("return",t({type:"ERROR",payload:null}));case 6:return e.abrupt("return",t({type:"FETCH_DATA",payload:n.data}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e,t,n){if(t.favorites.find((function(t){return t.id===e.id}))){var a=t.favorites.filter((function(t){return t.id!==e.id}));return console.log("newFav",a),n({type:"REMOVE_FAV",payload:a})}return n({type:"ADD_FAV",payload:[].concat(Object(r.a)(t.favorites),[e])})}},57:function(e,t){}}]);
//# sourceMappingURL=4.40bd235a.chunk.js.map