<template>
    <v-container>
      <v-select
          v-model="currentType"
          class="mr-2"
          hide-details
          :items="['自分の句', 'いいねした句']"
          label="表示"
          solo
          :style="{ maxWidth: '172px' }"
      />
      <v-row>
          <v-col v-if="!isLoading && senryus.length === 0" class="text-center" cols="12">
              <v-layout align-center column justify-center>
                  <img class="logo" src="@/assets/logo.png" width="192"/>
                  <strong>
                      川柳が存在しません
                  </strong>
              </v-layout>
          </v-col>
          <v-col
              v-for="senryu in senryus"
              :key="senryu.id"
              cols="12"
              lg="4"
              md="6"
          >
              <v-skeleton-loader
                  v-if="isLoading"
                  class="mx-auto"
                  height="400"
                  tile
                  type="image@2"
                  width="360"
              />
              <senryu-card v-else :senryu="senryu" />
          </v-col>
      </v-row>
    </v-container>
</template>
<script>
import SenryuCard from '@/components/SenryuCard';

export default {
  components: { SenryuCard },
  props: {
      page: { type: Number },
      type: { type: String },
  },
  data: () => ({
      isLoading: false,
      length: 1,
      senryus: [
          { id: -1 },
          { id: -2 },
          { id: -3 },
          { id: -4 },
          { id: -5 },
          { id: -6 },
      ],
  }),

  computed: {
      currentPage: {
          get() {
              return this.page;
          },
          set(page) {
              if (page == this.$route.query.page) {
                  this.getSenryus();
              } else {
                  this.$router.push({
                      query: {
                          page,
                          type: this.type,
                      },
                  });
              }
          },
      },
      currentType: {
          get() {
              return this.type|| '自分の句';
          },
          set(type) {
              if (type == this.$route.query.type) {
                  this.getSenryus();
              } else {
                  this.$router.push({
                      query: {
                          page: this.page,
                          type,
                      },
                  });
              }
          },
      },
  },
  watch: {
      $route() {
          this.getSenryus();
      },
  },
  created() {
      this.getSenryus();
  },
  methods: {
      async getSenryus() {
          this.isLoading = true;

          try {
              const { data } = await this.$axios.get('/api/senryus', {
                  params: {
                      page: this.page,
                      type: this.type,

                  },
              });

              this.length = data.last_page;
              this.senryus = data.data;
          } catch (e) {
              alert('川柳の取得に失敗しました。');
          } finally {
              this.isLoading = false;
          }
      },

  },

}

</script>
