<template>
    <v-app>
        <navigation :color="color" :flat="flat" />
        <v-scale-transition>
            <v-btn
                fab
                v-show="fab"
                v-scroll="onScroll"
                dark
                fixed
                bottom
                right
                color="secondary"
                @click="toTop"
            >
                <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
        </v-scale-transition>
        <v-main class="pt-0">
            <router-view />
        </v-main>

        <foote />
    </v-app>
</template>

<script>
import navigation from "./components/Navigation";
import foote from "./components/Footer";

export default {
    name: "App",
    components: {
        navigation,
        foote,
    },
    data: () => ({
        fab: null,
        color: "",
        flat: null,
    }),
    created() {
        this.color = "secondary";
        this.flat = false;
    },
    methods: {
        onScroll(e) {
            if (typeof window === "undefined") return;
            const top = window.pageYOffset || e.target.scrollTop || 0;
            this.fab = top > 60;
        },
        toTop() {
            this.$vuetify.goTo(0);
        },
    },
};
</script>

<style scoped>
.v-main {
    background-image: url("~@/assets/img/bgMain.png");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}
</style>
