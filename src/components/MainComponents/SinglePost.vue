<template lang="">
    <article>
        <img :src="`../../../img/${src}.jpg`">
        <div>
        <p class="author">
            <i class="fa-solid fa-user"></i> {{author}}
        </p>
            <p class="date">
                <i class="fa-regular fa-clock"></i> {{date}}
            </p>
        </div>
        <p class="title">
            {{title}}
        </p>
        <p class="content">
            {{content}}
        </p>
        <p class="read-more">
            Read more...
        </p>
    </article>
</template>


<script>
export default {
    name: "SinglePost",

    props: {
        src: String,
        author: String,
        date: String,
        title: String,
        content: String,
    }
}
</script>


<style lang="scss" scoped>
@use "../../styles/partials/mixins" as *;
@use "../../styles/partials/variables" as *;

article {
    width: calc((100% / 3) - 20px);
    margin-bottom: $margin-bottom-small;

    &:hover img {
            filter: brightness(50%);
        }
    
    img {
        width: 100%;
        margin-bottom: $margin-bottom-smaller;


    }

    div {
        @include flex(row, left, center);
        gap: 10px;
        margin-bottom: $margin-bottom-smaller;
        font-size: $font-small;
        color: $light-gray;

        i {
            color: $accent-color;
            font-weight: 600;
        }
    }

    p.title {
        margin-bottom: $margin-bottom-smaller;
        color: $main-color;
        font-size: $font-medium;
        font-weight: 900;
    }

    p.content {
        font-size: $font-small;
        margin-bottom: $margin-bottom-smaller;
        line-height: 1.2rem;
        color: $light-gray;
    }

    p.read-more {
        font-size: $font-small;
        font-weight: 700;
        text-transform: uppercase;
        color: $main-color;
    }

}
    
</style>