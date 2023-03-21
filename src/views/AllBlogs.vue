<script setup>
import Blog from "../components/Blog.vue";
import { getBlog } from "../composable/getBlogs";
import { ref, onMounted } from "vue";

const blogs = ref([]);

onMounted(async () => {
  blogs.value = await getBlog();
  console.log(blogs.value);
});
</script>
<template>
  <div>
    <Blog v-for="(blog, key) in blogs" :key="key" :blog="blog" :isList="true" />
  </div>
</template>
