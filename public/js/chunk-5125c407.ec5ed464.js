(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5125c407"],{1043:function(t,e,r){},4365:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",lg:"4",md:"6"}},[s("v-row",{staticClass:"mx-auto",style:{maxWidth:"360px"},attrs:{"no-gutters":""}},[s("v-col",{attrs:{cols:"6"}},[s("v-select",{staticClass:"mr-2",style:{maxWidth:"172px"},attrs:{"hide-details":"",items:["今日","今週","今月","全て"],label:"日付",solo:""},model:{value:t.currentPeriod,callback:function(e){t.currentPeriod=e},expression:"currentPeriod"}})],1),s("v-col",{attrs:{cols:"6"}},[s("v-select",{staticClass:"ml-2",style:{maxWidth:"172px"},attrs:{"hide-details":"",items:["新着順","人気順"],label:"順序",solo:""},model:{value:t.currentOrder,callback:function(e){t.currentOrder=e},expression:"currentOrder"}})],1)],1)],1),s("v-col",{attrs:{cols:"12",lg:"4",md:"6","offset-lg":"4"}},[s("v-text-field",{staticClass:"mx-auto",style:{maxWidth:"360px"},attrs:{"hide-details":"",label:"ワード検索",solo:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit(e)}},scopedSlots:t._u([{key:"append",fn:function(){return[s("v-icon",{attrs:{tag:"a"},on:{click:function(e){return e.stopPropagation(),t.onSubmit(e)},mousedown:function(t){t.stopPropagation()}}},[t._v("\n                        fas fa-search\n                    ")])]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1),s("v-row",[t.isLoading||0!==t.senryus.length?t._e():s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[s("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[s("img",{staticClass:"logo",attrs:{src:r("cf05"),width:"192"}}),s("strong",[t._v("\n                    川柳が存在しません\n                ")])])],1),t._l(t.senryus,(function(e){return s("v-col",{key:e.id,attrs:{cols:"12",lg:"4",md:"6"}},[t.isLoading?s("v-skeleton-loader",{staticClass:"mx-auto",attrs:{height:"400",tile:"",type:"image@2",width:"360"}}):s("senryu-card",{attrs:{senryu:e}})],1)}))],2),s("v-pagination",{staticClass:"my-3",attrs:{disabled:t.isLoading,length:t.length},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},i=[],a=r("fc0a"),o={components:{SenryuCard:a["a"]},props:{page:{type:Number},word:{type:String},period:{type:String},order:{type:String}},data:()=>({isLoading:!1,filter:"",length:1,senryus:[{id:-1},{id:-2},{id:-3},{id:-4},{id:-5},{id:-6}]}),computed:{currentPage:{get(){return this.page},set(t){t==this.$route.query.page?this.getSenryus():this.$router.push({query:{page:t,word:this.word,period:this.period,order:this.order}})}},currentPeriod:{get(){return this.period||"全て"},set(t){t==this.$route.query.period?this.getSenryus():this.$router.push({query:{page:this.page,word:this.word,period:t,order:this.order}})}},currentOrder:{get(){return this.order||"新着順"},set(t){t==this.$route.query.order?this.getSenryus():this.$router.push({query:{page:this.page,word:this.word,period:this.period,order:t}})}}},watch:{$route(){this.getSenryus()}},created(){this.getSenryus()},methods:{async getSenryus(){this.isLoading=!0;try{const{data:t}=await this.$axios.get("/api/senryus",{params:{page:this.page,word:this.word,period:this.period,order:this.order}});this.length=t.last_page,this.senryus=t.data}catch(t){alert("川柳の取得に失敗しました。")}finally{this.isLoading=!1}},async onSubmit(){this.$router.push({query:{page:this.page,word:this.filter,period:this.period,order:this.order}})}}},n=o,d=(r("b9be"),r("2877")),l=r("6544"),u=r.n(l),c=r("62ad"),p=r("a523"),h=r("132d"),g=r("a722"),y=r("891e"),f=r("0fd9"),m=r("b974"),v=r("3129"),w=r("8654"),x=Object(d["a"])(n,s,i,!1,null,"39da332d",null);e["default"]=x.exports;u()(x,{VCol:c["a"],VContainer:p["a"],VIcon:h["a"],VLayout:g["a"],VPagination:y["a"],VRow:f["a"],VSelect:m["a"],VSkeletonLoader:v["a"],VTextField:w["a"]})},b9be:function(t,e,r){"use strict";var s=r("1043"),i=r.n(s);i.a}}]);
//# sourceMappingURL=chunk-5125c407.ec5ed464.js.map