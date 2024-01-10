<template lang="">
    <section class="max-container">
        <section class="container">
            <div class="sub-container bigger">
                <span>Look what</span> consumer power has done with <span>organic food</span>; we can do the same with clothes.
            </div>
            <div class="sub-container">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iusto tempora error temporibus reiciendis voluptate cum. Perspiciatis, <span>doloremque ratione, neque quasi non animi magnam quos est nam, iusto reprehenderit nemo.</span>
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem consequatur aperiam a sapiente facere!
                </p>
                <img src="../../assets/img/fe-shap1-1.png" alt="">
            </div>
        </section>

        <section class="container-slider container">
            <MicroSlider v-for="(slide, index) in visibleImages"
            :index ="index"
            :visibleSlide="visibleSlide"
            :src="`../../img/${slide.src}.jpg`"
            />
            <button class="prev" @click="prevSlide">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
    
            <button class="next" @click="nextSlide">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        </section>

        
        <!-- <section class="container">
            <img src="../../assets/img/fe3.jpg">
            <img src="../../assets/img/fe1.jpg">
            <img src="../../assets/img/fe2.jpg">
            <img src="../../assets/img/fe1.jpg">
        </section> -->
    </section>
</template>


<script>
import MicroSlider from '../MainComponents/MicroSlider.vue';
export default {
    components: {
        MicroSlider,
    },

    data() {
        return {
            sliderImages: [
                {
                    src: "fe3",
                },
                {
                    src: "fe2",
                },
                {
                    src: "fe1",
                },
                {
                    src: "fe2",
                },
                {
                    src: "fe3",
                },
                {
                    src: "fe2",
                },
                {
                    src: "fe1",
                },
                {
                    src: "fe2",
                },
            ],

            visibleSlide: 0,

            itemsPerPage: 4,
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
    },

    computed: {
    visibleImages() {
      return this.sliderImages.slice(this.visibleSlide, this.visibleSlide + this.itemsPerPage);
    },
  },
}
</script>


<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

section.max-container {
    margin-bottom: $margin-bottom-large;
}
section.container {
    width: $small-container;
    margin: 0 auto;
    @include flex(row, space-between, start);
    gap: 20px;
    margin-bottom: $margin-bottom-small;
    position: relative;

    button {
        position: absolute;
    }

    button.prev {
        top: 50%;
        left: -10px;
        transform: translateY(-50%);
    }

    button.next {
        top: 50%;
        right: -10px;
        transform: translateY(-50%);
    }

    div.sub-container {
        width: 50%;
        position: relative;

        span {
            color: $accent-color;
        }

        p {
            font-size: $font-small;
            line-height: 1.2rem;
            margin-bottom: $margin-bottom-smaller;
            color: $light-gray;
        }

        img {
            width: 150px;
            position: absolute;
            top: 0;
            right: -200px;
        }
    }

    .bigger {
        font-size: $font-big;
        font-weight: 800;
        color: $main-color;
    }
}

    
</style>