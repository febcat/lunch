webpackJsonp([1],{"3Niu":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("kV13"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("C7Lr")({name:"App"},a,!1,function(t){n("bYZc")},null,null).exports,c=n("DGCT");var s={props:{color:{type:String,default:"#fff"},text:{type:String,default:"暂无内容"},isSelected:{type:Boolean,default:!1}},data:function(){return{}}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{class:this.isSelected?"item selected":"item default",style:{background:this.color}},[this._v("\n  "+this._s(this.text)+"\n")])},staticRenderFns:[]};const o=["可乐炸鸡","烤鸭面饼","麻辣香锅","烧烤炸串","水果捞","酸菜鱼"],u=()=>o.map(t=>({color:"rgba("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+", .5)",text:t}));var d={name:"lunch",data:function(){return{selectedIndex:-1,lunchMap:[],time:5,thimer:null}},created:function(){this.lunchMap=u()},methods:{run:function(){var t=this;this.thimer||(this.time=5,this.thimer=setInterval(function(){t.selectedIndex=((t,e)=>Math.floor(Math.random()*(t-e+1)+e))(1,t.lunchMap.length),t.time--,0===t.time&&(t.time=t.lunchMap[t.selectedIndex].text,clearInterval(t.thimer),t.thimer=null)},1e3))}},components:{Item:n("C7Lr")(s,l,!1,function(t){n("3Niu")},null,null).exports}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lunch"},[t._l(t.lunchMap,function(e,r){return n("Item",{key:r,attrs:{color:e.color,text:e.text,isSelected:r===t.selectedIndex}})}),t._v(" "),n("div",{staticClass:"time"},[t._v("\n    "+t._s(t.time)+"\n  ")]),t._v(" "),n("span",{staticClass:"run",on:{click:t.run}},[t._v("\n    吃点啥\n  ")])],2)},staticRenderFns:[]};var p=n("C7Lr")(d,h,!1,function(t){n("X409")},"data-v-48494bef",null).exports;r.a.use(c.a);var f=new c.a({routes:[{path:"/",name:"Lunch",component:p}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:f,components:{App:i},template:"<App/>"})},X409:function(t,e){},bYZc:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8765bab4269e7ddf5876.js.map