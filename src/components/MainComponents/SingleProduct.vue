<template lang="">
        <article class="single-product-card">
                <img :src="`../../../img/${src}.jpg`">
                <p class="product-name">
                    {{name}}
                </p>
                <p class="product-price">
                    {{price}}
                </p>
        </article>
</template>


<script>
export default {
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

.single-product-card {
    width: calc((100% /4) - 20px);
    margin-bottom: $margin-bottom-small;

    img {
        width: 100%;
    }

}
</style>