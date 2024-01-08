<template lang="">
    <section class="container">
        <section class="quote">
            <div class="quote-symbol">
                <i class="fa-solid fa-quote-left"></i>
            </div>
            <p class="quote-text">
                "Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweets muffine pudding tart bear claw sugar plum croissant". We started as a small legal consultancy. We have proved our competence and had many satisfied clients.
            </p>
            <p class="author">
                Matha Alex
            </p>
            <p class="role">
                Manager
            </p>
        </section>
        <section class="shop-combos">
            <img src="../../assets/img/offer-img01.jpg">
            <img src="../../assets/img/offer-img02.jpg">
        </section>
    </section>
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

section.container {
    width: $small-container;
    margin: 0 auto;
    text-align: center;
    margin-bottom: $margin-bottom-large;
}

section.quote {
    div.quote-symbol {
        font-size: 4rem;
        color: $main-color;
    }

    p.quote-text {
        font-size: $font-medium;
        margin-bottom: $margin-bottom-small;
    }

    p.role {
        font-size: $font-small;
        margin-bottom: $margin-bottom-large;
    }
}

section.shop-combos {
    @include flex(row, space-between, center);
    gap: 20px;

    img {
        width: calc(100% / 2);
    }
}
    
</style>