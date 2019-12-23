<template>
    <v-container>
        <v-card class="pa-2" outlined tile>
            <h2>個人アカウント</h2>
            <!-- プロフィール画像 編集 -->
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>写真</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>

                      <div class="text-center">
                        <img src="@/assets/logo.png" width="32">
                          <v-dialog v-model="isEditPicDialog" width="500">
                              <template v-slot:activator="{ on }">
                                  <v-btn v-on="on" text small>編集</v-btn>
                              </template>
                              <v-card>
                                  <v-card-title
                                      class="headline grey lighten-2"
                                      primary-title
                                  >
                                      プロフィール写真を追加
                                  </v-card-title>

                                  <v-card-text class="pt-5">
                                    <v-btn block tile outlined color="success" height="120">
                                       アップロード
                                    </v-btn>


                                  </v-card-text>

                                  <v-divider></v-divider>

                                  <v-card-actions>
                                      <v-spacer></v-spacer>


                                  </v-card-actions>
                              </v-card>
                          </v-dialog>
                          <v-btn text small>削除</v-btn>
                      </div>


                </v-list-item-action>
            </v-list-item>
            <!-- 名前 編集 -->
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>名前</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                    <div class="text-center">
                        <v-dialog v-model="isEditNameDialog" width="500">
                            <template v-slot:activator="{ on }">
                                <v-btn v-on="on" text small>編集</v-btn>
                            </template>
                            <v-card>
                                <v-card-title
                                    class="headline grey lighten-2"
                                    primary-title
                                >
                                    名前を変更
                                </v-card-title>

                                <v-card-text class="pt-5">
                                  <v-text-field
                                  label="name"
                                  outlined
                                  single-line
                                  ></v-text-field>
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="green darken-1" text @click="onSubmitFile">
                                        名前を変更
                                    </v-btn>
                                    <v-btn
                                        color="green darken-1"
                                        text
                                        @click="isEditNameDialog = false"
                                    >
                                        キャンセル
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-list-item-action>
            </v-list-item>
            <!-- メールアドレス 編集 -->
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>メールアドレス</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <div class="text-center">
                      <v-dialog v-model="isEditMailDialog" width="500">
                          <template v-slot:activator="{ on }">
                              <v-btn v-on="on" text small>編集</v-btn>
                          </template>
                          <v-card>
                              <v-card-title
                                  class="headline grey lighten-2"
                                  primary-title
                              >
                                  aaa@aaa.comを更新
                              </v-card-title>

                              <v-card-text class="pt-5">
                                <v-text-field
                                label="mail"
                                outlined
                                single-line
                                ></v-text-field>
                              </v-card-text>

                              <v-divider></v-divider>

                              <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn color="green darken-1" text @click="onSubmitFile">
                                      メールアドレスを更新
                                  </v-btn>
                                  <v-btn
                                      color="green darken-1"
                                      text
                                      @click="isEditMailDialog = false"
                                  >
                                      キャンセル
                                  </v-btn>
                              </v-card-actions>
                          </v-card>
                      </v-dialog>
                  </div>
                </v-list-item-action>
            </v-list-item>
            <!-- パスワード 編集 -->
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>パスワード</v-list-item-title>
                    <v-list-item-subtitle>アカウント（個人用）を保護するため、推測しにくいパスワードを設定してください。</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <div class="text-center">
                      <v-dialog v-model="isEditPasswordDialog" width="500">
                          <template v-slot:activator="{ on }">
                              <v-btn v-on="on" text small>パスワードの変更</v-btn>
                          </template>
                          <v-card>
                              <v-card-title
                                  class="headline grey lighten-2"
                                  primary-title
                              >
                                  パスワードの変更
                              </v-card-title>

                              <v-card-text class="pt-5">
                                <v-text-field
                                label="旧パスワード"
                                outlined
                                single-line
                                ></v-text-field>

                                <v-text-field
                                label="新しいパスワード"
                                outlined
                                single-line
                                counter
                                ></v-text-field>

                              </v-card-text>

                              <v-divider></v-divider>

                              <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn color="green darken-1" text @click="onSubmitFile">
                                      メールアドレスを更新
                                  </v-btn>
                                  <v-btn
                                      color="green darken-1"
                                      text
                                      @click="isEditPasswordDialog = false"
                                  >
                                      キャンセル
                                  </v-btn>
                              </v-card-actions>
                          </v-card>
                      </v-dialog>
                  </div>
                </v-list-item-action>
            </v-list-item>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data: () => ({ isEditNameDialog: false, isEditMailDialog: false, isEditPasswordDialog: false ,isEditPicDialog: false}),
};
</script>
