<template>
  <v-app>
    <v-toolbar flat color="transparent" fixed app>
      <!-- ホームボタン -->
      <v-btn
      :to="{ name: 'home' }"
      class="ma-2"
      tile
      large
      color="pink"
      icon
      >
      <v-icon color="white">fas fa-home</v-icon>
    </v-btn>
    <!-- リストボタン -->
    <v-btn
    :to="{ name: 'SenryuList' }"
    class="ma-2"
    tile
    large
    color="green"
    icon
    >
    <v-icon color="white">fas fa-list-ul</v-icon>
  </v-btn>
  <v-spacer />
  <!-- 説明書ダイアログ -->
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on }">
      <!-- はてなボタン -->
      <v-btn
      v-on="on"
      class="ma-2"
      tile
      large
      color="grey"
      icon
      >
      <v-icon color="white">fas fa-question</v-icon>
    </v-btn>
  </template>
  <v-card>
    <v-card-title>
      <span class="headline">サイトの使い方</span>
    </v-card-title>
    <v-card-text>
      <div class="step1">
        ステップ１
        <v-layout wrap>
          <v-flex xs12 sm6>写真</v-flex>
          <v-flex xs12 sm6
          >キーワードに文字を入れる</v-flex
          >
        </v-layout>
      </div>

      <div class="step2">
        ステップ２
        <v-layout wrap>
          <v-flex xs12 sm6>写真</v-flex>
          <v-flex xs12 sm6>説明</v-flex>
        </v-layout>
      </div>
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
  </v-card-actions>
</v-card>
</v-dialog>
</v-toolbar>
<v-content>
  <v-fade-transition mode="out-in">
    <router-view />
  </v-fade-transition>
</v-content>
</v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    dialog: false,
  }),
};
</script>

<style>
* {
  user-select: none;
}

.theme--light.application {
  height: 100%;
  background-image: url('assets/flower.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left center;
}

.v-btn {
  text-transform: none !important;
}

header {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 100%;
}
.header {
  z-index: 1;
}
/* 仮 */
.nav {
  display: flex;
  padding: 10px;
  width: 100%;
}

.logo {
  text-align: center;
}
</style>
