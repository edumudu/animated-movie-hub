<template>
  <div
    id="news"
    class="mt-10 mb-6 px-4"
  >
    <div class="container mx-auto md:px-10 xl:px-40 flex flex-wrap">
      <animate-when-intersect v-slot="{ animate, animationTrigger }">
        <div
          class="lg:w-4/6 md:pr-8"
          :ref="animationTrigger"
        >
          <v-title
            class="animate-slide-left mb-6"
            :ref="animate"
          >
            Novidades
          </v-title>

          <div>
            <article
              v-for="(news, i) in newsArr"
              :key="news.title"
              class="flex flex-col sm:flex-row items-center sm:items-stretch py-4 border-green-700"
              :class="{ 'border-t-2': i !== 0 }"
            >
              <img
                alt="Article"
                loading="lazy"
                width="250"
                height="150"
                class="mr-4 rounded animate-slide-up animate-delay"
                :style="{ '--delay': 0.7 * i }"
                :ref="animate"
                :src="news.image"
              >

              <div class="flex flex-col">
                <h3
                  class="font-bold text-2xl animate-slide-right animate-delay"
                  :ref="animate"
                  :style="{ '--delay': 1 * i }"
                >
                  {{ news.title }}
                </h3>

                <p
                  class="flex-1 text-sm leading-4 my-2 animate-slide-up animate-delay"
                  :ref="animate"
                  :style="{ '--delay': 1.5 * i }"
                >
                  {{ news.resume }}
                </p>

                <ul class="flex flex-wrap items-center gap-y-2 justify-center sm:justify-start">
                  <li
                    v-for="(category, j) in news.categories"
                    :key="category"
                    class="mr-4 animate-slide-right animate-delay"
                    :ref="animate"
                    :style="{ '--delay': (1.5 * i) + (j * 0.5) }"
                  >
                    <v-badge>
                      {{ category }}
                    </v-badge>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </animate-when-intersect>

      <animate-when-intersect v-slot="{ animate, animationTrigger }">
        <div
          class="lg:w-2/6"
          :ref="animationTrigger"
        >
          <v-title
            class="animate-slide-right mb-6"
            :ref="animate"
          >
            Sobre
          </v-title>

          <p
            class="leading-5 text-sm animate-slide-up animate-delay"
            style="--delay: 0.8"
            :ref="animate"
          >
            Netflix é uma provedora global de filmes e séries de televisão via streaming sediada em
            Los Gatos,Califórnia, e que atualmente possui mais de 208 milhões de assinantes.
            Fundada em 1997 nos Estados Unidos, a empresa surgiu como um serviço de entrega de
            DVD pelo correio.
          </p>

          <v-title
            class="animate-slide-right animate-delay my-6"
            style="--delay: 1.2"
            :ref="animate"
          >
            Editorial
          </v-title>

          <ul>
            <li class="text-xl">
              <fa-icon
                icon="user"
                class="mr-2 animate-slide-left animate-delay"
                style="--delay: 1.5"
                :ref="animate"
              />

              <span
                class="animate-slide-up animate-delay inline-block"
                style="--delay: 1.5"
                :ref="animate"
              >
                <b>Redação: </b> Carlos Almeida
              </span>
            </li>

            <li class="text-xl my-4">
              <fa-icon
                icon="user"
                class="mr-2 animate-slide-left animate-delay"
                style="--delay: 1.7"
                :ref="animate"
              />

              <span
                class="animate-slide-up animate-delay inline-block"
                style="--delay: 1.7"
                :ref="animate"
              >
                <b>Pesquisa: </b> Letícia Mariana
              </span>
            </li>

            <li class="text-xl">
              <fa-icon
                icon="user"
                class="mr-2 animate-slide-left animate-delay"
                style="--delay: 1.9"
                :ref="animate"
              />
              <span
                class="animate-slide-up animate-delay inline-block"
                style="--delay: 1.9"
                :ref="animate"
              >
                <b>Gerente Geral: </b> Maria eduardo
              </span>
            </li>
          </ul>

          <h2
            class="text-2xl font-bold animate-slide-left animate-delay my-6"
            style="--delay: 2.1"
            :ref="animate"
          >
            Redes sociais
          </h2>

          <ul class="flex text-4xl text-gray-700 justify-center lg:justify-start">
            <li class="mr-5 transition-transform transform hover:scale-125">
              <a href="//facebook.com">
                <fa-icon
                  class="mr-2 animate-slide-right animate-delay"
                  style="--delay: 2.3"
                  :icon="['fab', 'facebook-square']"
                  :ref="animate"
                />
              </a>
            </li>

            <li class="mr-5 transition-transform transform hover:scale-125">
              <a href="//twitter.com">
                <fa-icon
                  class="mr-2 animate-slide-right animate-delay"
                  style="--delay: 2.5"
                  :icon="['fab', 'twitter']"
                  :ref="animate"
                />
              </a>
            </li>

            <li class="mr-5 transition-transform transform hover:scale-125">
              <a href="//instagram.com">
                <fa-icon
                  class="mr-2 animate-slide-right animate-delay"
                  style="--delay: 2.7"
                  :icon="['fab', 'instagram']"
                  :ref="animate"
                />
              </a>
            </li>
          </ul>
        </div>
      </animate-when-intersect>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import VTitle from '@/components/VTitle.vue';
import VBadge from '@/components/VBadge.vue';
import AnimateWhenIntersect from '@/components/AnimateWhenIntersect.vue';

export default defineComponent({
  components: {
    VTitle,
    VBadge,
    AnimateWhenIntersect,
  },

  setup() {
    const newsArr = [
      {
        image: 'https://picsum.photos/id/10/250/150',
        title: '5 atores que poderiam viver o Hércules',
        resume: 'Russell Crowe fará sua estreia no filme estrelado por Chris Hemsworth como Zeus. Mas quem será o Hércules?',
        categories: ['Hollywood', 'melhor filme', 'oscar'],
      },
      {
        image: 'https://picsum.photos/id/100/250/150',
        title: 'Filmes que a Globo vai passar no fim de semana',
        resume: 'A Globo irá exibir Ela — filme aclamado de Joaquin Phoenix —, Histórias Cruzadas e Batman: O Cavaleiro das Trevas, estrelado...',
        categories: ['Hollywood', 'melhor filme', 'oscar'],
      },
      {
        image: 'https://picsum.photos/id/1000/250/150',
        title: 'Oscar 2021',
        resume: 'A Academia, que realiza sua próxima cerimônia neste domingo (25/04), demorou anos para indicar e premiar profissionais negros...',
        categories: ['Hollywood', 'melhor filme', 'oscar'],
      },
    ];

    return { newsArr };
  },
});
</script>
