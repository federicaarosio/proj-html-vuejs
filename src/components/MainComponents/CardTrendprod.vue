<template lang="">
    <article>
        <img :src="`../../../img/${src}.jpg`" :alt="name">
        <p class="name">
            {{name}}
        </p>
        <p class="price">
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
    </article>
</template>


<script>
export default {
    name: "CardTrendingProducts",

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

article {
    width: calc(100% / 4);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: relative;

    img {
        width: 100%;
        object-fit: cover;
    }

    p.name {
        margin-bottom: $margin-bottom-smaller;
        font-weight: 800;
    }
    
    p.price {
        margin-bottom: $margin-bottom-smaller;
        font-size: $font-small;
        color: $light-gray;
    }

    span.original-price {
        text-decoration: line-through;
    }

    span.actual-price {
        text-decoration: underline;
    }
}


    
</style>