<template lang="">
  <div>
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
}
</script>

<style lang="scss">
  @use './styles/general.scss' as *;

  // @use "../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss" as *;
  // @use "../node_modules/@fortawesome/fontawesome-free/scss/brands.scss" as *;
  // @use "../node_modules/@fortawesome/fontawesome-free/scss/solid.scss" as *;
  // @use "../node_modules//@fortawesome/fontawesome-free/scss/regular.scss" as *;

  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@200;300;400;500;600;700;800;900&display=swap');
  
</style>