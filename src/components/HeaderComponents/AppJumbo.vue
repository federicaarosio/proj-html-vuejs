<template lang="">
    <section class="jumbo">
        <img src="../../assets/img/H3-slider3.jpg">

        <SingleSliderimg v-for="(slide, index) in sliderImages"
        :index ="index"
        :visibleSlide="visibleSlide"
        :src="`../../public/img/${slide.src}.jpg`"/>

    </section>
</template>

<script>
import SingleSliderimg from './SingleSliderimg.vue';

export default {
    name: "AppJumbo",

    components: {
        SingleSliderimg
    },

    data() {
        return {
            sliderImages: [
                {
                    src: "H3-slider3",
                },
                {
                    src: "slider",
                },

            ],

            visibleSlide: 0,
        }
    },
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;
section.jumbo {
    margin-bottom: $margin-bottom-large;
    
    img {
        width: 100%;
        height: 550px;
        object-fit: cover;
    }
}
    
</style>