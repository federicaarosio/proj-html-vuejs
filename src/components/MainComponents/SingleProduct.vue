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
                    <span>
                        ${{price}}
                    </span>
                </p>
                
                <div class="sale-tag" v-show="discount === true">
                    <span>Sale!</span>
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
    div.sale-tag span {
        position: absolute;
        top: 8px;
        right: 8px;
        background-color: $accent-color;
        padding: .25rem .5rem;
        font-size: $font-small;
        text-transform: uppercase;
    }

}
</style>