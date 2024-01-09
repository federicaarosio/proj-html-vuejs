<template lang="">
    <section class="call-to-action">
        <div class="section-title">
            <p class="upper-title">
                Here you can get 100% organic food
            </p>
            <p class="lower-title">
                Best organic food up to 25% off for all products
            </p>
            <p class="sub-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque facilis mollitia quod eaque voluptatibus modi eligendi. Maiores qui, molestias rerum amet minus sed, ea a necessitatibus cum iusto ex!
            </p>
            <button>
                <i class="fa-brands fa-whatsapp"></i> +089123 56 906
            </button>
            <button class="btn-green">
                appointment
            </button>
        </div>
    </section>
</template>
<script>
export default {
    name: "CallToaction",
}
</script>

<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

section.call-to-action {
    width: $large-container;
    margin: 0 auto;
    margin-bottom: $margin-bottom-large;
    background-image: url(../../assets/img/call-to-bg.jpg);
    color: $white;

    div.section-title {
        width: $small-container;
        margin: 0 auto;
        text-align: center;
        padding: $padding-large;
    }

    p.upper-title,
    p.lower-title, {
        color: $white;
    }

    p.upper-title {
        text-transform: uppercase;
        font-size: $font-small;
        margin-bottom: $margin-bottom-smaller;
    }

    p.lower-title {
        text-transform: none;
    }

    p.sub-title {
        font-size: $font-small;
        margin-bottom: $margin-bottom-small;
    }

    button {
        border-radius: 5px;
        margin: 0 10px;
    }

}
   
</style>