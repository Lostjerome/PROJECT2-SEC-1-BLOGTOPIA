<script setup>
import Blog from "../components/Blog.vue";
</script>
<template>
  <div class="w-full">
    <div class="h-screen grid place-items-center">
      <div class="md:bg-gray-200 grid  place-items-center w-full p-10">
        <div class="grid md:grid-cols-2 content-center h-full items-center max-w-6xl w-full p-3">
          <div class="flex flex-col space-y-6 my-10">
            <h1 class="text-5xl font-bold">A Blogging Paradise</h1>
          <p class="break-words w-3/4">Unleash your creativity and connect with like minded individuals.</p> <button
            class="bg-blue-600 p-2 rounded-full w-32 text-white font-semibold">Explore
            Blogs</button>
        </div>
        <Blog class="bg-white p-2 rounded-2xl place-self-end hidden md:block" />
      </div>
    </div>
    <div class="mt-7 max-w-6xl w-full hidden md:block">
      <h1 class="text-4xl font-bold pt-7 text-center md:text-start">Suggested blogs for you</h1>
      <div class="max-w-6xl w-full grid grid-cols-3 place-items-center my-10">
        <Blog />
        <Blog/>
        <Blog />
      </div>
    </div>
    <div class="flex flex-row gap-28 max-w-6xl w-full p-6 md:mt-20">
      <div class="w-4/6 ">
        <div class="flex flex-col justify-start content-start gap-2">
          <Blog :isList="true"/>
          <Blog :isList="true"/>
          <Blog :isList="true"/>
          <Blog :isList="true"/>
        </div>
      </div>
      <div class="w-2/5 hidden md:block p-5">
        <div class="bg-gray-200 rounded-2xl p-6 hidden md:block">
          <div>
            <h2 class="font-bold text-xl mb-4">Recommended topics</h2>
          </div>
          <div class="flex flex-wrap gap-2">
            <div class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs">Programming</div>
            <div class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs">Technology</div>
            <div class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs">Self Improvement</div>
            <div class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs">Writing</div>
            <div class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs">Relationships</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
