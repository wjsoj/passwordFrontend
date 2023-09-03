<script setup>
let data = defineProps(['name','description','link'])
</script>

<template>
  <div class="flex flex-col justify-center items-start py-6 px-6 rounded-xl bg-slate-900 feature-card border-2 border-slate-700 mx-6 my-6 hover:shadow-xl">
    <h1 class="text-sky-100 font-semibold text-[24px]">{{ data.name }}</h1>
    <a :href="data.link" target="_blank" class="text-base font-normal text-sky-500 hover:text-sky-600 cursor-pointer underline mb-5">View Website</a>
    <p class=" text-slate-300 font-medium text-base">
      {{ data.description }}
    </p>
  </div>
</template>