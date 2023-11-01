<script setup lang="ts">
import { ref } from 'vue'
import type { StudentType } from '@/type'
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'

import type { PropType } from 'vue';
import { useCommentStore } from '@/stores/comment'
import { profile } from 'console'
import { useRoleStore } from '../stores/role'
import axios from 'axios'

defineProps({
  event: {
    type: Object as PropType<StudentType>,
    require: true
  }
})
const store = useEventStore()
const event = storeToRefs(store).event
const id = ref(event?.value?.id)
const studentProfile = useRoleStore()
const store2 = useCommentStore()
const { comment } = storeToRefs(store2)
const newReply = ref('')

const name = ref('')
const surname = ref('')
const studentID = ref('')
const image = ref('')
const department = ref('')

const useEdit = localStorage.getItem("edit")
const lastparam = window.location.pathname.split("/").pop()

function updateReply(this: any) {
  axios.put('http://localhost:8080/update/'+lastparam, {
    reply: newReply.value
  })
}
function updateComment(this: any) {
  axios.put('http://localhost:8080/update/'+lastparam, {
    comment: comment.value
  })
}

</script>

<template>
  <div v-if="event" class="text-center">
    <div>
      <h1 class="text-base font-semibold leading-7 text-gray-900">Student Information</h1><br />
      <div class="flex justify-center items-center">
        <img :src="event.image" class="w-80">
      </div>

      <div class="mt-6 border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ event.name }} {{ event.surname }}
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Student ID</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ event.studentID }}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Department</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ event.department }}</dd>
          </div>
        </dl>
      </div>
      <form v-if="studentProfile.name == event.name" class="" @submit.prevent="updateReply" style="">
        <hr style="margin-bottom: 40px;">Edit Profile
        <div class="mt-6 border-t border-gray-100">
          <dl class="divide-y divide-gray-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input
                  class=" ml-80 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name" type="text" placeholder="First name" v-model="name">
                <input
                  class=" ml-8 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name" type="text" placeholder="Last name" v-model="surname">
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Student ID</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><input
                  class=" ml-24 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name" type="text" placeholder="Student ID" v-model="studentID"></dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Department</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <input
                  class=" ml-24 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name" type="text" placeholder="Department" v-model="department">
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">Confirm</dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-20 mb-10"
                  type="submit">
                  Update
                </button>
              </dd>
            </div>
          </dl>
        </div>
      </form>
    </div>
    <br />
    <div>
      <div class="">
        <h1 class="text-base font-semibold leading-7 text-gray-900">Advisor Information</h1><br />

      </div>
      <div class="flex justify-center items-center">
        <Router-link :to="{ name: 'teacher-profile', params: { id } }">
          <img :src="event.advisorImage" class="w-80">
        </Router-link>
      </div>
      <div class="mt-6 border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ event.position + " " +
              event.advisorName }} {{
              event.advisorSurname }}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Comment</dt>
            <dd class="mt-1 text-sm leading-6 text-red-400 sm:col-span-2 sm:mt-0">{{ event.comment == null || "" ? "No Comment Yet" :
             event.comment 
            }}
              <form v-if="studentProfile.role == 'teacher'" class="" @submit.prevent="updateComment" style="margin-top: 20px; margin-left: 100px;">
                <input
                  class=" ml-24 w-80 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name" type="text" placeholder="New Comment" v-model="comment">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-20 mb-10"
                  type="submit">
                  Edit Comment
                </button>
              </form>
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Reply</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ event.reply }}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
            v-if="studentProfile.studentID == event.studentID">
            <dt class="text-sm font-medium leading-6 text-gray-900">Update Reply</dt>
            <form class="w-full max-w-lg ml-28" @submit.prevent="updateReply">
              <div class="flex flex-wrap -mx-3 mb-0">
                <div class="w-96 px-3">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mt-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password" type="text" placeholder="Input New Reply" v-model="newReply">
                </div>
              </div>

              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mr-32 mb-10 mt-10"
                type="submit">
                Update
              </button>
            </form>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"></dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>


