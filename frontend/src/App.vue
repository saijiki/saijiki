<template>
    <v-app>
        <!-- 上のやつ -->
        <!--
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Vuetify</span>
                <span class="font-weight-light">MATERIAL DESIGN</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                flat
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
                target="_blank"
            >
                <span class="mr-2">Latest Release</span>
                <v-icon>fas fa-external-link-alt</v-icon>
            </v-btn>
        </v-toolbar>
        -->

        <v-content>
            <v-fade-transition mode="out-in">
                <router-view />
            </v-fade-transition>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data: () => ({
        //
    }),
};
</script>

<style>
* {
    user-select: none;
}

.theme--light.application {
    height: 100%;
    background-image: url('assets/flower.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left center;
}

.v-btn {
    text-transform: none !important;
}
</style>
