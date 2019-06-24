<template>
    <div class="senryucard">
        <Card />
    </div>
</template>

<script>
import Card from '@/components/Card';

export default {
    components: { Card },
    data: () => ({
        dialog: false,
    }),
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
