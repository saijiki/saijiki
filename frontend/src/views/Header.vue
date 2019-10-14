<template>
  <div class="header">
    <header>
      <div class="nav">
        <!-- ホームボタン -->
        <v-btn :to="{ name: 'home' }" class="ma-2" tile large color="pink" icon>
          <v-icon color="white">fas fa-home</v-icon>
        </v-btn>
        <!-- リストボタン -->
        <v-btn :to="{ name: 'SenryuList' }" class="ma-2" tile large color="green" icon>
          <v-icon color="white">fas fa-list-ul</v-icon>
        </v-btn>
        <v-spacer />
        <!-- 説明書ダイアログ -->
        <v-dialog v-model="dialog" width="600px">
          <template v-slot:activator="{ on }">
            <!-- はてなボタン -->
            <v-btn v-on="on" class="ma-2" tile large color="grey" icon>
              <v-icon color="white">fas fa-question</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">サイトの使い方</span>
            </v-card-title>
            <v-card-text>
              説明
            </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat="flat" @click="dialog = false">Disagree</v-btn>
                <v-btn color="green darken-1" flat="flat" @click="dialog = false">Agree</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </header>
      <router-view></router-view>
    </div>
  </template>

  <style scoped>
  header {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 100%;
  }
  .header {
    height: 100%;
  }
  /* 仮 */
  .nav {
    display: flex;
    padding: 10px;
    width: 100%;
  }

  .logo{
    text-align:center;
  }
  </style>
