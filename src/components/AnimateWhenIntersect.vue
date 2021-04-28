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

      elsToAnimate.forEach((elToAnimate) => {
        const el = elToAnimate;

        el.style.animationPlayState = 'running';
      });

      intersectionObserver.disconnect();
    });
  }, observerOptions);

  const animate = (node: HTMLElement | { $el: HTMLElement }) => {
    if (!node) return;

    const el = '$el' in node ? node.$el : node;

    elsToAnimate.push(el);
    el.style.animationPlayState = 'paused';
  };

  const animationTrigger = (node: HTMLElement | { $el: HTMLElement }) => {
    if (!node) return;

    intersectionObserver.observe('$el' in node ? node.$el : node);
  };

  onBeforeUpdate(() => {
    elsToAnimate = [];
  });

  return {
    animate,
    animationTrigger,
  };
};

export default defineComponent({
  setup(props, { slots }) {
    const { animate, animationTrigger } = useAnimationsInScroll();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /// @ts-ignore
    return () => slots.default({
      animate,
      animationTrigger,
    });
  },
});
</script>
