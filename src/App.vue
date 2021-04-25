<template>
  <the-header />
  <the-header-banner />
  <section-highlights />
  <section-last-ratings />
  <section-interviews />
  <section-news />
  <the-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheHeader from '@/components/unique/TheHeader.vue';
import TheHeaderBanner from '@/components/unique/TheHeaderBanner.vue';
import SectionHighlights from '@/components/sections/SectionHighlights.vue';
import SectionLastRatings from '@/components/sections/SectionLastRatings.vue';
import SectionInterviews from '@/components/sections/SectionInterviews.vue';
import SectionNews from '@/components/sections/SectionNews.vue';
import TheFooter from '@/components/unique/TheFooter.vue';

export default defineComponent({
  name: 'App',

  components: {
    TheHeader,
    TheHeaderBanner,
    SectionHighlights,
    SectionLastRatings,
    SectionInterviews,
    SectionNews,
    TheFooter,
  },
});
</script>
