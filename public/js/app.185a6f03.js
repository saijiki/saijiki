(function(e){function t(t){for(var n,r,c=t[0],i=t[1],u=t[2],l=0,p=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-41007cc6":"40a24501","chunk-06ad5ac9":"91733cc0","chunk-23ac3266":"8f7a628c","chunk-51f77985":"b98b8d45","chunk-1fd721c8":"d680adf2","chunk-2d228901":"c918124e","chunk-83916a96":"003df35d","chunk-4885394c":"4f9a4347","chunk-d6f03c50":"f4991b74"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-41007cc6":1,"chunk-06ad5ac9":1,"chunk-23ac3266":1,"chunk-51f77985":1,"chunk-1fd721c8":1,"chunk-83916a96":1,"chunk-4885394c":1,"chunk-d6f03c50":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-41007cc6":"263ee694","chunk-06ad5ac9":"e5948d67","chunk-23ac3266":"f11d10af","chunk-51f77985":"f4670603","chunk-1fd721c8":"7a0178ed","chunk-2d228901":"31d6cfe0","chunk-83916a96":"59b4e13a","chunk-4885394c":"93517fb5","chunk-d6f03c50":"0670aa22"}[e]+".css",o=i.p+n,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],d.parentNode.removeChild(d),a(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",p.name="ChunkLoadError",p.type=n,p.request=r,a[1](p)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"150a":function(e,t,a){"use strict";var n=a("8d51"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{absolute:"",app:"",color:"transparent",dark:"",flat:"",height:"68"}},[a("v-btn",{staticClass:"ma-2 pink",attrs:{exact:"",icon:"",large:"",ripple:!1,to:{name:"Home"}}},[a("v-icon",[e._v("\n                fas fa-home\n            ")])],1),a("v-btn",{staticClass:"ma-2 green",attrs:{exact:"",icon:"",large:"",ripple:!1,to:{name:"Senryus"}}},[a("v-icon",[e._v("\n                fas fa-list-ul\n            ")])],1),a("v-dialog",{attrs:{width:"768"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({staticClass:"ma-2 grey",attrs:{icon:"",large:"",ripple:!1}},n),[a("v-icon",[e._v("\n                        fas fa-question\n                    ")])],1)]}}]),model:{value:e.isHelpDialogVisible,callback:function(t){e.isHelpDialogVisible=t},expression:"isHelpDialogVisible"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("\n                    このサイトについて\n                ")]),a("v-card-text",{staticClass:"pb-0"},[a("v-stepper",{staticClass:"pb-0 elevation-0",attrs:{"non-linear":"",vertical:""}},[a("v-stepper-step",{attrs:{editable:"",step:"1"}},[e._v("\n                            Saijikiとは？\n                        ")]),a("v-stepper-content",{attrs:{step:"1"}},[a("p",[e._v("\n                                キーワードや写真からオリジナルの川柳を生成できるサービスです。\n                            ")])]),a("v-stepper-step",{attrs:{editable:"",step:"2"}},[e._v("\n                            川柳を生成するには？\n                        ")]),a("v-stepper-content",{attrs:{step:"2"}},[a("ul",[a("li",[e._v("\n                                    キーワード欄に単語を入力してエンターキーを押下します。\n                                ")]),a("li",[a("v-icon",{attrs:{size:"18"}},[e._v("\n                                        fas fa-camera\n                                    ")]),e._v("\n                                    ボタンから写真をアップロードします。\n                                ")],1)])]),a("v-stepper-step",{attrs:{editable:"",step:"3"}},[e._v("\n                            お気に入りの川柳が生成できたら？\n                        ")]),a("v-stepper-content",{attrs:{step:"3"}},[a("p",[a("v-icon",{attrs:{size:"18"}},[e._v("\n                                    far fa-thumbs-up\n                                ")]),e._v("\n                                ボタンから評価ができます。\n                            ")],1)])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.isHelpDialogVisible=!1}}},[e._v("\n                        閉じる\n                    ")])],1)],1)],1),a("v-spacer"),a("v-btn",{staticClass:"ma-2 blue",attrs:{icon:"",large:"",ripple:!1,to:{name:"Login"}}},[a("v-icon",[e._v("\n                fas fa-sign-in-alt\n            ")])],1)],1),a("v-content",[a("transition",{attrs:{mode:"out-in",name:"fade-transition"}},[a("router-view")],1)],1)],1)},o=[],s={data:()=>({isHelpDialogVisible:!1})},c=s,i=(a("150a"),a("2877")),u=a("6544"),l=a.n(u),p=a("7496"),d=a("40dc"),f=a("8336"),h=a("b0af"),v=a("99d9"),m=a("a75b"),g=a("169a"),b=a("132d"),k=a("2fa4"),y=a("7e85"),w=a("e516"),_=a("56a4"),S=Object(i["a"])(c,r,o,!1,null,"f1d09f4e",null),C=S.exports;l()(S,{VApp:p["a"],VAppBar:d["a"],VBtn:f["a"],VCard:h["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VContent:m["a"],VDialog:g["a"],VIcon:b["a"],VSpacer:k["a"],VStepper:y["a"],VStepperContent:w["a"],VStepperStep:_["a"]});var V=a("8c4f");n["a"].use(V["a"]);var D=new V["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:()=>Promise.all([a.e("chunk-41007cc6"),a.e("chunk-06ad5ac9")]).then(a.bind(null,"bb51"))},{path:"/senryus/:id(\\d+)",name:"SenryuDetail",component:()=>Promise.all([a.e("chunk-51f77985"),a.e("chunk-4885394c")]).then(a.bind(null,"75f4")),props:({params:{id:e}})=>({id:0|e})},{path:"/senryus",name:"Senryus",component:()=>Promise.all([a.e("chunk-41007cc6"),a.e("chunk-51f77985"),a.e("chunk-1fd721c8")]).then(a.bind(null,"4365")),props:({query:{page:e,word:t,period:a,order:n}})=>({page:e>1?0|e:1,word:t,period:a,order:n})},{path:"/login",name:"Login",component:()=>Promise.all([a.e("chunk-41007cc6"),a.e("chunk-23ac3266")]).then(a.bind(null,"a55b"))},{path:"/register",name:"Register",component:()=>Promise.all([a.e("chunk-41007cc6"),a.e("chunk-83916a96")]).then(a.bind(null,"73cf"))},{path:"/useredit",name:"UserEdit",component:()=>Promise.all([a.e("chunk-41007cc6"),a.e("chunk-51f77985"),a.e("chunk-2d228901")]).then(a.bind(null,"da5c"))},{path:"*",component:()=>a.e("chunk-d6f03c50").then(a.bind(null,"9703"))}]}),O=a("bc3a"),P=a.n(O),x=a("2f62");n["a"].use(x["a"]);const j=new x["a"].Store({state:{data:null},mutations:{setData:(e,t)=>e.data=t},actions:{async loginGuest({commit:e}){try{const{data:t}=await P.a.post("/api/auth/login/guest");e("setData",t)}catch(t){throw e("setData",null),t}},async login({commit:e},{email:t,password:a}){try{const{data:n}=await P.a.post("/api/auth/login",{email:t,password:a});e("setData",n)}catch(n){throw e("setData",null),n}},async register({commit:e},{name:t,email:a,password:n,password_confirmation:r}){try{const{data:o}=await P.a.post("/api/auth/register",{name:t,email:a,password:n,password_confirmation:r});e("setData",o)}catch(o){throw e("setData",null),o}},async logout({commit:e}){try{await P.a.post("/api/auth/logout")}finally{e("setData",null)}}},getters:{isLoggedIn:({data:e})=>Boolean(e)}});j.subscribe((e,t)=>localStorage.state=JSON.stringify(t)),localStorage.state&&j.replaceState(JSON.parse(localStorage.state));var E=j,T=a("f309");n["a"].use(T["a"]);var A=new T["a"]({icons:{iconfont:"fa"}});P.a.interceptors.request.use(e=>{return E.getters.isLoggedIn&&(e.params=Object.assign({token:E.state.data.token},e.params)),e}),P.a.interceptors.response.use(null,async e=>{if(e.config.url.startsWith("/api/auth"))throw e;if(401===e.response.status)return await E.dispatch("loginGuest"),P.a.request(e.config);throw e}),n["a"].prototype.$axios=P.a;a("4656");var L=a("1881");n["a"].component("flipper",L["a"]);a("3c32");var H=a("c143");n["a"].use(H["a"],{}),n["a"].config.productionTip=!1,new n["a"]({router:D,store:E,vuetify:A,render:e=>e(C)}).$mount("#app")},"8d51":function(e,t,a){}});
//# sourceMappingURL=app.185a6f03.js.map