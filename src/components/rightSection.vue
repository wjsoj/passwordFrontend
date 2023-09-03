<script setup>
let data = defineProps(['img','title'])
</script>

<template>
<div class="flex lg:flex-row flex-col justify-center items-center mx-4 md:mx-10 my-10">
	<div class="flex-1 flex flex-col justify-center items-center lg:items-start md:mx-10">
		<h1 class="text-[38px] md:text-5xl text-white font-semibold leading-[54px] md:leading-[72px] text-center lg:text-left">{{ data.title[0] }} <br> {{ data.title[1] }} </h1>
		<slot name="addon"></slot>
	</div>
    <img :src="data.img" alt="tututu" class="flex-1 w-full md:w-4/5 lg::w-full h-auto object-contain lg:mx-10 my-10">
</div>
</template>