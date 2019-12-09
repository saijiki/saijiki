<template>
    <v-container>
        <v-row>
            <v-col cols="12" lg="4" md="6">
                <v-row
                    class="mx-auto"
                    no-gutters
                    :style="{ maxWidth: '360px' }"
                >
                    <v-col cols="6">
                        <v-select
                            v-model="currentPeriod"
                            class="mr-2"
                            hide-details
                            :items="['今日', '今週', '今月', '全て']"
                            label="日付"
                            solo
                            :style="{ maxWidth: '172px' }"
                        />
                    </v-col>
                    <v-col cols="6">
                        <v-select
                            v-model="currentOrder"
                            class="ml-2"
                            hide-details
                            :items="['新着順', '人気順']"
                            label="順序"
                            solo
                            :style="{ maxWidth: '172px' }"
                        />
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" lg="4" md="6" offset-lg="4">
                <v-text-field
                    v-model="filter"
                    class="mx-auto"
                    hide-details
                    label="ワード検索"
                    solo
                    :style="{ maxWidth: '360px' }"
                    @keyup.enter="onSubmit"
                >
                    <template #append>
                        <v-icon tag="a" @click.stop="onSubmit" @mousedown.stop>
                            fas fa-search
                        </v-icon>
                    </template>
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-if="!isLoading && senryus.length === 0" class="text-center" cols="12">
                <v-layout align-center column justify-center>
                    <img class="logo" src="@/assets/logo.png" width="192"/>
                    <strong>
                        川柳が存在しません
                    </strong>
                </v-layout>
            </v-col>
            <v-col
                v-for="senryu in senryus"
                :key="senryu.id"
                cols="12"
                lg="4"
                md="6"
            >
                <v-skeleton-loader
                    v-if="isLoading"
                    class="mx-auto"
                    height="400"
                    tile
                    type="image@2"
                    width="360"
                />
                <senryu-card v-else :senryu="senryu" />
            </v-col>
        </v-row>
        <v-pagination
            v-model="currentPage"
            class="my-3"
            :disabled="isLoading"
            :length="length"
        />
    </v-container>
</template>

<script>
import SenryuCard from '@/components/SenryuCard';

export default {
    components: { SenryuCard },
    props: {
        page: { type: Number },
        word: { type: String },
        period: { type: String },
        order: { type: String },
    },
    data: () => ({
        isLoading: false,
        filter: '',
        length: 1,
        senryus: [
            { id: -1 },
            { id: -2 },
            { id: -3 },
            { id: -4 },
            { id: -5 },
            { id: -6 },
        ],
    }),
    computed: {
        currentPage: {
            get() {
                return this.page;
            },
            set(page) {
                if (page == this.$route.query.page) {
                    this.getSenryus();
                } else {
                    this.$router.push({
                        query: {
                            page,
                            word: this.word,
                            period: this.period,
                            order: this.order,
                        },
                    });
                }
            },
        },
        currentPeriod: {
            get() {
                return this.period || '全て';
            },
            set(period) {
                if (period == this.$route.query.period) {
                    this.getSenryus();
                } else {
                    this.$router.push({
                        query: {
                            page: this.page,
                            word: this.word,
                            period,
                            order: this.order,
                        },
                    });
                }
            },
        },
        currentOrder: {
            get() {
                return this.order || '新着順';
            },
            set(order) {
                if (order == this.$route.query.order) {
                    this.getSenryus();
                } else {
                    this.$router.push({
                        query: {
                            page: this.page,
                            word: this.word,
                            period: this.period,
                            order,
                        },
                    });
                }
            },
        },
    },
    watch: {
        $route() {
            this.getSenryus();
        },
    },
    created() {
        this.getSenryus();
    },
    methods: {
        async getSenryus() {
            this.isLoading = true;

            try {
                const { data } = await this.$axios.get('/api/senryus', {
                    params: {
                        page: this.page,
                        word: this.word,
                        period: this.period,
                        order: this.order,
                    },
                });

                this.length = data.last_page;
                this.senryus = data.data;
            } catch (e) {
                alert('川柳の取得に失敗しました。');
            } finally {
                this.isLoading = false;
            }
        },
        async onSubmit() {
            this.$router.push({
                query: {
                    page: this.page,
                    word: this.filter,
                    period: this.period,
                    order: this.order,
                },
            });
        },
    },
};
</script>

<style lang="scss" scoped>
::v-deep .v-skeleton-loader__bone:nth-child(1) {
    border-radius: 16px 16px 0 0;
}

::v-deep .v-skeleton-loader__bone:nth-child(2) {
    border-radius: 0 0 16px 16px;
}
</style>
