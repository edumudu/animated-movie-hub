<script lang="ts">
import { defineComponent, onBeforeUpdate } from 'vue';

const useAnimationsInScroll = () => {
  let elsToAnimate: HTMLElement[] = [];

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  };

  const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const el = entry.target as HTMLElement;

      el.style.animationPlayState = 'running';
      intersectionObserver.unobserve(el);
    });
  }, observerOptions);

  const animate = (node: HTMLElement | { $el: HTMLElement }) => {
    if (!node) return;

    const el = '$el' in node ? node.$el : node;

    elsToAnimate.push(el);
    el.style.animationPlayState = 'paused';
    intersectionObserver.observe(el);
  };

  onBeforeUpdate(() => {
    elsToAnimate = [];
  });

  return { animate };
};

export default defineComponent({
  setup(props, { slots }) {
    const { animate } = useAnimationsInScroll();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /// @ts-ignore
    return () => slots.default({ animate });
  },
});
</script>
