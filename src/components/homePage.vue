<script setup>
import feature from './feature.vue';
import hero from './hero.vue';
import footel from './footel.vue';
import leftSection from './leftSection.vue';
import rightSection from './rightSection.vue';
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { ref } from 'vue';
import { NIcon,NTimeline,NTimelineItem,NConfigProvider,darkTheme,NRate } from 'naive-ui';
import { Video16Filled,Chat16Regular,Alert20Regular } from '@vicons/fluent';

let footdata = ref([
  {
    content: {
      title: 'Company',
      links: [
        {
          name: 'About Us',
          link: '#'
        },
        {
          name: 'Features',
          link: '#'
        },
        {
          name: 'Careers',
          link: '#'
        },
        {
          name: 'Privacy Policy',
          link: '#'
        },
        {
          name: 'Terms of Service',
          link: '#'
        }
      ]
    }
  },
  {
    content: {
      title: 'Product',
      links: [
        {
          name: 'Password Meter',
          link: '#'
        },
        {
          name: 'Password Generator',
          link: '#'
        },
        {
          name: 'Password Manager',
          link: '#'
        },
        {
          name: 'Password Vault',
          link: '#'
        },
        {
          name: 'Password Security',
          link: '#'
        }
      ]
    }
  },
  {
    content: {
      title: 'About',
      links: [
        {
          name: 'About Us',
          link: '#'
        },
        {
          name: 'Features',
          link: '#'
        },
        {
          name: 'Careers',
          link: '#'
        },
        {
          name: 'Privacy Policy',
          link: '#'
        },
        {
          name: 'Terms of Service',
          link: '#'
        }
      ]
    }
  }
])
</script>
<template>
  <hero />

  <leftSection :img="img1" :title="['I don\'t Know','What to say']">
    <template #addon>
      <h2 class=" text-slate-400 text-lg md:text-xl leading-[28px] md:leading-8 my-6">I insert a paragraph here. But I still don't know what to say. How amazing it is. The thing confused me is that what will happend if the text I insert to the slot hasn't reached the height I want it to be. I think that will break the structure I have built.</h2>

      <button class="rounded-2xl border-2 border-cyan-300 text-xl text-sky-100 hover:text-sky-200 py-2 px-6 my-2">Got it!</button>
    </template>
  </leftSection>

  <rightSection :img="img2" :title="['This is a title','Just a title']">
    <template #addon>
      <h2 class=" text-slate-400 text-lg md:text-xl leading-[28px] md:leading-8 my-6">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</h2>

      <button class="rounded-2xl bg-pink-500 hover:bg-pink-600 text-xl text-white py-2 px-6 my-2">Yeah, I know that.</button>
    </template>
  </rightSection>

  <leftSection :img="img3" :title="['Let us make','Something different']">
    <template #addon>
      <div class="mt-6 overflow-x-auto max-w-[90vw] sm:mr-[-80px] md:mr-[-40px] lg:mr-0 pb-3">
        <n-config-provider :theme="darkTheme">
        <n-timeline horizontal>
          <n-timeline-item content="Start"/>
          <n-timeline-item
            type="success"
            content="How"
            time="2018-04-03"
          />
          <n-timeline-item
            type="error"
            content="Just an error."
            time="2018-04-04"
          />
          <n-timeline-item
            type="warning"
            title="a warning"
            time="2018-04-05"
          />
          <n-timeline-item
            type="info"
            content="confirm"
            time="2018-04-06"
          />
        </n-timeline>
        </n-config-provider>
      </div>

      <div class="my-4">
        <n-rate size="large" />
      </div>

      <button class="rounded-2xl border-dashed border-2 border-cyan-300 text-xl text-sky-100 hover:text-sky-200 hover:bg-slate-700 py-2 px-6 my-2">Rating it!</button>
    </template>
  </leftSection>

  <feature />

  <div class="flex flex-row flex-wrap bg-slate-900 justify-between items-start px-4 md:px-20">
    <footel v-for="foot in footdata" :content="foot.content" />
  </div>

  <div class="bg-black py-3 flex flex-row justify-between">
    <h2 class=" text-slate-400 text-sm ml-10 md:ml-24">Copyright 2023 By WJS, <br class="block sm:hidden"> Made with enthusiasm.</h2>
    <div class="flex flex-row md:mr-20 mr-6">
      <n-icon size="22" color="white" class="mx-1">
        <Video16Filled />
      </n-icon>
      <n-icon size="22" color="white" class="mx-1">
        <Chat16Regular />
      </n-icon>
      <n-icon size="22" color="white" class="mx-1">
        <Alert20Regular />
      </n-icon>
      
    </div>
  </div>

</template>