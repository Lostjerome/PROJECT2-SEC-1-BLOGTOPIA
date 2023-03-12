<script setup>
import Blog from "./components/Blog.vue";
import NavBar from "./components/NavBar.vue";
import Member from "./components/Members.vue";
import { routes } from "./router/index.js";
</script>
<template>
  <div>
    <NavBar />
    <div class="flex">
      <div v-for="(route, key) in routes" :key="key">
        <router-link :to="route.path"> {{ route.name }} &nbsp; </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
