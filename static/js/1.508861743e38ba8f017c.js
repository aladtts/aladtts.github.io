webpackJsonp([1],{"7SZq":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Xxa5"),n=a.n(s),r=a("exGp"),i=a.n(r),l=a("TPW+"),u=a("gyMJ"),o=a("Du/2"),c={name:"total",mixins:[l.a],data:function(){return{loadTable:!1,columns1:[{title:"钱包地址",key:"addr",width:400},{title:"VIP",key:"grade",width:100},{title:"我的总投资",key:"invest",width:120},{title:"我的总收益",key:"totalCash",width:120},{title:"全球收益",key:"angelAmount",width:120},{title:"是否大使",key:"isAngel",width:100}],columns2:[{title:"等级",key:"grade"},{title:"数量",key:"count"}],data2:[]}},filters:{flex:function(t,e){return t?t.toFixed(e):t},subString:function(t,e){return t.substring(0,16)+"..."+t.substring(t.length-e)}},computed:{data1:function(){var t=[];return t[0]={addr:this.user.addr,grade:this.user.grade,invest:this.user.invest+" ETH",totalCash:this.user.totalCash+" ETH",angelAmount:this.user.angelAmount+" ETH",isAngel:this.user.isAngel?"是":"否"},t}},mounted:function(){var t,e=this,a=this;this.sockets.subscribe("reload",(t=i()(n.a.mark(function t(s){var r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!s.reload){t.next=6;break}return a.init(),t.next=4,u.e();case 4:r=t.sent,a.$store.commit(o.UPDATE_USER,r.user);case 6:case"end":return t.stop()}},t,e)})),function(e){return t.apply(this,arguments)})),this.getGradeCount()},methods:{init:function(){var t=this;this.$store.dispatch("initService"),this.countTime(),setTimeout(function(){t.$store.dispatch("newContract")},5e3)},getGradeCount:function(){var t=this;return i()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b();case 2:a=e.sent,t.data2=a.data;case 4:case"end":return e.stop()}},e,t)}))()}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"total"}},[a("Row",[a("Col",{staticClass:"header",attrs:{xs:12}},[a("h2",[t._v("我的统计")]),t._v(" "),a("Table",{staticClass:"my",attrs:{stripe:"",columns:t.columns1,data:t.data1,loading:t.loadTable}}),t._v(" "),a("h2",[t._v("VIP数量统计")]),t._v(" "),a("Table",{attrs:{stripe:"",columns:t.columns2,data:t.data2,size:"small"}}),t._v(" "),a("svg",{staticClass:"waves",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none","shape-rendering":"auto"}},[a("defs",[a("path",{attrs:{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"}})]),t._v(" "),a("g",{staticClass:"parallax"},[a("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"0",fill:"rgba(255,255,255,0.7"}}),t._v(" "),a("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"3",fill:"rgba(255,255,255,0.5)"}}),t._v(" "),a("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"5",fill:"rgba(255,255,255,0.3)"}}),t._v(" "),a("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"7",fill:"#fff"}})])])],1)],1)],1)},staticRenderFns:[]};var h=a("VU/8")(c,d,!1,function(t){a("EpVQ")},null,null);e.default=h.exports},EpVQ:function(t,e){}});
//# sourceMappingURL=1.508861743e38ba8f017c.js.map