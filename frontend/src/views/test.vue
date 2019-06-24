<template>
    <div class="test">
        <Card />
    </div>
</template>

<script>
import Card from '@/components/DummyCard';

export default {
    components: { Card },
};
</script>

<style scoped>
.test {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
</style>
