<template lang="">
    <section class="menu">
        <div class="container">
            <div class="sub-container">
                <img src="../../assets/img/logo.png" alt="logo Gogrin" class="logo" >
                <ul class="menu">
                    <!-- <li class="menu-list" v-for="(item, index) in navLinks" :key="index" @mouseover="showDropdown(item)">
                        <div class="item-menu">
                            <span @click="toggleDropdown(item)">
                                {{item.content}}
                                <span v-show="item.submenu === true"><i class="fa-solid fa-chevron-down"></i></span>
                            </span> -->

                    <li class="menu-list" v-for="(item, index) in navLinks" :key="index">
                        <div class="item-menu">
                            <span @click="toggleDropdown(item)">
                                {{item.content}}
                                <span v-show="item.submenu === true"><i class="fa-solid fa-chevron-down"></i></span>
                            </span>
                        
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
                    <button class="magnifier">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <div class="shopping">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p class="chart-items">
                            0
                        </p>
                    </div>
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
            position: relative;

            .sub-container {
                @include flex(row, center, center);
                gap: 70px;
                

                ul {
                    list-style: none;
                    @include flex(row, center, center);
                    gap: 30px;
                    

                    div.item-menu:hover {
                        color: $accent-color;
                    }

                    ul.child-menu {
                        position: absolute;
                        bottom: -100%;
                        z-index: 1;
                        min-width: 200px;
                        background-color: $white;
                        padding: $padding-smaller;
                        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                        @include flex(column, start, start);

                        li:hover {
                            color: $accent-color;
                        }
                    }

                    .fa-chevron-down {
                        margin-left: .3rem;
                    }
                }

                .search-menu {
                    @include flex(row, center, center);
                    gap: 20px;

                    button {
                        
                    }

                    .magnifier {
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        @include flex(row, center, center);
                    }

                    div.shopping {
                        position: relative;
                    }

                    i.fa-cart-shopping {
                        color: $main-color;
                    }

                    .chart-items {
                        font-size: .6rem;
                        background-color: $accent-color;
                        padding: 5px;
                        border-radius: 50%;
                        width: 10px;
                        height: 10px;
                        @include flex(row, center, center);
                        color: $white;
                        position: absolute;
                        top: -5px;
                        right: -7px;
                    }

                }
            }
        }
    }
</style>