<template>
    <div>
        <v-app-bar
            app
            :color="color"
            :flat="flat"
            dark
            class="px-15"
            :class="{ expand: flat }"
        >
            <v-toolbar-title> Harvard's Art Collection </v-toolbar-title>
            <v-spacer />

            <div>
                <v-btn text @click="$router.replace('/').catch(() => {})">
                    <span class="mr-2">Home</span>
                </v-btn>
                <v-btn
                    text
                    @click="$router.replace('paintings').catch(() => {})"
                >
                    <span class="mr-2">Gallery</span>
                </v-btn>
            </div>
        </v-app-bar>
    </div>
</template>

<style scoped>
.v-toolbar {
    transition: 0.6s;
}

.expand {
    height: 80px !important;
    padding-top: 10px;
}
</style>

<script>
export default {
    props: {
        color: String,
        flat: Boolean,
    },
    data: () => ({
        drawer: null,
        isXs: false,
        items: [
            ["mdi-home-outline", "Home", "#hero"],
            ["mdi-information-outline", "Discover", "#features"],
            ["mdi-download-box-outline", "Register", "#download"],
            ["mdi-currency-usd", "Preços", "#pricing"],
            ["mdi-email-outline", "Contatos", "#contact"],
        ],
    }),
    methods: {
        onResize() {
            this.isXs = window.innerWidth < 850;
        },
    },
    watch: {
        isXs(value) {
            if (!value) {
                if (this.drawer) {
                    this.drawer = false;
                }
            }
        },
    },
    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, { passive: true });
    },
};
</script>
