<template lang="">
    <section class="newsletter">
        <p class="title">
            Subscribe our newsletter
        </p>
        <div class="container">
            <input type="text" placeholder="your email" name="mail" required>
            <button class="submit btn-green" type="submit">
                Send
            </button>
        </div>
    </section>
</template>
<script>
export default {
    name: "Newsletter"
}
</script>
<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

section.newsletter {
    width: $small-container;
    margin: 0 auto;
    background-image: url(../../assets/img/milesim-bg.jpg);
    padding: $padding-small;
    @include flex(row, space-between, center);
    color: $white;

    p.title {
        font-size: $font-medium;
        font-weight: 800;
        text-transform: uppercase;
    }

    input {
        padding: .8rem;
        font-size: $font-small;
        font-family: 'Roboto Condensed', sans-serif;
    }

    button.submit {
            text-transform: uppercase;
            padding: .8rem;
            font-size: $font-small;
            border-radius: 0;
        }
}
</style>