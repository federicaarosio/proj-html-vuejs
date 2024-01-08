<template lang="">
    <section class="menu">
        <div class="container">
            <div class="sub-container">
                <img src="../assets/img/logo.png" alt="logo Gogrin" class="logo" >
                <ul class="menu">
                    <li class="menu-list" v-for="link in navLinks">{{link.content}}</li>
                </ul>
            </div>

            <div class="sub-container">
                <div class="search-menu">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <button>
                        order now
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "HeaderNavbar",
    props: {
        navLinks: {
            type: Array,
            required: true
        }
    },
}
</script>
<style lang="scss">
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

    section.menu {
        color: $dark-gray;

        div.container {
            @include flex(row, space-between, center);
            width: $large-container;
            padding: 20px 0;
            margin: 0 auto;
            font-size: $font-small;
            text-transform: uppercase;
            font-weight: 600;

            .sub-container {
                @include flex(row, center, center);
                gap: 70px;

                ul {
                    list-style: none;
                    @include flex(row, center, center);
                    gap: 30px;
                }

                .search-menu {
                    @include flex(row, center, center);
                    gap: 20px;

                }
            }
        }
    }
</style>