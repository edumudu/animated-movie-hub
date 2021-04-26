<template>
  <button
    class="rounded text-white bg-gray-700 p-2 font-semibold inline-flex items-center
            focus:outline-none focus:ring-4 focus:ring-gray-500 transition-colors
            hover:bg-gray-600"
  >
    <fa-icon
      v-if="icon"
      :icon="icon"
      class="mr-3"
    />

    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    icon: {
      type: [String, Array] as PropType<string | string[]>,
      default: '',
    },
  },
});
</script>
