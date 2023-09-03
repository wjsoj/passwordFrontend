<script setup>
import { NMessageProvider,darkTheme } from 'naive-ui'
import passwordGenerator from './passwordGenerator.vue';
</script>

<template>
<n-message-provider :theme="darkTheme">
  <passwordGenerator />
</n-message-provider>
</template>