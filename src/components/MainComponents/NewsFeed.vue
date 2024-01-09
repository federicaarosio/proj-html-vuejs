<template lang="">
    <section class="news">
        <div class="section-title">
            <p>
                The news what we have
            </p>
            <p>
                Gogrin latest news feed
            </p>
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
                    imageSource: "s5",
                    author: "Gogrin",
                    date: "17 Dec 2022",
                    title: "Where I live I am surrounded by fresh, organic food, so I eat really well",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores quasi at quam, omnis distinctio repudiandae. Doloribus at aliquam earum? Voluptates deserunt iure non sunt delectus quaerat eum quia tempore."
                },
                {
                    imageSource: "s5",
                    author: "Gogrin",
                    date: "17 Dec 2022",
                    title: "Where I live I am surrounded by fresh, organic food, so I eat really well",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti maiores quasi at quam, omnis distinctio repudiandae. Doloribus at aliquam earum? Voluptates deserunt iure non sunt delectus quaerat eum quia tempore."
                },
                {
                    imageSource: "s5",
                    author: "Gogrin",
                    date: "17 Dec 2022",
                    title: "Where I live I am surrounded by fresh, organic food, so I eat really well",
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
}
    
</style>