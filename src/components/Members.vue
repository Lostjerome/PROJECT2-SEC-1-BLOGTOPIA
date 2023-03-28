<script setup>

import githubLogo from './icons/SkillIconsGithubLight.vue'
import instaLogo from './icons/LogosInstagramIcon.vue'
import deleteIcon from './icons/IcBaselineDelete.vue'
const props = defineProps({
        // name : {
        //     type : String,
        //     required : true
        // },
        // studentId : {
        //     type : String,
        //     required : true
        // },  
        // githubUrl : {
        //     type : String
        // },
        // instagramUrl : {
        //     type : String
        // },
        // image : {
        //     type : String
        // }
        member : {
            type : Object,
            required : true
        }
    }
)
defineEmits(['delete'])
</script>
 
<template>
        <img :src="member.img" 
            class="flex object-cover h-64 w-72 rounded-lg" />
        <div class="text-base font-semibold uppercase pt-2">
            {{ member.name }}
        </div> 
        <div class="text-sm font-semibold text-[#000000b9] pb-1 border-b-2">
            {{ member.id }}
        </div>
    <div class="flex flex-row items-center justify-between">

        <div class="flex place-items-center gap-2">
            <a :href="member.url.github" target="_blank">
                <githubLogo class="text-2xl" />
            </a>
            <a :href="member.url.ig" target="_blank">
                <instaLogo class="text-xl" />
            </a>
        </div>
        <deleteIcon class="text-gray-400 hover:text-red-300" @click="$emit('delete', member.id )"/>
    </div>

        <!-- <img :src="image" 
            class="flex object-cover h-64 w-72 rounded-lg" />
        <div class="text-base font-semibold uppercase pt-2">
            {{ name }}
        </div> 
        <div class="text-sm font-semibold text-[#000000b9] pb-1 border-b-2">
            {{ studentId }}
        </div>
        <div class="flex place-items-center gap-2">
            <a :href="githubUrl" target="_blank">
                <githubLogo class="text-2xl" />
            </a>
            <a :href="instagramUrl" target="_blank">
                <instaLogo class="text-xl" />
            </a>
        </div> -->

<template>
  <img :src="image" class="flex object-cover h-64 w-72 rounded-lg" />
  <div class="text-base font-semibold uppercase pt-2">
    {{ name }}
  </div>
  <div class="text-sm font-semibold text-[#000000b9] pb-1 border-b-2">
    {{ studentId }}
  </div>
  <div class="flex place-items-center gap-2">
    <a :href="githubUrl" target="_blank">
      <githubLogo class="text-2xl" />
    </a>
    <a :href="instagramUrl" target="_blank">
      <instaLogo class="text-xl" />
    </a>
  </div>
</template>


