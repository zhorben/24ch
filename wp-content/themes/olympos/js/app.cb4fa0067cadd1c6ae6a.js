webpackJsonp([1,0],[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var s=n(15),i=o(s),r=n(8),a=o(r),u=n(14),c=o(u);i.default.use(a.default),i.default.use(c.default);var d=new c.default({mode:"history",routes:[{path:"/",component:n(1),name:"home"},{path:"/posts",component:n(10),name:"posts"},{path:"/article/:id",component:n(1)},{path:"*",redirect:"/"}]});i.default.http.options.root="http://jsonplaceholder.typicode.com",i.default.http.headers.common.Authorization="Basic ahskdjshjdkhsakjhd",new i.default({el:"#app",router:d,render:function(t){return t(n(9))}})},function(t,e,n){var o,s;n(5),o=n(3);var i=n(11);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,s._scopeId="data-v-06ba8934",t.exports=o},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"posts",data:function(){return{posts:[],loading:!1}},mounted:function(){var t=this;this.$post=this.$resource("posts/{/id}"),this.$post.query().then(function(e){t.posts=e.data},function(t){console.log("error",t)})},methods:{save:function(t){var e=this;this.loading=!0,this.$post.update({id:t.id},{title:t.title}).then(function(t){},function(t){console.log("error",t)}).then(function(t){e.loading=!1})},destroy:function(t){var e=this;this.loading=!0,this.$post.remove({id:t.id}).then(function(n){e.posts=e.posts.filter(function(e){return e!==t})},function(t){console.log("error",t)}).then(function(t){e.loading=!1})}}}},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){var o,s;n(6),o=n(2);var i=n(12);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e,n){var o,s;n(7),o=n(4);var i=n(13);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v("Home page")]),t._v(" "),n("p",[t._v("Hello, world")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"menu"},[n("pre",[t._v(t._s(t.$router.name))]),t._v(" "),n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("router-link",{attrs:{to:"/posts"}},[t._v("Articles")])],1),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post"},[n("h1",[t._v("zhoRBen")]),t._v(" "),t.loading?n("div",{staticClass:"loader"},[n("div",{staticClass:"text"},[t._v("loading...")])]):t._e(),t._v(" "),t._l(t.posts,function(e){return n("div",{staticClass:"post-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"post.title"}],attrs:{type:"text"},domProps:{value:t._s(e.title)},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"descr"},[t._v(t._s(e.body))]),t._v(" "),n("button",{on:{click:function(n){t.save(e)}}},[t._v("save")]),t._v(" "),n("button",{on:{click:function(n){t.destroy(e)}}},[t._v("close")]),t._v(" "),n("pre",[t._v(t._s(e.id))])])})],2)},staticRenderFns:[]}}]);
//# sourceMappingURL=app.cb4fa0067cadd1c6ae6a.js.map