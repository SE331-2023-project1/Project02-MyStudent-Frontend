<script setup lang="ts">
import { ref } from 'vue'
import type { StudentType } from '@/type'
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { RouterLink, RouterView } from 'vue-router'

import type { PropType } from 'vue';
import { useCommentStore } from '@/stores/comment'

defineProps({
  event: {
    type: Object as PropType<StudentType>,
    require: true
  }
})
const store = useEventStore()
const event = storeToRefs(store).event
const id = ref(event?.value?.id)

const store2 = useCommentStore()
const { comment } = storeToRefs(store2)

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
        </dl>
      </div>
    </div>
  </div>
</template>


<style scoped>
dt {
  background: rgb(206, 226, 248);
    
  }
  dd {
    background: rgb(239, 247, 255);
  }
</style>