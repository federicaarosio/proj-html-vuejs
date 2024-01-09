<template lang="">
    <div>
        S L I D E R
    </div>
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
<style lang="">
    
</style>