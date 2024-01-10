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
            <SinglePost v-for="post in store.postsList"
            :src="post.imageSource"
            :author="post.author"
            :date="post.date"
            :title="post.title"
            :content="post.content" />
        </div>
    </section>
</template>


<script>
import { store } from '../../js/store';
import SinglePost from './SinglePost.vue';
export default {
    name: "NewsFeed",

    components: {
        SinglePost
    },

    data() {
        return {
            store
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
    margin-bottom: $margin-bottom-large;

    div.feed-container {
        @include flex(row, space-between, start);
        gap: 20px;
        flex-wrap: wrap;
    }
}
    
</style>