(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{195:function(t,e,r){"use strict";r.d(e,"i",(function(){return c})),r.d(e,"l",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"f",(function(){return f})),r.d(e,"h",(function(){return v})),r.d(e,"j",(function(){return d})),r.d(e,"a",(function(){return m})),r.d(e,"e",(function(){return h})),r.d(e,"c",(function(){return _})),r.d(e,"n",(function(){return O})),r.d(e,"d",(function(){return C})),r.d(e,"g",(function(){return E})),r.d(e,"m",(function(){return j})),r.d(e,"k",(function(){return y}));var n=r(66),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},d=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},m=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},h=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})},_=function(data){return Object(n.b)({method:"post",url:"/api/articles",data:data})},O=function(t,data){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:data})},C=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},E=function(t){return Object(n.b)({method:"post",url:"/api/profiles/".concat(t,"/follow")})},j=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})},y=function(t){return Object(n.b)({method:"get",url:"/api/profiles/".concat(t)})}},209:function(t,e,r){var n=r(3),c=r(34),o=r(9),l=r(210),f="["+l+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(h):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},h=m.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},210:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},269:function(t,e,r){var n=r(3),c=r(270);n(n.S+n.F*(Number.parseInt!=c),"Number",{parseInt:c})},270:function(t,e,r){var n=r(5).parseInt,c=r(209).trim,o=r(210),l=/^[-+]?0[xX]/;t.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(t,e){var r=c(String(t),3);return n(r,e>>>0||(l.test(r)?16:10))}:n},271:function(t,e,r){"use strict";var n=r(5),c=r(25),o=r(26),l=r(130),f=r(67),v=r(9),d=r(51).f,m=r(52).f,h=r(11).f,_=r(209).trim,O="Number",C=n.Number,E=C,j=C.prototype,y=o(r(86)(j))==O,x="trim"in String.prototype,k=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=x?e.trim():_(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(y?v((function(){j.valueOf.call(r)})):o(r)!=O)?l(new E(k(e)),r,C):k(e)};for(var w,I=r(7)?d(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;I.length>N;N++)c(E,w=I[N])&&!c(C,w)&&h(C,w,m(E,w));C.prototype=j,j.constructor=C,r(13)(n,O,C)}},272:function(t,e,r){"use strict";r.r(e);var n=r(16),c=r(10),o=r(4),l=(r(38),r(269),r(271),r(41),r(14),r(42),r(32),r(20),r(21),r(39),r(40),r(195)),f=r(66),v=r(27);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"HomeIndex",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,v,d,m,h,_,O,C,E,j,y,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=Number.parseInt(r.page||1),o=20,v=r.tab||"global_feed",d=r.tag,m="global_feed"===v?l.i:l.l,e.next=8,Promise.all([m({limit:o,offset:(n-1)*o,tag:d}),Object(f.b)({method:"GET",url:"/api/tags"})]);case 8:return h=e.sent,_=Object(c.a)(h,2),O=_[0],C=_[1],E=O.data,j=E.articles,y=E.articlesCount,x=C.data.tags,j.forEach((function(article){return article.favoriteDisabled=!1})),e.abrupt("return",{articles:j,articlesCount:y,tags:x,limit:o,page:n,tab:v,tag:d});case 16:case"end":return e.stop()}}),e)})))()},watchQuery:["page","tag","tab"],computed:m(m({},Object(v.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),methods:{onFavorite:function(article){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(l.f)(article.slug);case 4:article.favorited=!1,article.favoritesCount+=-1,t.next=12;break;case 8:return t.next=10,Object(l.b)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}}},_=r(31),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{exact:"",to:{path:"/",query:{tab:"your_feed"}}}},[t._v("Your Feed")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{exact:"",to:{path:"/"}}},[t._v("Global Feed")])],1),t._v(" "),t.tag?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tag"===t.tab},attrs:{exact:"",to:{path:"/",query:{tab:"tag",tag:t.tag}}}},[t._v("# "+t._s(t.tag))])],1):t._e()])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:{path:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:{path:"profile",params:{username:article.author.username}}}},[t._v("\n                "+t._s(article.author.username)+"\n              ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{staticClass:"preview-link",attrs:{to:{path:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),t._v(" "),r("nav",[r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{to:{path:"/",query:{page:e,tag:t.$route.query.tag,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)])],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{path:"/",query:{tab:"tag",tag:e}}}},[t._v(t._s(e))])})),1)])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"logo-font"},[t._v("拉勾教育")]),t._v(" "),r("p",[t._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);