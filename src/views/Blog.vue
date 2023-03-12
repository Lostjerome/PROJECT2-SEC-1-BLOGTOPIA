<script setup>
import Blog from "../components/Blog.vue";
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
<template>
  <div>
    <div class="w-full max-w-6xl m-auto">
      <button
        @click="scrollToTop"
        class="w-12 h-12 fixed bottom-5 right-5 rounded-full bg-blue-500"
      ></button>
      <div class="flex space-x-5">
        <div class="w-1/3">
          <div class="sticky top-3 space-y-3">
            <div class="p-5 rounded-xl bg-slate-200 font-bold">Contents</div>
            <div class="p-5 rounded-xl bg-slate-200 font-bold">Topics</div>
          </div>
        </div>
        <div class="rounded-xl w-full">
          <div class="w-full h-96 bg-slate-200 rounded-xl"></div>
          <br />
          <p class="text-slate-400">Month dd, yyyy</p>
          <h1 class="text-2xl font-bold">
            Exploring the Magic of the Night City
          </h1>
          <br />
          <div>
            <p>
              As the sun sets and the day comes to a close, cities transform
              into a completely different world. The hustle and bustle of
              daytime activities give way to the mesmerizing glow of night
              lights, creating a unique atmosphere that can only be experienced
              after dark. In this blog, we'll explore why the night city is such
              a magical place.
            </p>
            <br />
            <p>
              One of the most notable aspects of a night city is the abundance
              of lights. The neon lights, streetlights, and headlights from
              passing cars create a dazzling display that illuminates the city
              streets. As the darkness sets in, the city comes to life with
              bright colors and captivating patterns. It's no wonder why so many
              people find the city at night so alluring - the lights create a
              sense of excitement and energy that can be felt in the air.
            </p>
            <br />
            <p>
              Another reason why the night city is so magical is the sense of
              mystery and intrigue that comes with it. As the crowds disperse
              and the streets become quieter, the city takes on a completely
              different vibe. Dark alleyways and hidden corners that may have
              seemed unremarkable during the day now become shrouded in mystery.
              This sense of mystery is often associated with the city at night,
              adding to the allure of the night city.
            </p>
            <br />
            <p>
              In addition to the sensory experiences that come with a night
              city, there are also practical benefits to exploring the city
              after dark. For one, the temperature tends to be cooler, making it
              more comfortable to walk around and enjoy the sights.
              Additionally, many popular attractions, such as museums and
              galleries, offer extended hours on certain days of the week,
              making it possible to explore these sites during less crowded
              hours.
            </p>
            <br />
            <p>
              In conclusion, the night city is a magical and alluring place.
              From the abundance of lights to the sense of mystery and intrigue,
              there is something truly special about experiencing the city after
              dark. Whether you're a lifelong city dweller or a curious visitor,
              the night city is a must-see destination that promises to leave a
              lasting impression.
            </p>
            <br />
          </div>
        </div>
        <div class="w-1/3">
          <div class="sticky top-3 space-y-3">
            <div class="p-5 rounded-xl bg-slate-200 font-bold">Author</div>
          </div>
        </div>
      </div>
      <div class="w-full max-w-5xl m-auto">
        <h1 class="text-2xl font-bold">Continue reading</h1>
        <div class="grid grid-cols-3">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </div>
  </div>
</template>
