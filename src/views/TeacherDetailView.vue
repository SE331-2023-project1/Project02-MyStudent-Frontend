<script setup lang="ts">

import type { StudentType } from '@/type'

import { useRouter } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'

import { PropType, ref } from 'vue';
import { useCommentStore } from '@/stores/comment';
import { storeToRefs } from 'pinia';
import { useRoleStore } from '../stores/role';
import axios from 'axios';

defineProps({
    teacher: {
        type: Object as PropType<StudentType>,
        require: true
    }
})
const id = ref('')
const name = ref('')
const surname = ref('')
const position = ref('')
const department = ref('')
const studentID = ref('')
const store2 = useCommentStore()
const profile = useRoleStore()
const { comment } = storeToRefs(store2)

function updateTeacherForm(){
    axios({
        method: 'PUT',
        url: 'http://localhost:8080/teachers/'+profile.$id,
        data: {
            studentID: studentID.value,
            name: name.value,
            surname: surname.value,
            department: department.value,
        }
    })
}
</script>

<template>
    <div v-if="teacher" class="text-center">

        <br />
        <div>
            <div class="">
                <h1 class="text-base font-semibold leading-7 text-gray-900">Teacher Profile</h1><br />

            </div>
            <div class="flex justify-center items-center"> <img :src="teacher.image" class="w-80"></div>
            <div class="mt-6 border-t border-gray-100">
                <dl class="divide-y divide-gray-100">
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {{ teacher.position }}
                            {{ teacher.name }} {{
                                teacher.surname }}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Department</dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ teacher.department }}</dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt class="text-sm font-medium leading-6 text-gray-900">Advisee
                            <form class="w-full max-w-lg ml-28" @submit.prevent="sendTeacherForm">
                                <div class="flex flex-wrap -mx-3 mb-6">
                                    <div class="w-full px-3">

                                        <input v-if="profile.role =='admin'"
                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mt-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-password" type="text" placeholder="Input Student ID"
                                            v-model="studentID">
                                    </div>
                                    <button v-if="profile.role =='admin'"
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-48 mb-10"
                                        type="submit">
                                        Add
                                    </button>
                                </div>
                            </form>

                        </dt>
                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <ul v-if="profile.advisee == null" style="color: rgb(255, 80, 80);"> There is no advisee yet </ul>
                            <ul v-else>{{ profile.advisee }} </ul>
                        </dd>
                    </div>
                </dl>
            </div>
            <div class="" v-if="profile.role == 'admin'">
                <h1 class="text-base font-semibold leading-7 text-gray-900">Edit Profile</h1><br />



                <div class="mt-6 border-t border-gray-100">
                    <dl class="divide-y divide-gray-100">
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt class="text-sm font-medium leading-6 text-gray-900"></dt>
                            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <form class="w-full max-w-lg ml-28" @submit.prevent="updateTeacherForm">
                                    <div class="flex flex-wrap -mx-3 mb-0">
                                        <div class="w-96 px-3">
                                            <input
                                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mt-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-password" type="text" placeholder="Input New Position"
                                                v-model="teacherPosition">
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mb-0">
                                        <div class="w-96 px-3">
                                            <input
                                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mt-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-password" type="text" placeholder="Input New First Name"
                                                v-model="teacherName">
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mb-0">
                                        <div class="w-96 px-3">
                                            <input
                                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mt-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-password" type="text" placeholder="Input New Last Name"
                                                v-model="teacherSurname">
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mb-0">
                                        <div class="w-96 px-3">
                                            <input
                                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mt-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-password" type="text" placeholder="Input New Department"
                                                v-model="teacherDepartment">
                                        </div>
                                    </div>
                                    <button
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mr-32 mb-10 mt-10"
                                        type="submit">
                                        Update
                                    </button>
                                </form>

                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>


