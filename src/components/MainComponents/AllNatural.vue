<template lang="">
    <section class="max-container">
        <section class="container">
            <div class="sub-container">
                Look what consumer power has done with organic food; we can do the same with clothes.
            </div>
            <div class="sub-container">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iusto tempora error temporibus reiciendis voluptate cum. Perspiciatis, doloremque ratione, neque quasi non animi magnam quos est nam, iusto reprehenderit nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor natus beatae iusto atque quisquam, amet officiis?
    
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem consequatur aperiam a sapiente facere! Optio explicabo deleniti repellendus expedita nulla temporibus
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
    @include flex(row, space-between, center);
    margin-bottom: $margin-bottom-small;

    img {
        width: calc((100% / 4) - 20px);
        margin: 0 10px;
    }

    div.sub-container {
        width: 50%;
    }
}

    
</style>