<script setup lang="ts">
    defineProps({
        resource: {
            type: String,
            required: true,
            default: 'student'
        }
    })
</script>

<template>

    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-semibold text-indigo-600">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the {{ resource }} you’re looking for.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <RouterLink :to="{ name: 'StudentList'}"><a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Back to home page</a></RouterLink>
          
          
        </div>
      </div>
    </main>
  </template>