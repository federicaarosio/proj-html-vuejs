<template lang="">
    <section class="header">
        <section class="info-contacts">
            <div class="container">
                <div class="header-contacts">
                    <div>
                        <i class="fa-solid fa-location-dot"></i> North baukhula, tala, USA
                    </div>
                    <div>
                        <i class="fa-solid fa-envelope"></i> demo@example.com
                    </div>   
                </div>
                <div class="header-hours-socials">
                    <div>
                        <i class="fa-regular fa-clock"></i> 8.30AM-8.30PM
                    </div>
                    <div>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-pinterest-p"></i>
                    </div>   
                </div>
            </div>
        </section>

        <HeaderNavbar 
        :navLinks="navLinks"/>
        <AppJumbo />
    
    </section>
</template>

<script>
import HeaderNavbar from './HeaderComponents/HeaderNavbar.vue';
import AppJumbo from './HeaderComponents/AppJumbo.vue';
export default {
    components: {
        HeaderNavbar,
        AppJumbo
    },

    data() {
        return {
            //Header Navbar
            navLinks: [
                {
                    content: 'Home',
                    url: '#',
                    submenu: true,
                    children: [
                        {
                            content: 'Home-1'
                        },
                        {
                            content: 'Home-2'
                        },
                    ]
                },
                {
                    content: 'About',
                    url: '#',
                    submenu: true,
                    children: [
                        {
                            content: 'About-1'
                        },
                        {
                            content: 'About-2'
                        },
                    ]
                },
                {
                    content: 'Service',
                    url: '#',
                    submenu: false,
                },
                {
                    content: 'Portfolio',
                    url: '#',
                    submenu: true,
                    children: [
                        {
                            content: 'Portfolio-1'
                        },
                        {
                            content: 'Portfolio-2'
                        },
                    ]
                },
                {
                    content: 'Shop',
                    url: '#',
                    submenu: true,
                    children: [
                        {
                            content: 'Shop-1'
                        },
                        {
                            content: 'Shop-2'
                        },
                    ]
                },
                {
                    content: 'Blog',
                    url: '#',
                    submenu: true,
                    children: [
                        {
                            content: 'Blog-1'
                        },
                        {
                            content: 'Blog-2'
                        },
                    ]
                },
                {
                    content: 'Contact',
                    url: '#',
                    submenu: false,
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

    section.header {
        color: $white;
    }

    section.info-contacts {
        
        background-color: $main-color;
        padding: 10px 0;

        div.container {
            @include flex(row, space-between, center);
            width: $large-container;
            margin: 0 auto;
            font-size: $font-small;
        }

        .header-contacts, .header-hours-socials {
            @include flex(row, space-between, center);
            gap: 20px;

            .fa-brands {
                margin-left: 10px;
            }
        }
    }
    
</style>