<script setup>
import githubLogo from './icons/SkillIconsGithubLight.vue'
import instaLogo from './icons/LogosInstagramIcon.vue'

const props = defineProps({
        name : {
            type : String,
            required : true
        },
        studentId : {
            type : String,
            required : true
        },
        githubUrl : {
            type : String
        },
        instagramUrl : {
            type : String
        },
        image : {
            type : String
        }
    }
)
</script>
 
<template>
    <img :src="image" 
        class="flex object-cover h-72 w-80 rounded-xl" />
    <div class="text-xl font-semibold">
        {{ name }}
    </div> 
    <div class="text-zinc-700">
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
 
<style scoped>

</style>