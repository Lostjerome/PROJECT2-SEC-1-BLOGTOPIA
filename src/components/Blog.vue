<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
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
  isList: {
    type: Boolean,
  },
  blog: {
    type: Object,
    required: true,
  },
});

const editBlog = (event) => {
  event.stopPropagation();
  router.push(`/write/${props.blog.id}`);
};
</script>
<template>
  <!-- blog -->
  <div>
    <button
      @click="changeRoute"
      class="text-start hover:bg-slate-200 rounded-xl duration-100 m-auto w-full p-3"
      :class="isList == true ? '' : 'h-full '"
    >
      <div
        class="flex rounded-2xl h-full"
        :class="isList == true ? 'flex-rows' : 'flex-col gap-3 mb-5'"
      >
        <!-- image -->
        <img
          :src="blog.cover"
          :class="isList == true ? 'max-w-[13rem] md:max-w-[18rem]' : ''"
          class="h-32 md:h-48 rounded-lg bg-slate-300 outline outline-1 outline-slate-300 w-full object-cover"
        />

        <!-- content_blog -->
        <div :class="isList == true ? 'ml-3' : ''" class="w-full">
          <!-- profile -->
          <div class="flex flex-rows">
            <!-- username&date_to_post -->
            <p class="text-xs md:text-sm">
              <span class="mr-1">{{ blog.author }}</span>
              <span class="text-slate-400">{{ blog.date }}</span>
            </p>
          </div>
          <!-- preview_content -->
          <div>
            <h1 class="font-bold mt-2 mb-2 text-base md:text-2xl">
              {{ blog.title }}
            </h1>
            <p class="break-words text-slate-400 text-sm md:text-base">
              {{
                // limit the length of the preview content to 100 characters
                blog.content.substring(0, 100) +
                (blog.content.length > 100 ? "..." : "")
              }}
            </p>
          </div>
        </div>
        <button
          class="bg-blue-300 hover:bg-blue-500 duration-200"
          @click="editBlog"
          v-if="route.fullPath == '/all-blogs'"
        >
          Edit
        </button>
      </div>
    </button>
  </div>
</template>
