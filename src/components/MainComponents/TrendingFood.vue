<template lang="">
    <section class="trending-food">
        <p class="smaller-title">
            Trending Online Store
        </p>
        <p class="title">
            Gogrin All <span>Organic</span> Food
        </p>
        <div class="cards-container">
            <CardTrendprod v-for="product in store.productsList" v-show="product.trending === true"
            :src="product.imageSource"
            :name="product.productName"
            :price="product.price"
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