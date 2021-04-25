<template>
  <div
    id="makingof"
    class="bg-indigo-100"
  >
    <div class="container mx-auto px-2 md:px-10 xl:px-40 py-10">
      <h2 class="text-4xl font-bold animate-slide-left">
        Entrevistas & Making of
      </h2>

      <div class="my-12 flex flex-wrap gap-y-10">
        <div
          v-for="interview in interviews"
          :key="interview.title"
          class="w-full md:w-1/2 2xl:w-1/3 px-4"
        >
          <iframe
            class="aspect-16/9 w-full"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                   picture-in-picture"
            allowfullscreen
            :src="interview.src"
          />

          <div class="text-2xl my-3">
            <b>Filme: </b>

            <span class="font-medium">
              {{ interview.title }}
            </span>
          </div>

          <div class="text-sm leading-4">
            <b>Diretor: </b>
            {{ interview.principal }}

            <div class="flex justify-between items-center">
              <span>
                <b>Roteiro: </b>
                {{ interview.screenplay.join(', ') }}
              </span>

              <span>
                <b>Estreia: </b>
                {{ interview.debut }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-right mt-10">
        <button
          class="rounded text-white bg-gray-700 p-2 font-semibold inline-flex items-center
                focus:outline-none focus:ring-4 focus:ring-gray-500 transition-colors
                hover:bg-gray-600"
        >
          <fa-icon
            icon="plus"
            class="mr-3"
          />

          Carregar mais filmes
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const interviews = [
      {
        src: 'https://www.youtube.com/embed/ZbhXbAIumKA',
        title: 'Godzila vs King kong',
        principal: 'Adam Wingard',
        screenplay: ['Max Borenstein', 'Eric Pearson'],
        debut: 2021,
      },
      {
        src: 'https://www.youtube.com/embed/HpJrfdJ9rDg',
        title: 'Avatar 2',
        principal: 'James Cameron',
        screenplay: ['James Cameron'],
        debut: 2022,
      },
      {
        src: 'https://www.youtube.com/embed/A15EoUqPEoc',
        title: 'Kimi no na wa',
        principal: 'Makoto Shinkai',
        screenplay: ['Makoto Shinkai'],
        debut: 2017,
      },
    ];

    return { interviews };
  },
});
</script>
