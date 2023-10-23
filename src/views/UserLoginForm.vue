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

const teacherName = ref('')
const teacherSurname = ref('')
const teacherAcademicPosition = ref('')
const teacherUsername = ref('')
const postDesc = ref('')
const postFile = ref('')


const id = ref('')

const store = useMessageStore()

function sendTeacherForm(this: any) {

    axios({
        method: 'POST',
        url: 'http://localhost:8080/login',
        data: {
            id: id.value,
            teacherName: teacherName.value,
            teacherSurname: teacherSurname.value,
            teacherUsername: teacherSurname.value,
            postDesc: postDesc.value,
            postFile: postFile.value,
        
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
    
</template>

<style scoped></style>
