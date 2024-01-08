<template lang="">
    <section class="jumbo">
        <img src="../assets/img/H3-slider3.jpg">
    </section>
</template>

<script>
export default {
    name: "AppJumbo",
}
</script>

<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
section.jumbo {
    margin-bottom: $margin-bottom-large;
    
    img {
        width: 100%;
        height: 550px;
        object-fit: cover;
    }
}
    
</style>