<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import AddIcon from "./icons/AddIcon.vue";
import SearchIcon from "./icons/SearchIcon.vue";

const router = useRouter();
const searchTerm = ref("");
const search = () => {
  if (!searchTerm.value) {
    router.push("/");
    return;
  }
  router.push(`/search/${searchTerm.value}`);
};
// get the current route
const currentRoute = ref(router.currentRoute.value.fullPath);

onMounted(() => {
  if (currentRoute.value.toLowerCase().includes("search")) {
    searchTerm.value = router?.params?.searchTerm;
  }
});
// watch for changes in the route
watch(
  () => router.currentRoute.value.fullPath,
  (newRoute) => {
    currentRoute.value = newRoute;
  }
);
</script>
<template>
  <div>
    <router-link to="/write">
      <div
        to="/write"
        class="p-3 fill-white bg-blue-600 hover:bg-blue-700 duration-200 md:hidden rounded-full fixed bottom-5 right-5"
      >
        <AddIcon class="w-6 h-6" />
      </div>
    </router-link>
    <div class="bg-white drop-shadow-md" v-if="!currentRoute.includes('write')">
      <div class="w-full max-w-4xl px-3 py-5 mx-auto lg:px-4">
        <div class="flex items-center justify-between">
          <div class="flex">
            <router-link to="/" class="flex">
              <span class="self-center text-3xl font-bold whitespace-nowrap"
                >Blogtopia</span
              >
            </router-link>
            <div class="ml-5 w-full">
              <div class="relative block w-full">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none fill-gray-400"
                >
                  <SearchIcon />
                  <span class="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  class="w-full p-2 pl-10 pr-10 outline-none text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
                  placeholder="What do you want to read ?"
                  v-model="searchTerm"
                  @keyup.enter="search"
                />
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <router-link
              to="/our-team"
              class="px-2 text-l font-bold whitespace-nowrap text-gray-900 hover:text-blue-700 duration-200"
              >Meet our team</router-link
            >
            <router-link
              to="/write"
              class="items-center text-white whitespace-nowrap hidden md:block bg-blue-600 hover:bg-blue-700 duration-200 font-medium rounded-full text-sm px-5 py-2.5 text-center ml-5"
              >Write your own</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
