<script setup>
import { useRoute, useRouter } from "vue-router";
import { deleteBlog } from "../composable/deleteBlog";

const route = useRoute();
const router = useRouter();
const emit = defineEmits(['onFetch'])
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

const deleteTargetBlog = async (id) =>{
    try{
      await deleteBlog(id)
      emit('onFetch')
    }
    catch(err){
      console.log(err)
    }
}



</script>
<template>
  <!-- blog -->
  <!-- <button
    @click="changeRoute"
    class="text-start hover:bg-slate-200 rounded-xl duration-100 m-auto p-3"
    :class="isList == true ? '' : 'h-full'"
  > -->
    <div
      class="flex rounded-2xl h-full"
      :class="isList == true ? 'flex-rows' : 'flex-col'"
    >
      <!-- image -->
      <div class="w-80">
        <img
          @click="changeRoute"
          :src="blog.cover"
          class="rounded-lg bg-slate-300 outline outline-1 outline-slate-300 w-full h-52 object-cover cursor-pointer"
        />
      </div>

      <!-- content_blog -->
      <div class="w-80 my-5" :class="isList == true ? 'ml-3 mb-4' : ''">
        <!-- profile -->
        <div class="flex flex-rows justify-between">
          <!-- username&date_to_post -->
          <div class="flex">
            <h2 class="mr-1">{{ blog.author }}</h2>
            <h2 class="text-slate-400">{{ blog.date }}</h2>
          </div>
         <!-- delete-button -->
          <div>
            <button @click="deleteTargetBlog(blog.id)" class=" bg-slate-200 hover:bg-slate-300 rounded-2xl">Delete</button>
          </div>
          
        </div>
         

        <!-- preview_content -->
        <div @click="changeRoute" class=" cursor-pointer">
          <h1 class="font-bold mt-2 mb-2 text-2xl">{{ blog.title }}</h1>
          <p
            class="break-words text-slate-400"
            :class="isList == true ? 'pr-3' : ''"
          >
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
  <!-- </button> -->
</template>
