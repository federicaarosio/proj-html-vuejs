<template lang="">
    <!-- <div class="container" v-show="visibleSlide === index"  >
        <img :src="src">
    </div> -->
    <div class="container">
        <img :src="src">
    </div>     
</template>
<script>
export default {
    name: "MicroSlider",
    props: {
        visibleSlide: {
            type: Number,
            required: true
        },

        index: {
            type: Number,
            required: true
        },

        src: {
            type: String,
            requierd: true
        }
    }
    
}
</script>
<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

div.container {
        width: calc(100% / 4);

        img {
        width: 100%;
    }
    }
    
</style>