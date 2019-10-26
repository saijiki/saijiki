<template>
    <v-content :style="{ backgroundColor: '#eee', borderColor: '#eee' }">
        <transition name="fade-transition" mode="out-in">
            <router-view />
        </transition>
    </v-content>
</template>

<script>
export default {
    //
};
</script>
