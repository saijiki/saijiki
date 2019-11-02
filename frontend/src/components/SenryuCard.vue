<template>
    <v-card
        class="mx-auto"
        color="white"
        exact
        height="400"
        :img="senryu.path"
        raised
        :ripple="false"
        :to="{ name: 'SenryuDetail', params: { id: senryu.id } }"
        width="360"
    />
</template>

<script>
export default {
    props: {
        senryu: { type: Object },
    },
};
</script>

<style lang="scss" scoped>
.v-card {
    border: 3px solid green !important;
}

.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 16px;
}
</style>
