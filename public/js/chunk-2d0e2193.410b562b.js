(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2193"],{"7cf7":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-select",{staticClass:"mr-2",style:{maxWidth:"172px"},attrs:{"hide-details":"",items:["自分の句","いいねした句"],label:"表示",solo:""},model:{value:t.currentType,callback:function(e){t.currentType=e},expression:"currentType"}}),a("v-row",[t.isLoading||0!==t.senryus.length?t._e():a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[a("img",{staticClass:"logo",attrs:{src:s("cf05"),width:"192"}}),a("strong",[t._v("\n                  川柳が存在しません\n              ")])])],1),t._l(t.senryus,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",lg:"4",md:"6"}},[t.isLoading?a("v-skeleton-loader",{staticClass:"mx-auto",attrs:{height:"400",tile:"",type:"image@2",width:"360"}}):a("senryu-card",{attrs:{senryu:e}})],1)}))],2)],1)},r=[],n=s("fc0a"),i={components:{SenryuCard:n["a"]},props:{page:{type:Number},type:{type:String}},data:()=>({isLoading:!1,length:1,senryus:[{id:-1},{id:-2},{id:-3},{id:-4},{id:-5},{id:-6}]}),computed:{currentPage:{get(){return this.page},set(t){t==this.$route.query.page?this.getSenryus():this.$router.push({query:{page:t,type:this.type}})}},currentType:{get(){return this.type||"自分の句"},set(t){t==this.$route.query.type?this.getSenryus():this.$router.push({query:{page:this.page,type:t}})}}},watch:{$route(){this.getSenryus()}},created(){this.getSenryus()},methods:{async getSenryus(){this.isLoading=!0;try{const{data:t}=await this.$axios.get("/api/senryus",{params:{page:this.page,type:this.type}});this.length=t.last_page,this.senryus=t.data}catch(t){alert("川柳の取得に失敗しました。")}finally{this.isLoading=!1}}}},u=i,o=s("2877"),c=s("6544"),l=s.n(c),p=s("62ad"),y=s("a523"),h=s("a722"),d=s("0fd9"),g=s("b974"),m=s("3129"),f=Object(o["a"])(u,a,r,!1,null,null,null);e["default"]=f.exports;l()(f,{VCol:p["a"],VContainer:y["a"],VLayout:h["a"],VRow:d["a"],VSelect:g["a"],VSkeletonLoader:m["a"]})}}]);
//# sourceMappingURL=chunk-2d0e2193.410b562b.js.map