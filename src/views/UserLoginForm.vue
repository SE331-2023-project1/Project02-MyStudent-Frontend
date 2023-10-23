<script setup lang="ts">
import NProgress from 'nprogress'
import { useRouter } from 'vue-router';
import type { StudentType } from '@/type';
import EventService from '../services/EventService'
import { computed, ref, vModelText, watchEffect } from 'vue'
import axios, { AxiosResponse } from 'axios';
import router from '@/router';
import { onBeforeRouteUpdate } from 'vue-router';
import { useEventStore } from '@/stores/event';
import { useMessageStore } from '../stores/message';
import { useCommentStore } from '@/stores/comment';
import { useRoleStore } from '@/stores/role';


const id = ref('')

const store = useMessageStore()
const storeRole = useRoleStore()

function changeRoleAdmin(){
    storeRole.updateRole("admin")
    const role = storeRole.role
    console.log(role)
}
function changeRoleStudent(){
    storeRole.updateRole("student")
    const role = storeRole.role
    console.log(role)
    axios.get("http://localhost:8080/users/1")
    .then(function (response) {
    storeRole.updateProfile(response.data.name,response.data.surname,response.data.position,response.data.studentID,response.data.department,response.data.image)
    // teachers.value = response.data
    console.log(response.data);
    //Test
    console.log(storeRole.name)
  })
}
function changeRoleTeacher(){
    storeRole.updateRole("teacher")
    const role = storeRole.role
    console.log(role)
    axios.get("http://localhost:8080/teachers/1")
    .then(function (response) {
    storeRole.updateProfile(response.data.name,response.data.surname,response.data.position,response.data.studentID,response.data.department,response.data.image)
    // teachers.value = response.data
    console.log(response.data);
    //Test
    console.log(storeRole.image)
  })
}

function sendTeacherForm(this: any) {

    axios({
        method: 'POST',
        url: 'http://localhost:8080/login',
        data: {
            // id: id.value,
            // teacherName: teacherName.value,
            // teacherSurname: teacherSurname.value,
            // teacherUsername: teacherSurname.value,
            // postDesc: postDesc.value,
            // postFile: postFile.value,
        
        }
    })

    store.updateMesage("A new teacher has been added to the list")

    setTimeout(() => {
        store.resetMessage()
    }, 5000)
    router.push({
        name: 'TeacherList',
    })
}

</script>

<template>
    <form class="w-full max-w-lg ml-28" @submit.prevent="sendTeacherForm">
        <div><h1>Login</h1></div><br/>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-course">
                    Username <span style="color: darkgrey;">or Student ID</span>
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password" type="text" placeholder="Input Username" v-model="postDesc">
                <p class="text-gray-600 text-xs italic"></p>
            </div>
        </div>
        
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-link">
                    Password
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password" type="password" placeholder="Input Password" v-model="postFile">
                <p class="text-gray-600 text-xs italic">Keep it secret</p>
            </div>
        </div>
        
        
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-48 mb-10" type="submit">
            Log in
        </button>
        
        
    </form>
    <div>
        <h3 class= "w-full max-w-lg ml-40">Mock Role</h3>
        <br/>
    </div>
    <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10 mb-10" type="submit" @click="changeRoleAdmin">
            Admin
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8 mb-10" type="submit" @click="changeRoleTeacher">
            Teacher
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8 mb-10" type="submit" @click="changeRoleStudent">
            Student
        </button>
    </div>
</template>

<style scoped></style>
