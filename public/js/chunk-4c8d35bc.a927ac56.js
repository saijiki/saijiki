(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c8d35bc"],{"2a7f":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var r=a("71d9"),n=a("80d2");const s=Object(n["g"])("v-toolbar__title"),o=Object(n["g"])("v-toolbar__items");r["a"]},"2e45":function(t,e,a){"use strict";var r=a("9f3a"),n=a.n(r);n.a},"62ad":function(t,e,a){"use strict";a("4b85");var r=a("2b0e"),n=a("d9f7"),s=a("80d2");const o=["sm","md","lg","xl"],i=(()=>{return o.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),l=(()=>{return o.reduce((t,e)=>{return t["offset"+Object(s["v"])(e)]={type:[String,Number],default:null},t},{})})(),c=(()=>{return o.reduce((t,e)=>{return t["order"+Object(s["v"])(e)]={type:[String,Number],default:null},t},{})})(),u={col:Object.keys(i),offset:Object.keys(l),order:Object.keys(c)};function d(t,e,a){let r=t;if(null!=a&&!1!==a){if(e){const a=e.replace(t,"");r+=`-${a}`}return"col"!==t||""!==a&&!0!==a?(r+=`-${a}`,r.toLowerCase()):r.toLowerCase()}}const f=new Map;e["a"]=r["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},justifySelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:a,children:r,parent:s}){let o="";for(const n in e)o+=String(e[n]);let i=f.get(o);if(!i){let t;for(t in i=[],u)u[t].forEach(a=>{const r=e[a],n=d(t,a,r);n&&i.push(n)});const a=i.some(t=>t.startsWith("col-"));i.push({col:!a||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf,[`justify-self-${e.justifySelf}`]:e.justifySelf}),f.set(o,i)}return t(e.tag,Object(n["a"])(a,{class:i}),r)}})},"9f3a":function(t,e,a){},a55b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("v-card",[a("v-toolbar",{attrs:{color:"transparent",flat:""}},[a("v-toolbar-title",[t._v("\n                            ログイン\n                        ")]),a("v-spacer"),a("router-link",{attrs:{to:{name:"Register"}}},[t._v("\n                            アカウントを新規登録\n                        ")])],1),a("v-card-text",[a("v-text-field",{attrs:{label:"メールアドレス","prepend-icon":"fas fa-envelope",required:"",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{label:"パスワード","prepend-icon":"fas fa-lock",required:"",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-card-actions",{staticClass:"pr-4 pb-4"},[a("v-spacer"),a("v-btn",{attrs:{color:"primary",loading:t.isLoading,type:"submit"}},[t._v("\n                            ログイン\n                        ")])],1),a("v-card-actions",{staticClass:"pr-4 pb-4"},[a("v-spacer"),a("v-btn",{attrs:{color:"primary"},on:{click:t.signInTwitter}},[t._v("\n                            twitterログイン\n                        ")])],1)],1)],1)])],1)],1)},n=[],s={data:()=>({email:"",isLoading:!1,password:""}),methods:{async onSubmit(){if(!this.isLoading){this.isLoading=!0;try{await this.$store.dispatch("login",{email:this.email,password:this.password}),this.$router.push({name:"Home"}),alert("ログインに成功しました。")}catch(t){alert("ログインに失敗しました。")}finally{this.isLoading=!1}}},async signInTwitter(){try{const{data:t}=await this.$axios.get("/api/sns/login");location.href=t}catch(t){console.log(t)}try{if(Object.keys(this.$route.query).length){const{data:t}=await this.$axios.post("/api/senryus",{token:this.$route.query.oauth_token,verifier:this.$route.query.oauth_verifier})}}catch(t){}}}},o=s,i=(a("2e45"),a("2877")),l=a("6544"),c=a.n(l),u=a("8336"),d=a("b0af"),f=a("99d9"),p=a("62ad"),b=a("a523"),v=a("0fd9"),g=a("2fa4"),h=a("8654"),m=a("71d9"),y=a("2a7f"),w=Object(i["a"])(o,r,n,!1,null,"40934dce",null);e["default"]=w.exports;c()(w,{VBtn:u["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["b"],VCol:p["a"],VContainer:b["a"],VRow:v["a"],VSpacer:g["a"],VTextField:h["a"],VToolbar:m["a"],VToolbarTitle:y["a"]})}}]);
//# sourceMappingURL=chunk-4c8d35bc.a927ac56.js.map