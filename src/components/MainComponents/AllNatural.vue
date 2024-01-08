<template lang="">
    <section class="container">
        <div class="sub-container">
            Look what consumer power has done with organic food; we can do the same with clothes.
        </div>
        <div class="sub-container">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iusto tempora error temporibus reiciendis voluptate cum. Perspiciatis, doloremque ratione, neque quasi non animi magnam quos est nam, iusto reprehenderit nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor natus beatae iusto atque quisquam, amet officiis?

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem consequatur aperiam a sapiente facere! Optio explicabo deleniti repellendus expedita nulla temporibus
        </div>
        <img :src="src">
    </section>
</template>
<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
    }
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

section.container {
    width: $small-container;
    margin: 0 auto;
    @include flex(row, space-between, center);

    div.sub-container {
        width: 50%;
    }
}

    
</style>