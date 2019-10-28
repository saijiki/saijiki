<template>
    <v-container>
        <v-form @submit.prevent="onSubmit">
            <v-row>
                <v-col cols="12" md="6" lg="4">
                    <v-row
                        class="mx-auto"
                        no-gutters
                        :style="{ width: '360px' }"
                    >
                        <v-col cols="6">
                            <v-select
                                class="mr-auto"
                                hide-details
                                :items="['今日', '今週', '今月', '全て']"
                                label="日付"
                                solo
                                :style="{ width: '172px' }"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-select
                                class="ml-auto"
                                hide-details
                                :items="['新着順', '人気順']"
                                label="順序"
                                solo
                                :style="{ width: '172px' }"
                            />
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="6" offset-lg="4" lg="4">
                    <v-text-field
                        class="mx-auto"
                        append-icon="fas fa-search"
                        hide-details
                        label="ワード検索"
                        solo
                        :style="{ width: '360px' }"
                        @click:append="onSubmit"
                    />
                </v-col>
            </v-row>
        </v-form>
        <v-row>
            <v-col
                v-for="senryu in senryus"
                :key="senryu.id"
                cols="12"
                md="6"
                lg="4"
            >
                <v-skeleton-loader
                    v-if="isLoading"
                    class="mx-auto"
                    height="400"
                    tile
                    type="image,image"
                    width="360"
                />
                <senryu-card v-else :senryu="senryu" />
            </v-col>
        </v-row>
        <v-pagination
            v-model="page"
            class="my-3"
            :disabled="isLoading"
            :length="lastPage"
            @input="getSenryus"
        />
    </v-container>
</template>

<script>
import SenryuCard from '@/components/SenryuCard';

export default {
    components: { SenryuCard },
    data: () => ({
        isLoading: true,
        lastPage: 1,
        page: 1,
        senryus: [
            { id: -1 },
            { id: -2 },
            { id: -3 },
            { id: -4 },
            { id: -5 },
            { id: -6 },
        ],
    }),
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
                    },
                });

                this.lastPage = data.last_page;
                this.page = data.current_page;
                this.senryus = data.data;
            } catch (e) {
                alert('川柳の取得に失敗しました。');
            } finally {
                this.isLoading = false;
            }
        },
        async onSubmit() {
            //
        },
    },
};
</script>
