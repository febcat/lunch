webpackJsonp([1],{"3Niu":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("kV13"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var l=n("C7Lr")({name:"App"},i,!1,function(t){n("lKzE")},null,null).exports,r=n("DGCT");const a=(t,e)=>Math.floor(Math.random()*(t-e+1)+e);var c={props:{color:{type:String,default:"#fff"},text:{type:String,default:"暂无内容"},isSelected:{type:Boolean,default:!1}},data:function(){return{}}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:this.isSelected?"item selected":"item default",style:{background:this.color}},[this._v("\n  "+this._s(this.text)+"\n")])},staticRenderFns:[]};var u=n("C7Lr")(c,o,!1,function(t){n("3Niu")},null,null).exports,h=n("hRKE"),p=n.n(h),d={props:{lunch:{type:Array|String,default:""}},computed:{isShowTime:function(){return["string"].includes(p()(this.lunch))}},methods:{getMapItem:function(t){return Array.isArray(t)&&t.length?t.reduce(function(t,e){return t+" "+e},""):"暂无~"}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lunch"},[t.isShowTime?n("p",{staticClass:"time"},[t._v("\n    "+t._s(t.lunch)+"\n  ")]):t._e(),t._v(" "),t.isShowTime?t._e():n("div",[n("p",{staticClass:"text"},[t._v(t._s(t.lunch.text))]),t._v(" "),n("div",{staticClass:"lable"},[t._v("踩过的店")]),t._v(" "),n("ul",{staticClass:"shop"},t._l(t.lunch.shops,function(e,s){return n("li",{key:s},[t._v(t._s(e))])}),0),t._v(" "),n("div",{staticClass:"lable"},[t._v("偏好：\n      "),n("span",{staticClass:"like"},[t._v(t._s(t.getMapItem(t.lunch.like)))])]),t._v(" "),n("div",{staticClass:"lable"},[t._v("不喜：\n       "),n("span",{staticClass:"dislike"},[t._v(t._s(t.getMapItem(t.lunch.dislike)))])])])])},staticRenderFns:[]};var m=n("C7Lr")(d,v,!1,function(t){n("xAib")},"data-v-399a49a8",null).exports;const f={big:[{text:"可乐炸鸡",shops:["偶霸韩味炸鸡(汉堡)"],like:["翅包饭"],dislike:[]},{text:"烤鸭面饼",shops:["阿果木烤鸭"],like:[],dislike:[]},{text:"麻辣香锅",shops:["川小厨麻辣香锅"],like:["波波肠","鸡软骨","油条"],dislike:["鱼豆腐","虾饺"]},{text:"烧烤炸串",shops:["大尚龙虾"],like:[],dislike:[]},{text:"脆皮鸡饭",shops:[],like:[],dislike:[]},{text:"梅菜扣肉",shops:["知味小厨（饿了么）"]},{text:"嫩牛五方",shops:["小胖牛*嫩牛五方"],like:[],dislike:[]},{text:"肉夹馍",shops:["卓氏肉夹馍"],like:[],dislike:[]},{text:"水煮肉",shops:["知味小厨（饿了么）"],like:[],dislike:[]},{text:"口水鸡",shops:["太享元气饭"],like:["各种鸡"],dislike:[]}],small:[{text:"水果捞",shops:["切果NOW！"],like:[],dislike:[]},{text:"甜点",shops:["森点","7cake榴莲千层蛋糕"],like:["黑森林蛋糕（森点）","巧克力泡芙（森点）"],dislike:[]}],drinks:[{text:"挑选新杯",shops:["沪上阿姨"]},{text:"芝士葡萄奶盖",shops:["沪上阿姨"],like:[""],dislike:[]},{text:"芝士草莓奶盖",shops:["沪上阿姨"],like:["厚芋泥","小芋圆"],dislike:[]},{text:"冰火两重天",shops:["逅座十二茶"],like:["黑糖珍珠","七彩芋圆"],dislike:[]},{text:"霉春色染",shops:["沪上阿姨"],like:["厚芋泥","小芋圆"],dislike:["七彩芋圆"]},{text:"自力更生",shops:["逅座十二茶"]}]},k=["温馨提示：特殊时期忌吃辛辣(⊙o⊙)哦","科学证明：可爱和吃的多少成正比，(ง •_•)ง","O(∩_∩)O貌美肤白从每一餐做起~","不要一直重复选择，泽宝可是个果决的美少女！(。・∀・)ノ",'美丽即正义，"胖"即可爱，况且根本不胖哒( ఠൠఠ )ﾉ'],_=t=>f[t].map(t=>(t.color="rgba("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+", .5)",t));var x={name:"lunch",porps:{lunchType:String},data:function(){return{selectedIndex:-1,nbIndex:-1,lunchMap:[],time:6,timerA:null,timerB:null,timeC:null}},created:function(){var t=this.$route.params.lunchType;t||this.$router.go(-1),this.lunchMap=_(t),this.nbIndex=a(1,k.length)},computed:{showLunch:function(){return 0===this.time?this.lunchMap[this.selectedIndex]:this.sayNb()}},methods:{sayNb:function(t){return k[t||this.nbIndex]},run:function(){var t=this;this.timerA||(this.time=6,this.timerA=setInterval(function(){var e=t.lunchMap.length,n=a(0,e);n===t.selectedIndex&&n++,n===e&&(n=0),t.selectedIndex=n},100),this.timerB=setInterval(function(){t.time--,0===t.time&&(clearInterval(t.timerA),clearInterval(t.timerB),clearInterval(t.timeC),t.timerA=null,t.timerB=null,t.timeC=null)},1e3),this.timeC=setInterval(function(){var e=k.length,n=a(1,e);n===t.nbIndex&&(n=n===e-1?0:n+1),t.nbIndex=n},2e3))},goback:function(){this.$router.go(-1)}},components:{ShowLunch:m,Item:u}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lunch"},[t._l(t.lunchMap,function(e,s){return n("Item",{key:s,attrs:{color:e.color,text:e.text,isSelected:s===t.selectedIndex}})}),t._v(" "),n("ShowLunch",{attrs:{lunch:t.showLunch}}),t._v(" "),n("div",{staticClass:"buttons"},[n("span",{staticClass:"run",on:{click:t.run}},[t._v("\n      吃点啥\n    ")]),t._v(" "),n("span",{staticClass:"goback",on:{click:t.goback}},[t._v("\n      返回\n    ")])])],2)},staticRenderFns:[]};var C=n("C7Lr")(x,y,!1,function(t){n("PsL0")},"data-v-34c1e453",null).exports,b=[{text:"正餐",type:"big"},{text:"轻食",type:"small"},{text:"饮品",type:"drinks"}],g={data:function(){return{lunchType:b}},methods:{selectLunchType:function(t){this.$router.push({name:"lunch",params:{lunchType:t}})}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select"},[t._l(t.lunchType,function(e,s){return n("div",{key:s,on:{click:function(n){return t.selectLunchType(e.type)}}},[t._v("\n    "+t._s(e.text)+"\n  ")])}),t._v(" "),n("p",{staticClass:"tool"},[t._v("选定点击跳转哦")])],2)},staticRenderFns:[]};var M=n("C7Lr")(g,I,!1,function(t){n("xSjY")},"data-v-5267c56c",null).exports;s.a.use(r.a);var S=new r.a({routes:[{path:"/",name:"select",component:M},{path:"/lunch",name:"lunch",component:C}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:S,components:{App:l},template:"<App/>"})},PsL0:function(t,e){},lKzE:function(t,e){},xAib:function(t,e){},xSjY:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2c8befd04a89934f1b30.js.map