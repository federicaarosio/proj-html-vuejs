<template lang="">
    <section class="online-store">
        <p class="smaller-title">
            Trending Online Store
        </p>
        <p class="title">
            Gogrin All <span>Organic</span> Food
        </p>
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

            <div class="single-product-card" v-for="product in productsList">
                <img :src="product.imageSource">
                <p class="product-name">
                    {{product.productName}}
                </p>
                <p class="product-price">
                    {{product.price}}
                </p>
            </div>
        </div>
    </section>        
</template>


<script>
export default {
    name: "OnlineStore",

    data() {
        return {
            productsList: [
                {
                    productName: "Fress Apple",
                    imageSource: "../../assets/img/s5-150x150.jpg",
                    price: "$10",
                },
                {
                    productName: "Fress Cobies",
                    imageSource: "../../assets/img/s2-150x150.jpg",
                    price: "$17"
                },
                {
                    productName: "Fress Cobies",
                    imageSource: "../../assets/img/s2-150x150.jpg",
                    price: "$17"
                },
                {
                    productName: "Fress Cobies",
                    imageSource: "../../assets/img/s2-150x150.jpg",
                    price: "$17"
                },
                {
                    productName: "Fress Cobies",
                    imageSource: "../../assets/img/s2-150x150.jpg",
                    price: "$17"
                },
                {
                    productName: "Fress Cobies",
                    imageSource: "../../assets/img/s2-150x150.jpg",
                    price: "$17"
                },
                {
                    productName: "Fress Cobies",
                    imageSource: "../../assets/img/s2-150x150.jpg",
                    price: "$17"
                },
                {
                    productName: "Fress Cobies",
                    imageSource: "../../assets/img/s2-150x150.jpg",
                    price: "$17"
                }
            ]
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

    p.smaller-title {
        font-size: 1.2rem;
        color: $accent-color;
    }

    p.title {
        font-size: $font-big;
        text-transform: uppercase;
        margin-bottom: $margin-bottom-small;

        span {
            color: $accent-color;
        }
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

        .single-product-card {
            width: calc((100% /4) - 20px);
            background-color: lightcoral;

            img {
                width: 100%
            };
        }
    }
}
</style>