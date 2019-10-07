<template>
    <div class="header">
        <header>
            <div class="nav">
                <v-btn
                    :to="{ name: 'home' }"
                    dark
                    medium
                    fab
                    absolute
                    class="pink"
                >
                    <v-icon>fas fa-home</v-icon>
                </v-btn>
            </div>
            <!-- <div class="nav">
                <v-btn
                    :to="{ name: 'SenryuDetails' }"
                    dark
                    medium
                    fab
                    absolute
                    class="blue"
                >
                    <v-icon>仮</v-icon>
                </v-btn>
            </div> -->
            <div class="nav">
                <v-btn
                    :to="{ name: 'SenryuList' }"
                    dark
                    medium
                    fab
                    absolute
                    class="green"
                >
                    <v-icon>仮</v-icon>
                </v-btn>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>
<style scoped>
header {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 100%;
}
.header {
    height: 100%;
}
/* 仮 */
.nav {
    display: inline-block;
    padding: 50px;
    height: 100px;
}

.logo{
  text-align:center;
}
</style>
