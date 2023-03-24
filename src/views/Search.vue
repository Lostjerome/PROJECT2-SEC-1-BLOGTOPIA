<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Blog from "../components/Blog.vue";
import { getBlog } from "../composable/getBlogs";

const route = useRoute();
const searchTerm = ref(route.params.searchTerm);
const blogs = ref([]);

const fillteredBlogs = computed(() => {
  return blogs.value.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
onMounted(async () => {
  blogs.value = await getBlog();
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
  <div class="mt-4 max-w-6xl m-auto">
    <h1 class="font-bold text-3xl text-gray-500 ml-4 mt-10">
      {{ fillteredBlogs.length===0?'No result for':'Result for' }} <span class="text-black">{{ searchTerm }}</span>
    </h1>
    <!-- content -->
    <div class="flex flex-rows mt-7">
      <!-- Blog-list filtered by searchTerm -->
      <div>
        <Blog
          v-for="(blog, key) in fillteredBlogs"
          :key="key"
          :blog="blog"
          :isList="true"
        />
      </div>

      <!-- Recommended topics -->
      <!-- Pui's code -->
      <div class="md:w-2/5 md:p-5">
        <div class="md:bg-gray-200 rounded-2xl md:p-6">
          <div>
            <h2 class="font-bold text-xl mb-4">Recommended&nbsp;topics</h2>
          </div>

          <div class="flex flex-wrap gap-2">
            <div
              class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs"
            >
              Programming
            </div>
            <div
              class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs"
            >
              Technology
            </div>
            <div
              class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs"
            >
              Self Improvement
            </div>
            <div
              class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs"
            >
              Writing
            </div>
            <div
              class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs"
            >
              Relationships
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
