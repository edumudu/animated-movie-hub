<template>
  <section
    id="last-ratings"
    class="pt-4 pb-8 px-2 overflow-x-hidden"
    ref="root"
  >
    <div class="container mx-auto md:px-10 xl:px-40">
      <h2 class="text-4xl font-bold animate-slide-left mb-10">
        Ultimas avaliações
      </h2>

      <div class="flex flex-wrap gap-y-10 justify-center md:justify-between">
        <div
          v-for="(rating, i) in ratings"
          :key="rating.name"
          class="flex w-full md:w-1/2 2xl:w-1/3 px-4"
        >
          <div>
            <img
              class="w-16 h-16 rounded-full shadow-lg animate-spin-grow animate-delay"
              :style="{ '--delay': (i + 1) * 0.4 }"
              :alt="rating.name"
              :src="rating.image"
            >
          </div>

          <div class="flex-1 flex flex-col ml-6">
            <h3
              class="font-extrabold text-3xl animate-slide-left animate-delay"
              :style="{ '--delay': (i + 1) * 0.6 }"
            >
              {{ rating.name }}
            </h3>

            <p
              class="my-6 leading-5 animate-slide-up animate-delay flex-1"
              :style="{ '--delay': (i + 1) * 0.8 }"
            >
              <b>Avaliação: </b>

              {{ rating.text }}
            </p>

            <div class="text-sm flex justify-between">
              <span
                class="text-yellow-300 animate-slide-left animate-delay"
                :style="{ '--delay': (i + 1) * 1 }"
              >
                <fa-icon
                  v-for="point in 5"
                  :key="point"
                  :icon="[point <= rating.rating ? 'fas' : 'far', 'star']"
                />
              </span>

              <span
                class="font-bold animate-slide-right animate-delay"
                :style="{ '--delay': (i + 1) * 1 }"
              >
                {{ rating.createdAt }}
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

          Carregar mais avaliações
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
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

    const root = ref();

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    onMounted(() => {
      const elementsToAnimate: HTMLElement[] = root.value.querySelectorAll('.animate-delay');

      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          elementsToAnimate.forEach((el) => {
          // eslint-disable-next-line no-param-reassign
            el.style.animationPlayState = 'running';
          });
          intersectionObserver.disconnect();
        });
      }, options);

      elementsToAnimate.forEach((el) => {
      // eslint-disable-next-line no-param-reassign
        el.style.animationPlayState = 'paused';
      });

      intersectionObserver.observe(root.value);
    });

    return {
      ratings,
      root,
    };
  },
});
</script>
