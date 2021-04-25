<template>
  <header class="the-header bg-indigo-800">
    <div class="container mx-auto">
      <nav class="flex items-center w-full flex-wrap lg:flex-no-wrap justify-between">
        <div class="text-4xl text-white animate-slide-left">
          <logo-short />
        </div>

        <ul class="menu hidden lg:flex ml-auto text-sm text-gray-300">
          <li
            v-for="(menu, i) in menus"
            :key="menu.text"
            class="animate-slide-up animate-delay"
            :style="{ '--delay': i }"
          >
            <a
              class="block relative py-1 px-2 transition-colors hover:text-white font-semibold"
              :href="menu.href"
            >
              {{ menu.text }}
            </a>
          </li>
        </ul>

        <div class="block lg:hidden w-full order-1 lg:order-0 text-right text-white pt-2">
          <button
            class="h-8 w-8 text-xl"
            type="button"
            @click.prevent.stop="handleMenuBtnClick"
          >
            <fa-icon icon="bars" />
          </button>

          <ul
            class="flex flex-col text-sm text-center transition-all h-0 overflow-hidden"
            ref="mobileMenu"
          >
            <li
              v-for="menu in menus"
              :key="menu.text"
            >
              <a
                class="block relative py-2 px-4"
                :href="menu.href"
              >
                {{ menu.text }}
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:ml-4 relative animate-slide-right text-white w-56">
          <fa-icon
            icon="search"
            class="absolute top-1/2 left-4 transform -translate-y-1/2"
          />

          <fa-icon
            icon="times-circle"
            class="absolute top-1/2 right-2  transform -translate-y-1/2"
          />

          <input
            type="text"
            class="text-sm bg-transparent border-2 border-fake-gray-400 py-2 pl-10 pr-6 rounded
                 placeholder-white w-full"
            placeholder="Pesquisar filme"
          >
        </div>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeUnmount,
  watchEffect,
} from 'vue';

import LogoShort from '@/assets/svg/logo-short.svg';

const useMenuBasics = () => {
  const menus = [
    {
      text: 'Lançamento',
      href: '#the-head-banner',
    },
    {
      text: 'Em destaque',
      href: '#highlights',
    },
    {
      text: 'Avaliações',
      href: '#last-ratings',
    },
    {
      text: 'Entrevistas & makingof',
      href: '#makingof',
    },
    {
      text: 'Novidades',
      href: '#news',
    },
  ];

  return { menus };
};

const useMobileMenu = () => {
  const isOpen = ref(false);
  const mobileMenu = ref();

  const handleMenuBtnClick = () => {
    isOpen.value = !isOpen.value;
  };

  const handlerDocumentClick = () => {
    isOpen.value = false;
  };

  watchEffect(() => {
    mobileMenu.value.style.height = isOpen.value ? `${mobileMenu.value.scrollHeight}px` : 0;
  }, { flush: 'post' });

  onBeforeUnmount(() => {
    document.removeEventListener('click', handlerDocumentClick);
  });

  document.addEventListener('click', handlerDocumentClick);

  return {
    handleMenuBtnClick,
    mobileMenu,
  };
};

export default defineComponent({
  components: { LogoShort },

  setup() {
    const { handleMenuBtnClick, mobileMenu } = useMobileMenu();
    const { menus } = useMenuBasics();

    return {
      menus,
      handleMenuBtnClick,
      mobileMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
  .the-header { padding: 0.7rem 1rem; }

  .the-header .menu > li:not(:first-child) a::after {
    @apply block absolute left-0 bg-white;

    content: '';
    width: 1px;
    height: 50%;
    transition: height 0.5s;
    transform: translateY(-50%);
    top: 50%;
  }

  .the-header .menu > li:hover a::after,
  .the-header .menu > li:hover + li a::after {
    height: 90%;
  }
</style>
