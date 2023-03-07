<script setup>
import { ref }  from 'vue'
import getMember from '../composable/getMember'
import githubLogo from './icons/SkillIconsGithubLight.vue'
import instaLogo from './icons/LogosInstagramIcon.vue'

const members = ref(getMember())
console.log(getMember())

const props = defineProps({
    name : {
        type : String
    },
    studentId : {
        type : String
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
    <div class="md:px-32 mx-5  py-4">
        <div class="md:text-3xl text-xl  font-bold md:m-8 my-4">Meet the team</div>
            <div class="grid md:grid-cols-3 gap-x-5 gap-y-8">
                <div v-for="(person, index) in members" :key="index" 
                class="flex flex-col md:pl-12 px-4 space-y-1">
                    <img src="../assets/image/knuckles.jpg" class="flex object-cover h-72 w-80 rounded-xl" />
                    <div class="text-xl font-semibold">{{ person.name }}</div> 
                    <div class="text-zinc-700">{{ person.id }}</div>
                    <div class="flex place-items-center gap-2">
                        <a :href="person.githubUrl" target="_blank"><githubLogo class="text-2xl" /></a>
                        <a :href="person.igUrl" target="_blank"><instaLogo class="text-xl" /></a>
                    </div>

                </div>
            </div>
    </div>
</template>
 
<style scoped>

</style>