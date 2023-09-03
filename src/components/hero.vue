<script setup>
import number from './number.vue';
</script>

<template>
  <div class="w-full h-full flex flex-col lg:flex-row justify-center items-center pt-[20px] md:pt-[40px] pb-[10px] lg:pt-[60px] xl:pt-[80px] md:pb-[30px]">
    <div class="flex flex-col justify-center items-start">
      <div class="bg-black-gradient rounded-md text-white text-base font-medium px-5 py-2 mx-4 mb-6 md:mx-10">
        <svg class="w-6 h-6 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-8a2 2 0 11-4 0 2 2 0 014 0z"
            clip-rule="evenodd" />
        </svg>
        Use a stronger passsword to protect your <span class="text-gradient">privacy</span>
      </div>

      <h1 class="flex-1 text-5xl md:text-[60px] xl:text-[72px] mx-4 md:mx-10 md:leading-[80px] xl:leading-[100px] leading-[60px] text-white font-semibold">Optimize Your
      <br>
      <span class="text-gradient">Password</span>
      <br>
      From now on</h1>

      <p class="md:max-w-[550px] mx-4 md:mx-10 text-gray-300 font-light py-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>

    <div class="w-4/5 md:w-3/5 lg:w-2/5 min-w-[100px] my-6 lg:mt-0 flex justify-center items-center">
      <img src="../assets/logo.png" alt="logo" class="w-3/5 object-contain">
    </div>
  </div>
  <number />
</template>