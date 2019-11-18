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
                        このサイトについて
                    </v-card-title>
                    <v-card-text class="pb-0">
                        <v-stepper class="pb-0 elevation-0" non-linear vertical>
                            <v-stepper-step editable step="1">
                                Saijikiとは？
                            </v-stepper-step>
                            <v-stepper-content step="1">
                                <p>
                                    キーワードや写真からオリジナルの川柳を生成できるサービスです。
                                </p>
                            </v-stepper-content>
                            <v-stepper-step editable step="2">
                                川柳を生成するには？
                            </v-stepper-step>
                            <v-stepper-content step="2">
                                <ul>
                                    <li>
                                        キーワード欄に単語を入力してエンターキーを押下します。
                                    </li>
                                    <li>
                                        <v-icon size="18">
                                            fas fa-camera
                                        </v-icon>
                                        ボタンから写真をアップロードします。
                                    </li>
                                </ul>
                            </v-stepper-content>
                            <v-stepper-step editable step="3">
                                お気に入りの川柳が生成できたら？
                            </v-stepper-step>
                            <v-stepper-content step="3">
                                <p>
                                    <v-icon size="18">
                                        far fa-thumbs-up
                                    </v-icon>
                                    ボタンから評価ができます。
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
                :to="{ name: 'Login' }"
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
