<script setup></script>
<template>
  <div class="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
    <h1 class="text-4xl font-bold text-blue-600 mb-4">Oops! Page Not Found.</h1>
    <p class="text-gray-500 mb-8">
      The page you're looking for cannot be found.
    </p>
    <router-link
      to="/"
      class="bg-blue-600 hover:bg-blue-700 duration-200 text-white font-bold py-2 px-4 rounded-full"
    >
      Go back to Home
    </router-link>
  </div>
</template>
