<template>
  <section
    id="highlights"
    class="py-8 px-2"
  >
    <div class="container mx-auto md:px-10 xl:px-40">
      <animate-when-intersect v-slot="{ animate }">
        <div class="flex justify-between items-center mb-8">
          <v-title
            class="animate-slide-left"
            :ref="animate"
          >
            Em destaque
          </v-title>

          <select class="combobox border rounded-md bg-transparent px-6 py-3 cursor-pointer">
            <option
              v-for="category in categories"
              :key="category"
            >
              {{ category }}
            </option>
          </select>
        </div>

        <div class="flex flex-wrap gap-20 items-center justify-center xl:justify-between">
          <img
            v-for="(image, i) in images"
            :key="image.alt"
            alt="Movie 1"
            loading="lazy"
            width="250"
            height="350"
            class="rounded w-60 shadow-xl animate-slide-up animate-delay transition-transform
                 duration-200 transform hover:scale-110"
            :ref="animate"
            :src="image.src"
            :style="{ '--delay': i * 0.8 + 0.8 }"
          >
        </div>
      </animate-when-intersect>

      <div class="text-right mt-10">
        <v-button icon="plus">
          Carregar mais filmes
        </v-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import VTitle from '@/components/VTitle.vue';
import VButton from '@/components/VButton.vue';
import AnimateWhenIntersect from '@/components/AnimateWhenIntersect.vue';

export default defineComponent({
  components: {
    VTitle,
    VButton,
    AnimateWhenIntersect,
  },

  setup() {
    const images = [
      {
        src: 'https://picsum.photos/id/1/250/350',
        alt: 'Movie 1',
      },
      {
        src: 'https://picsum.photos/id/1/250/350',
        alt: 'Movie 2',
      },
      {
        src: 'https://picsum.photos/id/1/250/350',
        alt: 'Movie 3',
      },
      {
        src: 'https://picsum.photos/id/1/250/350',
        alt: 'Movie 4',
      },
    ];

    const categories = ['Categoria: Todos', 'Aventura', 'Romance', 'Comédia'];

    return {
      images,
      categories,
    };
  },
});
</script>

<style lang="scss" scoped>
  .combobox {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    appearance: none;
    background-repeat: no-repeat;
    padding: 0.5rem 2.5rem 0.5rem 0.75rem;
    background-position: right 0.5rem center;
    background-size: 1.5em 1.5em;
  }
</style>
