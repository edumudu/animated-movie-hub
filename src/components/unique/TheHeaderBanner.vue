<template>
  <section
    id="the-head-banner"
    class="bg-indigo-100 py-8"
  >
    <div class="container mx-auto relative pb-14">
      <v-title class="text-center text-gray-800 mb-10">
        Lançamentos
      </v-title>

      <div
        class="flex overflow-hidden"
        ref="bannersWrapper"
      >
        <div
          v-for="movie in movies"
          :key="movie.title"
          class="flex w-full flex-col lg:flex-row items-center lg:items-start flex-shrink-0"
        >
          <iframe
            class="flex-1 aspect-16/9 w-full"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
                   picture-in-picture"
            allowfullscreen
            :src="movie.traillerLink"
          />

          <div class="flex-1 ml-0 lg:ml-14 mt-4 lg:mt-0 px-2">
            <h2 class="text-3xl font-bold mb-8 animate-slide-right">
              {{ movie.title }}
            </h2>

            <p
              class="mb-4 text-base animate-slide-right animate-delay"
              style="--delay: 0.5"
            >
              <b>Sinopse:</b>
              {{ movie.summary }}
            </p>

            <ul class="flex flex-wrap items-center justify-between text-base">
              <li
                class="animate-slide-right animate-delay"
                style="--delay: 1"
              >
                <b>Diretor: </b>
                {{ movie.principal }}
              </li>

              <li
                class="animate-slide-right animate-delay"
                style="--delay: 1.5"
              >
                <b>Roteiro: </b>
                {{ movie.screenplay.join(', ') }}
              </li>

              <li
                class="animate-slide-right animate-delay"
                style="--delay: 2"
              >
                <b>Estreia: </b>
                {{ movie.debut }}
              </li>
            </ul>

            <div
              class="mt-4 animate-slide-up animate-delay"
              style="--delay: 2.5"
            >
              <b>Elenco: </b>

              {{ movie.cast.join(' | ') }}
            </div>

            <div
              class="mt-4 animate-slide-up animate-delay"
              style="--delay: 3"
            >
              <b>Avaliação: </b>

              <rating-stars
                class="animate-slide-left animate-delay"
                :style="{ '--delay': (i + 1) * 1 }"
                :rating="movie.rating"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="absolute left-1/2 bottom-0 transform -translate-1/2">
        <button
          v-for="(_, i) in movies"
          :key="i"
          class="w-3 h-3 rounded-full bg-purple-400 cursor-pointer ml-2 focus:outline-none
                 transition-all transform hover:scale-125 focus:scale-125
                 animate-slide-left animate-delay"
          :class="{ 'bg-purple-900': activeIndex === i }"
          :style="{ '--delay': i + 1 }"
          @click="handleDotClick(i)"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import RatingStars from '@/components/RatingStars.vue';
import VTitle from '@/components/VTitle.vue';

export default defineComponent({
  components: {
    RatingStars,
    VTitle,
  },

  setup() {
    const movies = [
      {
        title: 'King Kong vs Godzila',
        summary: 'As lendas se enfrentam em "Godzilla vs. Kong", quando esses adversários míticos se encontram em uma espetacular batalha, na qual o destino do mundo entrará em jogo. Kong e seus protetores embarcam em uma jornada perigosa para encontrar seu verdadeiro lar. Com eles está Jia, uma jovem órfã que tem uma ligação única e forte com Kong. Mas eles não sabiam que estavam no caminho de um Godzilla enfurecido, que está deixando um rastro de destruição pelo planeta. Esse combate épico entre os dois titãs, instigado por forças ocultas, é apenas o começo do mistério que jaz no núcleo da Terra.',
        principal: 'Adam Wingard',
        screenplay: ['Max Borenstein', 'Eric Pearson'],
        debut: 2021,
        cast: ['Millie Bobby', 'Alexander Skarsgård', 'Rebecca Hall', 'Brian Tyree', 'Henry Shun Oguri', 'Eiza Gonzalez', ' Julian Dennison'],
        rating: 4,
        traillerLink: 'https://www.youtube.com/embed/odM92ap8_c0',
      },
      {
        title: 'Avatar 2',
        summary: '12 anos depois de explorar Pandora e se juntar aos Na\'vi, Jake Sully formou uma família com Neytiri enquanto eles vagavam pelo mundo expandido de Pandora, encontrando novos aliados na forma do clã de Metkayina, liderado por Tonowari. Tudo muda quando a R.D.A',
        principal: 'James Cameron',
        screenplay: ['James Cameron'],
        debut: 2022,
        cast: ['Millie Bobby', 'Alexander Skarsgård', 'Rebecca Hall', 'Brian Tyree'],
        rating: 3,
        traillerLink: 'https://www.youtube.com/embed/yUXd-enstO8',
      },
    ];

    const activeIndex = ref(0);
    const bannersWrapper = ref<HTMLElement>();

    const handleDotClick = (i: number) => {
      activeIndex.value = i;

      if (!bannersWrapper.value) return;

      bannersWrapper.value.scroll({
        top: 0,
        left: bannersWrapper.value.children[i].clientWidth * i,
        behavior: 'smooth',
      });
    };

    return {
      movies,
      activeIndex,
      bannersWrapper,
      handleDotClick,
    };
  },
});
</script>
