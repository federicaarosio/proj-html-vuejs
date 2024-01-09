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
            <div class="img-container">
                <img src="../../assets/img/offer-img01.jpg">
                <p class="combo">
                    Fresh Garden Tomato<br>combo offer... $37
                </p>
                <p class="shop-now">
                    Shop now
                </p>
            </div>
            <div class="img-container">
                <img src="../../assets/img/offer-img02.jpg">
                <p class="combo">
                    Some organic healthy fruits<br>combo offer... $49
                </p>
                <p class="shop-now">
                    Shop now
                </p>
            </div>
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
        line-height: 1.8rem;
    }

    p.author {
        font-weight: 700;
    }

    p.role {
        font-size: $font-small;
        font-weight: 700;
        color: $accent-color;
        margin-bottom: $margin-bottom-large;
    }
}

section.shop-combos {
    @include flex(row, space-between, center);
    gap: 20px;

    div.img-container {
        position: relative;
        width: calc(100% / 2);

        img {
            width: 100%;
        }

        p {
            position: absolute;
            left: 20px;
            color: $white;
            font-weight: 800;
        }

        .combo {
            top: 20px;
            font-size: 1.6rem;
            text-align: left;
        }

        .shop-now {
            bottom: 20px;
            text-transform: uppercase;
        }
    }
}
        
    
</style>