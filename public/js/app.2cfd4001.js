(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2adee7e2":"a0e07d7e","chunk-2865a0d9":"43c7f801","chunk-2d366902":"950bab77","chunk-8ace22f0":"f1362460","chunk-f1e407ba":"88855ee8","chunk-4255ff66":"2fdefddc","chunk-cd83c2b4":"cff0e816","chunk-3bc154df":"09c0f262"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-2adee7e2":1,"chunk-2865a0d9":1,"chunk-2d366902":1,"chunk-8ace22f0":1,"chunk-f1e407ba":1,"chunk-4255ff66":1,"chunk-cd83c2b4":1,"chunk-3bc154df":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-2adee7e2":"d444c808","chunk-2865a0d9":"59b4e13a","chunk-2d366902":"cd95a897","chunk-8ace22f0":"f11d10af","chunk-f1e407ba":"b988a716","chunk-4255ff66":"5143878a","chunk-cd83c2b4":"0670aa22","chunk-3bc154df":"7df5653c"}[e]+".css",o=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],u=l.getAttribute("data-href");if(u===n||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],d.parentNode.removeChild(d),a(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,a[1](p)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"150a":function(e,t,a){"use strict";var n=a("8d51"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{absolute:"",app:"",color:"transparent",dark:"",flat:"",height:"68"}},[a("v-btn",{staticClass:"ma-2 pink",attrs:{exact:"",icon:"",large:"",ripple:!1,to:{name:"Home"}}},[a("v-icon",[e._v("\n                fas fa-home\n            ")])],1),a("v-btn",{staticClass:"ma-2 green",attrs:{exact:"",icon:"",large:"",ripple:!1,to:{name:"Senryus"}}},[a("v-icon",[e._v("\n                fas fa-list-ul\n            ")])],1),a("v-dialog",{attrs:{width:"768"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({staticClass:"ma-2 grey",attrs:{icon:"",large:"",ripple:!1}},n),[a("v-icon",[e._v("\n                        fas fa-question\n                    ")])],1)]}}]),model:{value:e.isHelpDialogVisible,callback:function(t){e.isHelpDialogVisible=t},expression:"isHelpDialogVisible"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("\n                    このサイトについて\n                ")]),a("v-card-text",{staticClass:"pb-0"},[a("v-stepper",{staticClass:"pb-0 elevation-0",attrs:{"non-linear":"",vertical:""}},[a("v-stepper-step",{attrs:{editable:"",step:"1"}},[e._v("\n                            Saijikiとは？\n                        ")]),a("v-stepper-content",{attrs:{step:"1"}},[a("p",[e._v("\n                                キーワードや写真からオリジナルの川柳を生成できるサービスです。\n                            ")])]),a("v-stepper-step",{attrs:{editable:"",step:"2"}},[e._v("\n                            川柳を生成するには？\n                        ")]),a("v-stepper-content",{attrs:{step:"2"}},[a("ul",[a("li",[e._v("\n                                    キーワード欄に単語を入力してエンターキーを押下します。\n                                ")]),a("li",[a("v-icon",{attrs:{size:"18"}},[e._v("\n                                        fas fa-camera\n                                    ")]),e._v("\n                                    ボタンから写真をアップロードします。\n                                ")],1)])]),a("v-stepper-step",{attrs:{editable:"",step:"3"}},[e._v("\n                            お気に入りの川柳が生成できたら？\n                        ")]),a("v-stepper-content",{attrs:{step:"3"}},[a("p",[a("v-icon",{attrs:{size:"18"}},[e._v("\n                                    far fa-thumbs-up\n                                ")]),e._v("\n                                ボタンから評価ができます。\n                            ")],1)])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.isHelpDialogVisible=!1}}},[e._v("\n                        閉じる\n                    ")])],1)],1)],1),a("v-spacer"),a("v-btn",{staticClass:"ma-2 blue",attrs:{icon:"",large:"",ripple:!1,to:{name:"Login"}}},[a("v-icon",[e._v("\n                fas fa-sign-in-alt\n            ")])],1)],1),a("v-content",[a("transition",{attrs:{mode:"out-in",name:"fade-transition"}},[a("router-view")],1)],1)],1)},o=[],s={data:()=>({isHelpDialogVisible:!1})},i=s,c=(a("150a"),a("2877")),l=a("6544"),u=a.n(l),p=a("7496"),d=a("40dc"),f=a("8336"),h=a("b0af"),v=a("99d9"),m=a("a75b"),g=a("169a"),b=a("132d"),k=a("2fa4"),y=a("7e85"),w=a("e516"),_=a("56a4"),S=Object(c["a"])(i,r,o,!1,null,"f1d09f4e",null),C=S.exports;u()(S,{VApp:p["a"],VAppBar:d["a"],VBtn:f["a"],VCard:h["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VContent:m["a"],VDialog:g["a"],VIcon:b["a"],VSpacer:k["a"],VStepper:y["a"],VStepperContent:w["a"],VStepperStep:_["a"]});var V=a("8c4f");n["a"].use(V["a"]);var D=new V["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:()=>Promise.all([a.e("chunk-2adee7e2"),a.e("chunk-2d366902")]).then(a.bind(null,"bb51"))},{path:"/senryus/:id(\\d+)",name:"SenryuDetail",component:()=>Promise.all([a.e("chunk-f1e407ba"),a.e("chunk-3bc154df")]).then(a.bind(null,"75f4")),props:({params:{id:e}})=>({id:0|e})},{path:"/senryus",name:"Senryus",component:()=>Promise.all([a.e("chunk-2adee7e2"),a.e("chunk-f1e407ba"),a.e("chunk-4255ff66")]).then(a.bind(null,"4365")),props:({query:{page:e,word:t,period:a,order:n}})=>({page:e>1?0|e:1,word:t,period:a,order:n})},{path:"/login",name:"Login",component:()=>Promise.all([a.e("chunk-2adee7e2"),a.e("chunk-8ace22f0")]).then(a.bind(null,"a55b"))},{path:"/register",name:"Register",component:()=>Promise.all([a.e("chunk-2adee7e2"),a.e("chunk-2865a0d9")]).then(a.bind(null,"73cf"))},{path:"*",component:()=>a.e("chunk-cd83c2b4").then(a.bind(null,"9703"))}]}),O=a("bc3a"),x=a.n(O),P=a("2f62");n["a"].use(P["a"]);const j=new P["a"].Store({state:{data:null},mutations:{setData:(e,t)=>e.data=t},actions:{async loginGuest({commit:e}){try{const{data:t}=await x.a.post("/api/auth/login/guest");e("setData",t)}catch(t){throw e("setData",null),t}},async login({commit:e},{email:t,password:a}){try{const{data:n}=await x.a.post("/api/auth/login",{email:t,password:a});e("setData",n)}catch(n){throw e("setData",null),n}},async register({commit:e},{name:t,email:a,password:n,password_confirmation:r}){try{const{data:o}=await x.a.post("/api/auth/register",{name:t,email:a,password:n,password_confirmation:r});e("setData",o)}catch(o){throw e("setData",null),o}},async logout({commit:e}){try{await x.a.post("/api/auth/logout")}finally{e("setData",null)}}},getters:{isLoggedIn:({data:e})=>Boolean(e)}});j.subscribe((e,t)=>localStorage.state=JSON.stringify(t)),localStorage.state&&j.replaceState(JSON.parse(localStorage.state));var E=j,T=a("f309");n["a"].use(T["a"]);var A=new T["a"]({icons:{iconfont:"fa"}});x.a.interceptors.request.use(e=>{return E.getters.isLoggedIn&&(e.params=Object.assign({token:E.state.data.token},e.params)),e}),x.a.interceptors.response.use(null,async e=>{if(e.config.url.startsWith("/api/auth"))throw e;if(401===e.response.status)return await E.dispatch("loginGuest"),x.a.request(e.config);throw e}),n["a"].prototype.$axios=x.a;a("4656");var L=a("1881");n["a"].component("flipper",L["a"]);a("3c32");var H=a("c143");n["a"].use(H["a"],{}),n["a"].config.productionTip=!1,new n["a"]({router:D,store:E,vuetify:A,render:e=>e(C)}).$mount("#app")},"8d51":function(e,t,a){}});
//# sourceMappingURL=app.2cfd4001.js.map