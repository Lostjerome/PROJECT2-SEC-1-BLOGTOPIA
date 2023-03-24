<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getBlog } from "../composable/getBlogs";
import { getTopics } from "../composable/getTopics";

const router = useRouter();
const route = useRoute();
const blog = ref({});
const isEditting = ref(route.params.id);
const topics = ref([]);

const addBlog = async () => {
  blog.value.date = new Date().toISOString().slice(0, 10);
  blog.value.cover = previewSrc.value;
  if (!validate()) return;
  validate();
  try {
    const res = await fetch(`http://localhost:5000/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog.value),
    });

    const data = await res.json();
    console.log("Blog added successfully");
    router.push("/");
  } catch (err) {
    console.log(err.message);
  }
};

const editBlog = async () => {
  blog.value.date = new Date().toISOString().slice(0, 10);
  blog.value.cover = previewSrc.value;
  if (!validate()) return;
  try {
    const res = await fetch(`http://localhost:5000/blogs/${route.params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog.value),
    });

    const data = await res.json();
    console.log("Blog updated successfully");
    router.push("/");
  } catch (err) {
    console.log(err.message);
  }
};

const chooseTopic = (topic) => {
  if (blog.value.topics.includes(topic)) {
    blog.value.topics = blog.value.topics.filter((t) => t !== topic);
  } else {
    blog.value.topics.push(topic);
  }
};

const selectedBinaryFiles = ref("");

const chooseBinaryFile = (e) => {
  selectedBinaryFiles.value = e.target.files[0];
  console.log(selectedBinaryFiles.value);
};

const previewSrc = ref("");

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
    console.log(previewSrc.value);
    return true;
  }
  return false;
});

const filterWord = ref("");

// filter topics by filterWord and exclude already selected topics
const filteredTopics = computed(() => {
  return topics.value
    .filter((topic) => {
      return topic.toLowerCase().includes(filterWord.value.toLowerCase());
    })
    .filter((topic) => {
      return !blog.value.topics.includes(topic);
    });
});

// form validation function
const validate = () => {
  if (blog.value.title === "") {
    alert("Please enter a title");
    return false;
  }
  if (blog.value.content === "") {
    alert("Please enter some content");
    return false;
  }
  if (blog.value.topics.length === 0) {
    alert("Please select at least one topic");
    return false;
  }
  if (blog.value.author === "") {
    alert("Please enter your name");
    return false;
  }
  if (blog.value.date === "") {
    alert("Please enter a date");
    return false;
  }
  return true;
};

onMounted(() => {
  if (route.params.id) {
    getBlog(route.params.id).then((res) => {
      blog.value = res;
    });
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
  getTopics().then((res) => {
    topics.value = res;
  });
});
</script>
<template>
  <div class="bg-white drop-shadow-md sticky top-0 w-full">
    <div
      class="flex items-center justify-between w-full max-w-6xl px-3 py-5 mx-auto lg:px-4"
    >
      <div class="flex items-center">
        <router-link to="/" class="flex">
          <span class="self-center text-3xl font-bold whitespace-nowrap"
            >Blogtopia</span
          >
        </router-link>
      </div>
      <button
        @click="isEditting ? editBlog() : addBlog()"
        class="px-5 py-2 bg-blue-700 hover:bg-blue-800 duration-200 text-white rounded-full"
      >
        publish
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
          class="w-full h-96 object-cover rounded-xl"
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

      <p>Select topic</p>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="(topic, key) in blog.topics"
          :key="key"
          :class="
            blog.topics.includes(topic)
              ? 'bg-blue-500 text-white '
              : 'bg-slate-300 hover:bg-slate-400'
          "
          class="rounded-full px-3 py-1 duration-200"
          @click="chooseTopic(topic)"
        >
          {{ topic }}
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
          :class="
            blog.topics.includes(topic)
              ? 'bg-blue-500 text-white '
              : 'bg-slate-300 hover:bg-slate-400'
          "
          class="rounded-full px-3 py-1 duration-200"
          @click="chooseTopic(topic)"
        >
          {{ topic }}
        </button>
      </div>
    </div>
  </div>
</template>
