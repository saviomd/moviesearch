webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i="https://api.themoviedb.org/3/",r="api_key=6f875d4fba2e999f480afa6275a08f75",o={configuration:i+"configuration?"+r,imageAttribution:"https://www.themoviedb.org/static_cache/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png",moviesNowPlaying:function(t){return i+"movie/now_playing?"+r+"&region="+t},moviesUpcoming:function(t){return i+"movie/upcoming?"+r+"&region="+t},searchMulti:function(t){return i+"search/multi?"+r+"&query="+t}},a={name:"AppDisclaimer",data:function(){return{imageAttribution:o.imageAttribution}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"border-secondary border-top py-3 small text-center"},[e("img",{staticClass:"mr-1",attrs:{alt:"Powered by TMDb",height:"32",src:this.imageAttribution}}),e("br"),this._v("This product uses the TMDb API but is not endorsed or certified by TMDb.")])},staticRenderFns:[]},u=n("VU/8")(a,c,!1,null,null,null).exports,l={name:"AppFooter",data:function(){return{year:(new Date).getFullYear()}}},m={render:function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"border-secondary border-top mb-3 pt-3 small text-center"},[this._v("© 2018-"+this._s(this.year)),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"ml-1 text-danger",attrs:{href:"http://saviomd.com/",rel:"noopener noreferrer",target:"_blank"}},[e("img",{staticClass:"mr-1",attrs:{alt:"saviomd.com",src:"https://saviomd.com/img/favicon.png",height:"15",width:"15"}}),this._v("Sávio Mendes")])}]},h=n("VU/8")(l,m,!1,null,null,null).exports,p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"border-bottom border-secondary mb-3 py-2"},[e("router-link",{staticClass:"h5 text-white",attrs:{to:"/"}},[this._v("Movie Search")])],1)},staticRenderFns:[]},g=n("VU/8")({name:"AppHeader"},p,!1,null,null,null).exports,f=n("NYxO"),d=n("fZjL"),v=n.n(d),_=n("//Fk"),b=n.n(_),w={namespaced:!0,state:{images:{}},mutations:{updateImages:function(t,e){t.images=e.images}},actions:{fetchApiData:function(t){return new b.a(function(e,n){fetch(o.configuration).then(function(t){if(!t.ok)throw Error(t.statusText);return t.json()}).then(function(n){var s={images:n.images};t.commit("updateImages",s),e()}).catch(function(t){console.log(t.message),n(t)})})},getConfiguration:function(t){return new b.a(function(e,n){v()(t.state.images).length?e():t.dispatch("fetchApiData").then(function(){e()}).catch(function(t){console.log(t.message),n(t)})})}}},R=n("Dd8w"),y=n.n(R),C={namespaced:!0,state:{BR:[],US:[]},getters:{inRegion:function(t){return function(e){return t[e]}}},mutations:{populateRegion:function(t,e){t[e.region]=e.results}},actions:{fetchApiData:function(t,e){return new b.a(function(n,s){fetch(o.moviesNowPlaying(e)).then(function(t){if(!t.ok)throw Error(t.statusText);return t.json()}).then(function(s){var i={results:s.results.map(function(t){return y()({},t,{url:"https://www.themoviedb.org/movie/"+t.id+"/"})}),region:e};t.commit("populateRegion",i),n()}).catch(function(t){console.log(t.message),s(t)})})},getMovies:function(t,e){return new b.a(function(n,s){t.state[e].length?n():t.dispatch("fetchApiData",e).then(function(){n()}).catch(function(t){console.log(t.message),s(t)})})}}},x={namespaced:!0,state:{BR:[],US:[]},getters:{inRegion:function(t){return function(e){return t[e]}}},mutations:{populateRegion:function(t,e){t[e.region]=e.results}},actions:{fetchApiData:function(t,e){return new b.a(function(n,s){fetch(o.moviesUpcoming(e)).then(function(t){if(!t.ok)throw Error(t.statusText);return t.json()}).then(function(s){var i={results:s.results.map(function(t){return y()({},t,{url:"https://www.themoviedb.org/movie/"+t.id+"/"})}),region:e};t.commit("populateRegion",i),n()}).catch(function(t){console.log(t.message),s(t)})})},getMovies:function(t,e){return new b.a(function(n,s){t.state[e].length?n():t.dispatch("fetchApiData",e).then(function(){n()}).catch(function(t){console.log(t.message),s(t)})})}}},U={namespaced:!0,state:{current:"BR",list:["BR","US"]},mutations:{updateCurrent:function(t,e){t.current=e.current}},actions:{setCurrent:function(t,e){var n={current:e};t.commit("updateCurrent",n)}}},S=n("bOdI"),E=n.n(S),F={namespaced:!0,state:{list:{}},getters:{resultBySearchString:function(t){return function(e){return t.list[e]}}},mutations:{addToList:function(t,e){var n=y()({},t.list,E()({},e.query,e.results));t.list=n}},actions:{fetchApiData:function(t,e){return new b.a(function(n,s){fetch(o.searchMulti(e)).then(function(t){if(!t.ok)throw Error(t.statusText);return t.json()}).then(function(s){var i={results:s.results.map(function(t){return y()({},t,{image_path:"person"===t.media_type?t.profile_path:t.poster_path,name:"movie"===t.media_type?t.title:t.name,url:"https://www.themoviedb.org/"+t.media_type+"/"+t.id+"/"})}),query:e};t.commit("addToList",i),n()}).catch(function(t){console.log(t.message),s(t)})})},getResult:function(t,e){return new b.a(function(n,s){e in t.state.list?n():t.dispatch("fetchApiData",e).then(function(){n()}).catch(function(t){console.log(t.message),s(t)})})}}};s.a.use(f.a);var $=new f.a.Store({modules:{configuration:w,moviesNowPlaying:C,moviesUpcoming:x,regions:U,searchResult:F}}),M={name:"App",components:{"app-disclaimer":u,"app-footer":h,"app-header":g},mounted:function(){$.dispatch("configuration/getConfiguration")}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-fluid",attrs:{id:"app"}},[e("div",{staticClass:"justify-content-center row"},[e("div",{staticClass:"col-12 col-md-10"},[e("app-header"),e("router-view"),e("app-disclaimer"),e("app-footer")],1)])])},staticRenderFns:[]},A=n("VU/8")(M,k,!1,null,null,null).exports,P=n("/ocq"),V={name:"FormSearch",data:function(){return{searchString:this.$route.query.q||""}},methods:{submitSearch:function(t){t.preventDefault();var e=this.searchString.trim().toLowerCase();$.dispatch("searchResult/getResult",e).then(function(){ut.push({name:"PageSearchResult",query:{q:e}})})}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"mb-3",on:{submit:t.submitSearch}},[n("div",{staticClass:"input-group input-group-lg"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchString,expression:"searchString"}],staticClass:"form-control",attrs:{required:"required",placeholder:"Movies, people and tv series...",type:"search"},domProps:{value:t.searchString},on:{input:function(e){e.target.composing||(t.searchString=e.target.value)}}}),t._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"submit"}},[this._v("Search")])])}]},q=n("VU/8")(V,D,!1,null,null,null).exports,N={name:"ResponsiveImage",props:["alt","path","type"],computed:{src:function(){var t=$.state.configuration.images,e="person"===this.type?t.profile_sizes[0]:t.poster_sizes[0];return""+t.secure_base_url+e+this.path},srcset:function(){var t=this,e=$.state.configuration.images,n=[];return("person"===this.type?e.profile_sizes:e.poster_sizes).forEach(function(s){if("original"!==s){var i=""+e.secure_base_url+s+t.path,r=s.split("w")[1]+"w";n.push(i+" "+r)}}),n.toString()}}},T={render:function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"bg-secondary w-100",attrs:{alt:this.alt,src:this.src,srcset:this.srcset}})},staticRenderFns:[]},j=n("VU/8")(N,T,!1,null,null,null).exports,B={name:"ListMovies",props:["movie"],components:{"responsive-image":j}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"text-white",attrs:{href:t.movie.url,target:"_blank"}},[n("responsive-image",{attrs:{alt:t.movie.title,path:t.movie.poster_path,type:"movie"}}),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[t._v(t._s(t.movie.release_date))]),n("div",{staticClass:"col-auto"},[t._v(t._s(t.movie.vote_average))])])],1)},staticRenderFns:[]},H={name:"ListMovies",props:["movies"],components:{"link-movie":n("VU/8")(B,L,!1,null,null,null).exports}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"flex-nowrap list-unstyled mb-0 overflow-x-scroll row"},this._l(this.movies,function(t){return e("li",{key:t.id,staticClass:"col-7 col-sm-5 col-md-4 col-lg-3",attrs:{value:t.id}},[e("link-movie",{attrs:{movie:t}})],1)}))},staticRenderFns:[]},z=n("VU/8")(H,I,!1,null,null,null).exports,O={name:"MoviesNowPlaying",components:{"list-movies":z},computed:{currentRegion:function(){return $.state.regions.current},movies:function(){return $.getters["moviesNowPlaying/inRegion"](this.currentRegion)}},mounted:function(){$.dispatch("moviesNowPlaying/getMovies",this.currentRegion)},watch:{currentRegion:function(){$.dispatch("moviesNowPlaying/getMovies",this.currentRegion)}}},Y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"border border-secondary mb-3 p-3 rounded"},[e("h1",{staticClass:"h3"},[this._v("Movies now playing")]),e("list-movies",{attrs:{movies:this.movies}})],1)},staticRenderFns:[]},G={name:"MoviesUpcoming",components:{"list-movies":z},computed:{currentRegion:function(){return $.state.regions.current},movies:function(){return $.getters["moviesUpcoming/inRegion"](this.currentRegion)}},mounted:function(){$.dispatch("moviesUpcoming/getMovies",this.currentRegion)},watch:{currentRegion:function(){$.dispatch("moviesUpcoming/getMovies",this.currentRegion)}}},J={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"border border-secondary mb-3 p-3 rounded"},[e("h1",{staticClass:"h3"},[this._v("Upcoming movies")]),e("list-movies",{attrs:{movies:this.movies}})],1)},staticRenderFns:[]},W={name:"ToggleRegion",computed:{currentRegion:function(){return $.state.regions.current},regions:function(){return $.state.regions.list}},methods:{updateCurrentRegion:function(t){$.dispatch("regions/setCurrent",t)}}},Z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-group"},t._l(t.regions,function(e){return n("button",{key:e,staticClass:"btn btn-secondary btn-sm",class:e===t.currentRegion?"active":"",on:{click:function(n){t.updateCurrentRegion(e)}}},[t._v(t._s(e))])}))},staticRenderFns:[]},K={name:"PageHome",components:{"form-search":q,"movies-now-playing":n("VU/8")(O,Y,!1,null,null,null).exports,"movies-upcoming":n("VU/8")(G,J,!1,null,null,null).exports,"toggle-region":n("VU/8")(W,Z,!1,null,null,null).exports}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("form-search"),e("div",{staticClass:"mb-3 text-right"},[e("toggle-region")],1),e("movies-now-playing"),e("movies-upcoming")],1)},staticRenderFns:[]},X=n("VU/8")(K,Q,!1,null,null,null).exports,tt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mb-3 text-center"},[e("h1",{staticClass:"h3"},[this._v("Page not found")]),e("p",[this._v("This page doesn't exist!")]),e("router-link",{staticClass:"btn btn-danger",attrs:{to:"/"}},[this._v("Go to homepage")])],1)},staticRenderFns:[]},et=n("VU/8")({name:"PageNotFound"},tt,!1,null,null,null).exports,nt={name:"ButtonResult",props:["item"],components:{"responsive-image":j}},st={render:function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn btn-secondary btn-block",attrs:{href:this.item.url,target:"_blank"}},[e("div",{staticClass:"no-gutters row"},[e("div",{staticClass:"col-4 pr-3"},[e("responsive-image",{attrs:{alt:this.item.name,path:this.item.image_path,type:this.item.item_type}})],1),e("div",{staticClass:"col-8 text-left text-truncate"},[this._v(this._s(this.item.name))])])])},staticRenderFns:[]},it={name:"SearchResult",components:{"button-result":n("VU/8")(nt,st,!1,null,null,null).exports},computed:{result:function(){return $.getters["searchResult/resultBySearchString"](this.$route.query.q)}},mounted:function(){$.dispatch("searchResult/getResult",this.$route.query.q)}},rt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"list-unstyled"},this._l(this.result,function(t){return e("li",{key:t.id,attrs:{value:t.id}},[e("button-result",{staticClass:"mb-3",attrs:{item:t}})],1)}))},staticRenderFns:[]},ot={name:"PageSearchResult",components:{"form-search":q,"search-result":n("VU/8")(it,rt,!1,null,null,null).exports}},at={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("form-search"),e("search-result")],1)},staticRenderFns:[]},ct=n("VU/8")(ot,at,!1,null,null,null).exports;s.a.use(P.a);var ut=new P.a({routes:[{path:"/",name:"PageHome",component:X},{path:"/search",name:"PageSearchResult",component:ct},{path:"*",name:"PageNotFound",component:et}]});n("iocV");s.a.config.productionTip=!1,new s.a({el:"#app",router:ut,components:{App:A},template:"<App/>"})},iocV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8266cab8cac66da97c0e.js.map