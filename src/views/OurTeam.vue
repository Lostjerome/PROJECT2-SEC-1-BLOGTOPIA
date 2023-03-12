<script setup>
import { ref } from "vue";
import Member from "../components/Members.vue";
import getMember from "../composable/getMember";

const members = ref(getMember());
console.log(getMember());
</script>
<template>
  <div class="flex flex-col max-w-7xl min-w-fit m-auto">
    <div class="text-3xl font-bold ml-10">Meet the team</div>
    <div class="flex flex-wrap justify-center gap-y-8 my-10">
      <div
        v-for="(person, index) in members"
        :key="index"
        class="flex flex-col mx-10 space-y-1"
      >
        <Member
          :name="person.name"
          :student-id="person.id"
          :github-url="person.url.github"
          :instagram-url="person.url.ig"
          :image="person.img"
        />
      </div>
    </div>
  </div>
</template>
