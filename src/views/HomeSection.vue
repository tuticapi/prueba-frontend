<template>
    <section id="hero">
        <div class="homepage">
            <h2 class="title">
                I have done this project to demonstrate skills in frontend
                development.
            </h2>
            <h2 class="subtitle">
                The technology used is Vue.js and, using the
                <a href="https://github.com/harvardartmuseums/api-docs">
                    Harvard Art Museum API</a
                >, I was instructed to build and infinite scroll, that you can
                see in
                <a href="paintings">gallery section</a>
            </h2>
            <div
                class="imgp d-flex flex-column justify-space-between align-center"
            >
                <v-img
                    :aspect-ratio="16 / 9"
                    :width="width"
                    src="@/assets/img/iceland.jpeg"
                ></v-img>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            width: "450px",
        };
    },
    watch: {},
    methods: {},
};
</script>

<style lang="scss" scoped>
.homepage {
    height: 50%;
    .title {
        padding-top: 125px;
        padding-bottom: 20px;
        font-size: 18px;
        font-family: Nobile;
        font-weight: 500;
        color: rgb(3, 3, 3);
        width: 50%;
        margin: auto;
        text-align: center;
    }
    .subtitle {
        padding-top: 25px;
        padding-bottom: 20px;
        font-size: 18px;
        font-family: Nobile;
        font-weight: 500;
        color: rgb(3, 3, 3);
        width: 50%;
        margin: auto;
        text-align: center;
    }
    .imgp {
        padding-bottom: 10px;
    }
}
</style>
