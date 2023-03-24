<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import SearchIcon from "./icons/SearchIcon.vue";

const isOpen = ref[false];
const route = useRouter();
const router = useRouter();
const searchTerm = ref("");
const search = () => {
  if (currentRoute.value.toLowerCase().includes("search")) {
    router.push(`/search/${searchTerm.value}`);
  } else {
    router.push(`/search/${searchTerm.value}`);
  }
};
// get the current route
const currentRoute = ref(router.currentRoute.value.fullPath);

onMounted(() => {
  if (currentRoute.value.toLowerCase().includes("search")) {
    searchTerm.value = route?.params?.searchTerm;
  }
}),
  // watch for changes in the route
  watch(
    () => router.currentRoute.value.fullPath,
    (newRoute) => {
      currentRoute.value = newRoute;
    }
  );
</script>
<template>
  <div class="bg-white drop-shadow-md" v-if="!currentRoute.includes('write')">
    <div
      class="flex items-center justify-between w-full max-w-6xl px-3 py-5 mx-auto lg:px-4"
    >
      <div class="flex items-center">
        <router-link to="/" class="flex">
          <span class="self-center text-3xl font-bold whitespace-nowrap"
            >Blogtopia</span
          >
        </router-link>

        <div class="ml-10">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            class="md:hidden text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1"
          >
            <SearchIcon />
          </button>
          <div class="relative hidden md:block">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <SearchIcon />
              <span class="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              class="p-2 pl-10 pr-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
              placeholder="What do you want to read ?"
              v-model="searchTerm"
              @keyup.enter="search"
            />
          </div>
        </div>
        <button
          v-if="currentRoute.includes('edit') || currentRoute.includes('write')"
          @click="publish"
          class="items-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center ml-5"
        >
          Publish
        </button>
        <div v-else class="flex">
          <ul
            class="flex-col hidden pt-6 lg:flex-row lg:self-center lg:py-0 lg:flex"
          >
            <li class="mb-3 lg:px-2 xl:px-2 lg:mb-0">
              <router-link
                to="/our-team"
                class="text-l font-bold text-gray-900 hover:text-blue-600"
                >Meet our team</router-link
              >
            </li>
          </ul>
          <router-link
            to="/write"
            class="hidden lg:block items-center text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center ml-5"
            >Get Started</router-link
          >
        </div>
        <button
          data-collapse-toggle="navbar-hamburger"
          type="button"
          class="lg:hidden inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-hamburger"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full" id="navbar-hamburger">
          <ul
            class="flex flex-col mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          >
            <li>
              <a
                href="../views/Home.vue"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded"
                aria-current="page"
                >Home</a
              >
            </li>
            <li>
              <a
                href="../views/Blog.vue"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400"
                >Blog</a
              >
            </li>
            <li>
              <a
                href="../views/OurTeam.vue"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-400"
                >Meet our team</a
              >
            </li>
            <li>
              <a
                href="../views/Topic.vue"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100"
                >Topic</a
              >
            </li>
            <li>
              <a
                href="../views/Search.vue"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100"
                >Search</a
              >
            </li>
            <li>
              <a
                href="../views/Write.vue"
                class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100"
                >Write a blog</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
