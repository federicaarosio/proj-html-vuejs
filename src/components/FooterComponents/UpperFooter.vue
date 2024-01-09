<template lang="">
    <section class="upper-footer">
        <div class="container">
            <div class="column">
                <img src="../../assets/img/footer-logo.png" alt="logo">
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
            </div>
            <div class="column">
                <p class="title">
                    Our latest blog.
                </p>
                <div class="blog-container" v-for="post in store.postsList">
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
        @include flex(row, space-between, center);
        gap: 30px;
        padding-top: $padding-large;
        padding-bottom: $padding-large;
        
        img {
            width: 65px;
            height: 65px;
            object-fit: cover;
        }
        div.blog-container {
            @include flex(row, center, center);
            gap: 20px;
            margin-bottom: $margin-bottom-smaller;

            p {
                font-size: $font-small;
            }

            p.post-title {
                font-weight: 600;
                font-size: .85rem;
                margin-bottom: .25rem;
            }
        }
    }
}
    
</style>