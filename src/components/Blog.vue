<script setup>
import { useRouter } from "vue-router";
import { scrollToTop } from "../composable/scrollToTop";
import EditIcon from "../components/icons/EditIcon.vue";
import CloseIcon from "../components/icons/CloseIcon.vue";
import { ref } from "vue";

const router = useRouter();
const isDelete = ref(false);

const goToBlog = () => {
  router.push(`/blog/${props.blog.id}`);
  scrollToTop();
};

const editBlog = (event) => {
  event.stopPropagation();
  router.push(`/write/${props.blog.id}`);
  scrollToTop();
};

const deleteBlog = async (event) => {
  event.stopPropagation();
  try {
    fetch(`http://localhost:5000/blogs/${props.blog.id}`, {
      method: "DELETE",
    });

    console.log("Blog deleted successfully");
    // reload without using window location
    router.go(0);
  } catch (err) {
    console.log(err.message);
  }
};

const toggleIsDelete = (event) => {
  event.stopPropagation();
  isDelete.value = !isDelete.value;
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
</script>
<template>
  <!-- blog -->
  <div>
    <!-- pop up to confirm delete -->
    <div
      v-if="isDelete"
      class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
    >
      <div class="flex flex-col items-center justify-center h-full">
        <div class="bg-white rounded-xl p-5">
          <p class="text-center">Are you sure you want to delete this blog?</p>
          <div class="flex justify-center gap-2 mt-5">
            <button
              @click="isDelete = false"
              class="bg-slate-300 hover:bg-slate-400 duration-200 rounded-full p-1 px-3 text-center w-fit text-xs"
            >
              Cancel
            </button>
            <button
              @click="deleteBlog"
              class="bg-red-600 hover:bg-red-700 duration-200 rounded-full p-1 px-3 text-center w-fit text-xs text-white font-bold"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <button
      @click="goToBlog"
      class="text-start hover:bg-slate-200 rounded-xl duration-200 m-auto w-full p-3"
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
              {{
                blog.title.substring(0, 40) +
                (blog.title.length > 40 ? "..." : "")
              }}
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
        <div class="">
          <button
            class="bg-blue-600 hover:bg-blue-700 duration-200 text-white fill-white text-sm rounded-full p-1"
            @click="editBlog"
          >
            <EditIcon /></button
          ><button
            class="bg-red-600 hover:bg-red-700 duration-200 text-white fill-white text-sm rounded-full p-1"
            @click="toggleIsDelete"
          >
            <CloseIcon />
          </button>
        </div>
      </div>
    </button>
  </div>
</template>
