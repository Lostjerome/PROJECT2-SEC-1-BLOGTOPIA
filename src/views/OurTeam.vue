<script setup>
import { onMounted, ref, computed } from "vue";
import Member from "../components/Members.vue";
import getMember from "../composable/getMember";
import AddMember from "../components/icons/MaterialSymbolsPersonAddRounded.vue"
import { deleteMembers } from '../composable/deleteMembers.js';
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


onMounted(async () => {
  members.value = await getMember();
});

const setAddMember = ref(false)
const toggleAddMember = () => {
  setAddMember.value = !setAddMember.value
  member.value = {}
  selectedBinaryFile.value = ""
  previewSrc.value = ""
}

const addNewMember = async (member) => {
  member.img = previewSrc.value
  try {
    const response = await fetch('http://localhost:5000/members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: member.id,
        name: member.name,
        url: {
          github: member.github,
          ig: member.ig
        },
        img: member.img
      })
      // body : JSON.stringify(member.value)
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
const checkBeforeDelete = (id) => {
  const confirmDelete = confirm("Are you sure you want to delete this member?");
  if (confirmDelete) {
    deleteMembers(id);
    members.value = members.value.filter((member) => member.id !== id);
  }
}; 

</script>
<template>
  <!-- <div class="flex flex-col max-w-4xl min-w-fit m-auto"> -->

  <div v-show="setAddMember" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20">
    <div class="border rounded-xl shadow-2xl px-16 pt-10 bg-white my-24 mx-auto max-w-fit min-w-max min-h-fit">
      <label for="file-upload" class="box-content h-64 w-72 bg-slate-200 hover:bg-slate-300 duration-200 rounded-xl">
        <img :src="previewSrc" v-show="canPreview" alt="preview" class="object-cover h-64 w-72 rounded-lg m-auto" />
      </label>
      <input id="file-upload" type="file" accept=".png,.jpg,.jpeg" @change="chooseBinaryFile" class=" m-auto" />

      <div class="text-base font-semibold uppercase pt-2">
        Student Id : <br>
        <input type="text" class="border rounded-md px-3 w-full" v-model="member.id" />
      </div>
      <div class="text-base font-semibold uppercase pt-2">
        Name : <br>
        <input type="text" class="border rounded-md px-3 w-full" v-model="member.name" />
      </div>
      <div class="text-base font-semibold uppercase pt-2">
        Github Url : <br>
        <input type="text" class="border rounded-md px-3 w-full" v-model="member.github" />
      </div>
      <div class="text-base font-semibold uppercase pt-2">
        Instagrm Url : <br>
        <input type="text" class="border rounded-md px-3 w-full" v-model="member.ig" />
      </div>
      <div class="m-3 flex justify-between">
        <button class="p-1 border text-sm justify-end bg-blue-700 hover:bg-blue-800 duration-200 text-white rounded-lg"
          @click="addNewMember(member), toggleAddMember()">SUBMIT</button>
        <button class="p-1 border text-sm justify-end bg-red-700 hover:bg-red-800 duration-200 text-white rounded-lg"
          @click="toggleAddMember()">CANCEL</button>
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
            <!-- <Member
              :image="person.img"     
              :name="person.name"
              :student-id="person.id"   
              :github-url="person.url.github"
              :instagram-url="person.url.ig"
            /> -->
            <Member :member="person" @delete="checkBeforeDelete"/>
          </div>
          <div @click="toggleAddMember"
            class="box-content h-64 w-72 border border-3 mx-10 space-y-1 rounded-lg grid place-content-center ">
            <AddMember class="text-5xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
