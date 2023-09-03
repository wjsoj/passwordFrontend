<script setup>
let data = defineProps(['content'])
</script>
<template>  
  <div class="flex flex-col justify-center items-start mx-2 md:mx-5 mb-10">
    <h1 class="text-white font-bold text-[20px] mt-10 mb-2">{{ data.content.title }}</h1>
    <a v-for="linke in data.content.links" :href="linke.link" target="_blank" class=" text-slate-500 text-base cursor-pointer hover:text-slate-400 my-[5px]">{{ linke.name }}</a>
  </div>
</template>