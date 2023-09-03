<script setup>
import { ref } from 'vue'
import { NNumberAnimation } from 'naive-ui'
let people = ref(null)
let star = ref(null)
</script>
<template>
<div class="flex flex-col md:flex-row justify-around items-center mx-20 mb-20 mt-10 md:mt-0">
  <div class="my-1">
    <span class="text-white text-2xl md:text-3xl">
      <n-number-animation ref="people" :from="0" :to="13796"/>
    </span>
    <span class="text-gradient text-[18px] sm:text-[22px] md:text-[26px]"> Users</span>
  </div>
  <div class="text-gradient hidden md:block text-[26px]"> | </div>
  <div class="my-1">
    <span class="text-white text-2xl md:text-3xl">
      <n-number-animation ref="star" :from="0" :to="23.6" :precision="1"/>
      K
    </span>
    <span class="text-gradient text-[18px] sm:text-[22px] md:text-[26px]"> Stars</span>
  </div>
  <div class="text-gradient hidden md:block text-[26px]"> | </div>
  <div class="my-1">
    <span class="text-white text-2xl md:text-3xl">
      <n-number-animation ref="star" :from="0" :to="30000" />
      +
    </span>
    <span class="text-gradient text-[18px] sm:text-[22px] md:text-[26px]"> Comments</span>
  </div>
</div>
</template>