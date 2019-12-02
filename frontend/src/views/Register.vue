<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <form @submit.prevent="onSubmit">
                    <v-card>
                        <v-toolbar color="transparent" flat>
                            <v-toolbar-title>
                                新規登録
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-text-field
                                v-model="name"
                                label="ユーザー名"
                                prepend-icon="fas fa-user"
                                required
                            />
                            <v-text-field
                                v-model="email"
                                label="メールアドレス"
                                prepend-icon="fas fa-envelope"
                                required
                                type="email"
                            />
                            <v-text-field
                                v-model="password"
                                counter
                                hint="8文字以上のパスワード"
                                label="パスワード"
                                persistent-hint
                                prepend-icon="fas fa-lock"
                                required
                                type="password"
                            />
                            <v-text-field
                                v-model="passwordConfirmation"
                                counter
                                label="パスワードの確認"
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
                                新規登録
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
        name: '',
        password: '',
        passwordConfirmation: '',
    }),
    methods: {
        async onSubmit() {
            if (this.isLoading) {
                return;
            }

            this.isLoading = true;

            try {
                await this.$store.dispatch('register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.passwordConfirmation,
                });

                this.$router.push({ name: 'Home' });

                alert('新規登録に成功しました。');
            } catch ({ response: { data } }) {
                alert(
                    Object.values(data.errors)
                        .flat()
                        .join('\n')
                );
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
