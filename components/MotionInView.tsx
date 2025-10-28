'use client'

import React, { ComponentProps, useMemo, useRef, useEffect } from 'react'
import { motion, useInView, useReducedMotion, useAnimationControls } from 'framer-motion'
import { useScrollDirection } from '@/lib/useScrollDirection'

type Variants = NonNullable<ComponentProps<typeof motion.div>['variants']>

interface Props extends Omit<ComponentProps<typeof motion.div>, 'variants' | 'initial' | 'animate'> {
  as?: keyof JSX.IntrinsicElements
  amount?: number | 'some' | 'all'
  rootMargin?: string
  once?: boolean
  variantsDown: Variants
  variantsUp?: Variants
  exitVariants?: Variants
  preferReducedMotionBehavior?: 'hide' | 'show' | 'minimal'
}

export function MotionInView({
  as = 'div',
  amount = 0.2,
  rootMargin,
  once = false,
  variantsDown,
  variantsUp,
  exitVariants,
  preferReducedMotionBehavior = 'minimal',
  children,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { amount, margin: rootMargin as any, once: false })
  const controls = useAnimationControls()
  const reduce = useReducedMotion()
  const dir = useScrollDirection({ useLenis: true })

  const variants = useMemo(() => {
    if (reduce) {
      if (preferReducedMotionBehavior === 'hide') return { initial: { opacity: 0 }, animate: { opacity: 1 } }
      if (preferReducedMotionBehavior === 'show') return { initial: {}, animate: {} }
      return { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.2 } } }
    }
    return dir === 'up' && variantsUp ? variantsUp : variantsDown
  }, [reduce, preferReducedMotionBehavior, dir, variantsDown, variantsUp])

  useEffect(() => {
    if (inView) {
      controls.start('animate')
    } else {
      if (!once) controls.set('initial')
      if (exitVariants) controls.start('exit')
    }
  }, [inView, controls, once, exitVariants])

  return (
    <motion.div ref={ref} initial="initial" animate={controls} exit={exitVariants ? 'exit' : undefined} variants={variants} {...rest}>
      {children}
    </motion.div>
  )
}

export default MotionInView
