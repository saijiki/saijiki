<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <v-skeleton-loader
                v-if="isLoading"
                height="600"
                tile
                type="image@3"
                width="540"
            />
            <flipper
                v-else
                :flipped="isFlipped"
                height="600px"
                width="540px"
                @click="isFlipped = !isFlipped"
            >
                <template #front>
                    <v-card
                        color="white"
                        height="600"
                        :img="senryu.path"
                        tag="a"
                        width="540"
                    >
                        <v-layout align-end fill-height>
                            <v-layout justify-end @click.stop>
                                <v-btn
                                    class="mr-4"
                                    color="deep-orange"
                                    icon
                                    large
                                    :ripple="false"
                                    @click="() => {}"
                                >
                                    <v-badge color="deep-orange">
                                        <template #badge>
                                            {{ senryu.good }}
                                        </template>
                                        <v-icon>
                                            far fa-thumbs-up
                                        </v-icon>
                                    </v-badge>
                                </v-btn>
                                <v-dialog
                                    v-model="isShareDialogVisible"
                                    width="288"
                                >
                                    <template #activator="{ on }">
                                        <v-btn
                                            icon
                                            large
                                            :ripple="false"
                                            v-on="on"
                                        >
                                            <v-icon>
                                                fas fa-share
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <v-card>
                                        <v-list subheader>
                                            <v-subheader>
                                                シェアする
                                            </v-subheader>
                                            <v-list-item @click="() => {}">
                                                <v-list-item-icon>
                                                    <v-icon>
                                                        fab fa-facebook-square
                                                    </v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        Facebookでシェアする
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item @click="() => {}">
                                                <v-list-item-icon>
                                                    <v-icon>
                                                        fab fa-twitter-square
                                                    </v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        Twitterでシェアする
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-list-item @click="copy">
                                                <v-list-item-icon>
                                                    <v-icon>
                                                        fas fa-link
                                                    </v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content>
                                                    <v-list-item-title>
                                                        リンクをコピーする
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list>
                                        <v-divider />
                                        <v-card-actions>
                                            <v-spacer />
                                            <v-btn
                                                color="primary"
                                                text
                                                @click="
                                                    isShareDialogVisible = false
                                                "
                                            >
                                                キャンセル
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-layout>
                        </v-layout>
                    </v-card>
                </template>
                <template #back>
                    <v-card
                        color="white"
                        height="600"
                        :img="require('@/assets/logo.png')"
                        tag="a"
                        width="540"
                    />
                </template>
            </flipper>
        </v-layout>
        <!-- Snackbars -->
        <v-snackbar
      v-model="snackbar"
      color="success"
    >
      <strong>
        コピーしました
      </strong>
    </v-snackbar>
    </v-container>
</template>

<script>
export default {
    props: {
        id: { type: Number },
    },
    data: () => ({
        isFlipped: false,
        isLoading: false,
        isShareDialogVisible: false,
        senryu: {},
        snackbar: false,
    }),
    created() {
        this.getSenryu();
    },
    methods: {
        async getSenryu() {
            this.isLoading = true;

            try {
                const { data } = await this.$axios.get(
                    `/api/senryus/${this.id}`
                );

                this.senryu = data;
            } catch (e) {
                alert('川柳の取得に失敗しました。');
            } finally {
                this.isLoading = false;
            }
        },
        copy() {
          const textarea = document.createElement('textarea');
          textarea.setAttribute('id', 'copyTarget');
          textarea.setAttribute('style', 'position:absolute; left:-9999px; top:0px;');
          textarea.setAttribute('readonly', 'readonly');
          textarea.appendChild(document.createTextNode(location.href));
          document.body.appendChild(textarea);
          let obj = document.getElementById("copyTarget");
          let range = document.createRange();
          range.selectNode(obj);
          window.getSelection().addRange(range);
          document.execCommand('copy');
          //Snackbars
          this.snackbar = true;

        },
    },
};

</script>

<style lang="scss" scoped>
.Flipper .v-card {
    border: 3px solid green !important;
}

.Flipper .v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 16px;
}
</style>
