<script setup>
import Blog from "../components/Blog.vue";
</script>
<template>
  <!-- body -->
  <div class="mt-4 max-w-6xl m-auto">
    <h1 class=" font-bold text-3xl text-gray-500">Result for <span class="text-black">“Search word”</span></h1>
    
    <!-- content -->
    <div class=" flex flex-col md:flex-row-reverse mt-7 w-full">

      <!-- Recommended topics -->
      <!-- Pui's code -->
      <div class="md:w-2/5 md:p-5">
        <div class="md:bg-gray-200 rounded-2xl md:p-6">
          <div>
            <h2 class="font-bold text-xl mb-4">Recommended&nbsp;topics</h2>
          </div>
          <div class="flex md:flex-wrap gap-2 items-center">
            <div class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs">Programming</div>
            <div class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs">Technology</div>
            <div class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs">Self&nbsp;Improvement</div>
            <div class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs">Writing</div>
            <div class="bg-gray-300 rounded-full p-2 px-4 text-center w-fit text-xs">Relationships</div>
          </div>
        </div>
      </div>
      
      <!-- Khing's code -->
      <!-- <div class="md:p-5">
          <div class="h-fit rounded-2xl md:bg-gray-200 md:p-6">
            <h1 class=" font-bold  text-xl mb-4">Recommended&nbsp;topics</h1>
            <div class=" flex gap-3 items-center md:flex-wrap">
                <a href="Programming"     class=" bg-gray-300 rounded-full w-fit pl-3 pr-3 p-2 text-center text-xs hover:bg-slate-400">Programming</a>
                <a href="Technology"      class=" bg-gray-300 rounded-full w-fit pl-3 pr-3 p-2 text-center text-xs hover:bg-slate-400">Technology</a>
                <a href="SelfImprovement" class=" bg-gray-300 rounded-full w-fit pl-3 pr-3 p-2 text-center text-xs hover:bg-slate-400">Self&nbsp;Improvement</a>
                <a href="Writing"         class=" bg-gray-300 rounded-full w-fit pl-3 pr-3 p-2 text-center text-xs hover:bg-slate-400">Writing</a>
                <a href="Relationships"   class=" bg-gray-300 rounded-full w-fit pl-3 pr-3 p-2 text-center text-xs hover:bg-slate-400">Relationships</a>
            </div>
          </div>
      </div> -->
      <!-- Blog-list -->

      <div class="md:mr-40">
          <Blog :isList="true"/>
          <Blog :isList="true"/>
          <Blog :isList="true"/>
          <Blog :isList="true"/>
          <Blog :isList="true"/>
      </div>
      
      
      
  </div>
</div>
</template>
