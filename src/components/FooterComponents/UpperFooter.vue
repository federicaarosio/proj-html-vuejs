<template lang="">
    <section class="upper-footer">
        <div class="container">
            <div class="column">
                <img src="../../assets/img/footer-logo.png" alt="logo" class="logo">
                <p class="text">
                    We should never be entered upon until every agency of peace has failed not to be good
                </p>
                <div class="socials">
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
            </div>
            <div class="column">
                <p class="title">
                    Emergency link.
                </p>
                <ul>
                    <li v-for="link in store.footerLinks">
                        {{link.content}}
                    </li>
                </ul>
            </div>
            <div class="column">
                <p class="title">
                    Our latest blog.
                </p>
                <div class="blog-container" v-for="(post, index) in store.postsList" :key="store.id" v-show="index < 2">
                    <img :src="`../../../img/${post.imageSource}.jpg`">
                    <div class="text-wrapper">
                        <p class="post-title">
                            {{post.title}}
                        </p>
                        <p class="date">
                            {{post.date}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="column">
                <p class="title">
                    Our gallery.
                </p>
                <div class="gallery-container">
                    <img src="../../assets/img/blo1-70x70.jpg" alt="organic products">
                    <img src="../../assets/img/blo9-70x70.jpg" alt="organic products">
                    <img src="../../assets/img/blo8-70x70.jpg" alt="organic products">
                    <img src="../../assets/img/blo7-70x70.jpg" alt="organic products">
                    <img src="../../assets/img/blo4-70x70.jpg" alt="organic products">
                    <img src="../../assets/img/blo3-70x70.jpg" alt="organic products">
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import { store } from '../../js/store';
export default {
    name: "UpperFooter",

    data() {
        return {
            store
        }
    },
}
</script>


<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

section.upper-footer {
    background-image: url(../../assets/img/footer-bg.jpg);

    div.container {
        width: $small-container;
        margin: 0 auto;
        color: $white;
        @include flex(row, space-between, start);
        gap: 30px;
        padding-top: $padding-large;
        padding-bottom: $padding-large;

        p.title {
            font-size: $font-medium;
            font-weight: 800;
            margin-bottom: $margin-bottom-small;
        }

        img.logo {
            width: 70%;
            margin-bottom: $margin-bottom-small; 
        }

        p.text {
            font-size: $font-small;
            margin-bottom: $margin-bottom-smaller;            
        }

        ul {
            list-style: none;
            font-size: $font-small;

            li {
                margin-bottom: $margin-bottom-smaller;
            }
        }
        
        div.blog-container {
            @include flex(row, center, start);
            gap: 20px;
            margin-bottom: $margin-bottom-smaller;
            
            img {
                width: 60px;
                height: 60px;
                object-fit: cover;
            }

            p {
                font-size: $font-small;
            }

            p.post-title {
                font-weight: 600;
                font-size: .85rem;
                margin-bottom: .25rem;
            }
        }

        div.gallery-container {
            @include flex(row, space-between, start);
            flex-wrap: wrap;
            gap: 5px;

            img {
                width: calc((100% / 3) - 5px);
            }
        }
    }
}
    
</style>