const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';

import { ref, watchEffect } from 'vue';

const useScrollDirection = ( initialDirection: string, thresholdPixels?: any, off?: any ) => {
//   const [scrollDir, setScrollDir] = useState(initialDirection);
console.log('initialDirection: ', initialDirection);
const scrollDir = ref(initialDirection)

watchEffect(() => {
    const threshold = thresholdPixels || 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
        return;
      }

      scrollDir.value = scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP;
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */
    !off ? window.addEventListener('scroll', onScroll) : scrollDir.value = initialDirection;

    return () => window.removeEventListener('scroll', onScroll);
  });

  return scrollDir;
};

export default useScrollDirection;
