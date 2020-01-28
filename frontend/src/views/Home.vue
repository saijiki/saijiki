<template>
    <v-container fill-height>
        <v-layout align-center column justify-center>
            <img class="logo" src="@/assets/logo.png" width="256" />
            <v-form @submit.prevent="onSubmit">
                <v-text-field
                    v-model="keyword"
                    dense
                    flat
                    hide-details
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
                    accept=".jpg,.jpeg,.png"
                    type="file"
                    @change="onPickFile"
                />
            </v-form>
        </v-layout>
        <v-dialog v-model="isUploadDialogVisible" persistent width="512">
            <v-card>
                <v-card-title class="headline">
                    アップロード
                    <v-spacer />
                    <v-switch v-model="isPublic" class="pt-0 mt-0" hide-details label="画像の公開"/>
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
                    <v-btn color="green darken-1" text @click="onSubmitFile">
                        一句詠む
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-overlay :value="isLoading" z-index="203">
            <loading-progress
                fill-duration="2"
                hide-background
                indeterminate
                shape="M230 377l-58-41h-1c-27-3-54 9-69 31-15 21-20 44-26 66-3 15-7 30-13 45-6 13-10 17-10 17l-3 5 5 2c24 12 56 13 89 4 34-9 62-28 80-53 16-22 18-51 6-75v-1zm-21 65a101 101 0 01-18 19c-11 8-24 5-16-12s-6-23-18-11c-16 14-23 2-20-5 3-8 13-19 4-26-5-4-11 2-22 11-6 4-19 3-14-18 3-8 7-15 12-22 11-16 29-25 48-24l50 35c7 18 5 38-6 53zM192 277a37 37 0 007 53l27 19a37 37 0 0052-11l25-38-83-59-28 36zM447 7V6c-15-10-37-7-48 8L230 228l81 58L457 55c10-16 6-37-10-48z"
                size="512"
                :style="{ transform: 'scale(0.5)' }"
            />
        </v-overlay>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        imageFileObj: null,
        imageFileUrl: null,
        isLoading: false,
        isUploadDialogVisible: false,
        isPublic: true,
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
                const { data } = await this.$axios.post('/api/senryus', {
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
        async onSubmitFile() {
            if (this.isLoading || this.imageFileUrl === null) {
                return;
            }

            if (this.isPublic && !confirm('アップロードされた画像が公開されますが、よろしいでしょうか？')) {
                return;
            }

            this.isLoading = true;
            try {
                const { data } = await this.$axios.post('/api/senryus', {
                    image_file_url: this.imageFileUrl,
                    is_public: this.isPublic,
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
    min-height: 568px;
}

.logo {
    margin-top: -264px;
    margin-bottom: 8px;
}

::v-deep .v-text-field--outlined fieldset {
    border-style: none;
}
</style>
