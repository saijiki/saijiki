<template>
  <div>
    <!-- カードのサイズ -->
    <flipper
    class="Card"
    width="540px"
    height="600px"
    :flipped="isFlipped"
    @click="isFlipped = !isFlipped"
    >
    <!-- カードの中身 -->
    <div class="Card__face" :style="{ backgroundImage: `url('${path}')` }" slot="front">
      <!-- 川柳が入る -->
      <div class="Card__label" @click.stop>
        <v-layout align-end justify-end row fill-height>
          <!-- いいねボタン -->
          <v-btn
          block
          flat
          color="deep-orange"
          @click="good++"
          >
          <v-icon>far fa-thumbs-up</v-icon>
          <!-- いいね数 -->
          {{ good }}
        </v-btn>
        <!-- シェアボタン -->
        <v-btn block flat @click="dialog = true">
          <v-icon>fas fa-share</v-icon>
        </v-btn>

      </v-layout>
    </div>
  </div>
  <figure class="Card__pattern" slot="back"></figure>
</flipper>

<v-dialog v-model="dialog" scrollable max-width="300px">
  <v-card>
    <v-card-title>
      <v-layout justify-center>
        シェアする
      </v-layout>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="share-btn">
      <v-btn block flat>
        <v-icon class="mr-2">fab fa-facebook-square</v-icon>
        Fecebookでシェアする
      </v-btn>
      <v-btn block flat>
        <v-icon class="mr-2">fab fa-twitter-square</v-icon>
        Twitterでシェアする
      </v-btn>
      <v-btn block flat>
        <v-icon class="mr-2">fas fa-link</v-icon>
        リンクをコピーする
      </v-btn>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="primary" flat @click="dialog = false"
      >キャンセル</v-btn
      >
    </v-card-actions>
  </v-card>
</v-dialog>
</div>
</template>

<script>
import Flipper from 'vue-flipper';

export default {
  components: { Flipper },
  props: ['path'],
  data: () => ({
    isFlipped: false,
    good: 11,
    dialog: false,
  }),
};
</script>

<style src="vue-flipper/dist/vue-flipper.css" />

<style lang="scss" scoped>
.Card {
  border-radius: 20px;

  &__face,
  &__pattern {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0 3px 15px rgba(#000, 0.45);
    cursor: pointer;
  }
  // カード裏面
  &__pattern {
    background-image: url('../assets/senryu-test-pic.jpg');
    background-color: #fff;
    background-position: center;
    border: solid 3px #008000;
  }
  // カード表面
  &__face {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 15px;
    background-color: #fff;
    background-size: 100% 100%;
    border: solid 3px #008000;
  }
  &__value {
    display: block;
    font-size: 18pt;
    &--top {
      align-self: flex-start;
    }
    &--bottom {
      align-self: flex-end;
    }
  }
  &__center {
    display: block;
    font-size: 32pt;
    align-self: center;
  }
  //いいねとか
  &__label {
    position: absolute;
    right: 0;
    bottom: 6px;
    border-radius: 0 0 20px 20px;
  }
}
</style>
