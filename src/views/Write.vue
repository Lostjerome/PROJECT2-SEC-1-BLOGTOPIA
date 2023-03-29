<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import CloseIcon from "../components/icons/CloseIcon.vue";
import GlobeIcon from "../components/icons/GlobeIcon.vue";
import { addBlog } from "../composable/addBlog";
import { editBlog } from "../composable/editBlog";
import { getBlog } from "../composable/getBlogs";
import { getTopics } from "../composable/getTopics";
import { validate } from "../composable/validateWrite";

const router = useRouter();
const route = useRoute();
const blog = ref({});
const isEditting = ref(route.params.id);
const topics = ref([]);

const onPublish = () => {
  blog.value.date = new Date().toISOString().slice(0, 10);
  blog.value.cover = previewSrc.value;
};

const add = async () => {
  onPublish();
  if (!validate(blog)) return;
  try {
    const data = await addBlog(blog.value);
    router.push(`/blog/${data.id}`);
  } catch (err) {
    console.log(err.message);
  }
};

const edit = async () => {
  onPublish();
  if (!validate(blog)) return;
  try {
    const data = await editBlog(route.params.id, blog.value);
    router.push(`/blog/${data.id}`);
  } catch (err) {
    console.log(err.message);
  }
};

const selectedBinaryFiles = ref("");
const previewSrc = ref("");
const chooseBinaryFile = (e) => {
  selectedBinaryFiles.value = e.target.files[0];
};
const previewImage = () => {
  const reader = new FileReader();
  reader.readAsDataURL(selectedBinaryFiles.value);
  reader.onload = () => {
    previewSrc.value = reader.result;
  };
  reader.onerror = (error) => {
    console.log("Error: ", error);
  };
};
const canPreview = computed(() => {
  if (typeof selectedBinaryFiles.value === "object") {
    previewImage();
    return true;
  }
  if (blog.value.cover) {
    previewSrc.value = blog.value.cover;
    return true;
  }
  return false;
});

const filteredTopicWord = ref("");
const filteredTopics = computed(() => {
  return topics.value
    .filter((topic) => {
      return topic
        .toLowerCase()
        .includes(filteredTopicWord.value.toLowerCase());
    })
    .filter((topic) => {
      return !blog.value.topics.includes(topic);
    });
});
const chooseTopic = (topic) => {
  if (blog.value.topics.includes(topic)) {
    blog.value.topics = blog.value.topics.filter((t) => t !== topic);
  } else {
    blog.value.topics.push(topic);
  }
};

onMounted(async () => {
  if (route.params.id) {
    const res = await getBlog(route.params.id);
    blog.value = res;
  } else {
    blog.value = {
      title: "",
      cover: "",
      content: "",
      topics: [],
      author: "",
      date: "",
    };
  }

  let res = await getTopics();
  topics.value = res;
});
</script>
<template>
  <div class="bg-white drop-shadow-md sticky top-0 w-full">
    <div
      class="flex items-center justify-between w-full max-w-4xl px-3 py-5 mx-auto lg:px-4"
    >
      <div class="flex items-center">
        <router-link to="/" class="flex">
          <span
            class="self-center text-3xl font-bold whitespace-nowrap flex items-center gap-1"
          >
            <GlobeIcon class="w-8 h-8" /> Blogtopia</span
          >
        </router-link>
      </div>
      <button
        @click="isEditting ? edit() : add()"
        class="px-5 py-2 bg-blue-600 hover:bg-blue-700 duration-200 text-white rounded-full"
      >
        Publish
      </button>
    </div>
  </div>
  <div class="max-w-2xl m-auto p-5">
    <div class="flex flex-col space-y-3">
      <label
        for="file-upload"
        class="w-full h-96 bg-slate-200 hover:bg-slate-300 duration-200 rounded-xl"
      >
        <img
          v-show="canPreview"
          :src="previewSrc"
          alt="preview"
          class="w-full h-96 object-cover rounded-xl outline outline-1 outline-gray-300"
        />
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".png,.jpg,.jpeg"
        @change="chooseBinaryFile"
        class="hidden m-auto"
      />
      <input
        type="text"
        placeholder="title"
        name="title"
        v-model="blog.title"
        class="w-full p-2 rounded-lg outline outline-gray-200 text-2xl outline-none"
        required
      />

      <textarea
        name="paragraph"
        id=""
        rows="10"
        placeholder="paragraph"
        class="w-full p-2 rounded-lg outline outline-gray-200 resize-none outline-none"
        v-model="blog.content"
        required
      />
      <input
        type="text"
        placeholder="Author"
        class="w-full p-2 outline outline-gray-200 rounded-lg"
        v-model="blog.author"
      />

      <p class="font-bold">Select topics</p>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="(topic, key) in blog.topics"
          :key="key"
          class="rounded-full pr-3 pl-2 py-1 duration-200 flex gap-1 items-center bg-blue-600 hover:bg-blue-700 text-white fill-white"
          @click="chooseTopic(topic)"
        >
          <close-icon /> {{ topic }}
        </button>
      </div>
      <div
        class="flex flex-wrap space-x-2 space-y-2 bg-slate-100 p-3 rounded-xl"
      >
        <input
          type="text"
          v-model="filterWord"
          class="w-full rounded-lg outline-none p-2"
          placeholder="Search topics"
        />
        <button
          v-for="(topic, key) in filteredTopics"
          :key="key"
          class="bg-slate-300 hover:bg-slate-400 rounded-full px-3 py-1 duration-200"
          @click="chooseTopic(topic)"
        >
          {{ topic }}
        </button>
      </div>
    </div>
  </div>
</template>
