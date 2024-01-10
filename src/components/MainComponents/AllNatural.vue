<template lang="">
    <section class="max-container">
        <section class="container">
            <div class="sub-container bigger">
                <span>Look what</span> consumer power has done with <span>organic food</span>; we can do the same with clothes.
            </div>
            <div class="sub-container">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iusto tempora error temporibus reiciendis voluptate cum. Perspiciatis, <span>doloremque ratione, neque quasi non animi magnam quos est nam, iusto reprehenderit nemo.</span>
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem consequatur aperiam a sapiente facere!
                </p>
                <img src="../../assets/img/fe-shap1-1.png" alt="">
            </div>
        </section>
        <section class="container">
            <img src="../../assets/img/fe3.jpg">
            <img src="../../assets/img/fe1.jpg">
            <img src="../../assets/img/fe2.jpg">
            <img src="../../assets/img/fe1.jpg">
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

section.max-container {
    margin-bottom: $margin-bottom-large;
}
section.container {
    width: $small-container;
    margin: 0 auto;
    @include flex(row, space-between, start);
    gap: 20px;
    margin-bottom: $margin-bottom-small;

    img {
        width: calc((100% / 4) - 20px);
    }

    div.sub-container {
        width: 50%;
        position: relative;

        span {
            color: $accent-color;
        }

        p {
            font-size: $font-small;
            line-height: 1.2rem;
            margin-bottom: $margin-bottom-smaller;
            color: $light-gray;
        }

        img {
            width: 150px;
            position: absolute;
            top: 0;
            right: -200px;
        }
    }

    .bigger {
        font-size: $font-big;
        font-weight: 800;
        color: $main-color;


    }
}

    
</style>