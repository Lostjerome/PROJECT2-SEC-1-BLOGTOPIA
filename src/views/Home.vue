<script setup>
import Blog from "../components/Blog.vue";
import { getBlog } from "../composable/getBlogs";
import { getTopics } from "../composable/getTopics";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const blogs = ref([]);
const topics = ref([]);
const router = useRouter();
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

onMounted(async () => {
  blogs.value = await getBlog();
  topics.value = await getTopics();
});
</script>
<template>
  <div class="w-full">
    <div class="h-screen grid place-items-center">
      <div class="md:bg-gray-200 grid place-items-center w-full p-10">
        <div
          class="grid md:grid-cols-2 content-center h-full items-center max-w-6xl w-full p-3"
        >
          <div class="flex flex-col space-y-6 my-10">
            <h1 class="text-5xl font-bold">A Blogging Paradise</h1>
            <p class="break-words w-3/4">
              Unleash your creativity and connect with like minded individuals.
            </p>
            <button
              class="bg-blue-600 p-2 rounded-full w-32 text-white font-semibold"
            >
              Explore Blogs
            </button>
          </div>
          <!-- <Blog
            class="bg-white p-2 rounded-2xl place-self-end hidden md:block"
          /> -->
        </div>
      </div>
      <div class="mt-7 max-w-6xl w-full hidden md:block">
        <h1 class="text-3xl font-bold pt-7 text-start">
          Suggested blogs for you
        </h1>
        <div class="max-w-6xl w-full grid grid-cols-3 my-10">
          <Blog v-for="(blog, key) in blogs" :key="key" :blog="blog" />
        </div>
      </div>
      <div
        class="flex md:flex-row flex-col-reverse md:gap-28 max-w-6xl w-full p-6 md:mt-20"
      >
        <div class="w-4/6">
          <div class="flex flex-col justify-start content-start gap-2">
            <Blog
              v-for="(blog, key) in blogs"
              :key="key"
              :blog="blog"
              :isList="true"
            />
          </div>
        </div>
        <div class="md:w-2/5 md:p-5">
          <div class="md:bg-gray-200 rounded-2xl md:p-6">
            <div>
              <h2 class="font-bold text-xl mb-4">Recommended topics</h2>
            </div>
            <div class="flex md:flex-wrap gap-2 items-center">
              <button
                class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs"
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
