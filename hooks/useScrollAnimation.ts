// Fix: Import React to make the React namespace available.
import React, { useEffect } from 'react';
// FIX: `AnimationControls` is not exported in newer framer-motion versions.
// We import `Variants` instead and use it to correctly type animation variants.
import { useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// FIX: Replace `AnimationControls` with `ReturnType<typeof useAnimation>` as `AnimationControls`
// is not exported directly. This correctly infers the type from the hook.
export const useScrollAnimation = (): [React.Ref<HTMLDivElement>, ReturnType<typeof useAnimation>] => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return [ref, controls];
};

// FIX: Explicitly type variants with `Variants` to prevent TypeScript from inferring
// the `ease` property as a generic string, which caused type errors.
export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2
    }
  }
};

// FIX: Explicitly type variants with `Variants`.
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};
