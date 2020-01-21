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

            <v-menu v-if="$store.getters.isLoggedIn" bottom nudge-top="-6" offset-y transition="slide-y-transition">
                <template #activator="{ on }">
                    <v-btn
                        class="ma-2 blue"
                        icon
                        large
                        :loading="isLoading"
                        :ripple="false"
                        v-on="on"
                    >
                        <img :src="$store.state.data.user.avatar || require('@/assets/avatar.png')" width="28">
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item exact :to="{ name: 'MySenryus' }">
                        <v-list-item-icon>
                            <v-icon>
                                fas fa-user
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            {{ $store.state.data.user.name }}
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item exact :to="{ name: 'MyProfile' }">
                        <v-list-item-icon>
                            <v-icon>
                                fas fa-cog
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            設定
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="logout">
                        <v-list-item-icon>
                            <v-icon>
                                fas fa-sign-out-alt
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            ログアウト
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn
                v-else
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
    data: () => ({
        isHelpDialogVisible: false,
        isLoading: false,
    }),
    methods: {
        async logout() {
            this.isLoading = true;

            try {
                await this.$store.dispatch('logout');

                if (this.$store.getters.isLoggedIn) {
                    alert('ログアウトに失敗しました。');
                    return;
                }

                this.$router.push({name: 'Home'});
            } catch (e) {
                this.$router.push({name: 'Home'});
            } finally {
                alert('ログアウトしました。');
                this.isLoading = false;
            }
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
