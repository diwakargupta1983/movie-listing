(function(e){function t(t){for(var a,o,i=t[0],s=t[1],l=t[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);b&&b(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],a=!0,o=1;o<r.length;o++){var s=r[o];0!==n[s]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},c=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0af41f":"ddd8a987"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=n[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,a){r=n[e]=[t,a]}));t.push(r[2]=a);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(e);var l=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(u);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,r[1](l)}n[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/movie-listing/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var b=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0613":function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return l}));var a=r("5502"),n={loading:!1,movies:[],totalResults:0,totalPages:0,perPage:0,page:0,favourites:[],searchString:""},c=r("c4e7"),o=r("fc60"),i={totalMovieCount:function(e){return e.movies.length},moviesList:function(e){return e.movies},pageNumberStart:function(e){return 1!==e.page?(e.page-1)*e.perPage+1:e.page},pageNumberEnd:function(e){return e.page!==e.totalPages?e.page*e.perPage:e.totalResults}},s=Object(a["a"])({plugins:[],state:n,mutations:c["b"],actions:o["b"],getters:i});function l(){return s}},"927c":function(e,t,r){},c4e7:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));r("4de4"),r("c975");var a,n,c=r("ade3");(function(e){e["SetMovies"]="SET_MOVIES",e["SetLoading"]="SET_LOADING",e["SetPageNumber"]="SET_PAGE_NUMBER",e["SetPerPage"]="SET_PER_PAGE",e["SetPage"]="SET_PAGE",e["SetTotalResults"]="SET_TOTAL_RESULTS",e["SetTotalPages"]="SET_TOTAL_PAGES",e["SetFavorites"]="SET_FAVOURITES"})(n||(n={}));var o=(a={},Object(c["a"])(a,n.SetMovies,(function(e,t){e.movies=t})),Object(c["a"])(a,n.SetLoading,(function(e,t){e.loading=t})),Object(c["a"])(a,n.SetPageNumber,(function(e,t){e.page="next"===t?++e.page:--e.page})),Object(c["a"])(a,n.SetPerPage,(function(e,t){e.perPage=t})),Object(c["a"])(a,n.SetPage,(function(e,t){e.page=t})),Object(c["a"])(a,n.SetTotalResults,(function(e,t){e.totalResults=t})),Object(c["a"])(a,n.SetTotalPages,(function(e,t){e.totalPages=t})),Object(c["a"])(a,n.SetFavorites,(function(e,t){if(!e.favourites.length||e.favourites.indexOf(t)<=-1)e.favourites.push(t);else{var r=e.favourites.filter((function(e){return e.imdbID!==t.imdbID}));e.favourites=r}})),a)},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("7a23"),n=(r("b0c0"),{class:"relative bg-white overflow-hidden"}),c={class:"max-w-7xl mx-auto"},o={class:"relative z-10 pb-8 bg-white sm:pb-16 md:pb-10"},i={class:"relative pt-6"},s={class:"relative flex items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global"},l=Object(a["f"])('<div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"><div class="flex items-center justify-between w-full md:w-auto"><a href="javascript:void(0)"><span class="sr-only">Workflow</span><img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"></a></div></div><div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8 text-pink-900 text-xl font-black ml-0"><span class="text-purple-800 text-4xl font-black">IMDB</span> Movies </div>',2),u={class:"flex flex-row-reverse items-center flex-grow flex-shrink-0"},b=Object(a["g"])("Home"),p=Object(a["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"h-6 text-yellow-400"},[Object(a["h"])("title",null,"Favourites icon"),Object(a["h"])("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})],-1),d=Object(a["h"])("div",null,[Object(a["h"])("p",{class:" text-xs font-medium ml-2 "}," Favourites ")],-1),g={class:"px-4 py-4"};function f(e,t,r,f,h,v){var m=Object(a["w"])("router-link"),O=Object(a["w"])("router-view");return Object(a["r"])(),Object(a["d"])("div",n,[Object(a["h"])("div",c,[Object(a["h"])("div",o,[Object(a["h"])("div",i,[Object(a["h"])("nav",s,[l,Object(a["h"])("div",u,["Favourites"===this.$route.name?(Object(a["r"])(),Object(a["d"])(m,{key:0,to:"/"},{default:Object(a["C"])((function(){return[b]})),_:1})):Object(a["e"])("",!0),"Home"===this.$route.name?(Object(a["r"])(),Object(a["d"])(m,{key:1,to:"/favourites",class:"flex items-center p-2 bg-blue-200 rounded-md shadow-xs cursor-pointer hover:bg-blue-700 border border-blue-800 border-solid bg-blue-600 text-white hover:text-gray-100"},{default:Object(a["C"])((function(){return[p,d]})),_:1})):Object(a["e"])("",!0)])])])]),Object(a["h"])("main",g,[Object(a["h"])(O)])])])}var h=r("0613"),v=r("fc60"),m=Object(a["i"])({setup:function(){var e=Object(h["b"])();return Object(a["p"])((function(){return e.dispatch(v["a"].GetALLMovies)})),{}}});m.render=f;var O=m,j=(r("d3b7"),r("6c02"));function x(e,t,r,n,c,o){var i=Object(a["w"])("MovieList");return Object(a["r"])(),Object(a["d"])("div",null,[Object(a["h"])(i)])}var w={class:"flex flex-col"},y={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},S={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},P={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},k={class:"min-w-full divide-y divide-gray-200"},T=Object(a["h"])("thead",{class:"bg-gray-50"},[Object(a["h"])("tr",null,[Object(a["h"])("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Title "),Object(a["h"])("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Year "),Object(a["h"])("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," IMDB ID "),Object(a["h"])("th",{scope:"col",class:"relative px-6 py-3"},[Object(a["h"])("span",{class:"sr-only"},"Mark as favourite")])])],-1),M={class:"bg-white divide-y divide-gray-200"},_={class:"px-6 py-4 whitespace-nowrap"},L={class:"px-6 py-4 whitespace-nowrap"},E={class:"px-6 py-4 whitespace-nowrap"},R={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},A=Object(a["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 text-red-600",viewBox:"0 0 20 20",fill:"currentColor"},[Object(a["h"])("path",{"fill-rule":"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clip-rule":"evenodd"})],-1),N={key:0},I=Object(a["h"])("td",{colspan:"4",class:"text-center"},"No data found !",-1);function B(e,t,r,n,c,o){var i=Object(a["w"])("SearchBar"),s=Object(a["w"])("Pagination");return Object(a["r"])(),Object(a["d"])("div",null,[Object(a["h"])(i),Object(a["h"])("div",w,[Object(a["h"])("div",y,[Object(a["h"])("div",S,[Object(a["h"])("div",P,[Object(a["h"])("table",k,[T,Object(a["h"])("tbody",M,[(Object(a["r"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.moviesList,(function(t){return Object(a["r"])(),Object(a["d"])("tr",{key:t.imdbID},[Object(a["h"])("td",_,Object(a["y"])(t.Title),1),Object(a["h"])("td",L,Object(a["y"])(t.Year),1),Object(a["h"])("td",E,Object(a["y"])(t.imdbID),1),Object(a["h"])("td",R,[Object(a["h"])("a",{href:"javascript:void(0)",class:"text-indigo-600 hover:text-indigo-900",onClick:function(r){return e.toggleAsFavourite(t)},title:"Mark as favourite"},[A],8,["onClick"])])])})),128)),e.moviesList.length?Object(a["e"])("",!0):(Object(a["r"])(),Object(a["d"])("tr",N,[I]))])])])])])]),Object(a["h"])(s)])}var C={class:"bg-white py-3 flex items-center justify-between border-t border-gray-200"},G={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},F={class:"text-sm text-gray-700"},D=Object(a["g"])(" Showing "),z={class:"font-medium"},V=Object(a["g"])(" to "),U={class:"font-medium"},H=Object(a["g"])(" of "),Y={class:"font-medium"},J=Object(a["g"])(" results "),$={class:"relative z-0 inline-flex shadow-sm -space-x-px","aria-label":"Pagination"},q=Object(a["h"])("span",{class:"sr-only"},"Previous",-1),W=Object(a["h"])("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[Object(a["h"])("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),X=Object(a["h"])("span",{class:"sr-only"},"Next",-1),K=Object(a["h"])("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[Object(a["h"])("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1);function Q(e,t,r,n,c,o){return Object(a["r"])(),Object(a["d"])("div",C,[Object(a["h"])("div",G,[Object(a["h"])("div",null,[Object(a["h"])("p",F,[D,Object(a["h"])("span",z,Object(a["y"])(e.pageNumberStart),1),V,Object(a["h"])("span",U,Object(a["y"])(e.pageNumberEnd),1),H,Object(a["h"])("span",Y,Object(a["y"])(e.totalResults),1),J])]),Object(a["h"])("div",null,[Object(a["h"])("nav",$,[Object(a["h"])("a",{href:"javascript: void(0)",class:["relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",[e.page<=1?"opacity-25 bg-gray-200":""]],onClick:t[1]||(t[1]=function(t){return e.page>1?e.getNextOrPreviousPage("previous"):null})},[q,W],2),Object(a["h"])("a",{href:"javascript: void(0)",class:["relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",[e.page>=e.totalPages?"opacity-25 bg-gray-200":""]],onClick:t[2]||(t[2]=function(t){return e.page<e.totalPages?e.getNextOrPreviousPage("next"):null})},[X,K],2)])])])])}var Z=Object(a["i"])({setup:function(){var e=Object(h["b"])(),t=Object(a["b"])((function(){return e.state.totalPages})),r=Object(a["b"])((function(){return e.state.totalResults})),n=Object(a["b"])((function(){return e.getters.pageNumberStart})),c=Object(a["b"])((function(){return e.getters.pageNumberEnd})),o=Object(a["b"])((function(){return e.state.page})),i=function(t){e.dispatch(v["a"].GetNextOrPreviousPage,t)};return{totalPages:t,totalResults:r,pageNumberStart:n,pageNumberEnd:c,getNextOrPreviousPage:i,page:o}}});Z.render=Q;var ee=Z,te={class:"rounded bg-gray-200 container py-4 flex justify-center items-center px-4 sm:px-6 lg:px-8 mb-8"},re={class:"py-2 relative"},ae=Object(a["h"])("svg",{class:"text-gray-600 h-4 w-4 fill-current",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 56.966 56.966",style:{"enable-background":"new 0 0 56.966 56.966"},"xml:space":"preserve",width:"512px",height:"512px"},[Object(a["h"])("path",{d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"})],-1);function ne(e,t,r,n,c,o){return Object(a["r"])(),Object(a["d"])("div",te,[Object(a["h"])("div",re,[Object(a["D"])(Object(a["h"])("input",{class:"border border-gray-300 bg-white h-8 px-2 pr-8 rounded-md text-sm focus:outline-none",type:"search",name:"search",placeholder:"Search","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.state.searchString=t})},null,512),[[a["A"],e.state.searchString]]),Object(a["h"])("button",{onClick:t[2]||(t[2]=function(){return e.searchMovieByTitle&&e.searchMovieByTitle.apply(e,arguments)}),type:"submit",class:"absolute right-2 top-4"},[ae])])])}var ce=Object(a["i"])({setup:function(){var e=Object(a["t"])({searchString:""}),t=Object(h["b"])(),r=function(){t.state.searchString=e.searchString,t.dispatch(v["a"].SearchMovieByTitle,e.searchString)};return{state:e,searchMovieByTitle:r}}});ce.render=ne;var oe=ce,ie=Object(a["i"])({name:"MovieList",components:{Pagination:ee,SearchBar:oe},setup:function(){var e=Object(h["b"])(),t=Object(a["b"])((function(){return e.getters.moviesList})),r=function(t){return e.dispatch(v["a"].ToggleMovieAsFavourite,t)};return{moviesList:t,toggleAsFavourite:r}}});ie.render=B;var se=ie,le=Object(a["i"])({name:"Home",components:{MovieList:se}});le.render=x;var ue=le,be=[{path:"/",name:"Home",component:ue},{path:"/favourites",name:"Favourites",component:function(){return r.e("chunk-2d0af41f").then(r.bind(null,"0e0d"))}}],pe=Object(j["a"])({history:Object(j["b"])("/movie-listing/"),routes:be}),de=pe;r("927c");Object(a["c"])(O).use(h["a"]).use(de).mount("#app")},fc60:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return s}));r("99af"),r("d3b7");var a,n,c=r("ade3"),o=(r("96cf"),r("1da1")),i=r("c4e7");(function(e){e["GetALLMovies"]="GET_ALL_MOVIES",e["GetNextOrPreviousPage"]="GET_NEXT_OR_PREVIOUS_PAGE",e["SearchMovieByTitle"]="SEARCH_MOVIE_BY_TITLE",e["ToggleMovieAsFavourite"]="TOGGLE_MOVIE_AS_FAVOURITE"})(n||(n={}));var s=(a={},Object(c["a"])(a,n.GetALLMovies,(function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r(i["a"].SetLoading,!0),t.next=4,fetch("https://jsonmock.hackerrank.com/api/movies/search").then((function(e){return e.json()})).then((function(e){r(i["a"].SetMovies,e.data),r(i["a"].SetTotalResults,e.total),r(i["a"].SetTotalPages,e.total_pages),r(i["a"].SetPerPage,e.per_page),r(i["a"].SetPage,parseInt(e.page))}));case 4:r(i["a"].SetLoading,!1);case 5:case"end":return t.stop()}}),t)})))()})),Object(c["a"])(a,n.GetNextOrPreviousPage,(function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,n=e.state,a(i["a"].SetLoading,!0),a(i["a"].SetPageNumber,t),r.next=5,fetch("https://jsonmock.hackerrank.com/api/movies/search/?Title=".concat(n.searchString,"&page=").concat(n.page)).then((function(e){return e.json()})).then((function(e){a(i["a"].SetMovies,e.data),a(i["a"].SetTotalResults,e.total),a(i["a"].SetTotalPages,e.total_pages),a(i["a"].SetPerPage,e.per_page),a(i["a"].SetPage,parseInt(e.page))}));case 5:a(i["a"].SetLoading,!1);case 6:case"end":return r.stop()}}),r)})))()})),Object(c["a"])(a,n.SearchMovieByTitle,(function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,a=e.state,r(i["a"].SetLoading,!0),t.next=4,fetch("https://jsonmock.hackerrank.com/api/movies/search/?Title=".concat(a.searchString)).then((function(e){return e.json()})).then((function(e){r(i["a"].SetMovies,e.data),r(i["a"].SetTotalResults,e.total),r(i["a"].SetTotalPages,e.total_pages),r(i["a"].SetPerPage,e.per_page),r(i["a"].SetPage,parseInt(e.page))}));case 4:r(i["a"].SetLoading,!1);case 5:case"end":return t.stop()}}),t)})))()})),Object(c["a"])(a,n.ToggleMovieAsFavourite,(function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=e.commit,a(i["a"].SetFavorites,t);case 2:case"end":return r.stop()}}),r)})))()})),a)}});
//# sourceMappingURL=app.77a8cb3b.js.map