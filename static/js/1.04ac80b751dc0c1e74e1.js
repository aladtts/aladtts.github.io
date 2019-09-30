webpackJsonp([1],{"7SZq":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Xxa5"),s=n.n(a),i=n("exGp"),r=n.n(i),l=n("TPW+"),o=n("gyMJ"),u=n("Du/2"),c={name:"total",mixins:[l.a],data:function(){return{loadTable:!0,columns1:[{title:"Address",key:"addr",width:400},{title:"VIP",key:"grade",width:100},{title:"Main line",key:"mainLine",width:120},{title:"All side line",key:"allLine",width:120},{title:"Total investment",key:"invest",width:160},{title:"Shareholder dividends",key:"shareholder",width:200},{title:"Nodes income",key:"angelAmount",width:140},{title:"Is Nodes",key:"isAngel",width:100}],columns2:[{title:"Lv",key:"grade"},{title:"Count",key:"count"}],data2:[],todayInvest:0,line:{mainLine:0,allLine:0}}},filters:{flex:function(t,e){return t?t.toFixed(e):t},subString:function(t,e){return t.substring(0,16)+"..."+t.substring(t.length-e)}},computed:{data1:function(){var t=[];return t[0]={addr:this.user.addr,grade:this.user.grade,mainLine:this.line.mainLine+" ETH",allLine:this.line.allLine+" ETH",invest:this.todayInvest+" ETH",shareholder:this.user.shareholder+" ETH",angelAmount:this.user.angelAmount?this.user.angelAmount.toFixed(4)+" ETH":"0 ETH",isAngel:this.user.isAngel?"Yes":"No"},t}},mounted:function(){var t,e=this,n=this;this.sockets.subscribe("reload",(t=r()(s.a.mark(function t(a){var i;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.reload){t.next=6;break}return n.init(),t.next=4,o.i();case 4:i=t.sent,n.$store.commit(u.UPDATE_USER,i.user);case 6:case"end":return t.stop()}},t,e)})),function(e){return t.apply(this,arguments)})),this.getTodayInvest(),this.getGradeCount(),this.getLine()},methods:{init:function(){var t=this;this.$store.dispatch("initService"),this.countTime(),setTimeout(function(){t.$store.dispatch("newContract")},5e3)},getGradeCount:function(){var t=this;return r()(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b();case 2:n=e.sent,t.data2=n.data;case 4:case"end":return e.stop()}},e,t)}))()},getLine:function(){var t=this;return r()(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c();case 2:n=e.sent,t.$set(t,"line",n.data),t.loadTable=!1;case 5:case"end":return e.stop()}},e,t)}))()},getTodayInvest:function(){var t=this;return r()(s.a.mark(function e(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.h();case 2:n=e.sent,console.log(n),t.$set(t,"todayInvest",n.data);case 5:case"end":return e.stop()}},e,t)}))()}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"total"}},[n("Row",[n("Col",{staticClass:"header",attrs:{xs:12}},[n("h2",[t._v("My income statistics")]),t._v(" "),n("Table",{staticClass:"my",attrs:{stripe:"",columns:t.columns1,data:t.data1,loading:t.loadTable}}),t._v(" "),n("h2",[t._v("Vip count statistics")]),t._v(" "),n("Table",{attrs:{stripe:"",columns:t.columns2,data:t.data2,size:"small"}}),t._v(" "),n("svg",{staticClass:"waves",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none","shape-rendering":"auto"}},[n("defs",[n("path",{attrs:{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"}})]),t._v(" "),n("g",{staticClass:"parallax"},[n("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"0",fill:"rgba(255,255,255,0.7"}}),t._v(" "),n("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"3",fill:"rgba(255,255,255,0.5)"}}),t._v(" "),n("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"5",fill:"rgba(255,255,255,0.3)"}}),t._v(" "),n("use",{attrs:{"xlink:href":"#gentle-wave",x:"48",y:"7",fill:"#fff"}})])])],1)],1)],1)},staticRenderFns:[]};var h=n("VU/8")(c,d,!1,function(t){n("vh+i")},null,null);e.default=h.exports},"vh+i":function(t,e){}});
//# sourceMappingURL=1.04ac80b751dc0c1e74e1.js.map