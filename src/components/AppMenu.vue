<template lang="">
    <section class="menu">
        <div class="container">
            <div>
                <img src="../assets/img/logo.png" alt="logo Gogrin" class="logo" >
                <div class="menu">Home</div>
            </div>
            <div class="button">b</div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

    section.menu {
        color: $dark-gray;

        div.container {
            @include flex(row, space-between, center);
            width: 85%;
            margin: 0 auto;
            font-size: $font-small;
        }
    }
</style>