<template>
  <v-container fluid>
    <!-- レイアウト -->
    <v-layout align-center justify-center row fill-height>
      <!-- アップロードボタン -->
      <v-btn
      :loading="loading"
      :disabled="loading"
      color="#e290b1"
      class="white--text"
      @click="pickFile"
      >
      アップロード
      <v-icon right dark>fas fa-upload</v-icon>
    </v-btn>

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
            <v-card-title class="headline">アップロード</v-card-title>
        </v-flex>
        <v-flex shrink pa-1>
            <v-checkbox v-model="ex4" label="公開" color="success" value="success" hide-details></v-checkbox>
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

      // ファイル送信
      axios.post('/api/test').then(() => {});
    },
  },
};
</script>

<style scoped>
.container {
  height: 100%;
}
</style>
