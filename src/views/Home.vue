<script setup>
import Blog from "../components/Blog.vue";
import { getBlogsPaginated, getRecommendedBlogs } from "../composable/getBlogs";
import { ref, onMounted } from "vue";
import Topics from "../components/Topics.vue";

const blogs = ref([]);
const suggestSection = ref(null);
const currPage = ref(1);
const recommendedBlogs = ref([]);

const loadMore = async () => {
  currPage.value++;
  const res = await getBlogsPaginated(currPage.value, 6);
  blogs.value = [...blogs.value, ...res];
};

const scrollToBlogSection = () => {
  suggestSection.value.scrollIntoView({
    behavior: "smooth",
  });
};

onMounted(async () => {
  blogs.value = await getBlogsPaginated(currPage.value, 6);
  recommendedBlogs.value = await getRecommendedBlogs();
});
</script>
<template>
  <div class="w-full">
    <div class="min-h-screen grid place-items-center">
      <div class="cover bg-slate-200 grid place-items-center w-full p-16">
        <div class="content-center w-full h-full items-center max-w-4xl">
          <div class="flex flex-col space-y-6 my-10 text-white">
            <h1 class="text-3xl md:text-5xl font-bold">A Blogging Paradise</h1>
            <p class="text-sm md:text-base">
              Unleash your creativity and connect with like minded individuals.
            </p>
            <div>
              <button
                class="bg-blue-600 hover:bg-blue-700 duration-200 py-2 px-4 md:py-2 text-sm md:text-base rounded-full text-white font-bold"
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
      <div class="flex lg:flex-row flex-col-reverse max-w-4xl w-full lg:mt-5">
        <div class="flex flex-col">
          <Blog
            v-for="(blog, key) in blogs"
            :key="key"
            :blog="blog"
            :isList="true"
          />
          <div class="flex justify-center">
            <button
              class="bg-blue-600 hover:bg-blue-700 duration-200 py-2 px-5 rounded-full text-white font-semibold my-5"
              @click="loadMore"
            >
              Load More
            </button>
          </div>
        </div>
        <Topics />
      </div>
    </div>
  </div>
</template>
<style>
.cover {
  background-image: url(../assets/image/cover.jpeg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
