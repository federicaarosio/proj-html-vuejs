<template lang="">
    <section class="online-store">
        <div class="section-title">
            <p class="upper-title">
                Trending online store
            </p>
            <p class="lower-title ">
                Gogrin all <span>organic</span> food
            </p>
        </div>
        <ul>
            <li>
                All product
            </li>
            <li>
                Apple
            </li>
            <li>
                Food
            </li>
            <li>
                Orange
            </li>
            <li>
                Vegetables
            </li>
        </ul>

        <div class="shop-images-container">
            
            <SingleProduct v-for="product in store.productsList"
            :src="product.imageSource"
            :name="product.productName"
            :price="product.price"
            :discount="product.discount"
            :originalPrice="product.originalPrice"
            />

            <button>
                All Products
            </button>
        </div>
    </section>        
</template>


<script>
import { store } from '../../js/store';
import SingleProduct from './SingleProduct.vue';

export default {
    name: "OnlineStore",

    components: {
        SingleProduct,
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

section.online-store {
    width: $large-container;
    margin: 0 auto;
    background-image: url(../../assets/img/shop-bg-img.jpg);
    text-align: center;
    color: $white;
    font-weight: 800;
    padding-top: $margin-bottom-large;
    padding-bottom: $margin-bottom-large;
    margin-bottom: $margin-bottom-large;

    p.lower-title {
        color: $white;
    }


    ul {
        @include flex(row, center, start);
        gap: 20px;
        list-style: none;
        font-size: $font-small;
        padding-bottom: $margin-bottom-small;
    }

    .shop-images-container {
        width: $small-container;
        margin: 0 auto;
        @include flex(row, center, start);
        gap: 20px;
        flex-wrap: wrap;        
    }
}
</style>