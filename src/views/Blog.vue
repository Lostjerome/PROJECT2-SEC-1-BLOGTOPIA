<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Blog from "../components/Blog.vue";
import ArrowUp from "../components/icons/ArrowUp.vue";
import { getBlog } from "../composable/getBlogs";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const route = useRoute();
const router = useRouter();

const selectTopic = (topic) => {
  router.push(`/topic/${topic}`);
  scrollToTop();
};

// fetch blog from localhost:5000
const blog = ref({});

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
  <div class="p-5">
    <button
      @click="scrollToTop"
      class="p-3 fixed bottom-5 right-5 rounded-full bg-blue-500 hover:bg-blue-600 duration-200 fill-white"
    >
      <ArrowUp class="w-7 h-7" />
    </button>
    <div class="w-full max-w-6xl m-auto">
      <div class="flex space-x-5">
        <div class="w-1/3">
          <div class="sticky top-3 space-y-3">
            <div class="p-5 rounded-xl bg-slate-200 flex flex-col gap-2">
              <p class="font-bold">Topics</p>
              <button
                v-for="(topic, key) in blog.topics"
                :key="key"
                @click="selectTopic(topic)"
                class="bg-slate-300 hover:bg-slate-400 duration-200 rounded-full p-2 px-4 text-center w-fit text-xs"
              >
                {{ topic }}
              </button>
            </div>
          </div>
        </div>
        <div class="rounded-xl w-full">
          <img
            class="w-full h-96 bg-slate-200 rounded-xl object-cover"
            :src="blog.cover"
          />
          <br />
          <h1 class="text-2xl font-bold">
            {{ blog.title }}
          </h1>
          <br />
          <p class="mb-5 whitespace-pre-line">
            {{ blog.content }}
          </p>
          <p class="text-slate-400">{{ blog.date }}</p>
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
