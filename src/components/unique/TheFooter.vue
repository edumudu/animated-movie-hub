<template>
  <footer class="bg-indigo-800 text-white">
    <div
      class="container mx-auto px-2 md:px-10 xl:px-40 py-10 flex flex-col md:flex-row
             justify-between items-center"
    >
      <span class="text-center md:text-left">
        Copyright 2020 - Diciplina de Desenvolvimento de Interfaces Web - <b>ICEI PUC Minas</b>
      </span>

      <span class="text-4xl mt-4 md:mt-0">
        <logo-short />
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import LogoShort from '@/assets/svg/logo-short.svg';

export default defineComponent({
  components: { LogoShort },
});
</script>
