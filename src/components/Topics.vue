<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { getTopics } from "../composable/getTopics";
import { scrollToTop } from "../composable/scrollToTop";
const filterWord = ref("");
const router = useRouter();
const topics = ref([]);

const filteredTopics = computed(() => {
  return topics.value.filter((topic) => {
    return topic.toLowerCase().includes(filterWord.value.toLowerCase());
  });
});

const selectTopic = (topicName) => {
  router.push(`/topic/${topicName}`);
  scrollToTop();
};

onMounted(async () => {
  topics.value = await getTopics();
});
</script>
<template>
  <div class="lg:w-1/2">
    <div class="lg:mx-3 hidden lg:block">
      <div class="bg-slate-200 rounded-2xl p-4 py-5 w-full">
        <h2 class="font-bold text-xl mb-4">Explore by topic</h2>
        <input
          type="text"
          v-model="filterWord"
          class="w-full rounded-md text-sm outline-none p-1 mb-4"
          placeholder="eg. gaming, music, etc."
        />
        <div class="flex flex-wrap overflow-auto gap-2 items-center">
          <button
            class="bg-slate-300 rounded-full py-1 p-2 text-center text-xs hover:bg-slate-400 duration-200"
            v-for="(topic, key) in filteredTopics"
            :key="key"
            @click="selectTopic(topic)"
          >
            {{ topic }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
