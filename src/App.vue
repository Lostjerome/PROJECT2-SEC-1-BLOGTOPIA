<script setup>
import Blog from "./components/Blog.vue";
import NavBar from "./components/NavBar.vue";
import Member from "./components/Members.vue";
import { routes } from "./router/index.js";
</script>
<template>
  <div>
    <NavBar />
    <div v-for="(route, key) in routes" :key="key">
      <router-link :to="route.path">
        {{ route.name }}
      </router-link>
    </div>
    <router-view />
  </div>
</template>
