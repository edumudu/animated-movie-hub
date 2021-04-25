<template>
  <span class="text-yellow-300">
    <fa-icon
      v-for="point in 5"
      :key="point"
      :icon="[point <= rating ? 'fas' : 'far', 'star']"
    />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    rating: {
      type: Number,
      required: true,
    },
  },
});
</script>
