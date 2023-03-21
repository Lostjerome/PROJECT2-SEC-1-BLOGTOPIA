<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Blog from "../components/Blog.vue";
import { getBlog } from "../composable/getBlogs";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const route = useRoute();

// fetch blog from localhost:5000
const blog = ref([]);

const textStyle = {
  header: "text-2xl font-bold",
  paragraph: "text-slate-400",
  quote: "text-slate-400",
  code: "text-slate-400",
};

onMounted(async () => {
  blog.value = await getBlog(route.params.id);
  console.log(blog.value);
});
</script>
<template>
  <div>
    <button
      @click="scrollToTop"
      class="w-12 h-12 fixed bottom-5 right-5 rounded-full bg-blue-500"
    ></button>
    <div class="w-full max-w-6xl m-auto">
      <div class="flex space-x-5">
        <div class="w-1/3">
          <div class="sticky top-3 space-y-3">
            <div class="p-5 rounded-xl bg-slate-200 font-bold">Contents</div>
            <div class="p-5 rounded-xl bg-slate-200">
              <p class="font-bold">Topics</p>
              <p v-for="(topic, key) in blog.topics" :key="key">{{ topic }}</p>
            </div>
          </div>
        </div>
        <div class="rounded-xl w-full">
          <div class="w-full h-96 bg-slate-200 rounded-xl"></div>
          <br />
          <p class="text-slate-400">{{ blog.date }}</p>
          <h1 class="text-2xl font-bold">
            {{ blog.title }}
          </h1>
          <br />
          <p v-for="(content, key) in blog.contents" :key="key" class="mb-5">
            {{ content.text }}
          </p>
        </div>
        <div class="w-1/3">
          <div class="sticky top-3 space-y-3">
            <div class="p-5 rounded-xl bg-slate-200">
              <p class="font-bold">Author</p>
              <p>{{ blog.author }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full max-w-5xl m-auto">
        <h1 class="text-2xl font-bold">Continue reading</h1>
        <div class="grid grid-cols-3">
          <!-- <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog /> -->
        </div>
      </div>
    </div>
  </div>
</template>
