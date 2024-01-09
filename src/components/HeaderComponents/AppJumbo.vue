<template lang="">
    <section class="jumbo">

        <SingleSliderimg v-for="(slide, index) in sliderImages"
        :index ="index"
        :visibleSlide="visibleSlide"
        :src="`../../img/${slide.src}.jpg`"/>

        <button class="prev" @click="prevSlide">
            <i class="fa-solid fa-chevron-left"></i>
        </button>

        <button class="next" @click="nextSlide">
            <i class="fa-solid fa-chevron-right"></i>
        </button>



        <div class="title">
            <p class="sub-title">
                Gogrin organic food store
            </p>
            <p>
                Eating naturally & organic is<br>
                always be healthy.
            </p>

            <button class="about-us">
                About Us
            </button>
            <button class="history">
                Our History
            </button>
        </div>

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

    methods: {
        nextSlide() {
            if (this.visibleSlide >= this.sliderImages.length - 1) {
                this.visibleSlide = 0;
            } else {
                this.visibleSlide ++;
            };
        },

        prevSlide() {
            if (this.visibleSlide <= 0) {
                this.visibleSlide = this.sliderImages.length - 1;
            } else {
                this.visibleSlide --;
            };
        }
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;
section.jumbo {
    margin-bottom: $margin-bottom-large;
    position: relative;

    button.prev,
    button.next {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: transparent;
        font-size: 2rem;
    }

    
    button.prev {
        left: 50px;
    }

    button.next {
        right: 35px;
    }
    
    div.title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-size: 4rem;
        font-weight: 900;

        .sub-title {
            font-size: $font-medium;
            text-transform: uppercase;
            font-weight: 700;
        }

        button.about-us {
            text-transform: uppercase;
            padding: 15px 40px;
        }

        button.history {
            text-transform: uppercase;
            background-color: $main-color;
            margin-left: 2rem;
            padding: 15px 40px;
        }
    }

}
    
</style>