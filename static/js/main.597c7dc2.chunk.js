(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c(7),s=c.n(r),i=c(9),o=c(6),l=c.n(o),j=c(8),u=c(4),m=(c(16),c(17),function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{className:"mr-2",children:"Add to Favourites"}),Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",class:"bi bi-heart-fill",viewBox:"0 0 16 16",children:Object(a.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})}),d=function(e){var t=e.FavouriteComponent;return Object(a.jsx)(a.Fragment,{children:e.movies.map((function(c,n){return Object(a.jsxs)("div",{className:"image-container d-flex justify-content-start m-3",children:[Object(a.jsx)("img",{src:c.Poster,alt:"movie"}),Object(a.jsx)("div",{onClick:function(){return e.handleFavouriteClick(c)},className:"overlay d-flex align-items-center justify-content",children:Object(a.jsx)(t,{})})]},c.imdbID)}))})},b=function(e){return Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("h1",{children:e.heading})})},h=function(e){return Object(a.jsx)("div",{className:"col col-sm-4",children:Object(a.jsx)("input",{className:"form-control",onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Type to search"})})},v=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{className:"mr-2",children:"Remove from favourite"}),Object(a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-square",viewBox:"0 0 16 16",children:[Object(a.jsx)("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(a.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})]})},f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),o=Object(u.a)(s,2),f=o[0],x=o[1],O=Object(n.useState)(""),p=Object(u.a)(O,2),g=p[0],w=p[1],N=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="http://www.omdbapi.com/?s=".concat(t,"&apikey=").concat("75fcbcb6"),e.next=3,fetch(c);case 3:return a=e.sent,e.next=6,a.json();case 6:(n=e.sent).Search&&r(n.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N(g)}),[g]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-favourites"));e&&x(e)}),[]);var F=function(e){localStorage.setItem("react-movie-app-favourites",JSON.stringify(e))};return Object(a.jsxs)("div",{className:"container-fluid movie-app",children:[Object(a.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(a.jsx)(b,{heading:"movies"}),Object(a.jsx)(h,{searchValue:g,setSearchValue:w})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)(d,{movies:c,handleFavouriteClick:function(e){var t=[].concat(Object(i.a)(f),[e]);x(t),F(t)},FavouriteComponent:m})}),Object(a.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(a.jsx)(b,{heading:"Favourites"})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)(d,{movies:f,handleFavouriteClick:function(e){var t=f.filter((function(t){return t.imdbID!==e.imdbID}));x(t),F(t)},FavouriteComponent:v})})]})};s.a.render(Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.597c7dc2.chunk.js.map