webpackJsonp([20],{1025:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"doc"},[a("h2",[e._v("Tabs 标签页")]),e._v(" "),a("h3",[e._v("基本调用")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),a("div",[a("Tabs",{attrs:{datas:e.param,"default-select":"module1"},on:{change:e.change}})],1),e._v(" "),a("h3",[e._v("使用内置的样式")]),e._v(" "),a("div",{directives:[{name:"bg-color",rawName:"v-bg-color:gray4",arg:"gray4"}],staticStyle:{"padding-top":"20px"}},[a("Tabs",{attrs:{datas:e.param,"class-name":"h-tabs-card","default-select":"module1"},on:{change:e.change}})],1),e._v(" "),a("h3",[e._v("使用内置的样式")]),e._v(" "),a("div",{directives:[{name:"width",rawName:"v-width",value:150,expression:"150"}]},[a("Tabs",{attrs:{datas:e.param,"class-name":"h-tabs-menu","default-select":"module1"},on:{change:e.change}})],1),e._v(" "),a("h3",[e._v("使用内置的样式")]),e._v(" "),a("div",{directives:[{name:"width",rawName:"v-width",value:150,expression:"150"}]},[a("Tabs",{attrs:{datas:e.param,"class-name":"h-tabs-menu2","default-select":"module1"},on:{change:e.change}})],1),e._v(" "),a("h3",[e._v("自定义Tabs")]),e._v(" "),a("div",{directives:[{name:"width",rawName:"v-width",value:150,expression:"150"}]},[a("Tabs",{attrs:{datas:e.param2,"class-name":"h-tabs-menu","default-select":"module1"},on:{change:e.change},scopedSlots:e._u([["item",function(t){return[a("span",[e._v(e._s(t.tab.title))]),a("Badge",{attrs:{count:t.tab.count,"max-count":99,position:"right"}})]}]])})],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Tabs控件只支持简单的tab生成，点击切换。默认给"),a("code",[e._v("h-tabs-default")]),e._v("样式，可以自己做自定义Tabs。")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("tab选中时添加class"),a("code",[e._v("h-tabs-selected")])])}]},e.exports.render._withStripped=!0},551:function(e,t,a){var s=a(0)(a(745),a(1025),null,null);s.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/view/tab.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] tab.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},745:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{param:{module1:"模块1",module2:"模块2",module3:"模块3"},param2:[{key:"module1",title:"模块1",count:12},{key:"module2",title:"模块2",count:14},{key:"module3",title:"模块3",count:2}]}},methods:{change:function(e){this.$Message.info("切换至"+e.title,1e3)}}}}});