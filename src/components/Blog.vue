<script setup>
import { ref } from 'vue';
const itList = ref(true)


</script>
<template>
  <!-- blog -->
  <div class="w-full h-full m-6" :class="itList == true?'flex flex-rows':'flex flex-col'">
    <!-- image -->
    <div class=" w-72 h-44">
      <img src="../assets/image/skynews-drew-scanlon-blinking-white-guy_4786055.jpg" class=" rounded-2xl">
    </div>
  
    <!-- content_blog -->
        <div class=" w-96 h-32 pr-20 " :class="itList == true?'ml-3':''">
          <!-- profile -->
            <div class="flex flex-rows">
                <!-- profile_pic -->
                <div class=" bg-slate-400 w-7 h-7 rounded-full"></div>
                <!-- username&date_to_post -->
                <h2 class=" ml-1">Tanapat&nbsp;Daoloy</h2>
                <h2 class=" text-slate-300 ">&nbsp;·&nbsp;Month&nbsp;dd,yyyy</h2>
            </div>
           <!-- preview_content --> 
          <div>
            <h1 class=" font-bold mt-2 mb-2 text-2xl">Blog's title</h1>
            <p class=" break-words text-slate-400">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </div>
        </div>
  </div>


</template>