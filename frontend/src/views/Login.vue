<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <form @submit.prevent="onSubmit">
                    <v-card>
                        <v-toolbar color="transparent" flat>
                            <v-toolbar-title>
                                ログイン
                            </v-toolbar-title>
                            <v-spacer />
                            <router-link :to="{ name: 'Register' }">
                                アカウントを新規登録
                            </router-link>
                        </v-toolbar>
                        <v-card-text>
                            <v-text-field
                                v-model="email"
                                label="メールアドレス"
                                prepend-icon="fas fa-envelope"
                                required
                                type="email"
                            />
                            <v-text-field
                                v-model="password"
                                label="パスワード"
                                prepend-icon="fas fa-lock"
                                required
                                type="password"
                            />
                        </v-card-text>
                        <v-card-actions class="pr-4 pb-4">
                            <v-spacer />
                            <v-btn
                                color="primary"
                                :loading="isLoading"
                                type="submit"
                            >
                                ログイン
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        email: '',
        isLoading: false,
        password: '',
    }),
    methods: {
        async onSubmit() {
            if (this.isLoading) {
                return;
            }

            this.isLoading = true;

            try {
                await this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password,
                });

                this.$router.push({ name: 'Home' });

                alert('ログインに成功しました。');
            } catch (e) {
                alert('ログインに失敗しました。');
            } finally {
                this.isLoading = false;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
::v-deep .v-icon {
    font-size: 16px;
}
</style>
