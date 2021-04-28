<template>
  <footer class="bg-indigo-800 text-white">
    <animate-when-intersect v-slot="{ animate, animationTrigger }">
      <div
        class="container mx-auto px-2 md:px-10 xl:px-40 py-10 flex flex-col md:flex-row
             justify-between items-center"
        :ref="animationTrigger"
      >
        <span
          class="text-center md:text-left inline-block animate-slide-left"
          :ref="animate"
        >
          Copyright 2020 - Diciplina de Desenvolvimento de Interfaces Web - <b>ICEI PUC Minas</b>
        </span>

        <span
          class="text-4xl mt-4 md:mt-0 inline-block animate-slide-right"
          :ref="animate"
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
