<template>
    <v-app>
        <v-app-bar absolute app color="transparent" dark flat height="68">
            <v-btn
                class="ma-2 pink"
                exact
                icon
                large
                :ripple="false"
                :to="{ name: 'Home' }"
            >
                <v-icon>
                    fas fa-home
                </v-icon>
            </v-btn>
            <v-btn
                class="ma-2 green"
                exact
                icon
                large
                :ripple="false"
                :to="{ name: 'Senryus' }"
            >
                <v-icon>
                    fas fa-list-ul
                </v-icon>
            </v-btn>
            <v-dialog v-model="isHelpDialogVisible" width="768">
                <template #activator="{ on }">
                    <v-btn
                        class="ma-2 grey"
                        icon
                        large
                        :ripple="false"
                        v-on="on"
                    >
                        <v-icon>
                            fas fa-question
                        </v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title class="headline">
                        サイトについて
                    </v-card-title>
                    <v-card-text class="pb-0">
                        <v-stepper class="pb-0 elevation-0" non-linear vertical>
                            <v-stepper-step editable step="1">
                              Saijikiとは
                            </v-stepper-step>
                            <v-stepper-content step="1">
                                <p>
                                    キーワードや写真から川柳を生成します
                                </p>
                            </v-stepper-content>
                            <v-stepper-step editable step="2">
                              川柳を作る
                            </v-stepper-step>
                            <v-stepper-content step="2">
                                <p>
                                    ・キーワード欄に単語を入れて生成します<br>
                                    ・
                                    <v-icon>
                                        fas fa-camera
                                    </v-icon>
                                    から写真をアップロードします
                                </p>
                            </v-stepper-content>
                            <v-stepper-step editable step="3">
                                川柳を評価する
                            </v-stepper-step>
                            <v-stepper-content step="3">
                                <p>
                                  良い句には
                                  <v-icon>
                                      far fa-thumbs-up
                                  </v-icon>
                                  を押す
                                </p>
                            </v-stepper-content>
                        </v-stepper>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn
                            color="green darken-1"
                            text
                            @click="isHelpDialogVisible = false"
                        >
                            閉じる
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            <v-spacer />
            <v-btn
                class="ma-2 blue"
                icon
                large
                :ripple="false"
                v-on="on"
                @click="signInTwitter"
            >
                <v-icon>
                    fas fa-sign-in-alt
                </v-icon>
            </v-btn>




        </v-app-bar>
        <v-content>
            <transition mode="out-in" name="fade-transition">
                <router-view />
            </transition>
        </v-content>
    </v-app>
</template>

<script>
export default {
    data: () => ({ isHelpDialogVisible: false }),

    methods:{
      //twitterログイン処理,返ってきた後urlのトークンをバックに渡す
      async signInTwitter(){
        try {
          const { data } = await this.$axios.get('/api/sns/login');
          location.href = data;
        } catch (e) {
          console.log(e);
        }
        //コールバックしてから
        try {
          if(Object.keys(this.$route.query).length){
            const { data } = await this.$axios.post('/api/senryus', {
                token: this.$route.query.oauth_token,
                verifier:this.$route.query.oauth_verifier
            });
          }
        } catch (e) {}
      },
    },
  };


</script>

<style lang="scss" scoped>
.v-content {
    background-image: url('~@/assets/background.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: left center;
    background-size: cover;
}
</style>
