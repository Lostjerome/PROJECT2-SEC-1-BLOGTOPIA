<script setup>
import Blog from "../components/Blog.vue";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import Topics from "../components/Topics.vue";
import { useBlog } from "../store/blog";
import { storeToRefs } from "pinia";

const { blogs } = storeToRefs(useBlog());
const { getBlogsFromTopic } = useBlog();

const router = useRoute();
const selectedTopic = ref(router.params.id);

onMounted(async () => {
  blogs.value = await getBlogsFromTopic(selectedTopic.value);
});

watch(
  () => router.params.id,
  async (newTopic) => {
    selectedTopic.value = newTopic;
    blogs.value = await getBlogsFromTopic(selectedTopic.value);
  }
);
</script>
<template>
  <!-- body -->
  <div class="mt-4 max-w-4xl m-auto">
    <h1 class="text-3xl">
      Topic: <span class="font-bold"> {{ selectedTopic }}</span>
    </h1>

    <!-- content -->
    <div class="flex flex-rows mt-7">
      <!-- Blog-list -->
      <div class="w-full">
        <Blog
          v-for="(blog, key) in blogs"
          :key="key"
          :blog="blog"
          :isList="true"
        />
      </div>

      <!-- Recommended topics -->
      <Topics />
    </div>
  </div>
</template>
