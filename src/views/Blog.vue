<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Blog from "../components/Blog.vue";
import ArrowUp from "../components/icons/ArrowUp.vue";
// import { getBlog, getBlogsFromTopic } from "../composable/getBlogs";
import { scrollToTop } from "../composable/scrollToTop";
import { useBlog } from "../store/blog";

const { getBlog, getBlogsFromTopic } = useBlog();

const blog = ref({});
const route = useRoute();
const router = useRouter();
const suggestedBlogs = ref([]);
const noBlogs = computed(() => suggestedBlogs.value.length === 0);

const loadPage = async () => {
  blog.value = await getBlog(route.params.id);

  // fetct suggested blogs with all same topics
  suggestedBlogs.value = await getBlogsFromTopic(blog.value.topics[0]);
  suggestedBlogs.value = suggestedBlogs.value.filter(
    (b) => b.id !== blog.value.id
  );
};

const selectTopic = (topic) => {
  router.push(`/topic/${topic}`);
  scrollToTop();
};

onMounted(async () => {
  loadPage();
});

watch(
  () => route.params.id,
  async () => {
    loadPage();
  }
);
</script>
<template>
  <div class="p-5">
    <button
      @click="scrollToTop"
      class="p-3 fixed bottom-5 right-5 rounded-full bg-blue-600 hover:bg-blue-700 duration-200 fill-white"
    >
      <ArrowUp class="w-7 h-7" />
    </button>
    <div class="w-full max-w-4xl m-auto">
      <div class="flex gap-5">
        <div class="w-1/3 hidden md:block">
          <div class="sticky top-3 space-y-3">
            <div class="p-5 rounded-xl bg-slate-200 flex flex-col gap-2">
              <p class="font-bold">Topics</p>
              <button
                v-for="(topic, key) in blog.topics"
                :key="key"
                @click="selectTopic(topic)"
                class="bg-slate-300 hover:bg-slate-400 duration-200 rounded-full p-1 px-2 text-center w-fit text-xs"
              >
                {{ topic }}
              </button>
            </div>
          </div>
        </div>
        <div class="rounded-xl w-full">
          <img
            class="w-full h-72 bg-slate-200 rounded-xl object-cover outline outline-1 outline-slate-300"
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
          <p class="text-slate-400">
            {{
              // format date to Month Day, Year
              new Date(blog.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            }}
          </p>
        </div>
        <div class="w-1/3 hidden md:block">
          <div class="sticky top-3 space-y-3">
            <div class="p-5 rounded-xl bg-slate-200">
              <p class="font-bold">Author</p>
              <p>{{ blog.author }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!noBlogs" class="w-full max-w-5xl m-auto mt-16">
        <h1 class="text-2xl font-bold mb-5">Continue reading</h1>
        <div class="grid grid-cols-2 lg:grid-cols-3">
          <Blog v-for="(blog, key) in suggestedBlogs" :key="key" :blog="blog" />
        </div>
      </div>
    </div>
  </div>
</template>
