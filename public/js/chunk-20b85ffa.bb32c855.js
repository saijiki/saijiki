(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20b85ffa"],{"8ce9":function(t,i,e){},ce7e:function(t,i,e){"use strict";e("8ce9");var a=e("7560");i["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let i;return this.$attrs.role&&"separator"!==this.$attrs.role||(i=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":i,...this.$attrs},on:this.$listeners})}})},da5c:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-container",[a("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[a("h2",[t._v("個人アカウント")]),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("写真")])],1),a("v-list-item-action",[a("div",{staticClass:"text-center"},[a("img",{attrs:{src:e("cf05"),width:"32"}}),a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(i){var e=i.on;return[a("v-btn",t._g({attrs:{text:"",small:""}},e),[t._v("編集")])]}}]),model:{value:t.isEditPicDialog,callback:function(i){t.isEditPicDialog=i},expression:"isEditPicDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n                                  プロフィール写真を追加\n                              ")]),a("v-card-text",{staticClass:"pt-5"},[a("v-btn",{attrs:{block:"",tile:"",outlined:"",color:"success",height:"120"}},[t._v("\n                                   アップロード\n                                ")])],1),a("v-divider"),a("v-card-actions",[a("v-spacer")],1)],1)],1),a("v-btn",{attrs:{text:"",small:""}},[t._v("削除")])],1)])],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("名前")])],1),a("v-list-item-action",[a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(i){var e=i.on;return[a("v-btn",t._g({attrs:{text:"",small:""}},e),[t._v("編集")])]}}]),model:{value:t.isEditNameDialog,callback:function(i){t.isEditNameDialog=i},expression:"isEditNameDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n                                名前を変更\n                            ")]),a("v-card-text",{staticClass:"pt-5"},[a("v-text-field",{attrs:{label:"name",outlined:"","single-line":""}})],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.onSubmitFile}},[t._v("\n                                    名前を変更\n                                ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(i){t.isEditNameDialog=!1}}},[t._v("\n                                    キャンセル\n                                ")])],1)],1)],1)],1)])],1),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("メールアドレス")])],1),a("v-list-item-action",[a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(i){var e=i.on;return[a("v-btn",t._g({attrs:{text:"",small:""}},e),[t._v("編集")])]}}]),model:{value:t.isEditMailDialog,callback:function(i){t.isEditMailDialog=i},expression:"isEditMailDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n                              aaa@aaa.comを更新\n                          ")]),a("v-card-text",{staticClass:"pt-5"},[a("v-text-field",{attrs:{label:"mail",outlined:"","single-line":""}})],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.onSubmitFile}},[t._v("\n                                  メールアドレスを更新\n                              ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(i){t.isEditMailDialog=!1}}},[t._v("\n                                  キャンセル\n                              ")])],1)],1)],1)],1)])],1),a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v("パスワード")]),a("v-list-item-subtitle",[t._v("アカウント（個人用）を保護するため、推測しにくいパスワードを設定してください。")])],1),a("v-list-item-action",[a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(i){var e=i.on;return[a("v-btn",t._g({attrs:{text:"",small:""}},e),[t._v("パスワードの変更")])]}}]),model:{value:t.isEditPasswordDialog,callback:function(i){t.isEditPasswordDialog=i},expression:"isEditPasswordDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("\n                              パスワードの変更\n                          ")]),a("v-card-text",{staticClass:"pt-5"},[a("v-text-field",{attrs:{label:"旧パスワード",outlined:"","single-line":""}}),a("v-text-field",{attrs:{label:"新しいパスワード",outlined:"","single-line":"",counter:""}})],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.onSubmitFile}},[t._v("\n                                  メールアドレスを更新\n                              ")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(i){t.isEditPasswordDialog=!1}}},[t._v("\n                                  キャンセル\n                              ")])],1)],1)],1)],1)])],1)],1)],1)},s=[],l={data:()=>({isEditNameDialog:!1,isEditMailDialog:!1,isEditPasswordDialog:!1,isEditPicDialog:!1})},n=l,r=e("2877"),o=e("6544"),c=e.n(o),v=e("8336"),d=e("b0af"),m=e("99d9"),u=e("a523"),g=e("169a"),b=e("ce7e"),p=e("da13"),_=e("1800"),x=e("5d23"),f=e("2fa4"),h=e("8654"),k=Object(r["a"])(n,a,s,!1,null,null,null);i["default"]=k.exports;c()(k,{VBtn:v["a"],VCard:d["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VContainer:u["a"],VDialog:g["a"],VDivider:b["a"],VListItem:p["a"],VListItemAction:_["a"],VListItemContent:x["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VSpacer:f["a"],VTextField:h["a"]})}}]);
//# sourceMappingURL=chunk-20b85ffa.bb32c855.js.map