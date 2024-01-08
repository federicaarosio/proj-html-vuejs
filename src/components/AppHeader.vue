<template lang="">
    <section class="header">
        <section class="info-contacts">
            <div>
                North
            </div>
            <div>
                orario
            </div>
        </section>
    
        <section class="navbar">
    
        </section>
    </section>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

    section.header {
        color: $white;
    }

    section.info-contacts {
        @include flex(row, space-between, center);
        background-color: $main-color;
        height: 20px;
    }
    
</style>