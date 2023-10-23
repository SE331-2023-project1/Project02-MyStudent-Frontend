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

const advisor = ref('')
const postDesc = ref('')
const postFile = ref('')


const id = ref('')

const store = useMessageStore()


function sendFeed(this: any) {
    let formData = new FormData();
    // formData.append("file", file);

    axios.post('http://localhost:8080/uploadFile',
        formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        }
    )
    store.updateMesage("A new annoucement is added")

    setTimeout(() => {
        store.resetMessage()
    }, 5000)
}

</script>

<template>
    <form class="w-full max-w-lg ml-28" @submit.prevent="sendFeed">
        <div><h1>Post annoucement</h1></div><br/>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-link">
                    Teacher name
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password" type="text" placeholder="Input name" v-model="advisor">
                <p class="text-gray-600 text-xs italic">Input your name</p>
            </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-course">
                    Description
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password" type="text" placeholder="Input Description" v-model="postDesc">
                <p class="text-gray-600 text-xs italic">The annoucement detail</p>
            </div>
        </div>
        
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-link">
                    Upload file
                </label>
                <input
                    id="file"
                    type="file">
                <p class="text-gray-600 text-xs italic">Input the file only</p>
            </div>
        </div>
        
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-48 mb-10" type="submit">
            Post
        </button>
    </form>
</template>

<style scoped></style>
