<template>
  <v-container text-xs-center>
    <!-- 検索・絞り込み配置 -->
    <v-layout row wrap>
      <v-flex xs1 offset-xs1>
        <!-- 日付絞り込み -->
        <v-select :items="dayItems" label="日付"></v-select>
      </v-flex>
      <v-flex xs1>
        <!-- 順番切り替え -->
        <v-select :items="orderItems" label="順番"></v-select>
      </v-flex>
      <v-flex xs3>
      </v-flex>
      <v-flex xs4 offset-xs1>
        <!-- デザインの候補 -->
        <!-- <v-text-field label="Append" append-icon="place"></v-text-field> -->
        <v-text-field solo label="ワード検索" append-icon="fas fa-search"></v-text-field>
      </v-flex>
    </v-layout>
    <!-- 川柳配置 -->
    <v-layout align-start justify-space-around row wrap fill-height>
      <div v-for="(item, index) in senryus" :key="index" class="mb-2">
        <SenryuCard :path="item.path" />
      </div>
    </v-layout>
    <!-- ページネーション -->
    <div class="text-xs-center">
      <v-pagination v-model="page" :length="length" prev-icon="fas fa-angle-left" next-icon="fas fa-angle-right"></v-pagination>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import SenryuCard from '@/components/SenryuCard';

export default {
  components: { SenryuCard },
  data: () => ({
    senryus: [
    ],
    //絞り込み
    dayItems: ['今日', '今週', '今月', '全て'],
    orderItems: ['人気順', '新着順'],
    //ページ
    page: 1,
    length: 0,
  }),
  watch: {
    page() {
      this.getSenryu();
    },
  },
  created() {
    this.getSenryu();
  },
  methods:{
    getSenryu(){
      axios.get(`/api/senryus?page=${this.page}`).then(({data}) => {
        this.senryus = data.data;
        this.length = data.last_page;
      });
    }
  },
};
</script>
