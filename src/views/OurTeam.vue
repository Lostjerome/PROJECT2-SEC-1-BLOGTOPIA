<script setup>
import { onMounted, ref, computed } from "vue";
import Member from "../components/Members.vue";
import getMember from "../composable/getMember";
import AddMemberIcon from '../components/icons/MaterialSymbolsPersonAddRounded.vue'
import { deleteMembers } from '../composable/deleteMembers.js';

onMounted(async () => {
  members.value = await getMember();
});

const members = ref([])
const member = ref({})

onMounted(() => {
  member.value = {
    id: "",
    name: "",
    github: "",
    ig: "",
    img: ""
  }
})

// Btn
const setAddMember = ref(false)
const toggleAddMember = () => {
  setAddMember.value = !setAddMember.value
  member.value = {}
  selectedBinaryFile.value = ""
  previewSrc.value = ""
  console.log(setAddMember.value)
}

// Add member
const addNewMember = async (member) => {
  member.img = previewSrc.value
  if(!isItComplete()) return;
  try{
    const response = await fetch('http://localhost:5000/members',{
      method : 'POST',
			headers : {
				'Content-Type': 'application/json'
			},
      body : JSON.stringify({
        id : member.id,
        name : member.name,
        url : {
          github : member.github,
          ig : member.ig
        },
        img: member.img
      })
    })
    console.log('add successfully')
    const addedMember = await response.json()	// add backend เสร็จ ถึงไป add ใน frontend
    members.value.push(addedMember)
    console.log(members.value)
  }
  catch (error) {
    console.log(error.m)
  }
}

// Select image 
const selectedBinaryFile = ref("")
const previewSrc = ref("")

const chooseBinaryFile = (e) => {
  (selectedBinaryFile.value = e.target.files[0])
  console.log(selectedBinaryFile.value)
}

const canPreview = computed(() => {
  if (typeof selectedBinaryFile.value === 'object') {
    previewImage()
    console.log(previewSrc.value)
    return true
  }
  return false
})

const previewImage = () => {
  const reader = new FileReader();
  reader.readAsDataURL(selectedBinaryFile.value)
  reader.onload = () => {
    previewSrc.value = reader.result;
  }
  reader.onerror = (error) => {
    console.log("Error: ", error);
  }
}

// Delete member
const checkBeforeDelete = (id) => {
  const confirmDelete = confirm("Are you sure you want to delete this member?");
  if (confirmDelete) {
    deleteMembers(id);
    members.value = members.value.filter((member) => member.id !== id);
  }
}; 

// Check form input
const isItComplete = () => {
  if(member.value.id === ""){
    alert("Please enter your student id")
    return false
  }
  if(member.value.name === ""){
    alert("Please enter your name")
    return false
  }
  if(member.value.img === "") {
    alert("Please choose your image")
    return false
  }
  return true
}

</script>
<template>
  <div v-show="setAddMember" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20 ">
    <div class="border rounded-3xl shadow-2xl px-16 pt-14 bg-white my-24 mx-auto max-w-fit min-w-max min-h-fit">
      <div class=" h-64 w-72 bg-slate-200 hover:bg-slate-300 duration-200 rounded-xl">
        <label 
        for="file-upload" >
          <div class=" h-64 w-72 bg-slate-200 hover:bg-slate-300 duration-200 rounded-xl">
            <img 
            :src="previewSrc" 
            v-show="canPreview" 
            alt="preview" class="object-cover h-64 w-72 rounded-lg m-auto" />
          </div>    
        </label>
      </div>
        <input 
        id="file-upload" 
        type="file" 
        accept=".png,.jpg,.jpeg" 
        @change="chooseBinaryFile" 
        class="hidden"   
        />
        <div class="text-base font-semibold pt-2">
          Student Id : <br>
          <input type="text" placeholder="64xxxxxxxxx" class="border rounded-md px-3 w-full placeholder:text-xs placeholder:italic" v-model="member.id" />
        </div>
        <div class="text-base font-semibold pt-2">
          Name : <br>
          <input type="text" placeholder="Harry Potter" class="border rounded-md px-3 w-full placeholder:text-xs placeholder:italic" v-model="member.name" />
        </div>
        <div class="text-base font-semibold pt-2">
          Github Url : <br>
          <input type="text" placeholder="https://github.com/username" class="border rounded-md px-3 w-full placeholder:text-xs placeholder:italic" v-model="member.github" />
        </div>
        <div class="text-base font-semibold pt-2">
          Instagrm Url : <br>
          <input type="text" placeholder="https://www.instagram.com/username/" class="border rounded-md px-3 w-full placeholder:text-xs placeholder:italic" v-model="member.ig" />
        </div>
        <div class="my-5 flex justify-between">
          <button class="py-1 px-5 text-sm font-semibold bg-blue-700 hover:bg-blue-800 text-white hover: rounded-full"
            @click="addNewMember(member), toggleAddMember()">            
            Add
          </button>
          <button class="py-1 px-3 text-sm font-semibold border bg-[#fff] hover:bg-gray-200 text-black rounded-full"
            @click="toggleAddMember()">
            Cancel
          </button>
        </div> 
    </div>
  </div>
  <div>
    <div class="flex max-w-6xl m-auto">
      <div class="">
        <div class="flex justify-between">
          <div class="text-3xl font-bold ml-10 mt-6">We can't do this without</div>
        </div>
        <div class="flex flex-wrap justify-center gap-y-8 my-10">
          <div v-for="(person, index) in members" :key="index" class="flex flex-col mx-10 space-y-1">
            <Member :member="person" @delete="checkBeforeDelete"/>
          </div>
          <div @click="toggleAddMember"
            class="box-content h-64 w-72 border border-3 mx-10 space-y-1 rounded-lg grid place-content-center ">
            <AddMemberIcon class="text-5xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
