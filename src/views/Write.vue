<script setup>
import { ref } from "vue";
const content = ref({
  id: "0",
  title: "Blog's title",
  cover: "",
  contents: [
    {
      id: "0",
      text: "What is Blogtopia",
      type: "header",
    },
    {
      id: "1",
      text: "Lorem ipsum dolor sit amet consectetur. Gravida dignissim urna aenean mauris mauris leo quis in. Aliquet dui commodo id risus hendrerit a vel.",
      type: "paragraph",
    },
  ],
  topics: ["programming", "web development"],
  author: "John Doe",
  date: "2021-05-01",
});

const addInput = () => {
  content.value.push({
    id: content.value.length,
    text: "",
    type: "paragraph",
  });
};

defineEmits(["publish"]);

const textarea = ref(null);
// const resize = () => {
//   console.log(textarea.value);
//   console.log(textarea.value.scrollHeight);
//   // textarea.value.style.height = "18px";
//   // textarea.value.style.height = textarea.value.scrollHeight + "px";
// };

const title = ref(null);
const paragraph = ref(null);
</script>
<template>
  <div>
    <div class="flex flex-col">
      <input
        type="text"
        @input="resize"
        ref="title"
        :placeholder="content.contents[0].type"
        class="w-2/3 bg-slate-100 p-2 resize-none"
        name="1"
        v-model="content.contents[0].text"
      />
      <textarea
        name="paragraph"
        ref="paragraph"
        id=""
        rows="10"
        :placeholder="content.contents[1].type"
        v-model="content.contents[1].text"
      ></textarea>
    </div>
    <!-- <button @click="addInput">Add</button> -->
  </div>
</template>
