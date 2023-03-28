<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Blog from "../components/Blog.vue";
import Topics from "../components/Topics.vue";
import { getBlogsFromTitle } from "../composable/getBlogs";

const route = useRoute();
const searchTerm = ref(route.params.searchTerm);
const blogs = ref([]);

onMounted(async () => {
  blogs.value = await getBlogsFromTitle(searchTerm.value);
});

watch(
  () => route.params.searchTerm,
  (newSearchTerm) => {
    searchTerm.value = newSearchTerm;
  }
);
</script>
<template>
  <!-- body -->
  <div class="mt-4 max-w-4xl m-auto">
    <h1 class="font-bold text-3xl text-gray-500">
      Result for <span class="text-black">{{ searchTerm }}</span>
    </h1>

    <!-- content -->
    <div class="flex flex-rows mt-7">
      <!-- Blog-list filtered by searchTerm -->
      <div class="w-full">
        <Blog
          v-for="(blog, key) in blogs"
          :key="key"
          :blog="blog"
          :isList="true"
        />
      </div>

      <!-- Recommended topics -->
      <!-- Pui's code -->
      <Topics />
    </div>
  </div>
</template>
