<script setup>
import NavBar from "./components/NavBar.vue";
import { routes } from "./router/index.js";
</script>
<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>
