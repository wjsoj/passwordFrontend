<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
let isOpen = ref(false)
</script>

<template>
<n-message-provider>
  <div>
    <nav class="flex justify-between items-center h-20">
      <h2 class="text-2xl text-indigo-200 ml-4 md:ml-10">Password Helper</h2>
      <div class="hidden md:flex flex-row justify-center items-center">
        <RouterLink class="text-sky-100 text-[17px] my-5 cursor-pointer hover:text-sky-600 mx-5" to="/">Home</RouterLink>
        <RouterLink class="text-sky-100 text-[17px] my-5 cursor-pointer hover:text-sky-600 mx-5" to="/meter">Password Meter</RouterLink>
        <RouterLink class="text-sky-100 text-[17px] my-5 cursor-pointer hover:text-sky-600 mx-5 mr-10" to="/generator">Password Generator</RouterLink>
      </div>
      <div class="flex md:hidden">
        <!-- 写一个菜单图标 -->
        <svg class="w-6 h-6 text-white cursor-pointer mr-10" @click="isOpen = !isOpen" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h12a1 1 0 100-2H4z"
            clip-rule="evenodd" />
        </svg>
        <div v-if="isOpen" class="absolute top-16 right-5 w-40 h-40 bg-black-gradient rounded-md shadow-md flex flex-col justify-center items-start z-[10]">
          <RouterLink class="text-sky-100 text-[17px] my-2 cursor-pointer hover:text-sky-600 mx-2" to="/" @click="isOpen = !isOpen">Home</RouterLink>
          <div class="w-full h-[1px] bg-slate-500"></div>
          <RouterLink class="text-sky-100 text-[17px] my-2 cursor-pointer hover:text-sky-600 mx-2" to="/meter" @click="isOpen = !isOpen">Password Meter</RouterLink>
          <div class="w-full h-[1px] bg-slate-500"></div>
          <RouterLink class="text-sky-100 text-[17px] my-2 cursor-pointer hover:text-sky-600 mx-2" to="/generator" @click="isOpen = !isOpen">Password Generator</RouterLink>
        </div>
      </div>
    </nav>

    <!-- <div class="z-[0] absolute w-1/3 h-1/4 blue__gradient_2 right-100"></div> -->

    <div class="z-[0] absolute w-1/3 h-1/4 blue__gradient_2 right-20 top-100"></div>

    <main>
      <RouterView />
    </main>
  </div>
</n-message-provider>
</template>