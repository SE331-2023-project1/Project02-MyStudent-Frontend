<script setup lang="ts">

import type { StudentType } from '@/type'

import { useRouter } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'

import type { PropType } from 'vue';
import { useCommentStore } from '@/stores/comment';
import { storeToRefs } from 'pinia';

defineProps({
    teacher: {
        type: Object as PropType<StudentType>,
        require: true
    }
})
const store2 = useCommentStore()
const { comment } = storeToRefs(store2)
</script>

<template>
    <div v-if="teacher" class="text-center">

        <br />
        <div>
            <div class="">
                <h1 class="text-base font-semibold leading-7 text-gray-900">Teacher Profile</h1><br />

            </div>
            <div class="flex justify-center items-center"> <img :src="teacher.teacherimgLink" class="w-80"></div>
            <div class="mt-6 border-t border-gray-100">
                <dl class="divide-y divide-gray-100">
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ teacher.teacherName }} {{
                            teacher.teacherSurname }}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Department</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ teacher.teacherName }} {{
                            teacher.teacherSurname }}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Advisee
                            <form class="w-full max-w-lg ml-28" @submit.prevent="sendTeacherForm">
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">

                                        <input
                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mt-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-password" type="text" placeholder="Input Student ID"
                                            v-model="teacherPassword">
                                    </div>
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-48 mb-10"
                                type="submit">
                                Add
                            </button>
                                </div>
                            </form>

                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <ul>{{ teacher.teacherName }} </ul>
                            <ul>{{ teacher.teacherName }} </ul>
                            <ul>{{ teacher.teacherName }} </ul>
                        </dd>
                    </div>
                </dl>
            </div>
            <div class="">
                <h1 class="text-base font-semibold leading-7 text-gray-900">Edit Profile</h1><br />

            </div>
          
            <div class="mt-6 border-t border-gray-100">
                <dl class="divide-y divide-gray-100">
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <form class="w-full max-w-lg ml-28" @submit.prevent="sendTeacherForm">
                                <div class="flex flex-wrap -mx-3 mb-0">
                                    <div class="w-96 px-3">
                                        <input
                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mt-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-password" type="text" placeholder="Input New Name"
                                            v-model="teacherPassword">
                                    </div>
                                </div>
                            </form>
                        </dd>
                    </div>

                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Department</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <form class="w-full max-w-lg ml-28" @submit.prevent="sendTeacherForm">
                                <div class="flex flex-wrap -mx-3 mb-0">
                                    <div class="w-96 px-3">
                                        <input
                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mt-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-password" type="text" placeholder="Input New Department"
                                            v-model="teacherPassword">
                                    </div>
                                </div>
                            </form>
                            </dd>
                    </div>
                   
                </dl>
            </div>
        </div>
    </div>
</template>


