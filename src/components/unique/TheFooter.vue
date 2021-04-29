<template>
  <footer class="bg-indigo-800 text-white">
    <animate-when-intersect v-slot="{ animate, animationTrigger }">
      <div
        :ref="animationTrigger"
        class="container mx-auto px-2 md:px-10 xl:px-40 py-10 flex flex-col md:flex-row
             justify-between items-center"
      >
        <span
          :ref="animate"
          class="text-center md:text-left inline-block animate-slide-left"
        >
          Copyright 2020 - Diciplina de Desenvolvimento de Interfaces Web - <b>ICEI PUC Minas</b>
        </span>

        <span
          :ref="animate"
          class="text-4xl mt-4 md:mt-0 inline-block animate-slide-right"
        >
          <logo-short />
        </span>
      </div>
    </animate-when-intersect>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AnimateWhenIntersect from '@/components/AnimateWhenIntersect.vue';

import LogoShort from '@/assets/svg/logo-short.svg';

export default defineComponent({
  components: {
    LogoShort,
    AnimateWhenIntersect,
  },
});
</script>
