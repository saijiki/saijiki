<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card>
                    <v-card-title>
                        プロフィール設定
                    </v-card-title>
                    <v-card-text>
                        <v-list subheader>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        写真
                                    </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action class="flex-row">
                                    <img
                                        v-if="$store.state.data.user.avatar"
                                        :src="$store.state.data.user.avatar"
                                        width="28"
                                    />
                                    <v-btn
                                        small
                                        text
                                        @click="isAvatarEditDialogVisible = true"
                                    >
                                        編集
                                    </v-btn>
                                    <v-btn small text>
                                        削除
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        ユーザー名
                                    </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action class="flex-row">
                                    <v-btn
                                        small
                                        text
                                        @click="isNameEditDialogVisible = true"
                                    >
                                        編集
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        メールアドレス
                                    </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action class="flex-row">
                                    <v-btn
                                        small
                                        text
                                        @click="isEmailEditDialogVisible = true"
                                    >
                                        編集
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                            <v-list-item two-line>
                                <v-list-item-content>
                                    <v-list-item-title>
                                        パスワード
                                    </v-list-item-title>
                                    <v-list-item-subtitle class="text-wrap">
                                        アカウントを保護するため、推測しにくいパスワードを設定してください。
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action class="flex-row">
                                    <v-btn
                                        small
                                        text
                                        @click="isPasswordEditDialogVisible = true"
                                    >
                                        パスワードの変更
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-model="isAvatarEditDialogVisible" persistent width="512">
            <v-card>
                <v-card-title class="headline">
                    写真を編集
                </v-card-title>
                <v-card-text class="pb-0">
                    <v-row justify="center">
                        <img
                            v-if="imageFileUrl"
                            height="192"
                            :src="imageFileUrl"
                        />
                        <v-btn
                            v-else
                            block
                            color="success"
                            height="192"
                            outlined
                            tile
                            @click="pickFile"
                        >
                            アップロード
                        </v-btn>
                        <input
                            class="d-none"
                            accept=".jpg,.jpeg,.png"
                            type="file"
                            @change="onPickFile"
                        />
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        color="green darken-1"
                        text
                        @click="isAvatarEditDialogVisible = false"
                    >
                        キャンセル
                    </v-btn>
                    <v-btn color="green darken-1" text @click="() => {}">
                        編集
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="isNameEditDialogVisible" persistent width="512">
            <v-card>
                <v-card-title class="headline">
                    ユーザー名を編集
                </v-card-title>
                <v-card-text class="py-3">
                    <v-text-field
                        v-model="name"
                        hide-details
                        label="ユーザー名"
                        outlined
                        single-line
                    />
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        color="green darken-1"
                        text
                        @click="isNameEditDialogVisible = false"
                    >
                        キャンセル
                    </v-btn>
                    <v-btn color="green darken-1" text @click="() => {}">
                        編集
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="isEmailEditDialogVisible" persistent width="512">
            <v-card>
                <v-card-title class="headline">
                    メールアドレスを編集
                </v-card-title>
                <v-card-text class="py-3">
                    <v-text-field
                        v-model="email"
                        hide-details
                        label="メールアドレス"
                        outlined
                        single-line
                        type="email"
                    />
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        color="green darken-1"
                        text
                        @click="isEmailEditDialogVisible = false"
                    >
                        キャンセル
                    </v-btn>
                    <v-btn color="green darken-1" text @click="() => {}">
                        編集
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="isPasswordEditDialogVisible" persistent width="512">
            <v-card>
                <v-card-title class="headline">
                    パスワードを変更
                </v-card-title>
                <v-card-text class="py-3">
                    <v-text-field
                        v-model="oldPassword"
                        label="旧パスワード"
                        outlined
                        single-line
                        type="password"
                    />
                    <v-text-field
                        v-model="newPassword"
                        counter
                        label="新パスワード"
                        outlined
                        single-line
                        type="password"
                    />
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        color="green darken-1"
                        text
                        @click="isPasswordEditDialogVisible = false"
                    >
                        キャンセル
                    </v-btn>
                    <v-btn color="green darken-1" text @click="() => {}">
                        変更
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        isLoading: false,
        isAvatarEditDialogVisible: false,
        imageFileObj: null,
        imageFileUrl: null,
        isNameEditDialogVisible: false,
        name: '',
        isEmailEditDialogVisible: false,
        email: '',
        isPasswordEditDialogVisible: false,
        oldPassword: '',
        newPassword: '',
    }),
    methods: {
        pickFile() {
            document.querySelector('[type="file"]').click();
        },
        onPickFile({ target }) {
            if (target.files.length === 0) {
                return;
            }

            this.imageFileObj = target.files[0];
            target.value = '';

            const reader = new FileReader();

            reader.addEventListener('load', () => {
                this.imageFileUrl = reader.result;
            });
            reader.readAsDataURL(this.imageFileObj);
        },
    },
};
</script>
