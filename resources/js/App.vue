<template>
    <div class="page_preloader"></div>

    <HeaderComponent/>
    <router-view />
    <FooterComponent/>

    <div><a href="index.html#" class="scrollup">Scroll</a></div>

</template>

<script>
import HeaderComponent from './components/layout/site/HeaderComponent.vue'
import FooterComponent from './components/layout/site/FooterComponent.vue'
export default {
    name: 'App',
    components: {
        FooterComponent,
        HeaderComponent,
    }
}
</script>
<style>
</style>