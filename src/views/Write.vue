<script setup>
import { ref } from "vue";
const content = ref([
  {
    id: "0",
    text: "Introduction",
    type: "header",
  },
  {
    id: "1",
    text: "Road trips can be an exciting and memorable way to travel. Whether you're exploring a new destination or revisiting a favorite spot, a well-planned road trip can offer plenty of adventure and fun. However, planning a road trip can also be daunting, especially if you're new to the experience. Here are some tips to help you plan a successful road trip.",
    type: "paragraph",
  },
  {
    id: "2",
    text: "1. Plan your route: Before hitting the road, plan out your route to ensure you know where you're going and how long it will take to get there. Consider taking scenic routes or detours to see more sights along the way.",
    type: "list",
  },
  {
    id: "3",
    text: "2. Budget wisely: Be sure to budget for gas, food, and accommodations along your route. Consider using apps or websites to find the best deals on lodging and meals, and factor in unexpected expenses.",
    type: "list",
  },
  {
    id: "4",
    text: "3. Pack smart: Pack light, but be sure to bring essentials like a first-aid kit, snacks, and water. Consider bringing a cooler for perishable items and plan your wardrobe accordingly based on the climate and activities you'll be doing.",
    type: "list",
  },
  {
    id: "5",
    text: "4. Check your vehicle: Make sure your vehicle is in good condition before embarking on a road trip. Check your oil and other fluids, inspect your tires, and make sure your spare tire and jack are in working order.",
    type: "list",
  },
  {
    id: "6",
    text: "5. Plan for entertainment: Plan for entertainment options during long stretches of driving, such as music playlists, audiobooks, or games. Consider bringing a portable charger and a tablet or laptop for watching movies or shows during breaks.",
    type: "list",
  },
  {
    id: "7",
    text: "In conclusion, a successful road trip requires careful planning and preparation. By considering these tips, you can help ensure that your road trip is a fun and memorable experience.",
    type: "paragraph",
  },
]);

const addInput = () => {
  content.value.push({
    id: content.value.length,
    text: "",
    type: "paragraph",
  });
};
</script>
<template>
  <div>
    <div class="flex flex-col">
      <textarea
        type="text"
        v-for="(item, key) in content"
        :placeholder="item.type"
        class="w-2/3 bg-slate-100 p-2 resize-none"
        name="1"
        :key="key"
        v-model="item.text"
      />
    </div>
    <button @click="addInput">Add</button>
  </div>
</template>
