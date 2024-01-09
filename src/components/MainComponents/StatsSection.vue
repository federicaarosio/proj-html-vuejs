<template lang="">
    <section class="stats">
        <div class="container">
            <p class="number">29+</p>
            <p class="text">Years of Experience</p>
        </div>
        <img src="../../assets/img/counter-shap1.png" alt="divider">
        <div class="container">
            <p class="number">200+</p>
            <p class="text">Everyday Online Delivery</p>
        </div>
        <img src="../../assets/img/counter-shap1.png" alt="divider">
        <div class="container">
            <p class="number">20K</p>
            <p class="text">Client Satisfaction</p>
        </div>
        <img src="../../assets/img/counter-shap1.png" alt="divider">
        <div class="container">
            <p class="number">30+</p>
            <p class="text">Award Winning</p>
        </div>  
    </section>
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

section.stats {
    width: $large-container;
    margin: 0 auto;
    background-image: url(../../assets/img/counter-bg.jpg);
    height: 200px;
    @include flex(row, center, center);
    gap: 30px;
    margin-bottom: $margin-bottom-large;

    div.container {
        @include flex(column, center, center);

        p.number {
            font-size: $font-bigger;
            color: $accent-color;
            font-weight: 800;
        }

        p.text {
            color: $white;
            font-size: $font-medium;
            font-weight: 800;
        }
    }
}
    
</style>