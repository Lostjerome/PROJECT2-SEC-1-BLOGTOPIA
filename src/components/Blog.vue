<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
// const isList = ref(false);

const router = useRouter();

const changeRoute = () => {
  router.push(`/blog/${props.blog.id}`);
  scrollToTop();
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const props = defineProps({
  // id: {
  //   type: String,
  // },
  // title: {
  //   type: String,
  // },
  // description: {
  //   type: String,
  // },
  isList: {
    type: Boolean,
  },
  // author: {
  //   type: String,
  // },
  // date: {
  //   type: String,
  // },
  // image: {
  //   type: String,
  // },
  blog: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <!-- blog -->
  <button
    @click="changeRoute"
    class="text-start hover:bg-slate-200 rounded-xl duration-100 m-auto p-3"
  >
    <div
      class="flex rounded-2xl"
      :class="isList == true ? ' flex-rows w-fit' : 'flex-col'"
    >
      <!-- image -->
      <div class="w-80">
        <img
          src="../assets/image/skynews-drew-scanlon-blinking-white-guy_4786055.jpg"
          class="rounded-lg"
        />
      </div>

      <!-- content_blog -->
      <div class="w-80 my-5" :class="isList == true ? 'ml-3 mb-4' : ''">
        <!-- profile -->
        <div class="flex flex-rows">
          <!-- profile_pic -->
          <div class="bg-slate-400 w-7 h-7 rounded-full"></div>
          <!-- username&date_to_post -->
          <h2 class="ml-1">{{ blog.author }}</h2>
          <h2 class="text-slate-300">{{ blog.date }}</h2>
        </div>
        <!-- preview_content -->
        <div>
          <h1 class="font-bold mt-2 mb-2 text-2xl">{{ blog.title }}</h1>
          <p
            class="break-words text-slate-400"
            :class="isList == true ? 'pr-3' : ''"
          >
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
        </div>
      </div>
    </div>
  </button>
</template>
