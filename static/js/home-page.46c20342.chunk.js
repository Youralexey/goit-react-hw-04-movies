(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{34:function(t,n,e){"use strict";e.d(n,"e",(function(){return u})),e.d(n,"b",(function(){return d})),e.d(n,"c",(function(){return m})),e.d(n,"a",(function(){return x})),e.d(n,"d",(function(){return g}));var a=e(38),r=e.n(a),i=e(39),c=e(40),s=e.n(c),o="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmJjZmE2MzcxZjJiNGM1MWE4ZGJiNjc0ZGJhMmJkMyIsInN1YiI6IjYwYmNiYzNmZWE4NGM3MDAyYWU3YTE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.anozZCItdqcbHyQtoH8Fm8ne3QlJGCSzSiJGIz6YtsQ";function u(){return p.apply(this,arguments)}function p(){return(p=Object(i.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/trending/movie/day?api_key=".concat(o));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(r.a.mark((function t(n){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/search/movie?api_key=".concat(o,"&query=").concat(n));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function m(t){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(r.a.mark((function t(n){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/movie/".concat(n,"?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function x(t){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(r.a.mark((function t(n){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/movie/".concat(n,"/credits?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data.cast);case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function g(t){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(r.a.mark((function t(n){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("/movie/".concat(n,"/reviews?api_key=").concat(o));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}s.a.defaults.baseURL="https://api.themoviedb.org/3",s.a.defaults.headers.common.Authorization=o},41:function(t,n,e){"use strict";e.d(n,"a",(function(){return b}));var a,r,i,c,s=e(11),o=e.n(s),u=e(9),p=e(10),d=p.a.ul(a||(a=Object(u.a)(["\n    justify-content: center;\n    \n  @media screen and (max-width: 767px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  @media screen and (min-width: 768px) {\n    display: grid;\n    grid-template-columns: 293px 293px;\n    grid-gap: 30px;\n  }\n  @media screen and (min-width: 1024px) {\n    grid-template-columns: 274px 274px 274px;\n  }\n  // @media screen and (max-width: 1024px) {  \n  //  display: grid;\n  // //min-width: calc(100vh-60px)\n  // grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));\n  // grid-row-gap: 20px;\n  // margin-top: 0;\n  // margin-bottom: 0;\n  // padding: 0;\n  // margin-left: auto;\n  // margin-right: auto;}\n"]))),l=p.a.li(r||(r=Object(u.a)(["\n  min-height: 460px;\n  width: 280px;\n  @media screen and (max-width: 767px) {\n    &:not(:last-child){\n       margin-bottom: 20px;\n    }\n  }\n  @media screen and (min-width: 768px) {\n    width: 274px;\n  }\n  @media screen and (min-width: 1024px) {\n     width: 274px;\n  }\n "]))),m=p.a.img(i||(i=Object(u.a)(["\nheight: 398px;\nwidth: 274px;\nborder-radius: 5px ;\n  &:hover,\n  &:focus{\n    box-shadow: 0px 8px 43px rgba(255, 107, 1, 0.6);;\n  }"]))),h=p.a.h2(c||(c=Object(u.a)(["\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 12px;\n  line - height: 14px;\n  margin-bottom: 6px;\n  margin-top: 10px;\n"]))),x=e(8),f=e(3),g=e(1);function b(t){var n=t.movies,e=Object(f.g)();return console.log("location",e),Object(g.jsx)(d,{children:n.map((function(t){var n=t.id,a=t.poster_path,r=t.title;return Object(g.jsx)(l,{children:Object(g.jsxs)(x.b,{to:{pathname:"movies/".concat(n),state:{from:{location:e,label:"Go back to all movies"}}},children:[Object(g.jsx)(m,{src:"https://image.tmdb.org/t/p/w500"+a,alt:r}),Object(g.jsx)(h,{children:r})]})},n)}))})}b.protoTypes={movies:o.a.arrayOf(o.a.shape({id:o.a.string.isRequired,poster_path:o.a.string,title:o.a.string.isRequired}))}},71:function(t,n,e){"use strict";e.r(n);var a,r=e(35),i=e(0),c=e(34),s=e(9),o=e(10).a.h1(a||(a=Object(s.a)(["\n"]))),u=e(1);function p(t){var n=t.children;return Object(u.jsx)(o,{children:n})}var d=e(41);n.default=function(){var t=Object(i.useState)(null),n=Object(r.a)(t,2),e=n[0],a=n[1];return Object(i.useEffect)((function(){c.e().then((function(t){return a(t)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p,{children:"Trending today"}),e&&Object(u.jsx)(d.a,{movies:e})]})}}}]);
//# sourceMappingURL=home-page.46c20342.chunk.js.map