<template>
    <v-container fill-height fluid>
        <v-layout align-center column justify-center>
            <img class="logo" src="@/assets/logo.png" width="256" />
            <v-form @submit.prevent="onSubmit">
                <v-text-field
                    v-model="keyword"
                    dense
                    flat
                    label="キーワード"
                    outlined
                    rounded
                    solo
                >
                    <template #append>
                        <v-icon tag="a" @click.stop="pickFile" @mousedown.stop>
                            fas fa-camera
                        </v-icon>
                    </template>
                </v-text-field>
                <input
                    class="d-none"
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    @change="onPickFile"
                />
            </v-form>
        </v-layout>
        <v-dialog v-model="isUploadDialogVisible" persistent width="512">
            <v-card>
                <v-card-title class="headline">
                    アップロード
                </v-card-title>
                <v-card-text class="pb-0">
                    <v-row justify="center">
                        <img height="192" :src="imageFileUrl" />
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn
                        color="green darken-1"
                        text
                        @click="isUploadDialogVisible = false"
                    >
                        キャンセル
                    </v-btn>
                    <v-btn
                        color="green darken-1"
                        text
                        @click="isUploadDialogVisible = false"
                    >
                        一句詠む
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-overlay :value="isLoading">
            <loading-progress
                fill-duration="2"
                hide-background
                indeterminate
                shape="M457 139A206 206 0 00256 0C153 0 84 62 55 139 26 215-2 301 29 392l8 20c14 25 35 44 59 58 50 31 115 42 160 42 72 0 196-29 227-120s3-177-26-253zM91 451c-9-12-25-35-31-74-1-10 3-24 16-26s18 11 20 20c1 8 3 46 12 66s-8 25-17 14zm67 8c-9-14-26-43-26-87 0-12 9-26 26-26s21 15 21 25c0 9-4 52 4 76s-16 27-25 12zm200 0c-10 15-33 12-25-12s3-67 3-76c0-10 5-25 22-25s26 14 26 26c0 44-17 73-26 87zM256 307c-38 0-104 6-142-9-13-4-24-17-29-36-7-27 12-122 27-148 5-8 15-19 30-23 34-7 85-7 114-7s80 0 114 7c15 4 25 15 30 23 15 26 34 121 27 148-5 19-16 32-29 36-38 15-104 9-142 9zm196 70c-6 39-22 62-31 74-9 11-26 6-17-14s11-58 12-66c2-9 7-22 20-20s17 16 16 26z M308 268l-35-14h-6l-11 5-11-5h-6l-35 14a7 7 0 006 14l32-14 11 5h6l11-5 32 14a7 7 0 106-14zM178 168a22 22 0 100 44 22 22 0 000-44zM162 264h-16v-14s-35 8-46-30c-7 28-7 58 17 68 24 11 49 0 54-6l-15-7 6-11z M129 177l6 3 4 1c7 0 12-5 14-11 1-2 2-5 1-8l-3-6c-7-11 14-21 34-16s46 10 56 4c5-2 7-5 7-7l1-3a10 10 0 00-20-3c-2 1-5 2-9 0-11-4-42-25-65-18-32 8-40 35-32 55 1 4 3 7 6 9zM231 224a7 7 0 00-8-12l-8 7c-1 4-3 7-3 11s1 7 4 11c2 3 5 5 9 7a7 7 0 006-13l-4-3v-2l1-3 3-3zM354 190a22 22 0 10-44 0 22 22 0 0044 0zM410 220c-11 38-46 30-46 30v14h-16l6 11-15 7c5 6 30 17 54 6 24-10 24-40 17-68z M269 144c10 6 36 1 56-4s41 5 34 16a16 16 0 00-2 14 16 16 0 0018 10l6-3c3-2 5-5 6-9 8-20 0-47-32-55-23-7-54 14-65 18-4 2-7 1-9 0a10 10 0 10-19 6c0 2 2 5 7 7zM279 235a7 7 0 106 13c4-2 7-4 9-7 3-4 4-7 4-11s-2-7-4-11c-1-3-4-5-7-7a7 7 0 10-8 12l3 3 1 3v2l-4 3z"
                size="512"
                :style="{ transform: 'scale(0.5)' }"
            />
        </v-overlay>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        imageFileObj: null,
        imageFileUrl: null,
        isUploadDialogVisible: false,
        isLoading: false,
        keyword: '',
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
                this.isUploadDialogVisible = true;
            });
            reader.readAsDataURL(this.imageFileObj);
        },
        async onSubmit() {
            if (this.isLoading || this.keyword === '') {
                return;
            }

            this.isLoading = true;

            try {
                const { data } = await axios.post('api/senryus', {
                    keyword: this.keyword,
                });

                this.$router.push({
                    name: 'SenryuDetail',
                    params: {
                        id: data.id,
                    },
                });
            } catch (e) {
                alert('川柳の作成に失敗しました。');
            } finally {
                this.isLoading = false;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.layout {
    min-height: 594px;
}

.logo {
    margin-top: -264px;
    margin-bottom: 8px;
}

::v-deep .v-text-field--outlined fieldset {
    border-style: none;
}
</style>
