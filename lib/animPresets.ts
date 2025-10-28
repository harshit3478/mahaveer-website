// Direction-aware animation presets
import { Variants } from 'framer-motion'

export const slideY = (distance = 40, duration = 0.6): Variants => ({
  initial: { opacity: 0, y: distance },
  animate: { opacity: 1, y: 0, transition: { duration, ease: 'easeOut' } },
  exit: { opacity: 0, y: distance / 2, transition: { duration: 0.3 } },
})

export const slideYUp = (distance = 40, duration = 0.6): Variants => ({
  initial: { opacity: 0, y: -distance },
  animate: { opacity: 1, y: 0, transition: { duration, ease: 'easeOut' } },
  exit: { opacity: 0, y: -distance / 2, transition: { duration: 0.3 } },
})

export const slideX = (distance = 60, duration = 0.6): Variants => ({
  initial: { opacity: 0, x: -distance },
  animate: { opacity: 1, x: 0, transition: { duration, ease: 'easeOut' } },
  exit: { opacity: 0, x: -distance / 2, transition: { duration: 0.3 } },
})

export const slideXRight = (distance = 60, duration = 0.6): Variants => ({
  initial: { opacity: 0, x: distance },
  animate: { opacity: 1, x: 0, transition: { duration, ease: 'easeOut' } },
  exit: { opacity: 0, x: distance / 2, transition: { duration: 0.3 } },
})

export const textRevealWords = (stagger = 0.08) => ({
  container: { initial: {}, animate: { transition: { staggerChildren: stagger } } },
  item: { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0, transition: { duration: 0.4 } } },
})
