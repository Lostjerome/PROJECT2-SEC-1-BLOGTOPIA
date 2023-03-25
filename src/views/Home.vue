<script setup>
import Blog from "../components/Blog.vue";
import {
  getBlog,
  getBlogsPaginated,
  getRecommendedBlogs,
} from "../composable/getBlogs";
import { getTopics } from "../composable/getTopics";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

const blogs = ref([]);
const topics = ref([]);
const router = useRouter();
const suggestSection = ref(null);
const filterWord = ref("");
const currPage = ref(1);
const recommendedBlogs = ref([]);

const toWritePage = () => {
  router.push("/write");
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const selectTopic = (topic) => {
  router.push(`/topic/${topic}`);
  scrollToTop();
};

const filteredTopics = computed(() => {
  return topics.value.filter((topic) => {
    return topic.toLowerCase().includes(filterWord.value.toLowerCase());
  });
});

const loadMore = () => {
  currPage.value++;
  getBlogsPaginated(currPage.value, 6).then((res) => {
    blogs.value = [...blogs.value, ...res];
  });
};

onMounted(async () => {
  blogs.value = await getBlogsPaginated(currPage.value, 6);
  recommendedBlogs.value = await getRecommendedBlogs();
  topics.value = await getTopics();
});
</script>
<template>
  <div class="w-full">
    <button
      @click="toWritePage"
      class="p-6 bg-blue-500 lg:hidden rounded-full fixed bottom-5 right-5"
    ></button>
    <div class="min-h-screen grid place-items-center">
      <div class="bg-slate-200 grid place-items-center w-full p-2">
        <div class="content-center w-full h-full items-center max-w-4xl p-3">
          <div class="flex flex-col space-y-6 my-10">
            <h1 class="text-5xl font-bold">A Blogging Paradise</h1>
            <p class="break-words w-full">
              Unleash your creativity and connect with like minded individuals.
            </p>
            <div>
              <button
                class="bg-blue-600 py-2 px-5 rounded-full text-white font-semibold"
                @click="scrollToBlogSection"
              >
                Explore Blogs
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-7 max-w-4xl w-full hidden lg:block" ref="suggestSection">
        <h1 class="text-3xl font-bold text-start">Suggested blogs for you</h1>
        <div class="grid grid-cols-3 my-10">
          <Blog
            v-for="(blog, key) in recommendedBlogs"
            :key="key"
            :blog="blog"
          />
        </div>
      </div>
      <div class="flex lg:flex-row flex-col-reverse max-w-4xl lg:mt-5 w-full">
        <div class="flex flex-col">
          <Blog
            v-for="(blog, key) in blogs"
            :key="key"
            :blog="blog"
            :isList="true"
          />
          <div class="flex justify-center">
            <button
              class="bg-blue-600 py-2 px-5 rounded-full text-white font-semibold"
              @click="loadMore"
            >
              Load More
            </button>
          </div>
        </div>
        <div class="lg:mx-3 lg:w-1/2 hidden lg:block">
          <div class="bg-slate-200 rounded-2xl p-6 w-full">
            <h2 class="font-bold text-xl mb-4">Pick your interested topic</h2>
            <input
              type="text"
              v-model="filterWord"
              class="w-full rounded-md text-sm outline-none p-1 mb-4"
              placeholder="Search topics"
            />
            <div class="flex flex-wrap overflow-auto gap-2 items-center">
              <button
                class="bg-slate-300 rounded-full py-1 p-2 text-center text-xs hover:bg-slate-400 duration-200"
                v-for="(topic, key) in filteredTopics"
                :key="key"
                @click="selectTopic(topic)"
              >
                {{ topic }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
