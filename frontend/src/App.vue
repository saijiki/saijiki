<template>
    <v-app>
        <v-app-bar absolute app color="transparent" dark flat height="68">
            <v-btn
                class="ma-2 pink"
                exact
                icon
                large
                :ripple="false"
                :to="{ name: 'Home' }"
            >
                <v-icon>
                    fas fa-home
                </v-icon>
            </v-btn>
            <v-btn
                class="ma-2 green"
                exact
                icon
                large
                :ripple="false"
                :to="{ name: 'Senryus' }"
            >
                <v-icon>
                    fas fa-list-ul
                </v-icon>
            </v-btn>
            <v-spacer />
            <v-dialog v-model="isHelpDialogVisible" width="768">
                <template #activator="{ on }">
                    <v-btn
                        class="ma-2 grey"
                        icon
                        large
                        :ripple="false"
                        v-on="on"
                    >
                        <v-icon>
                            fas fa-question
                        </v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title class="headline">
                        サイトの使い方
                    </v-card-title>
                    <v-card-text class="pb-0">
                        <v-stepper class="pb-0 elevation-0" non-linear vertical>
                            <v-stepper-step editable step="1">
                                Step 1
                            </v-stepper-step>
                            <v-stepper-content step="1">
                                <p>
                                    Step 1
                                </p>
                            </v-stepper-content>
                            <v-stepper-step editable step="2">
                                Step 2
                            </v-stepper-step>
                            <v-stepper-content step="2">
                                <p>
                                    Step 2
                                </p>
                            </v-stepper-content>
                            <v-stepper-step editable step="3">
                                Step 3
                            </v-stepper-step>
                            <v-stepper-content step="3">
                                <p>
                                    Step 3
                                </p>
                            </v-stepper-content>
                        </v-stepper>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn
                            color="green darken-1"
                            text
                            @click="isHelpDialogVisible = false"
                        >
                            閉じる
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-app-bar>
        <v-content>
            <transition mode="out-in" name="fade-transition">
                <router-view />
            </transition>
        </v-content>
    </v-app>
</template>

<script>
export default {
    data: () => ({ isHelpDialogVisible: false }),
};
</script>

<style lang="scss" scoped>
.v-content {
    background-image: url('~@/assets/background.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: left center;
    background-size: cover;
}
</style>
