<template lang="">
    <AllNatural />
    <OnlineStore />
    <QuoteCombos />
    <StatsSection />
    <NewsFeed />
</template>

<script>
import AllNatural from './MainComponents/AllNatural.vue';
import OnlineStore from './MainComponents/OnlineStore.vue';
import QuoteCombos from './MainComponents/QuoteCombos.vue';
import StatsSection from './MainComponents/StatsSection.vue';
import NewsFeed from './MainComponents/NewsFeed.vue';

export default {
    components: {
        AllNatural,
        OnlineStore,
        QuoteCombos,
        StatsSection,
        NewsFeed,
    },
    
}
</script>

<style lang="">
    
</style>