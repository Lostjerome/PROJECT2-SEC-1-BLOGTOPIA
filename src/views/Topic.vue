<script setup>
import Blog from "../components/Blog.vue";
import { getBlog, getBlogsFromTopic } from "../composable/getBlogs";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

const blogs = ref([]);
const router = useRoute();
const selectedTopic = router.params.id;

onMounted(async () => {
  blogs.value = await getBlogsFromTopic(selectedTopic);
  console.log(blogs.value);
});
</script>
<template>
  <!-- body -->
  <div class="mt-4 max-w-6xl m-auto">
    <h1 class="text-3xl">
      Topic: <span class="font-bold"> {{ selectedTopic }}</span>
    </h1>

    <!-- content -->
    <div class="flex flex-rows mt-7">
      <!-- Blog-list -->
      <div>
        <Blog
          v-for="(blog, key) in blogs"
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
