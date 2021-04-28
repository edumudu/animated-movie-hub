<template>
  <section
    id="last-ratings"
    class="pt-4 pb-8 px-2 overflow-x-hidden"
  >
    <animate-when-intersect v-slot="{ animate, animationTrigger }">
      <div
        class="container mx-auto md:px-10 xl:px-40"
        :ref="animationTrigger"
      >
        <v-title
          class="animate-slide-left mb-10"
          :ref="animate"
        >
          Ultimas avaliações
        </v-title>

        <div class="flex flex-wrap gap-y-10 justify-center md:justify-between">
          <div
            v-for="(rating, i) in ratings"
            :key="rating.name"
            class="flex w-full md:w-1/2 2xl:w-1/3 px-4"
          >
            <div>
              <img
                class="w-16 h-16 rounded-full shadow-lg animate-spin-grow animate-delay"
                :ref="animate"
                :style="{ '--delay': (i + 1) * 0.4 }"
                :alt="rating.name"
                :src="rating.image"
              >
            </div>

            <div class="flex-1 flex flex-col ml-6">
              <h3
                class="font-extrabold text-3xl animate-slide-left animate-delay"
                :ref="animate"
                :style="{ '--delay': (i + 1) * 0.6 }"
              >
                {{ rating.name }}
              </h3>

              <p
                class="my-6 leading-5 animate-slide-up animate-delay flex-1"
                :ref="animate"
                :style="{ '--delay': (i + 1) * 0.8 }"
              >
                <b>Avaliação: </b>

                {{ rating.text }}
              </p>

              <div class="text-sm flex justify-between">
                <rating-stars
                  class="animate-slide-left animate-delay"
                  :ref="animate"
                  :style="{ '--delay': (i + 1) * 1 }"
                  :rating="rating.rating"
                />

                <span
                  class="font-bold animate-slide-right animate-delay"
                  :ref="animate"
                  :style="{ '--delay': (i + 1) * 1 }"
                >
                  {{ rating.createdAt }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-right mt-10">
          <v-button
            icon="plus"
            class="animate-slide-left animate-delay"
            style="--delay: 3"
            :ref="animate"
          >
            Carregar mais avaliações
          </v-button>
        </div>
      </div>
    </animate-when-intersect>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import RatingStars from '@/components/RatingStars.vue';
import VTitle from '@/components/VTitle.vue';
import VButton from '@/components/VButton.vue';
import AnimateWhenIntersect from '@/components/AnimateWhenIntersect.vue';

export default defineComponent({
  components: {
    RatingStars,
    VTitle,
    VButton,
    AnimateWhenIntersect,
  },

  setup() {
    const ratings = [
      {
        image: 'http://picsum.photos/id/1027/100',
        name: 'Clara Silva',
        text: 'Cada vez que o Godzilla de Edwards se levanta, você enrijece de empolgação. Cada vez que ele ruge, Edwards quer que você sinta e estremeça.',
        createdAt: '21/02/2015',
        rating: 5,
      },
      {
        image: 'http://picsum.photos/id/1062/100',
        name: 'Carlos Alves',
        text: '\'Godzilla\' não parece cínico; há uma sensação de alegria na foto, de diversão sincera, que a separa de muitos de seus irmãos do cinema de verão.',
        createdAt: '08/11/2019',
        rating: 3,
      },
      {
        image: 'http://picsum.photos/id/22/100',
        name: 'Matheus Silva',
        text: 'Este não é exatamente o Godzilla de um homem pensante, mas certamente é inteligente onde importa.',
        createdAt: '21/02/2015',
        rating: 4,
      },
    ];

    return { ratings };
  },
});
</script>
