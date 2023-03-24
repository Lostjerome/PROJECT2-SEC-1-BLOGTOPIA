<script setup>
import Blog from "../components/Blog.vue";
import { getBlog } from "../composable/getBlogs";
import { getTopics } from "../composable/getTopics";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

const blogs = ref([]);
const topics = ref([]);
const router = useRouter();
const recommendedBlog = computed(() => {
  return blogs.value.slice(0, 3);
});

const blogSection = ref(null);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollToBlogSection = () => {
  blogSection.value.scrollIntoView({
    behavior: "smooth",
  });
};
const selectTopic = (topic) => {
  router.push(`/topic/${topic}`);
  scrollToTop();
};

onMounted(async () => {
  blogs.value = await getBlog();
  topics.value = await getTopics();
});


const fetchBlog = async ()=>{
  blogs.value = await getBlog();
}


</script>
<template>
  <div class="w-full">
    <div class="min-h-screen grid place-items-center">
      <div class="md:bg-slate-200 grid place-items-center w-full p-10">
        <div
          class="grid md:grid-cols-2 content-center h-full items-center max-w-5xl w-full p-3"
        >
          <div class="flex flex-col space-y-6 my-10">
            <h1 class="text-5xl font-bold">A Blogging Paradise</h1>
            <p class="break-words w-3/4">
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
      <div class="pt-7 max-w-5xl w-full hidden md:block" ref="blogSection">
        <h1 class="text-3xl font-bold text-start">Suggested blogs for you</h1>
        <div class="max-w-5xl w-full grid grid-cols-3 my-10">
          <Blog
            v-for="(blog, key) in recommendedBlog"
            :key="key"
            :blog="blog"
            @onFetch="fetchBlog"
          />
        </div>
      </div>
      <div class="flex md:flex-row flex-col-reverse max-w-5xl md:mt-20 w-full">
        <div class="flex flex-col gap-2">
          <Blog
            v-for="(blog, key) in blogs"
            :key="key"
            :blog="blog"
            :isList="true"
            @onFetch="fetchBlog"
          />
        </div>
        <div class="md:mx-3">
          <div class="md:bg-slate-200 rounded-2xl md:p-6 w-full">
            <h2 class="font-bold text-xl mb-4">Recommended topics</h2>
            <div class="flex md:flex-wrap gap-2 items-center">
              <button
                class="bg-slate-300 rounded-full p-2 px-4 text-center text-xs hover:bg-slate-400 duration-200"
                v-for="(topic, key) in topics"
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
