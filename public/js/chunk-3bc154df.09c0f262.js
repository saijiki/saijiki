(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bc154df"],{4150:function(t,i,e){},"4b85":function(t,i,e){},"75f4":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-container",{attrs:{"fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[t.isLoading?a("v-skeleton-loader",{attrs:{height:"600",tile:"",type:"image@3",width:"540"}}):a("flipper",{attrs:{flipped:t.isFlipped,height:"600px",width:"540px"},on:{click:function(i){t.isFlipped=!t.isFlipped}},scopedSlots:t._u([{key:"front",fn:function(){return[a("v-card",{style:{paddingTop:"111.111111111%"},attrs:{color:"white",height:"0",img:t.senryu.generated_image_url,raised:"",tag:"a",width:"540"}},[a("v-layout",{style:{position:"absolute",top:0,right:0,bottom:0,left:0},attrs:{column:"","fill-height":""}},[a("div",[a("v-layout",{staticClass:"ml-3 mt-2",attrs:{"align-center":""}},[a("v-icon",{staticClass:"mr-1",attrs:{color:"grey darken-1",size:"20"}},[t._v("\n                                    fas fa-history\n                                ")]),t._v("\n\n                                "+t._s(t.senryu.diff_from_created_at_to_now)+"\n                            ")],1)],1),a("v-layout",{attrs:{"align-end":"","justify-end":""}},[a("v-btn",{staticClass:"mr-4 mb-1",attrs:{color:"deep-orange",icon:"",large:"",ripple:!1},on:{click:function(i){i.stopPropagation(),t.senryu.goods++}}},[a("v-badge",{attrs:{color:"deep-orange"},scopedSlots:t._u([{key:"badge",fn:function(){return[t._v("\n                                        "+t._s(t.senryu.goods)+"\n                                    ")]},proxy:!0}])},[a("v-icon",[t._v("\n                                        far fa-thumbs-up\n                                    ")])],1)],1),a("v-btn",{staticClass:"mr-2 mb-1",attrs:{color:"grey darken-3",icon:"",large:"",ripple:!1},on:{click:function(i){i.stopPropagation(),t.isShareDialogVisible=!0}}},[a("v-icon",[t._v("\n                                    fas fa-share\n                                ")])],1)],1)],1)],1)]},proxy:!0},{key:"back",fn:function(){return[a("v-card",{attrs:{color:"white",height:"600",img:e("cf05"),raised:"",tag:"a",width:"540"}})]},proxy:!0}])})],1),a("v-dialog",{attrs:{width:"288"},model:{value:t.isShareDialogVisible,callback:function(i){t.isShareDialogVisible=i},expression:"isShareDialogVisible"}},[a("v-card",[a("v-list",{attrs:{subheader:""}},[a("v-subheader",[t._v("\n                    シェアする\n                ")]),a("v-list-item",{on:{click:t.shareOnLine}},[a("v-list-item-icon",[a("v-icon",[t._v("\n                            fab fa-line\n                        ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("\n                            LINEでシェアする\n                        ")])],1)],1),a("v-list-item",{on:{click:t.shareOnTwitter}},[a("v-list-item-icon",[a("v-icon",[t._v("\n                            fab fa-twitter-square\n                        ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("\n                            Twitterでシェアする\n                        ")])],1)],1),a("v-list-item",{on:{click:t.copyUrl}},[a("v-list-item-icon",[a("v-icon",[t._v("\n                            fas fa-link\n                        ")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("\n                            リンクをコピーする\n                        ")])],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(i){t.isShareDialogVisible=!1}}},[t._v("\n                    キャンセル\n                ")])],1)],1)],1),a("v-snackbar",{attrs:{color:"success"},model:{value:t.isCopySnackbarVisible,callback:function(i){t.isCopySnackbarVisible=i},expression:"isCopySnackbarVisible"}},[t._v("\n        コピーしました。\n    ")])],1)},s=[],n={props:{id:{type:Number}},data:()=>({isCopySnackbarVisible:!1,isFlipped:!1,isLoading:!1,isShareDialogVisible:!1,senryu:{}}),created(){this.getSenryu()},methods:{async getSenryu(){this.isLoading=!0;try{const{data:t}=await this.$axios.get(`/api/senryus/${this.id}`);this.senryu=t}catch(t){alert("川柳の取得に失敗しました。")}finally{this.isLoading=!1}},shareOnLine(){const t=new URL("https://social-plugins.line.me/lineit/share");t.searchParams.set("url",`${location.origin}${location.pathname}`),window.open(t.toString(),"_blank","width=500,height=560")},shareOnTwitter(){const t=new URL("https://twitter.com/intent/tweet");t.searchParams.set("text",`Saijikiが川柳を詠んだよ。\n${location.origin}${location.pathname}`),window.open(t.toString(),"_blank","width=480,height=360")},async copyUrl(){const t=`${location.origin}${location.pathname}`;await(async()=>{window.clipboardData?window.clipboardData.setData("Text",t):navigator.clipboard?await navigator.clipboard.writeText(t):(document.addEventListener("copy",(function i(e){this.removeEventListener(e.type,i),e.clipboardData.setData("text/plain",t),e.preventDefault()})),document.execCommand("copy"))})(),this.isCopySnackbarVisible=!0,this.isShareDialogVisible=!1}}},o=n,r=(e("dab7"),e("2877")),c=e("6544"),l=e.n(c),d=(e("ff44"),e("a9ad")),u=e("f2e7"),h=e("fe6c"),p=e("2b0e"),v=p["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),f=e("58df"),b=Object(f["a"])(d["a"],u["a"],Object(h["b"])(["left","bottom"]),v).extend({name:"v-badge",props:{color:{type:String,default:"primary"},overlap:Boolean,transition:{type:String,default:"fab-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--bottom":this.bottom,"v-badge--left":this.left,"v-badge--overlap":this.overlap}}},render(t){const i=this.$slots.badge&&[t("span",this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",attrs:this.$attrs,directives:[{name:"show",value:this.isActive}]}),this.$slots.badge)];return t("span",{staticClass:"v-badge",class:this.classes},[this.$slots.default,this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},i):i])}}),m=e("8336"),g=e("b0af"),y=e("99d9"),k=e("a523"),w=e("169a"),_=e("ce7e"),S=e("132d"),V=e("a722"),C=e("8860"),x=e("da13"),L=e("5d23"),$=e("34c3"),O=e("3129"),j=(e("ca71"),e("d9bd")),D=Object(f["a"])(d["a"],u["a"],Object(h["b"])(["absolute","top","bottom","left","right"])).extend({name:"v-snackbar",props:{multiLine:Boolean,timeout:{type:Number,default:6e3},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--active":this.isActive,"v-snack--absolute":this.absolute,"v-snack--bottom":this.bottom||!this.top,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--top":this.top,"v-snack--vertical":this.vertical}}},watch:{isActive(){this.setTimeout()}},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(j["d"])("auto-height",this)},mounted(){this.setTimeout()},methods:{setTimeout(){window.clearTimeout(this.activeTimeout),this.isActive&&this.timeout&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},this.timeout))}},render(t){return t("transition",{attrs:{name:"v-snack-transition"}},[this.isActive&&t("div",{staticClass:"v-snack",class:this.classes,on:this.$listeners},[t("div",this.setBackgroundColor(this.color,{staticClass:"v-snack__wrapper"}),[t("div",{staticClass:"v-snack__content"},this.$slots.default)])])])}}),T=e("2fa4"),A=e("e0c7"),P=Object(r["a"])(o,a,s,!1,null,"1cc58b22",null);i["default"]=P.exports;l()(P,{VBadge:b,VBtn:m["a"],VCard:g["a"],VCardActions:y["a"],VContainer:k["a"],VDialog:w["a"],VDivider:_["a"],VIcon:S["a"],VLayout:V["a"],VList:C["a"],VListItem:x["a"],VListItemContent:L["a"],VListItemIcon:$["a"],VListItemTitle:L["b"],VSkeletonLoader:O["a"],VSnackbar:D,VSpacer:T["a"],VSubheader:A["a"]})},a523:function(t,i,e){"use strict";e("20f6"),e("4b85");var a=e("e8f2"),s=e("d9f7");i["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:i,data:e,children:a}){let n;const{attrs:o}=e;return o&&(e.attrs={},n=Object.keys(o).filter(t=>{if("slot"===t)return!1;const i=o[t];return t.startsWith("data-")?(e.attrs[t]=i,!1):i||"string"===typeof i})),i.id&&(e.domProps=e.domProps||{},e.domProps.id=i.id),t(i.tag,Object(s["a"])(e,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(n||[])}),a)}})},ca71:function(t,i,e){},d9f7:function(t,i,e){"use strict";
/**
 * @copyright 2017 Alex Regan
 * @license MIT
 * @see https://github.com/alexsasharegan/vue-functional-data-merge
 */
function a(){const t={};let i,e,a=arguments.length;while(a--)for(i of Object.keys(arguments[a]))switch(i){case"class":case"style":case"directives":Array.isArray(t[i])||(t[i]=[]),t[i]=t[i].concat(arguments[a][i]);break;case"staticClass":if(!arguments[a][i])break;void 0===t[i]&&(t[i]=""),t[i]&&(t[i]+=" "),t[i]+=arguments[a][i].trim();break;case"on":case"nativeOn":t[i]||(t[i]={});const s=t[i];for(e of Object.keys(arguments[a][i]||{}))s[e]?s[e]=Array().concat(s[e],arguments[a][i][e]):s[e]=arguments[a][i][e];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":t[i]||(t[i]={}),t[i]={...arguments[a][i],...t[i]};break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:t[i]||(t[i]=arguments[a][i])}return t}e.d(i,"a",(function(){return a}))},dab7:function(t,i,e){"use strict";var a=e("4150"),s=e.n(a);s.a},e8f2:function(t,i,e){"use strict";e.d(i,"a",(function(){return s}));var a=e("2b0e");function s(t){return a["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(i,{props:e,data:a,children:s}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:n}=a;if(n){a.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const i=n[t];return t.startsWith("data-")?(a.attrs[t]=i,!1):i||"string"===typeof i});t.length&&(a.staticClass+=` ${t.join(" ")}`)}return e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),i(e.tag,a,s)}})}},ff44:function(t,i,e){}}]);
//# sourceMappingURL=chunk-3bc154df.09c0f262.js.map