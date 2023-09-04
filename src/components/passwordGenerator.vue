<script setup>
import { ref } from 'vue'
import { NCheckbox,NConfigProvider,darkTheme,NGi,NGrid,NSlider,NInputNumber,useMessage,NIcon } from 'naive-ui'
import { ClipboardTaskAdd24Filled } from '@vicons/fluent'

window.$message = useMessage()

let password = ref('')
let length = ref(8)
let hasLower = ref(true)
let hasUpper = ref(false)
let hasNumber = ref(true)
let hasSymbol = ref(false)
let queue = ref([])
if (localStorage.getItem('password')) {
  queue.value = JSON.parse(localStorage.getItem('password'))
}
let isMdScreen = ref(window.innerWidth >= 640)

// 把password复制到剪贴板
function copyToClipboard(password) {
  const textarea = document.createElement('textarea')
  if (!password) {
    return
  }
  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  window.$message.success('Password copied to clipboard')
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

// 根据指定长度和是否使用小写字母、大写字母、数字和特殊符号生成密码
function generatePassword() {
  const len = length.value
  let generatedPassword = ''
  let randomFunc = {
    hasLower: getRandomLower,
    hasUpper: getRandomUpper,
    hasNumber: getRandomNumber,
    hasSymbol: getRandomSymbol
  }
  const typesCount = hasLower.value + hasUpper.value + hasNumber.value + hasSymbol.value
  const typesArr = [{ hasLower }, { hasUpper }, { hasNumber }, { hasSymbol }].filter(
    item =>{
      const key = Object.keys(item)[0]
      return item[key]._value
    }
  )
  if (typesCount === 0) {
    return ''
  }
  for (let i = 0; i < len; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomFunc[funcName]()
    })
  }
  const finalPassword = generatedPassword.slice(0, len)
  password.value = finalPassword
  queue.value.unshift(finalPassword)
  if (queue.value.length > 10) {
    // 从队列尾部删除
    queue.value.pop()
  }
  localStorage.setItem('password', JSON.stringify(queue.value))
}

function clear() {
  queue.value = []
  localStorage.removeItem('password')
}
</script>

<template>
<n-config-provider :theme="darkTheme">
  <div class="flex md:flex-row flex-col justify-center items-stretch my-10">
    
    <div class="flex flex-col bg-slate-600 rounded-2xl justify-center items-center px-10 py-10 mx-10 md:mx-5 my-5">
      <h1 class="font-semibold text-slate-200 md:text-3xl text-2xl mb-6 text-center">
        Password Generator
      </h1>
      <div class="w-full h-[1px] bg-slate-500"></div>
      <h2 class="text-center min-h-[3rem] text-xl text-white bg-slate-800 border-2 border-indigo-600 border-solid rounded-3xl px-6 py-2 max-[420px]:min-w-[240px] min-w-[300px] mt-6 font-mono">
        {{ password }}
      </h2>
      <div class="flex flex-row">
        <button class=" bg-sky-500 bg-opacity-75 rounded-full text-white px-4 py-2 text-base md:text-lg my-6 mx-4 hover:bg-sky-600" @click="generatePassword()">Generate</button>
        <button class=" bg-indigo-500 hover:bg-indigo-600 bg-opacity-75 rounded-full text-white px-8 py-2 text-base md:text-lg my-6 mx-4" @click="copyToClipboard(password)">Copy</button>
      </div>

      <div class="w-full h-[1px] bg-slate-500 my-1"></div>

      <div class="my-4">
        <!-- n-grid 屏幕宽度640px以上两列，其余一列 -->
        <n-grid :y-gap="10" :cols="isMdScreen ? 2 : 1">
          <n-gi>
            <n-checkbox class="text-white text-base my-1" size="large" v-model:checked="hasLower">
            Lowercase Letters
            </n-checkbox>
          </n-gi>
          <n-gi>
            <n-checkbox class="text-white text-base my-1" size="large" v-model:checked="hasUpper">
            Uppercase Letters
            </n-checkbox>
          </n-gi>
          <n-gi>
            <n-checkbox class="text-white text-base my-1" size="large" v-model:checked="hasNumber">
            Digit
            </n-checkbox>
          </n-gi>
          <n-gi>
            <n-checkbox class="text-white text-base my-1" size="large" v-model:checked="hasSymbol">
            Special Character
            </n-checkbox>
          </n-gi>
        </n-grid> 
      </div>

      <div class="w-full h-[1px] bg-slate-500 my-1"></div>

      <h2 class="text-white font-semibold text-xl my-4">
        Length
      </h2>
      <n-slider class="my-2" v-model:value="length" :min="4" :max="40" :step="1"/>
      <n-input-number class="my-2" v-model:value="length" size="large" :min="4" />
    </div>

    <div class="flex flex-col bg-slate-700 rounded-2xl justify-between items-center px-10 py-10 mx-10 md:mx-5 my-5" v-if="queue.length">
      <div>
        <h1 class="text-center font-semibold text-slate-200 md:text-3xl text-2xl mb-6">
          History
        </h1>
        <div class="w-full h-[1px] bg-slate-500"></div>
        <div class="flex flex-col justify-center items-start max-[420px]:min-w-[240px] min-w-[300px] mt-4">
          <div class="flex flex-row justify-between items-center w-full my-1" v-for="item in queue">
            <h2 class="text-sky-100 text-lg font-mono" >
              {{ item }}
            </h2>
            <n-icon size="25">
              <clipboard-task-add-24-filled class="text-sky-100 hover:text-sky-400" @click="copyToClipboard(item)"/>
            </n-icon>
          </div>
        </div>
      </div>

      <button class=" bg-lime-500 hover:bg-lime-600 bg-opacity-75 rounded-full text-white py-2 px-8 text-base md:text-lg mx-4 mt-4" @click="clear()">Clear History</button>
    </div>
  
  </div>
</n-config-provider>
</template>