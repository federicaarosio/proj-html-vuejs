<template lang="">
    <article>
        <img :src="`../../../img/${src}.jpg`" :alt="name">
        <p class="name">
            {{name}}
        </p>
        <p class="price">
            {{price}}
        </p>
    </article>
</template>


<script>
export default {
    name: "CardTrendingProducts",

    props: {
        src: String,
        name: String,
        price: Number
    }

}
</script>


<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

article {
    width: calc(100% / 4);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

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
    }
}


    
</style>