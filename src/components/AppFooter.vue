<template lang="">
    <section class="footer">
        <div>
            <NewsletterComp />
        </div>
        <UpperFooter />
        <LowerFooter />
    </section>
</template>


<script>
import NewsletterComp from './FooterComponents/NewsletterComp.vue';
import UpperFooter from './FooterComponents/UpperFooter.vue';
import LowerFooter from './FooterComponents/LowerFooter.vue';

export default {
    components: {
        NewsletterComp,
        UpperFooter,
        LowerFooter
    },

    data() {
        return {
            
        }
    },
}
</script>


<style lang="scss" scoped>
section.footer {
    position: relative;

    div {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
    
</style>