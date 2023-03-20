<script setup>
import Blog from "./components/Blog.vue";
import NavBar from "./components/NavBar.vue";
import Member from "./components/Members.vue";
import { routes } from "./router/index.js";
</script>
<template>
  <div>
    <NavBar />
    <div class="flex gap-1">
      <div v-for="(route, key) in routes" :key="key">
        <router-link
          :to="route.path"
          class="border border-black rounded-full px-3"
        >
          {{ route.name }}
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
