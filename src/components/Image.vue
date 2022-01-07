<template>
    <div>
        <img v-bind:src="baseimageurl" @click.prevent="openImg(baseimageurl)" />

        <v-dialog v-model="dialog" width="450" class="dialog">
            <v-img :src="activeImg" />
            <span class="dialog-close" @click.prevent="closeImg"
                ><v-icon>mdi-close</v-icon></span
            >
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "ImageComponent",
    props: {
        baseimageurl: {
            required: true,
        },
    },
    data() {
        return {
            activeImg: "",
            dialog: false,
        };
    },
    methods: {
        openImg(img) {
            this.activeImg = img;
            this.dialog = true;
        },
        closeImg() {
            this.activeImg = "";
            this.dialog = false;
        },
    },
};
</script>

<style scoped>
.Images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px;
}

img {
    height: 300px;
    padding: 30px;
    width: 300px;
}

article {
    background-color: #ddc;
    border-bottom-color: #fff;
    border-left-color: #eee;
    border-radius: 2px;
    border-right-color: #eee;
    border-top-color: #ddd;
    border: 30px solid #eee;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
        0 5px 10px 5px rgba(0, 0, 0, 0.25);
    height: 52vh;
    padding: 10px;
    margin: 20px;
}
</style>
