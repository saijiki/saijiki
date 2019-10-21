<template>
    <v-container fluid>
        <!-- レイアウト -->
        <v-layout align-center justify-center row fill-height>
            <!-- フォーム -->
            <v-form @submit.prevent="() => {}">
                <v-text-field
                    v-model="word"
                    outlined
                    label="キーワード"
                    append-icon="fas fa-camera"
                    @click:append="pickFile"
                    @keyup.enter="submit"
                ></v-text-field>
            </v-form>

            <!-- アップロードボタン -->
            <!-- <v-btn
      :loading="loading"
      :disabled="loading"
      color="#e290b1"
      class="white--text"
      @click="pickFile"
      >
      アップロード
      <v-icon right dark>fas fa-upload</v-icon>
    </v-btn> -->

            <!-- ファイル選択 -->
            <input
                type="file"
                style="display: none"
                ref="image"
                accept="image/*"
                @change="onFilePicked"
            />
        </v-layout>
        <!-- ダイアログ -->
        <v-dialog v-model="dialog" max-width="450">
            <v-card>
                <v-layout row>
                    <v-flex grow pa-1>
                        <v-card-title class="headline"
                            >アップロード</v-card-title
                        >
                    </v-flex>
                    <v-flex shrink pa-1>
                        <v-checkbox
                            label="公開"
                            color="success"
                            value="success"
                            hide-details
                        ></v-checkbox>
                    </v-flex>
                </v-layout>
                <v-card-text>
                    <!-- アップロードした画像 -->
                    <img :src="imageUrl" height="150" v-if="imageUrl" />
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        color="green darken-1"
                        flat="flat"
                        @click="dialog = false"
                    >
                        キャンセル
                    </v-btn>

                    <v-btn
                        color="green darken-1"
                        flat="flat"
                        @click="dialog = false"
                    >
                        一句詠む
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
          <div class="v-overlay" :class="{ 'v-overlay--active': overlayActive }" style="z-index: 5;">
            <div class="v-overlay__content">
              <loading-progress
                v-if="overlayActive"
                :progress="progress"
                :indeterminate="indeterminate"
                :counter-clockwise="counterClockwise"
                :hide-background="hideBackground"
                shape="M207.711,220.212c-44.949-1.796-71.915,30.56-55.729,57.526c5.374-28.67,85.721,6.915,98.712-62.238
            		C249.813,217.255,244.033,221.661,207.711,220.212z M250.847,214.822c-0.042,0.238-0.102,0.45-0.153,0.678C250.906,215.085,250.847,214.822,250.847,214.822z M192.271,197.466c9.576,0,17.356-7.771,17.356-17.356c0-9.585-7.78-17.356-17.356-17.356
            		c-9.594,0-17.356,7.771-17.356,17.356C174.915,189.695,182.677,197.466,192.271,197.466z M261.305,215.5c-0.051-0.228-0.11-0.44-0.152-0.678C261.152,214.822,261.093,215.085,261.305,215.5z M304.288,220.212c-36.322,1.449-42.102-2.957-42.983-4.712c12.992,69.153,93.339,33.568,98.712,62.238
            		C376.186,250.772,349.237,218.416,304.288,220.212z M319.728,197.466c9.576,0,17.356-7.771,17.356-17.356c0-9.585-7.78-17.356-17.356-17.356
            		c-9.593,0-17.356,7.771-17.356,17.356C302.372,189.695,310.135,197.466,319.728,197.466z M472.949,262.508C451.254,138.848,413.576,0,256,0C98.424,0,60.746,138.848,39.051,262.508
            		C17.356,386.17,54.237,512,256,512C457.763,512,494.644,386.17,472.949,262.508z M137,412.678c0,8.865-7.187,16.051-16.051,16.051
            		c-8.864,0-16.052-7.186-16.052-16.051v-76.805c0-8.864,7.187-16.051,16.052-16.051c8.864,0,16.051,7.187,16.051,16.051V412.678z
            		 M222.695,450.153c0,8.864-7.187,16.05-16.051,16.05c-8.864,0-16.052-7.186-16.052-16.05V333.111
            		c0-8.865,7.187-16.051,16.052-16.051c8.864,0,16.051,7.186,16.051,16.051V450.153z M321.407,450.153
            		c0,8.864-7.187,16.05-16.051,16.05c-8.864,0-16.052-7.186-16.052-16.05V333.111c0-8.865,7.187-16.051,16.052-16.051
            		c8.864,0,16.051,7.186,16.051,16.051V450.153z M305.678,288.585h-99.357h-48.457c-51.525,0-44.831-41.771-44.831-93.288
            		s41.763-93.288,93.288-93.288h99.357c51.526,0,93.288,41.771,93.288,93.288s6.694,93.288-44.831,93.288H305.678z M407.101,412.678
            		c0,8.865-7.187,16.051-16.051,16.051c-8.864,0-16.052-7.186-16.052-16.051v-76.805c0-8.864,7.187-16.051,16.052-16.051
            		c8.864,0,16.051,7.187,16.051,16.051V412.678z"
                size="512"
                fill-duration="2"
                :style="{ transform: 'scale(0.5)' }"
              />
            </div>
          </div>
        </div>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        title: 'Image Upload',
        loading: false,
        dialog: false,
        imageUrl: '',
        imageFile: '',
        word: '',
        overlayActive: false,
        progress: 100,
        indeterminate: true,// 自動
        counterClockwise: false,// プログレスの反転
        hideBackground: true, //背景の非表示
    }),

    methods: {
        pickFile() {
            this.$refs.image.click();
        },

        onFilePicked(e) {
            const files = e.target.files;

            // ファイルが選択されたら
            const fr = new FileReader();
            fr.readAsDataURL(files[0]);
            fr.addEventListener('load', () => {
                this.imageUrl = fr.result;
                this.imageFile = files[0]; // this is an image file that can be sent to server...
                this.dialog = true;
            });
        },
        submit() {
            this.overlayActive = true;

            // ファイル送信
            axios
                .post('/api/senryus', { word: this.word })
                .then(({data}) => {
                    this.$router.push({ name: 'SenryuDetails', params: { id: data.id } })

                    this.overlayActive = false;
                })
                .catch(() => {
                    alert('エラー');
                    this.overlayActive = false;
                });

        },
    },
};
</script>

<style>
.container {
    height: 100%;
}

.v-overlay__content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.vue-progress-path path {
  stroke-width: 12;
}
.vue-progress-path .progress {
  stroke: #e290b1;
}
.vue-progress-path .background {
  stroke: #edd;
}
</style>
