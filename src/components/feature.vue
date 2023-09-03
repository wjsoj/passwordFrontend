<script setup>
import featureCard from './featureCard.vue'
import { ref } from 'vue'
let features = ref([
  {
    name: 'Vue',
    description: 'Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a framework depending on different use cases.',
    link: 'https://vuejs.org/'
  },
  {
    name: 'zxcvbn',
    description: 'Low-Budget Password Strength Estimation.  It is more secure, flexible, and usable when sites require a minimal complexity score in place of annoying rules like "passwords must contain three of {lower, upper, numbers, symbols}".',
    link: 'https://github.com/dropbox/zxcvbn'
  },
  {
    name: 'TailwindCSS',
    description: 'Rapidly build modern websites without ever leaving your HTML. It is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
    link: 'https://tailwindcss.com/'
  }
])
</script>

<template>
  <div class="flex flex-col lg:flex-row justify-between items-center mx-4 md:mx-20 mt-16">
    <h1 class="text-[38px] md:text-5xl text-white font-semibold leading-[54px] md:leading-[75px] my-2 text-center sm:text-left">Incredible <br class="block sm:hidden lg:block"> Technologies</h1>
    <p class=" text-slate-400 text-lg md:text-xl leading-[30px] md:leading-9 sm:mx-4 my-2">Here are some technologies we use to create <br class="md:block hidden"> this awesome modern designed website.</p>
  </div>
  <div class="flex flex-col lg:flex-row justify-between items-stretch py-4 mx-0 md:mx-10 lg:mx-12">
    <featureCard v-for="feature in features" :name="feature.name" :description="feature.description" :link="feature.link" :key="feature.name" />
  </div>
</template>