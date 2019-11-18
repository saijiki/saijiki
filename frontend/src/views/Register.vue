<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-toolbar color="transparent" flat>
                    <v-toolbar-title>新規登録</v-toolbar-title>
                    <v-spacer />
                </v-toolbar>

                <v-card-text>
                    <v-form>
                        <v-text-field
                            label="ユーザ名"
                            name="name"
                            type="text"
                            solo
                        />
                        <v-text-field
                            label="メール"
                            name="login"
                            type="text"
                            solo
                        />
                        <v-text-field
                            id="password"
                            label="パスワード"
                            name="password"
                            type="password"
                            solo
                        />
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn color="primary">登録</v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    //
};
</script>
