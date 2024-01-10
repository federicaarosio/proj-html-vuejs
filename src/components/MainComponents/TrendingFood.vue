<template lang="">
    <section class="trending-food">
        <div class="section-title">
            <p class="upper-title">
                Running week top selling
            </p>
            <p class="lower-title">
                Top <span>trending</span> organic food
            </p>
            <img src="../../assets/img/title-shap.png" alt="leaf illustration">
        </div>
        <div class="cards-container">
            <CardTrendprod v-for="product in store.productsList" v-show="product.trending === true"
            :src="product.imageSource"
            :name="product.productName"
            :price="product.price"
            :discount="product.discount"
            :originalPrice="product.originalPrice"
            />
        </div>
    </section>
</template>


<script>
import { store } from '../../js/store'
import CardTrendprod from './CardTrendprod.vue';
export default {
    name: "TrendingFood",

    components: {
        CardTrendprod
    },

    data() {
        return {
            store,
        }
    },
}
</script>


<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

section.trending-food {
    width: $small-container;
    margin: 0 auto;
    margin-bottom: $margin-bottom-large;
    text-align: center;

    div.cards-container {
        @include flex(row, space-between, start);
        gap: 20px;
    }
} 
</style>