(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d228901"],{da5c:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-container",[a("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[a("h2",[t._v("個人アカウント")]),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("写真")])],1),a("v-list-item-action",[a("div",{staticClass:"text-center"},[a("img",{attrs:{src:e("cf05"),width:"32"}}),a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(i){var e=i.on;return[a("v-btn",t._g({attrs:{text:"",small:""}},e),[t._v("編集")])]}}]),model:{value:t.isEditPicDialog,callback:function(i){t.isEditPicDialog=i},expression:"isEditPicDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n                プロフィール写真を追加\n              ")]),a("v-card-text",{staticClass:"pt-5"},[null===t.imageFileUrl?a("v-btn",{attrs:{block:"",tile:"",outlined:"",color:"success",height:"120"},on:{click:function(i){return i.stopPropagation(),t.pickFile(i)}}},[t._v("\n                  アップロード\n                ")]):a("div",[a("img",{attrs:{src:t.imageFileUrl}})]),a("input",{staticClass:"d-none",attrs:{accept:".jpg,.jpeg,.png",type:"file"},on:{change:t.onPickFile}})],1),a("v-divider"),a("v-card-actions",[a("v-spacer")],1)],1)],1),a("v-btn",{attrs:{text:"",small:""}},[t._v("削除")])],1)])],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("名前")])],1),a("v-list-item-action",[a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(i){var e=i.on;return[a("v-btn",t._g({attrs:{text:"",small:""}},e),[t._v("編集")])]}}]),model:{value:t.isEditNameDialog,callback:function(i){t.isEditNameDialog=i},expression:"isEditNameDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n              名前を変更\n            ")]),a("v-card-text",{staticClass:"pt-5"},[a("v-text-field",{attrs:{label:"name",outlined:"","single-line":""}})],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.onSubmitFile}},[t._v("\n                名前を変更\n              ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(i){t.isEditNameDialog=!1}}},[t._v("\n              キャンセル\n            ")])],1)],1)],1)],1)])],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("メールアドレス")])],1),a("v-list-item-action",[a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(i){var e=i.on;return[a("v-btn",t._g({attrs:{text:"",small:""}},e),[t._v("編集")])]}}]),model:{value:t.isEditMailDialog,callback:function(i){t.isEditMailDialog=i},expression:"isEditMailDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n          aaa@aaa.comを更新\n        ")]),a("v-card-text",{staticClass:"pt-5"},[a("v-text-field",{attrs:{label:"mail",outlined:"","single-line":""}})],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.onSubmitFile}},[t._v("\n            メールアドレスを更新\n          ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(i){t.isEditMailDialog=!1}}},[t._v("\n          キャンセル\n        ")])],1)],1)],1)],1)])],1),a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v("パスワード")]),a("v-list-item-subtitle",[t._v("アカウント（個人用）を保護するため、推測しにくいパスワードを設定してください。")])],1),a("v-list-item-action",[a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(i){var e=i.on;return[a("v-btn",t._g({attrs:{text:"",small:""}},e),[t._v("パスワードの変更")])]}}]),model:{value:t.isEditPasswordDialog,callback:function(i){t.isEditPasswordDialog=i},expression:"isEditPasswordDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n          パスワードの変更\n        ")]),a("v-card-text",{staticClass:"pt-5"},[a("v-text-field",{attrs:{label:"旧パスワード",outlined:"","single-line":""}}),a("v-text-field",{attrs:{label:"新しいパスワード",outlined:"","single-line":"",counter:""}})],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.onSubmitFile}},[t._v("\n            メールアドレスを更新\n          ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(i){t.isEditPasswordDialog=!1}}},[t._v("\n          キャンセル\n        ")])],1)],1)],1)],1)])],1)],1)],1)},l=[],n={data:()=>({isEditNameDialog:!1,isEditMailDialog:!1,isEditPasswordDialog:!1,isEditPicDialog:!1,imageFileObj:null,imageFileUrl:null}),methods:{pickFile(){document.querySelector('[type="file"]').click()},onPickFile({target:t}){if(0===t.files.length)return;this.imageFileObj=t.files[0],t.value="";const i=new FileReader;i.addEventListener("load",()=>{this.imageFileUrl=i.result,this.isUploadDialogVisible=!0}),i.readAsDataURL(this.imageFileObj)}}},s=n,r=e("2877"),c=e("6544"),o=e.n(c),d=e("8336"),v=e("b0af"),g=e("99d9"),m=e("a523"),u=e("169a"),p=e("ce7e"),b=e("da13"),f=e("1800"),_=e("5d23"),k=e("2fa4"),x=e("8654"),h=Object(r["a"])(s,a,l,!1,null,null,null);i["default"]=h.exports;o()(h,{VBtn:d["a"],VCard:v["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VContainer:m["a"],VDialog:u["a"],VDivider:p["a"],VListItem:b["a"],VListItemAction:f["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VSpacer:k["a"],VTextField:x["a"]})}}]);
//# sourceMappingURL=chunk-2d228901.c918124e.js.map