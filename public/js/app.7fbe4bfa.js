(function(e){function t(t){for(var a,r,s=t[0],i=t[1],u=t[2],l=0,p=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0bc1032a":"2c0eda63","chunk-20b85ffa":"4aede6e4","chunk-28c9be2c":"7c72aeb1","chunk-300514ce":"5e00bcc9","chunk-2d0e2193":"410b562b","chunk-64e69518":"e6feaa67","chunk-6c171fc8":"3b0f313b","chunk-9f8eaf4e":"ed2fea6d","chunk-15eb85e2":"a9162fdc","chunk-d6f03c50":"f4991b74"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0bc1032a":1,"chunk-20b85ffa":1,"chunk-28c9be2c":1,"chunk-300514ce":1,"chunk-64e69518":1,"chunk-6c171fc8":1,"chunk-9f8eaf4e":1,"chunk-15eb85e2":1,"chunk-d6f03c50":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0bc1032a":"0c07b62e","chunk-20b85ffa":"c7315fda","chunk-28c9be2c":"777baa28","chunk-300514ce":"7b12f8e1","chunk-2d0e2193":"31d6cfe0","chunk-64e69518":"da35dd02","chunk-6c171fc8":"e112c5ac","chunk-9f8eaf4e":"50011f5c","chunk-15eb85e2":"cf0c1dac","chunk-d6f03c50":"0670aa22"}[e]+".css",o=i.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",p.name="ChunkLoadError",p.type=a,p.request=r,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4e99":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{absolute:"",app:"",color:"transparent",dark:"",flat:"",height:"68"}},[a("v-btn",{staticClass:"ma-2 pink",attrs:{exact:"",icon:"",large:"",ripple:!1,to:{name:"Home"}}},[a("v-icon",[e._v("\n                fas fa-home\n            ")])],1),a("v-btn",{staticClass:"ma-2 green",attrs:{exact:"",icon:"",large:"",ripple:!1,to:{name:"Senryus"}}},[a("v-icon",[e._v("\n                fas fa-list-ul\n            ")])],1),a("v-dialog",{attrs:{width:"768"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({staticClass:"ma-2 grey",attrs:{icon:"",large:"",ripple:!1}},n),[a("v-icon",[e._v("\n                        fas fa-question\n                    ")])],1)]}}]),model:{value:e.isHelpDialogVisible,callback:function(t){e.isHelpDialogVisible=t},expression:"isHelpDialogVisible"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("\n                    このサイトについて\n                ")]),a("v-card-text",{staticClass:"pb-0"},[a("v-stepper",{staticClass:"pb-0 elevation-0",attrs:{"non-linear":"",vertical:""}},[a("v-stepper-step",{attrs:{editable:"",step:"1"}},[e._v("\n                            Saijikiとは？\n                        ")]),a("v-stepper-content",{attrs:{step:"1"}},[a("p",[e._v("\n                                キーワードや写真からオリジナルの川柳を生成できるサービスです。\n                            ")])]),a("v-stepper-step",{attrs:{editable:"",step:"2"}},[e._v("\n                            川柳を生成するには？\n                        ")]),a("v-stepper-content",{attrs:{step:"2"}},[a("ul",[a("li",[e._v("\n                                    キーワード欄に単語を入力してエンターキーを押下します。\n                                ")]),a("li",[a("v-icon",{attrs:{size:"18"}},[e._v("\n                                        fas fa-camera\n                                    ")]),e._v("\n                                    ボタンから写真をアップロードします。\n                                ")],1)])]),a("v-stepper-step",{attrs:{editable:"",step:"3"}},[e._v("\n                            お気に入りの川柳が生成できたら？\n                        ")]),a("v-stepper-content",{attrs:{step:"3"}},[a("p",[a("v-icon",{attrs:{size:"18"}},[e._v("\n                                    far fa-thumbs-up\n                                ")]),e._v("\n                                ボタンから評価ができます。\n                            ")],1)])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.isHelpDialogVisible=!1}}},[e._v("\n                        閉じる\n                    ")])],1)],1)],1),a("v-spacer"),e.$store.getters.isLoggedIn?a("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({},r),[a("img",{attrs:{src:n("cf05"),width:"32"}})])]}}],null,!1,1772304103)},[a("v-list",[a("v-list-item",{attrs:{to:{name:"UserSenryu"}},on:{click:function(e){}}},[a("v-list-item-title",[e._v("\n              アカウント名\n            ")])],1),a("v-list-item",{attrs:{to:{name:"UserEdit"}},on:{click:function(e){}}},[a("v-list-item-title",[e._v("\n                  設定\n                ")])],1),a("v-list-item",{on:{click:function(t){return e.$store.dispatch("logout")}}},[a("v-list-item-title",[e._v("\n                ログアウト\n              ")])],1)],1)],1):a("v-btn",{staticClass:"ma-2 blue",attrs:{icon:"",large:"",ripple:!1,to:{name:"Login"}}},[a("v-icon",[e._v("\n                fas fa-sign-in-alt\n            ")])],1)],1),a("v-content",[a("transition",{attrs:{mode:"out-in",name:"fade-transition"}},[a("router-view")],1)],1)],1)},o=[],c={data:()=>({isHelpDialogVisible:!1})},s=c,i=(n("bb8b"),n("2877")),u=n("6544"),l=n.n(u),p=n("7496"),f=n("40dc"),d=n("8336"),h=n("b0af"),v=n("99d9"),m=n("a75b"),b=n("169a"),g=n("132d"),k=n("8860"),y=n("da13"),w=n("5d23"),_=n("e449"),S=n("2fa4"),V=n("7e85"),C=n("e516"),D=n("56a4"),x=Object(i["a"])(s,r,o,!1,null,"edfed24c",null),O=x.exports;l()(x,{VApp:p["a"],VAppBar:f["a"],VBtn:d["a"],VCard:h["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VContent:m["a"],VDialog:b["a"],VIcon:g["a"],VList:k["a"],VListItem:y["a"],VListItemTitle:w["c"],VMenu:_["a"],VSpacer:S["a"],VStepper:V["a"],VStepperContent:C["a"],VStepperStep:D["a"]});var P=n("8c4f");a["a"].use(P["a"]);var j=new P["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:()=>Promise.all([n.e("chunk-0bc1032a"),n.e("chunk-6c171fc8")]).then(n.bind(null,"bb51"))},{path:"/senryus/:id(\\d+)",name:"SenryuDetail",component:()=>n.e("chunk-15eb85e2").then(n.bind(null,"75f4")),props:({params:{id:e}})=>({id:0|e})},{path:"/senryus",name:"Senryus",component:()=>Promise.all([n.e("chunk-0bc1032a"),n.e("chunk-300514ce"),n.e("chunk-64e69518")]).then(n.bind(null,"4365")),props:({query:{page:e,word:t,period:n,order:a}})=>({page:e>1?0|e:1,word:t,period:n,order:a})},{path:"/login",name:"Login",component:()=>Promise.all([n.e("chunk-0bc1032a"),n.e("chunk-28c9be2c")]).then(n.bind(null,"a55b"))},{path:"/register",name:"Register",component:()=>Promise.all([n.e("chunk-0bc1032a"),n.e("chunk-9f8eaf4e")]).then(n.bind(null,"73cf"))},{path:"/useredit",name:"UserEdit",component:()=>Promise.all([n.e("chunk-0bc1032a"),n.e("chunk-20b85ffa")]).then(n.bind(null,"da5c"))},{path:"/usersenryu",name:"UserSenryu",component:()=>Promise.all([n.e("chunk-0bc1032a"),n.e("chunk-300514ce"),n.e("chunk-2d0e2193")]).then(n.bind(null,"7cf7")),props:({query:{page:e,type:t}})=>({page:e>1?0|e:1,type:t})},{path:"*",component:()=>n.e("chunk-d6f03c50").then(n.bind(null,"9703"))}]}),L=n("bc3a"),E=n.n(L),T=n("2f62");a["a"].use(T["a"]);const A=new T["a"].Store({state:{data:null},mutations:{setData:(e,t)=>e.data=t},actions:{async loginGuest({commit:e}){try{const{data:t}=await E.a.post("/api/auth/login/guest");e("setData",t)}catch(t){throw e("setData",null),t}},async login({commit:e},{email:t,password:n}){try{const{data:a}=await E.a.post("/api/auth/login",{email:t,password:n});e("setData",a)}catch(a){throw e("setData",null),a}},async register({commit:e},{name:t,email:n,password:a,password_confirmation:r}){try{const{data:o}=await E.a.post("/api/auth/register",{name:t,email:n,password:a,password_confirmation:r});e("setData",o)}catch(o){throw e("setData",null),o}},async logout({commit:e}){try{await E.a.post("/api/auth/logout")}finally{e("setData",null)}}},getters:{isLoggedIn:({data:e})=>Boolean(e)}});A.subscribe((e,t)=>localStorage.state=JSON.stringify(t)),localStorage.state&&A.replaceState(JSON.parse(localStorage.state));var H=A,q=n("f309");a["a"].use(q["a"]);var I=new q["a"]({icons:{iconfont:"fa"}});E.a.interceptors.request.use(e=>{return H.getters.isLoggedIn&&(e.params=Object.assign({token:H.state.data.token},e.params)),e}),E.a.interceptors.response.use(null,async e=>{if(e.config.url.startsWith("/api/auth"))throw e;if(401===e.response.status)return await H.dispatch("loginGuest"),E.a.request(e.config);throw e}),a["a"].prototype.$axios=E.a;n("4656");var N=n("1881");a["a"].component("flipper",N["a"]);n("3c32");var B=n("c143");a["a"].use(B["a"],{}),a["a"].config.productionTip=!1,new a["a"]({router:j,store:H,vuetify:I,render:e=>e(O)}).$mount("#app")},bb8b:function(e,t,n){"use strict";var a=n("4e99"),r=n.n(a);r.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.25e884be.png"}});
//# sourceMappingURL=app.7fbe4bfa.js.map