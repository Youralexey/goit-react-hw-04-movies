(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{34:function(t,e,n){"use strict";n.d(e,"e",(function(){return d})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return v}));var A=n(38),r=n.n(A),a=n(39),c=n(40),i=n.n(c),s="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmJjZmE2MzcxZjJiNGM1MWE4ZGJiNjc0ZGJhMmJkMyIsInN1YiI6IjYwYmNiYzNmZWE4NGM3MDAyYWU3YTE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.anozZCItdqcbHyQtoH8Fm8ne3QlJGCSzSiJGIz6YtsQ";function d(){return p.apply(this,arguments)}function p(){return(p=Object(a.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/trending/movie/day?api_key=".concat(s));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function u(t){return l.apply(this,arguments)}function l(){return(l=Object(a.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/search/movie?api_key=".concat(s,"&query=").concat(e));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function o(t){return b.apply(this,arguments)}function b(){return(b=Object(a.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/movie/".concat(e,"?api_key=").concat(s));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(t){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/movie/".concat(e,"/credits?api_key=").concat(s));case 3:return n=t.sent,t.abrupt("return",n.data.cast);case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function v(t){return O.apply(this,arguments)}function O(){return(O=Object(a.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}i.a.defaults.baseURL="https://api.themoviedb.org/3",i.a.defaults.headers.common.Authorization=s},72:function(t,e,n){"use strict";n.r(e);var A,r,a,c,i,s,d=n(35),p=n(0),u=n(3),l=n(8),o=n(34),b=n(9),f=n(10),j=f.a.div(A||(A=Object(b.a)(["\n@media screen and (min-width: 768px) {\nmargin-right: 30px;\n}\n"]))),v=f.a.ul(r||(r=Object(b.a)(["\n width: 240px;\n @media screen and (min-width: 768px) {\n     width:380px;\n }\n"]))),O=f.a.div(a||(a=Object(b.a)(["\n   padding:12px;\n   border-bottom: 2px solid #6e7073;\n@media screen and (min-width: 768px) {\n   display:flex;\n}\n"]))),m=f.a.ul(c||(c=Object(b.a)(["\ndisplay: flex;\n& :not(:last-child){\n    margin-right:8px;\n}\n"]))),h=f.a.button(i||(i=Object(b.a)(["\nmargin-top: 14px;\nmargin-left: 12px;\nmargin-bottom: 10px;"]))),x=f.a.img(s||(s=Object(b.a)(["\n height: 356px;\n  width: 240px;\n  border-radius: 5px;\n  @media screen and (max-width: 767px) {\n    margin-bottom: 15px;\n    margin-top: 16px;\n  }\n  @media screen and (min-width: 768px) {\n      height: 374px;\n    width: 264px;\n    // margin-right: 32px;\n  }\n  @media screen and (min-width: 1024px) {\n    height: 478px;\n    width: 396px;\n  }\n"]))),z=n(1),q=Object(p.lazy)((function(){return n.e(1).then(n.bind(null,73))})),y=Object(p.lazy)((function(){return n.e(7).then(n.bind(null,74))}));e.default=function(){var t,e,n,A,r,a=Object(p.useState)(null),c=Object(d.a)(a,2),i=c[0],s=c[1],b=Object(u.i)(),f=b.url,Z=b.path,g=Object(u.h)().movieId,V=Object(u.f)(),R=Object(u.g)(),U="https://image.tmdb.org/t/p/w500";Object(p.useEffect)((function(){o.c(g).then((function(t){s(t)}))}),[g]);return Object(z.jsx)(z.Fragment,{children:i&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(h,{type:"button",onClick:function(){var t;V.push(null!==(t=R.state.from.location)&&void 0!==t?t:"/movies")},children:null!==(t=null===R||void 0===R||null===(e=R.state)||void 0===e||null===(n=e.from)||void 0===n?void 0:n.label)&&void 0!==t?t:"Go back"}),Object(z.jsxs)(O,{children:[Object(z.jsx)(j,{children:Object(z.jsx)(x,{src:U+i.poster_path!=="https://image.tmdb.org/t/p/w500null"?U+i.poster_path:"data:image/png;base64,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",alt:i.original_title,width:"300"})}),Object(z.jsxs)(v,{children:[Object(z.jsx)("li",{children:Object(z.jsxs)("h2",{children:[i.original_title,"n"]})}),Object(z.jsx)("li",{children:Object(z.jsxs)("p",{children:["User Score: ",i.vote_average]})}),Object(z.jsxs)("li",{children:[Object(z.jsx)("h3",{children:"Overview"}),Object(z.jsx)("p",{children:i.overview})]}),Object(z.jsxs)("li",{children:[Object(z.jsx)("h3",{children:"Genres"}),Object(z.jsx)(m,{children:i.genres.map((function(t){return Object(z.jsx)("li",{children:t.name},t.id)}))})]})]})]}),Object(z.jsx)("p",{children:"Additional Informaion"}),Object(z.jsxs)("ul",{children:[Object(z.jsx)("li",{children:Object(z.jsxs)(l.c,{to:{pathname:"".concat(f,"/cast"),state:{from:null===R||void 0===R||null===(A=R.state)||void 0===A?void 0:A.from}},children:[" ","Cast"]})}),Object(z.jsx)("li",{children:Object(z.jsxs)(l.c,{to:{pathname:"".concat(f,"/reviews"),state:{from:null===R||void 0===R||null===(r=R.state)||void 0===r?void 0:r.from}},children:[" ","Reviews"]})})]}),Object(z.jsx)(p.Suspense,{fallback:Object(z.jsx)("h1",{children:"Loading..."}),children:Object(z.jsxs)(u.c,{children:[Object(z.jsx)(u.a,{exact:!0,path:"".concat(Z,"/cast"),component:q}),Object(z.jsx)(u.a,{exact:!0,path:"".concat(Z,"/reviews"),component:y})]})})]})})}}}]);
//# sourceMappingURL=movieInfo-page.db94dacb.chunk.js.map