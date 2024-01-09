<template lang="">
    <section class="lower-footer">
        <div class="container">
            <div>
                Copyright &#169; gogrin all rights reserved.
            </div>
            <div class="links-container">
                <div>
                    Service
                </div>
                <div>
                    Pricing Table
                </div>
                <div>
                    Contact
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "LowerFooter",
}
</script>
<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

section.lower-footer {
    background-color: $main-color;
    color: $white;
    font-size: $font-small;

    div.container {
        width: $small-container;
        margin: 0 auto;
        padding-top: $padding-small;
        padding-bottom: $padding-small;
        @include flex(row, space-between, center);

        .links-container {
            @include flex(row, space-between, center);
            gap: 20px;
        }
    }
}
    
</style>