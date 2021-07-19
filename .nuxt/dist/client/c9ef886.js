(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{195:function(t,e,r){"use strict";r.d(e,"i",(function(){return o})),r.d(e,"l",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"f",(function(){return f})),r.d(e,"h",(function(){return d})),r.d(e,"j",(function(){return m})),r.d(e,"a",(function(){return v})),r.d(e,"e",(function(){return h})),r.d(e,"c",(function(){return O})),r.d(e,"n",(function(){return j})),r.d(e,"d",(function(){return _})),r.d(e,"g",(function(){return C})),r.d(e,"m",(function(){return w})),r.d(e,"k",(function(){return y}));var n=r(66),o=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},c=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},v=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},h=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})},O=function(data){return Object(n.b)({method:"post",url:"/api/articles",data:data})},j=function(t,data){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:data})},_=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},C=function(t){return Object(n.b)({method:"post",url:"/api/profiles/".concat(t,"/follow")})},w=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})},y=function(t){return Object(n.b)({method:"get",url:"/api/profiles/".concat(t)})}},277:function(t,e,r){"use strict";r.r(e);r(32),r(20),r(21),r(39),r(40);var n=r(4),o=r(16),c=(r(38),r(27)),l=r(195);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={middleware:"authenticated",name:"UserProfile",data:function(){return{favoriteArticles:[],myArticles:[],articleType:"mine",profile:{},profileDisabled:!1}},created:function(){var t=this;this.username=this.$route.params.username,Object(l.k)(this.username).then((function(e){t.profile=e.data.profile})),Object(l.i)({author:this.username}).then((function(e){t.myArticles=e.data.articles})),Object(l.i)({Favorited:this.username}).then((function(e){t.favoriteArticles=e.data.articles}))},computed:d(d({},Object(c.b)(["user"])),{},{isMyself:function(){return this.$route.params.username==this.user.username},articles:function(){return"mine"==this.articleType?this.myArticles:this.favoriteArticles}}),methods:{onButtonClick:function(){var t=this;this.isMyself?this.$router.push("/settings"):(this.profileDisabled=!0,this.profile.following?Object(l.m)(this.username).then((function(e){t.$set(t.profile,"following",!1),t.profileDisabled=!1})):Object(l.g)(this.username).then((function(e){t.$set(t.profile,"following",!0),t.profileDisabled=!1})))},onFavorite:function(article){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(l.f)(article.slug);case 4:article.favorited=!1,article.favoritesCount+=-1,t.next=12;break;case 8:return t.next=10,Object(l.b)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}}},v=r(31),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"profile-page"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("img",{staticClass:"user-img",attrs:{src:t.profile.image}}),t._v(" "),r("h4",[t._v(t._s(t.username))]),t._v(" "),r("p",[t._v("\n            Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games\n          ")]),t._v(" "),r("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",class:{active:t.profile.following},attrs:{disables:"profileDisabled"},on:{click:t.onButtonClick}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n             \n            "+t._s(t.isMyself?"Edit Profile Settings":t.profile.following?"unFollow Eric Simons":"Follow Eric Simons")+"\n          ")])])])])]),t._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[r("div",{staticClass:"articles-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[r("li",{staticClass:"nav-item",on:{click:function(e){t.articleType="mine"}}},[r("span",{staticClass:"nav-link",class:{active:"mine"===t.articleType}},[t._v("My Articles")])]),t._v(" "),r("li",{staticClass:"nav-item",on:{click:function(e){t.articleType="favourite"}}},[r("span",{staticClass:"nav-link",class:{active:"favourite"===t.articleType}},[t._v("Favorited Articles")])])])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{path:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{path:"profile",params:{username:article.author.username}}}},[t._v("\n                "+t._s(article.author.username)+"\n              ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{path:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)}))],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);