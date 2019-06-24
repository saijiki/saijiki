<template>
    <!-- カードのサイズ -->
    <flipper
        class="Card"
        width="324px"
        height="360px"
        @click="isFlipped = !isFlipped"
    >
        <!-- カードの中身 -->
        <div class="Card__face" slot="front">
            <!-- 川柳が入る -->
        </div>
    </flipper>
</template>

<script>
import Flipper from 'vue-flipper';

export default {
    components: { Flipper },
    data: () => ({ isFlipped: false }),
    //date渡す
};
</script>

<style src="vue-flipper/dist/vue-flipper.css" />

<style lang="scss" scoped>
.Card {
    &__face,
    &__pattern {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        box-shadow: 0 3px 15px rgba(#000, 0.45);
        cursor: pointer;
    }
    // カード裏面
    &__pattern {
        background-image: url('../assets/senryu-test-pic.jpg');
        background-color: #fff;
        background-position: center;
    }
    // カード表面
    &__face {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 15px;
        background-image: url('../assets/senryu-test.jpg');
        background-size: 100% 100%;
        margin-bottom: 20px;
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
