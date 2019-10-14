<template>
    <router-link :to="{ name: 'SenryuDetails' }">
        <!-- カードのサイズ -->
        <flipper
            class="Card"
            width="324px"
            height="360px"
            @click="isFlipped = !isFlipped"
        >
            <!-- カードの中身 -->
            <div
                class="Card__face"
                :style="{ backgroundImage: `url('${path}')` }"
                slot="front"
            >
                <!-- 川柳が入る -->
            </div>
        </flipper>
    </router-link>
</template>

<script>
import Flipper from 'vue-flipper';

export default {
    components: { Flipper },
    props: ['path'],
    data: () => ({ isFlipped: false }),
    //date渡す
};
</script>

<style src="vue-flipper/dist/vue-flipper.css" />

<style lang="scss" scoped>
.Card {
    background-color: #fff;
    border-radius: 20px;

    &__face,
    &__pattern {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        box-shadow: 0 3px 15px rgba(#000, 0.45);
        cursor: pointer;
    }
    // カード表面
    &__face {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 15px;
        background-size: 100% 100%;
        margin-bottom: 20px;
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
}
</style>
