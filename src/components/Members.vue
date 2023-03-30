<script setup>
import githubLogo from "./icons/SkillIconsGithubLight.vue";
import instaLogo from "./icons/LogosInstagramIcon.vue";
import deleteIcon from "./icons/IcBaselineDelete.vue";
import editIcon from './icons/MaterialSymbolsEdit.vue'
const props = defineProps({

        member : {
            type : Object,
            required : true
        }
    }
)
defineEmits(['delete','edit'])
</script>
 
<template>
<div>
    <img :src="member.img" 
        class="flex object-cover h-64 w-72 rounded-lg" />
    <div class="text-base font-semibold uppercase pt-2">
        {{ member.name }}
    </div> 
    <div class="text-sm font-semibold text-[#000000b9] pb-1 border-b-2">
        {{ member.id }}
        </div>
   <!-- All-icons -->
    <div class="flex flex-row items-center justify-between">
        <!-- github & instargram icon -->
        <div class="flex place-items-center gap-2">
            <a :href="member.url.github" target="_blank">
                <githubLogo class="text-2xl" />
            </a>
            <a :href="member.url.ig" target="_blank">
                <instaLogo class="text-xl" />
            </a>
        </div>
        <!-- edit & delete icon -->
        <div class="flex">
            <editIcon  class="text-gray-400 hover:text-blue-500 cursor-pointer" @click="$emit('edit', member.id )"/>
            <deleteIcon class="text-gray-400 hover:text-red-300 cursor-pointer" @click="$emit('delete', member.id )"/>
        </div>
    </div>
</div>
</template>
