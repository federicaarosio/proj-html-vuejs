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

            // productsList: [
            //     {
            //         productName: "Fress Apple",
            //         imageSource: "s5",
            //         price: "$10",
            //     },
            //     {
            //         productName: "Fress Cobies",
            //         imageSource: "s2",
            //         price: "$15"
            //     },
            //     {
            //         productName: "Fress Watermelon",
            //         imageSource: "s8",
            //         price: "$14"
            //     },
            //     {
            //         productName: "Organic Juice",
            //         imageSource: "s1",
            //         price: "$17"
            //     },
            //     {
            //         productName: "Fresh BlueBerries",
            //         imageSource: "s4",
            //         price: "$15"
            //     },
            //     {
            //         productName: "Organic Letus",
            //         imageSource: "s10",
            //         price: "$23"
            //     },
            //     {
            //         productName: "Red Gajor",
            //         imageSource: "s9",
            //         price: "$26"
            //     },
            //     {
            //         productName: "Naga Pepper",
            //         imageSource: "s7",
            //         price: "$21",
            //         // noDiscountedPrice: "n",
            //     }
            // ]
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
        @include flex(row, center, center);
        gap: 20px;
        list-style: none;
        font-size: $font-small;
        padding-bottom: $margin-bottom-small;
    }

    .shop-images-container {
        width: $small-container;
        margin: 0 auto;
        @include flex(row, center, center);
        gap: 20px;
        flex-wrap: wrap;        
    }
}
</style>