<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import SearchGrid from '@/components/SearchGrid'
import ItemPage from "@/components/ItemPage";

Vue.use(Router)
const router = new Router({
  routes: [
    { path: '/', name: 'search', component: SearchGrid },
    { path: '/bikes/:id', name: 'item', component: ItemPage }
  ]
})

export default {
  name: "App",
  router,
}
</script>

<style scoped>
  @import './assets/style.css';
</style>