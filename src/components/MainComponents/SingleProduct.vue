<template lang="">
        <article class="single-product-card">
                <img :src="`../../../img/${src}.jpg`">
                <p class="product-name">
                    {{name}}
                </p>
                <p class="product-price">
                    <span class="original-price" v-show="discount === true">
                        ${{originalPrice}}
                    </span>
                    <span class="actual-price">
                        ${{price}}
                    </span>
                </p>
                
                <div class="sale-tag" v-show="discount === true">
                    <span>Sale!</span>
                </div>

                <div class="buttons">
                    <button>
                        <i class="fa-solid fa-heart"></i>
                        <span class="tag">Wishlist</span>
                    </button>
                    <button>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="tag">Shopping</span>
                    </button>
                    <button>
                        <i class="fa-solid fa-eye"></i>
                        <span class="tag">Follow</span>
                    </button>
                </div>
        </article>
</template>


<script>
export default {
    props: {
        src: String,
        name: String,
        price: Number,
        originalPrice: Number,
        discount: Boolean
    }
}
</script>


<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

.single-product-card {
    width: calc((100% /4) - 20px);
    margin-bottom: $margin-bottom-small;
    position: relative;

    &:hover div.buttons {
        display: inline-block;
        @include flex(row, center, center);
        gap: 5px;
    }

    img {
        width: 100%;
        margin-bottom: $margin-bottom-smaller;
        
    }

    p.product-name {
        margin-bottom: $margin-bottom-smaller;
    }

    p.product-price {
        color: $accent-color;
        font-size: $font-small;
        span.original-price {
            text-decoration: line-through;
            filter: opacity(50%);
        }
    }


    div.buttons {
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translateX(-50%);
        display: none;
        z-index: 3;

        button {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            @include flex(row, center, center);
            background-color: $white;
            color: black;
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
            position: relative;
    
            &:hover {
                background-color: $accent-color;
                color: $white;
            }

            &:hover span.tag{
                display: block;
            }
        }
    }


}
</style>