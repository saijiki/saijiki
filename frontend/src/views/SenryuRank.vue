<template>
  <!-- 川柳配置 -->
  <v-container fill-height text-xs-center>
    <v-layout align-center justify-space-around row wrap fill-height>
      <div v-for="(item, index) in senryu" :key="index" class="mb-2">
        <SenryuCard />
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import SenryuCard from '@/components/SenryuCard';

export default {
  components: { SenryuCard },
  data: () => ({
    senryu: [
    ],
  }),
  created() {
    axios.get('/api/senryus').then(senryus => {
      console.log(senryus);
    });
  },
};
</script>
<style lang="scss" scoped>
::v-deep .Card__face {
  background-image: url('~@/assets/a2.jpg');
}

</style>
