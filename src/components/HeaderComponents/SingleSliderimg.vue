<template lang="">
    <div class="container" v-show="visibleSlide === index" >
        <img :src="src">
    </div>
</template>


<script>
export default {
    name: "SingleSliderimg",

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

img {
        width: 100%;
        height: 550px;
        object-fit: cover;
    }
    
</style>