(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ff81069"],{"00d9":function(t,e,s){},eb60:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",lg:"4",md:"6"}},[a("v-row",{staticClass:"mx-auto",style:{maxWidth:"360px"},attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"6"}},[a("v-select",{staticClass:"mr-2",style:{maxWidth:"172px"},attrs:{"hide-details":"",items:["自分の句","いいねした句"],label:"表示",solo:""},model:{value:t.currentType,callback:function(e){t.currentType=e},expression:"currentType"}})],1)],1)],1)],1),a("v-row",[t.isLoading||0!==t.senryus.length?t._e():a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[a("img",{staticClass:"logo",attrs:{src:s("cf05"),width:"192"}}),a("strong",[t._v("\n                    川柳が存在しません\n                ")])])],1),t._l(t.senryus,(function(e){return a("v-col",{key:e.id,attrs:{cols:"12",lg:"4",md:"6"}},[t.isLoading?a("v-skeleton-loader",{staticClass:"mx-auto",attrs:{height:"400",tile:"",type:"image@2",width:"360"}}):a("senryu-card",{attrs:{senryu:e}})],1)}))],2),a("v-pagination",{staticClass:"my-3",attrs:{disabled:t.isLoading,length:t.length},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)},r=[],i=s("fc0a"),n={components:{SenryuCard:i["a"]},props:{page:{type:Number},type:{type:String}},data:()=>({isLoading:!1,length:1,senryus:[{id:-1},{id:-2},{id:-3},{id:-4},{id:-5},{id:-6}]}),computed:{currentPage:{get(){return this.page},set(t){t==this.$route.query.page?this.getSenryus():this.$router.push({query:{page:t,type:this.type}})}},currentType:{get(){return this.type||"自分の句"},set(t){t==this.$route.query.type?this.getSenryus():this.$router.push({query:{page:this.page,type:t}})}}},watch:{$route(){this.getSenryus()}},created(){this.getSenryus()},methods:{async getSenryus(){this.isLoading=!0;try{const{data:t}=await this.$axios.get(`/api/users/${this.$store.state.data.user.id}/senryus`,{params:{page:this.page,type:this.type}});this.length=t.last_page,this.senryus=t.data}catch(t){alert("川柳の取得に失敗しました。")}finally{this.isLoading=!1}},async onSubmit(){this.$router.push({query:{page:this.page,type:this.type}})}}},o=n,u=(s("fcd3"),s("2877")),c=s("6544"),l=s.n(c),p=s("62ad"),d=s("a523"),g=s("a722"),y=s("891e"),h=s("0fd9"),m=s("b974"),f=s("3129"),v=Object(u["a"])(o,a,r,!1,null,"2a11e2a0",null);e["default"]=v.exports;l()(v,{VCol:p["a"],VContainer:d["a"],VLayout:g["a"],VPagination:y["a"],VRow:h["a"],VSelect:m["a"],VSkeletonLoader:f["a"]})},fcd3:function(t,e,s){"use strict";var a=s("00d9"),r=s.n(a);r.a}}]);
//# sourceMappingURL=chunk-7ff81069.a58a4e1a.js.map