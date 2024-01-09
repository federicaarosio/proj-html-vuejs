<template lang="">
    <div class="container">
        <img src="../../assets/img/brand1.png" alt="logo">
        <img src="../../assets/img/brand4.png" alt="logo">
        <img src="../../assets/img/brand3.png" alt="logo">
        <img src="../../assets/img/brand1.png" alt="logo">
        <img src="../../assets/img/brand2.png" alt="logo">
    </div>
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

div.container {
    width: $small-container;
    margin: 0 auto;
    @include flex(row, center, center);
    gap: 50px;
    margin-bottom: $margin-bottom-large;


    img {
        width: calc((100% / 5) - 50px);
    }
}
    
</style>