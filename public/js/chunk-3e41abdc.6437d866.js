(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e41abdc"],{"75f4":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[t.isLoading?a("v-skeleton-loader",{attrs:{height:"600",tile:"",type:"image@3",width:"540"}}):a("flipper",{attrs:{flipped:t.isFlipped,height:"600px",width:"540px"},on:{click:function(i){t.isFlipped=!t.isFlipped}},scopedSlots:t._u([{key:"front",fn:function(){return[a("v-card",{attrs:{color:"white",height:"600",img:t.senryu.path,raised:"",tag:"a",width:"540"}},[a("v-layout",{attrs:{"align-end":"","fill-height":"","justify-end":""}},[a("v-btn",{staticClass:"mr-4 mb-1",attrs:{color:"deep-orange",icon:"",large:"",ripple:!1},on:{click:function(i){i.stopPropagation(),t.senryu.good++}}},[a("v-badge",{attrs:{color:"deep-orange"},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("\n                                    "+t._s(t.senryu.good)+"\n                                ")]},proxy:!0}])},[a("v-icon",[t._v("\n                                    far fa-thumbs-up\n                                ")])],1)],1),a("v-btn",{staticClass:"mr-2 mb-1",attrs:{color:"grey darken-3",icon:"",large:"",ripple:!1},on:{click:function(i){i.stopPropagation(),t.isShareDialogVisible=!0}}},[a("v-icon",[t._v("\n                                fas fa-share\n                            ")])],1)],1)],1)]},proxy:!0},{key:"back",fn:function(){return[a("v-card",{attrs:{color:"white",height:"600",img:e("cf05"),raised:"",tag:"a",width:"540"}})]},proxy:!0}])})],1),a("v-dialog",{attrs:{width:"288"},model:{value:t.isShareDialogVisible,callback:function(i){t.isShareDialogVisible=i},expression:"isShareDialogVisible"}},[a("v-card",[a("v-list",{attrs:{subheader:""}},[a("v-subheader",[t._v("\n                    シェアする\n                ")]),a("v-list-item",{on:{click:function(){}}},[a("v-list-item-icon",[a("v-icon",[t._v("\n                            fab fa-facebook-square\n                        ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("\n                            Facebookでシェアする\n                        ")])],1)],1),a("v-list-item",{on:{click:function(){}}},[a("v-list-item-icon",[a("v-icon",[t._v("\n                            fab fa-twitter-square\n                        ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("\n                            Twitterでシェアする\n                        ")])],1)],1),a("v-list-item",{on:{click:t.copyUrl}},[a("v-list-item-icon",[a("v-icon",[t._v("\n                            fas fa-link\n                        ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("\n                            リンクをコピーする\n                        ")])],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(i){t.isShareDialogVisible=!1}}},[t._v("\n                    キャンセル\n                ")])],1)],1)],1),a("v-snackbar",{attrs:{color:"success"},model:{value:t.isCopySnackbarVisible,callback:function(i){t.isCopySnackbarVisible=i},expression:"isCopySnackbarVisible"}},[t._v("\n        コピーしました。\n    ")])],1)},s=[],n={props:{id:{type:Number}},data:()=>({isCopySnackbarVisible:!1,isFlipped:!1,isLoading:!1,isShareDialogVisible:!1,senryu:{}}),created(){this.getSenryu()},methods:{async getSenryu(){this.isLoading=!0;try{const{data:t}=await this.$axios.get(`/api/senryus/${this.id}`);this.senryu=t}catch(t){alert("川柳の取得に失敗しました。")}finally{this.isLoading=!1}},async copyUrl(){const t=`${location.origin}${location.pathname}`;(()=>{window.clipboardData?window.clipboardData.setData("Text",t):navigator.clipboard?navigator.clipboard.writeText(t):(document.addEventListener("copy",(function i(e){this.removeEventListener(e.type,i),e.clipboardData.setData("text/plain",t),e.preventDefault()})),document.execCommand("copy"))})(),this.isCopySnackbarVisible=!0,this.isShareDialogVisible=!1}}},o=n,r=(e("fb6e"),e("2877")),c=e("6544"),l=e.n(c),d=(e("ff44"),e("a9ad")),v=e("f2e7"),h=e("fe6c"),u=e("2b0e"),p=u["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),b=e("58df"),f=Object(b["a"])(d["a"],v["a"],Object(h["b"])(["left","bottom"]),p).extend({name:"v-badge",props:{color:{type:String,default:"primary"},overlap:Boolean,transition:{type:String,default:"fab-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--bottom":this.bottom,"v-badge--left":this.left,"v-badge--overlap":this.overlap}}},render(t){const i=this.$slots.badge&&[t("span",this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",attrs:this.$attrs,directives:[{name:"show",value:this.isActive}]}),this.$slots.badge)];return t("span",{staticClass:"v-badge",class:this.classes},[this.$slots.default,this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},i):i])}}),m=e("8336"),g=e("b0af"),k=e("99d9"),y=e("a523"),V=e("169a"),w=e("ce7e"),S=e("132d"),_=e("a722"),C=e("8860"),x=e("da13"),D=e("5d23"),L=e("34c3"),T=e("3129"),$=(e("ca71"),e("d9bd")),j=Object(b["a"])(d["a"],v["a"],Object(h["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive(){this.setTimeout()}},created(){this.$attrs.hasOwnProperty("auto-height")&&Object($["d"])("auto-height",this)},mounted(){this.setTimeout()},methods:{setTimeout(){window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},this.timeout))}},render(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}}),O=e("2fa4"),A=e("e0c7"),B=Object(r["a"])(o,a,s,!1,null,"1c1fb7be",null);i["default"]=B.exports;l()(B,{VBadge:f,VBtn:m["a"],VCard:g["a"],VCardActions:k["a"],VContainer:y["a"],VDialog:V["a"],VDivider:w["a"],VIcon:S["a"],VLayout:_["a"],VList:C["a"],VListItem:x["a"],VListItemContent:D["a"],VListItemIcon:L["a"],VListItemTitle:D["b"],VSkeletonLoader:T["a"],VSnackbar:j,VSpacer:O["a"],VSubheader:A["a"]})},a722:function(t,i,e){"use strict";e("20f6");var a=e("e8f2");i["a"]=Object(a["a"])("layout")},ca71:function(t,i,e){},cf05:function(t,i,e){t.exports=e.p+"img/logo.25e884be.png"},fb6e:function(t,i,e){"use strict";var a=e("fdf0"),s=e.n(a);s.a},fdf0:function(t,i,e){},ff44:function(t,i,e){}}]);
//# sourceMappingURL=chunk-3e41abdc.6437d866.js.map