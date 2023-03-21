<script setup>
import Blog from "../components/Blog.vue";
import { getBlog } from "../composable/getBlogs";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

const blogs = ref([]);
const router = useRoute();
const selectedTopic = router.params.id;
const fillteredBlogs = computed(() => {
  return blogs.value.filter((blog) => blog.topics?.includes(selectedTopic));
});
onMounted(async () => {
  blogs.value = await getBlog();
  console.log(blogs.value);
});
</script>
<template>
  <!-- body -->
  <div class="mt-4 max-w-6xl m-auto">
    <h1 class="font-bold text-3xl">Topic's name</h1>

    <!-- content -->
    <div class="flex flex-rows mt-7">
      <!-- Blog-list -->
      <div>
        <Blog
          v-for="(blog, key) in fillteredBlogs"
          :key="key"
          :blog="blog"
          :isList="true"
        />
      </div>
      <!-- Recommended topics -->
      <div class="w-2/5 hidden md:block p-5 ml-40">
        <div class="bg-gray-200 rounded-2xl p-6 hidden md:block">
          <div>
            <h2 class="font-bold text-xl mb-4">Recommended topics</h2>
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
