<template lang="">
    <section class="news">
        <div class="section-title">
            <p class="upper-title">
                The news what we have
            </p>
            <p class="lower-title">
                Gogrin latest <span>news</span> feed
            </p>
            <img src="../../assets/img/title-shap.png" alt="leaf illustration">
        </div>
        <div class="feed-container">
            <SinglePost v-for="post in postsList"
            :src="post.imageSource"
            :author="post.author"
            :date="post.date"
            :title="post.title"
            :content="post.content" />
        </div>
    </section>
</template>


<script>
import SinglePost from './SinglePost.vue';
export default {
    name: "NewsFeed",

    components: {
        SinglePost
    },

    data() {
        return {
            postsList: [
                {
                    imageSource: "blo1-390x250",
                    author: "Gogrin",
                    date: "17 Dec 2022",
                    title: "Where I live I am surrounded by fresh, organic food, so I eat really well.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores quasi at quam, omnis distinctio repudiandae. Doloribus at aliquam earum? Voluptates deserunt iure non sunt delectus quaerat eum quia tempore."
                },
                {
                    imageSource: "blo2-390x250",
                    author: "Gogrin",
                    date: "16 Dec 2022",
                    title: "What we get at home is 100% organic food. We are also 90% vegetarian.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores quasi at quam, omnis distinctio repudiandae. Doloribus at aliquam earum? Voluptates deserunt iure non sunt delectus quaerat eum quia tempore."
                },
                {
                    imageSource: "blo3-390x250",
                    author: "Gogrin",
                    date: "15 Dec 2022",
                    title: "If we as a society are willing to have a preference for organic food farmer.",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores quasi at quam, omnis distinctio repudiandae. Doloribus at aliquam earum? Voluptates deserunt iure non sunt delectus quaerat eum quia tempore."
                },
            ]
        }
    },
    
}
</script>


<style lang="scss">
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

section.news {
    width: $small-container;
    margin: 0 auto;
    @include flex(column, center, center);

    div.section-title {
        position: relative;
        margin-bottom: $margin-bottom-small;
        
        img {
            position: absolute;
            top: 0%;
            left: 50%;
            transform: translate(-50%, -30%);
            z-index: 1;
        }
        
        .upper-title {
            font-size: $font-medium;
            font-weight: 800;
            color: $accent-color;
            text-align: center;
            position: relative;
            z-index: 2;
        }
    
        .lower-title {
            font-size: $font-big;
            font-weight: 900;
            color: $main-color;
            text-align: center;
            text-transform: uppercase;
            position: relative;
            z-index: 2;
            margin-bottom: $margin-bottom-small;
            
            span {
                color: $accent-color;
            }
        }


    }

    div.feed-container {
        @include flex(row, space-between, center);
        gap: 20px;
        flex-wrap: wrap;
    }
}
    
</style>