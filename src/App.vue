<script setup>
import NavBar from "./components/NavBar.vue";
  import Member from './components/Members.vue'
</script>
<template>
  <div>
  <h1 class="text-3xl font-bold underline">Blogtopia</h1>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
  <router-view />



    <NavBar />
  <Member />
  </div>
</template>