(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2865a0d9"],{"10a1":function(e,t,a){"use strict";var r=a("6f3d"),n=a.n(r);n.a},"2a7f":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("71d9"),n=a("80d2");const s=Object(n["g"])("v-toolbar__title"),o=Object(n["g"])("v-toolbar__items");r["a"]},"62ad":function(e,t,a){"use strict";a("4b85");var r=a("2b0e"),n=a("d9f7"),s=a("80d2");const o=["sm","md","lg","xl"],i=(()=>{return o.reduce((e,t)=>{return e[t]={type:[Boolean,String,Number],default:!1},e},{})})(),l=(()=>{return o.reduce((e,t)=>{return e["offset"+Object(s["v"])(t)]={type:[String,Number],default:null},e},{})})(),c=(()=>{return o.reduce((e,t)=>{return e["order"+Object(s["v"])(t)]={type:[String,Number],default:null},e},{})})(),d={col:Object.keys(i),offset:Object.keys(l),order:Object.keys(c)};function f(e,t,a){let r=e;if(null!=a&&!1!==a){if(t){const a=t.replace(e,"");r+=`-${a}`}return"col"!==e||""!==a&&!0!==a?(r+=`-${a}`,r.toLowerCase()):r.toLowerCase()}}const u=new Map;t["a"]=r["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},justifySelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:a,children:r,parent:s}){let o="";for(const n in t)o+=String(t[n]);let i=u.get(o);if(!i){let e;for(e in i=[],d)d[e].forEach(a=>{const r=t[a],n=f(e,a,r);n&&i.push(n)});const a=i.some(e=>e.startsWith("col-"));i.push({col:!a||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf,[`justify-self-${t.justifySelf}`]:t.justifySelf}),u.set(o,i)}return e(t.tag,Object(n["a"])(a,{class:i}),r)}})},"6f3d":function(e,t,a){},"73cf":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[a("v-card",[a("v-toolbar",{attrs:{color:"transparent",flat:""}},[a("v-toolbar-title",[e._v("\n                            新規登録\n                        ")])],1),a("v-card-text",[a("v-text-field",{attrs:{label:"ユーザー名","prepend-icon":"fas fa-user",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{label:"メールアドレス","prepend-icon":"fas fa-envelope",required:"",type:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{counter:"",hint:"8文字以上のパスワード",label:"パスワード","persistent-hint":"","prepend-icon":"fas fa-lock",required:"",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{counter:"",label:"パスワードの確認","prepend-icon":"fas fa-lock",required:"",type:"password"},model:{value:e.passwordConfirmation,callback:function(t){e.passwordConfirmation=t},expression:"passwordConfirmation"}})],1),a("v-card-actions",{staticClass:"pr-4 pb-4"},[a("v-spacer"),a("v-btn",{attrs:{color:"primary",loading:e.isLoading,type:"submit"}},[e._v("\n                            新規登録\n                        ")])],1)],1)],1)])],1)],1)},n=[],s={data:()=>({email:"",isLoading:!1,name:"",password:"",passwordConfirmation:""}),methods:{async onSubmit(){if(!this.isLoading){this.isLoading=!0;try{await this.$store.dispatch("register",{name:this.name,email:this.email,password:this.password,password_confirmation:this.passwordConfirmation}),this.$router.push({name:"Home"}),alert("新規登録に成功しました。")}catch({response:{data:e}}){alert(Object.values(e.errors).flat().join("\n"))}finally{this.isLoading=!1}}}}},o=s,i=(a("10a1"),a("2877")),l=a("6544"),c=a.n(l),d=a("8336"),f=a("b0af"),u=a("99d9"),p=a("62ad"),m=a("a523"),b=a("0fd9"),v=a("2fa4"),g=a("8654"),h=a("71d9"),w=a("2a7f"),y=Object(i["a"])(o,r,n,!1,null,"14a63130",null);t["default"]=y.exports;c()(y,{VBtn:d["a"],VCard:f["a"],VCardActions:u["a"],VCardText:u["b"],VCol:p["a"],VContainer:m["a"],VRow:b["a"],VSpacer:v["a"],VTextField:g["a"],VToolbar:h["a"],VToolbarTitle:w["a"]})}}]);
//# sourceMappingURL=chunk-2865a0d9.43c7f801.js.map