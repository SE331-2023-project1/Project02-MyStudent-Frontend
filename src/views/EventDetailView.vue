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

function updateReply(){
  axios.put('http://localhost:8080/update/1',{
    reply: "I can update!!!"
  })
  // axios({
  //       method: 'PUT',
  //       url: 'http://localhost:8080/update/1',
  //       data: {
  //           id: "1",
  //           reply: "I can update"
  //       }
  //   })
}

</script>

<template>
  <div v-if="event" class="text-center">
    <div>
      <h1 class="text-base font-semibold leading-7 text-gray-900">Student Information</h1><br/>
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
    </div>
    <br/>
    <div>
      <div class="" >
        <h1 class="text-base font-semibold leading-7 text-gray-900">Advisor Information</h1><br/>
       
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
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ event.position + " " + event.advisorName }} {{
              event.advisorSurname }}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Comment</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ event.comment }}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900">Reply</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ event.reply }}</dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" v-if="studentProfile.studentID==event.studentID">
            <dt class="text-sm font-medium leading-6 text-gray-900">Update Reply</dt>
            <form class="w-full max-w-lg ml-28" @submit.prevent="updateReply">
                                    <div class="flex flex-wrap -mx-3 mb-0">
                                        <div class="w-96 px-3">
                                            <input
                                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mt-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-password" type="text" placeholder="Input New Reply"
                                                v-model="newReply">
                                        </div>
                                    </div>
                                   
                                    <button
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mr-32 mb-10 mt-10"
                                        type="submit">
                                        Update
                                    </button>
                                </form>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ event.reply }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>


