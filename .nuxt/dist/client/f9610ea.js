(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{195:function(t,e,r){"use strict";r.d(e,"i",(function(){return c})),r.d(e,"l",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"f",(function(){return d})),r.d(e,"h",(function(){return f})),r.d(e,"j",(function(){return m})),r.d(e,"a",(function(){return h})),r.d(e,"e",(function(){return v})),r.d(e,"c",(function(){return O})),r.d(e,"n",(function(){return j})),r.d(e,"d",(function(){return E})),r.d(e,"g",(function(){return w})),r.d(e,"m",(function(){return C})),r.d(e,"k",(function(){return x}));var n=r(66),c=function(t){return Object(n.b)({method:"GET",url:"/api/articles",params:t})},o=function(t){return Object(n.b)({method:"GET",url:"/api/articles/feed",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},d=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},h=function(t,data){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})},v=function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})},O=function(data){return Object(n.b)({method:"post",url:"/api/articles",data:data})},j=function(t,data){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:data})},E=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},w=function(t){return Object(n.b)({method:"post",url:"/api/profiles/".concat(t,"/follow")})},C=function(t){return Object(n.b)({method:"DELETE",url:"/api/profiles/".concat(t,"/follow")})},x=function(t){return Object(n.b)({method:"get",url:"/api/profiles/".concat(t)})}},273:function(t,e,r){"use strict";r.r(e);var article=r(195),n={middleware:"authenticated",name:"EditorIndex",data:function(){return{article:{}}},created:function(){var t=this;this.$route.params._slug&&Object(article.h)(this.$route.params._slug).then((function(e){t.article=e.data.article}))},methods:{toPublish:function(){var t=this;this.article.slug?Object(article.n)(this.article.slug,this.article).then((function(e){t.$router.push("/article/"+e.data.article.slug)})):Object(article.c)(this.article).then((function(e){t.$router.push("/article/"+e.data.article.slug)}))}}},c=r(31),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-10 offset-md-1 col-xs-12"},[r("form",[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.title,expression:"article.title"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Article Title"},domProps:{value:t.article.title},on:{input:function(e){e.target.composing||t.$set(t.article,"title",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.description,expression:"article.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"What's this article about?"},domProps:{value:t.article.description},on:{input:function(e){e.target.composing||t.$set(t.article,"description",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.article.body,expression:"article.body"}],staticClass:"form-control",attrs:{rows:"8",placeholder:"Write your article (in markdown)"},domProps:{value:t.article.body},on:{input:function(e){e.target.composing||t.$set(t.article,"body",e.target.value)}}})]),t._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.article.tagList,expression:"article.tagList"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter tags"},domProps:{value:t.article.tagList},on:{input:function(e){e.target.composing||t.$set(t.article,"tagList",e.target.value)}}}),r("div",{staticClass:"tag-list"})]),t._v(" "),r("button",{staticClass:"btn btn-lg pull-xs-right btn-primary",attrs:{type:"button"},on:{click:t.toPublish}},[t._v("\n                Publish Article\n            ")])])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);