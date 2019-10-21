<template>
    <div class="senryucard">
        <Card :path="data.path" />
    </div>
</template>

<script>
import axios from 'axios';
import Card from '@/components/Card';

export default {
    components: { Card },
    props: ['id'],
    data: () => ({
        data: {},
    }),
    created() {
      axios.get(`/api/senryus/${this.id}`).then(({ data }) => {
          this.data = data;
      });
    },
};
</script>

<style>
.share-btn .v-btn__content {
    justify-content: start;
}
</style>

<style scoped>
.senryucard {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.v-card__text {
    padding-right: 0;
    padding-left: 0;
}
</style>
