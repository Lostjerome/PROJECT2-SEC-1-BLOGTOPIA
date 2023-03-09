<script setup>
import { ref }  from 'vue'
import getMember from '../composable/getMember'
import githubLogo from './icons/SkillIconsGithubLight.vue'
import instaLogo from './icons/LogosInstagramIcon.vue'

const members = ref(getMember())

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
    <div class="flex flex-col max-w-7xl min-w-fit m-auto">
        <div class="text-3xl  font-bold m-8 my-4">
            Meet the team
        </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-y-8 justify-items-center">
                <div v-for="(person, index) in members" :key="index" 
                class="flex flex-col mx-10 space-y-1">
                    <img src="../assets/image/knuckles.jpg" 
                        class="flex object-cover h-72 w-80 rounded-xl" />
                    <div class="text-xl font-semibold">
                        {{ person.name }}
                    </div> 
                    <div class="text-zinc-700">
                        {{ person.id }}
                    </div>
                    <div class="flex place-items-center gap-2">
                        <a :href="person.githubUrl" target="_blank">
                            <githubLogo class="text-2xl" />
                        </a>
                        <a :href="person.igUrl" target="_blank">
                            <instaLogo class="text-xl" />
                        </a>
                    </div>

                </div>
            </div>
    </div>
</template>
 
<style scoped>

</style>