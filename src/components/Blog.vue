<script setup>
import { ref } from "vue";
// const isList = ref(false);

const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  isList: {
    type: Boolean,
    required: true,
  },
  author: {
    type: String,
  },
  date: {
    type: String,
  },
  image: {
    type: String,
  },
});
</script>
<template>
  <!-- blog -->
  <div
    class="flex rounded-2xl items-center"
    :class="
      isList == true ? ' flex-rows w-fit' : 'flex-col space-y-5'
    "
  >
    <!-- image -->
    <div class="w-80">
      <img
        src="../assets/image/skynews-drew-scanlon-blinking-white-guy_4786055.jpg"
        class="rounded-2xl"
      />
    </div>

    <!-- content_blog -->
    <div class="w-80 my-5" :class="isList == true ? 'ml-3 mb-4' : ''">
      <!-- profile -->
      <div class="flex flex-rows">
        <!-- profile_pic -->
        <div class="bg-slate-400 w-7 h-7 rounded-full"></div>
        <!-- username&date_to_post -->
        <h2 class="ml-1">Tanapat&nbsp;Daoloy</h2>
        <h2 class="text-slate-300">&nbsp;·&nbsp;Month&nbsp;dd,yyyy</h2>
      </div>
      <!-- preview_content -->
      <div>
        <h1 class="font-bold mt-2 mb-2 text-2xl">Blog's title</h1>
        <p
          class="break-words text-slate-400"
          :class="isList == true ? 'pr-3' : ''"
        >
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p>
      </div>
    </div>
  </div>
</template>
