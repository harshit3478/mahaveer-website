'use client'

import { useEffect, useRef, useState } from 'react'

export type ScrollDirection = 'up' | 'down'

interface Options {
  root?: HTMLElement | null
  threshold?: number
  debounceMs?: number
  initialDirection?: ScrollDirection
  useLenis?: boolean
}

// Detect global or container scroll direction. Lenis-aware, SSR-safe.
export function useScrollDirection({
  root,
  threshold = 4,
  debounceMs = 50,
  initialDirection = 'down',
  useLenis = true,
}: Options = {}): ScrollDirection {
  const [dir, setDir] = useState<ScrollDirection>(initialDirection)
  const lastY = useRef(0)
  const lastTs = useRef(0)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const w = window as any
    const lenis = useLenis ? w.__LENIS__ : null

    const update = (y: number) => {
      const now = performance.now()
      if (now - lastTs.current < debounceMs) return
      const dy = y - lastY.current
      if (Math.abs(dy) < threshold) return
      setDir(dy > 0 ? 'down' : 'up')
      lastY.current = y
      lastTs.current = now
    }

    if (lenis && typeof lenis.on === 'function') {
      const handler = (e: any) => update(e.scroll ?? w.scrollY ?? 0)
      lenis.on('scroll', handler)
      lastY.current = lenis.scroll ?? w.scrollY ?? 0
      return () => lenis.off('scroll', handler)
    }

    const target: any = root ?? window
    const getY = () => (root ? (root as HTMLElement).scrollTop : window.scrollY || 0)
    const onScroll = () => update(getY())
    lastY.current = getY()
    target.addEventListener('scroll', onScroll, { passive: true })
    return () => target.removeEventListener('scroll', onScroll)
  }, [root, threshold, debounceMs, initialDirection, useLenis])

  return dir
}
