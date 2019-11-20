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
                        height="0"
                        :img="senryu.path"
                        raised
                        :style="{ paddingTop: '111.111111111%' }"
                        tag="a"
                        width="540"
                    >
                    <v-layout
                        column
                        fill-height
                        :style="{ position: 'absolute', 'top': 0, 'right': 0, 'bottom': 0, 'left': 0 }"
                    >
                      <div>
                        <v-layout class="ml-3 mt-2" align-center>
                          <v-icon class="mr-1" color="grey darken-1" size="20">
                            fas fa-history
                          </v-icon>

                          {{ senryu.created_at_history }}

                        </v-layout>
                      </div>

                      <v-layout align-end justify-end>
                        <v-btn
                        class="mr-4 mb-1"
                        color="deep-orange"
                        icon
                        large
                        :ripple="false"
                        @click.stop="senryu.good++"
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
                      <v-btn
                      class="mr-2 mb-1"
                      color="grey darken-3"
                      icon
                      large
                      :ripple="false"
                      @click.stop="isShareDialogVisible = true"
                      >
                      <v-icon>
                        fas fa-share
                      </v-icon>
                    </v-btn>
                  </v-layout>
                    </v-layout>
                    </v-card>
                </template>
                <template #back>
                    <v-card
                        color="white"
                        height="600"
                        :img="require('@/assets/logo.png')"
                        raised
                        tag="a"
                        width="540"
                    />
                </template>
            </flipper>
        </v-layout>
        <v-dialog v-model="isShareDialogVisible" width="288">
            <v-card>
                <v-list subheader>
                    <v-subheader>
                        シェアする
                    </v-subheader>
                    <v-list-item @click="() => {}">
                        <v-list-item-icon>
                            <v-icon>
                                fab fa-line
                            </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title @click='openLineWindow'>
                                Lineでシェアする
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
                            <v-list-item-title @click='openTweetWindow'>
                                Twitterでシェアする
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item @click="copyUrl">
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
                        @click="isShareDialogVisible = false"
                    >
                        キャンセル
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar v-model="isCopySnackbarVisible" color="success">
            コピーしました。
        </v-snackbar>
    </v-container>
</template>

<script>
export default {
    props: {
        id: { type: Number },
    },
    data: () => ({
        isCopySnackbarVisible: false,
        isFlipped: false,
        isLoading: false,
        isShareDialogVisible: false,
        senryu: {},
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
        async openLineWindow() {
            const url = `https://social-plugins.line.me/lineit/share?url=${location.origin}${location.pathname}`;

            window.open(url, null, 'width=500,height=560');
        },
        async openTweetWindow() {
            const url = `https://twitter.com/intent/tweet?text=Saijikiが川柳を読んだよ%0a${location.origin}${location.pathname}`;

            window.open(url, null, 'width=480,height=360');
        },
        async copyUrl() {
            const url = `${location.origin}${location.pathname}`;

            (() => {
                // IE
                if (window.clipboardData) {
                    window.clipboardData.setData('Text', url);
                    return;
                }

                // Chrome, Firefox & Opera
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(url);
                    return;
                }

                // Others
                document.addEventListener('copy', function listener(e) {
                    this.removeEventListener(e.type, listener);
                    e.clipboardData.setData('text/plain', url);
                    e.preventDefault();
                });
                document.execCommand('copy');
            })();

            this.isCopySnackbarVisible = true;
            this.isShareDialogVisible = false;
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

::v-deep .v-skeleton-loader__bone:nth-child(1) {
    border-radius: 16px 16px 0 0;
}

::v-deep .v-skeleton-loader__bone:nth-child(3) {
    border-radius: 0 0 16px 16px;
}
</style>
