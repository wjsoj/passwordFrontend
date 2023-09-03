<script setup>
import zxcvbn from 'zxcvbn';
import { computed, ref } from 'vue';

let password = ref('')
let isShow = ref(false)
let detail = ref('View Details')
let strength = computed(() => {
  if (zxcvbn(password.value).guesses_log10 <= 4) {
    return 'Weak'
  } else if (zxcvbn(password.value).guesses_log10 <= 8) {
    return 'Medium'
  } else if (zxcvbn(password.value).guesses_log10 <= 12) {
    return 'Strong'
  } else {
    return 'Very Strong'
  }
})

function changestate() {
  isShow.value = !isShow.value
  if (isShow.value) {
    detail.value = 'Hide Details'
  } else {
    detail.value = 'View Details'
  }
}
</script>

<template>
  <div class="w-full min-h-screen mt-[-5rem] pt-28 overflow-scroll flex flex-col justify-center items-center">
    <h1 class="text-white text-[42px] md:text-5xl pb-10 text-gradient text-center">Estimate Your <br class=" block md:hidden"> Password's Strength</h1>
    <input class=" rounded-lg bg-slate-200 bg-opacity-75 w-5/6 md:w-2/3 h-10 md:h-12 text-xl md:text-2xl text-center" type="text" v-model="password"/>
    <meter class="w-5/6 md:w-2/3 rounded-lg my-6 h-5" v-if="password" min="0" max="12" low="4" high="8" optimum="10" :value="zxcvbn(password).guesses_log10"></meter>
    <p class="text-white md:text-lg mx-6" v-if="password">

      <div>Strength: {{ strength }}</div>

      <span v-if="zxcvbn(password).sequence[0].pattern!='bruteforce'">
        Pattern Exist: {{ zxcvbn(password).sequence[0].pattern }}
        <br>
        Token: {{ zxcvbn(password).sequence[0].token }}
      </span>
      <div>
        Crack Time (Slow Hash, 1e4 per second): <strong class="text-lg md:text-xl">{{ zxcvbn(password).crack_times_display.offline_slow_hashing_1e4_per_second }}</strong> / {{ zxcvbn(password).crack_times_seconds.offline_slow_hashing_1e4_per_second }}s
        <br>
        Crack Time (Fast Hash, 1e10 per second): <strong class="text-lg md:text-xl">{{ zxcvbn(password).crack_times_display.offline_fast_hashing_1e10_per_second }}</strong> / {{ zxcvbn(password).crack_times_seconds.offline_fast_hashing_1e10_per_second }}s
      </div>

      <div v-if="zxcvbn(password).feedback.warning" class="font-bold text-red-500">{{ zxcvbn(password).feedback.warning }}</div>
      <div v-if="zxcvbn(password).feedback.suggestions">
          <div v-for="suggestion in zxcvbn(password).feedback.suggestions">{{ suggestion }} 
          <br>
        </div>
      </div>
    </p>

    <div class="flex flex-col justify-center items-center mb-10 mt-3">
      <button class=" bg-sky-500 bg-opacity-25 rounded-lg text-white px-6 py-3 text-lg md:text-xl my-6" @click="changestate()">{{ detail }}</button>
      <div v-if="isShow" class="rounded-xl bg-black mx-4 md:mx-20 px-6 py-6">
        <h1 class=" text-slate-300">{{ zxcvbn(password )}}</h1>
      </div>
    </div>
  </div>
</template>