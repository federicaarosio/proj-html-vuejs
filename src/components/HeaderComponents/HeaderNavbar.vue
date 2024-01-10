<template lang="">
    <section class="menu">
        <div class="container">
            <div class="sub-container">
                <img src="../../assets/img/logo.png" alt="logo Gogrin" class="logo" >
                <ul class="menu">
                    <li class="menu-list" v-for="(item, index) in navLinks" :key="index" @mouseover="showDropdown(item)">
                        <div class="item-menu">
                            <!-- <span @click="toggleDropdown(item)"> -->
                                {{item.content}}
                                <span v-show="item.submenu === true"><i class="fa-solid fa-chevron-down"></i></span>
                            <!-- </span> -->
                        </div>
                        <ul v-if="item.children && item.showDropdown" @mouseleave="hideDropdown(item)" class="child-menu">
                            <li v-for="(child, childIndex) in item.children" :key=" childIndex">
                                {{ child.content }}
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
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
        },
        subLinks: {
            type: Array,
            required: false
        },
    },

    methods: {
        toggleDropdown(item) {
            if (item.children) {
                item.showDropdown = !item.showDropdown;
            }
        },

        showDropdown(item) {
            if (item.children) {
                item.showDropdown = true;
            }
        },

        hideDropdown(item) {
            if (item.children) {
                item.showDropdown = false;
            }
        },
    }
}
</script>
<style lang="scss">
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

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
                position: relative;

                ul {
                    list-style: none;
                    @include flex(row, center, center);
                    gap: 30px;
                    

                    div.item-menu:hover {
                        color: $accent-color;
                    }

                    ul.child-menu {
                        position: absolute;
                        bottom: -50%;
                        transform: translateY(50%);
                        z-index: 2;
                        background-color: $white;
                        padding: $padding-smaller;
                        border: 2px solid red;
                    }
                }

                .search-menu {
                    @include flex(row, center, center);
                    gap: 20px;

                }
            }
        }
    }
</style>