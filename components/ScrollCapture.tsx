'use client'

import React, { CSSProperties, PropsWithChildren, useCallback, useRef } from 'react';

type Props = {
  className?: string;
  style?: CSSProperties;
};

/**
 * ScrollCapture: Captures vertical wheel/touch scroll and translates it into horizontal scrolling
 * while the inner container has more horizontal content to reveal. When at either edge, vertical
 * scrolling is allowed to bubble to the page.
 */
export default function ScrollCapture({ className = '', style, children }: PropsWithChildren<Props>) {
  const ref = useRef<HTMLDivElement | null>(null);

  const canConsume = useCallback((el: HTMLDivElement, dir: number) => {
    if (!el) return false;
    const atStart = el.scrollLeft <= 0;
    const atEnd = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth;
    if (dir > 0) {
      // scrolling down -> move right
      return !atEnd;
    }
    // scrolling up -> move left
    return !atStart;
  }, []);

  const onWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    // Convert vertical wheel to horizontal when container can still scroll
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && canConsume(el, e.deltaY)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  }, [canConsume]);

  // Touch: translate vertical swipe into horizontal scroll when applicable
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !touchStart.current) return;
    const t = e.touches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    // If vertical gesture dominates, capture it into horizontal scroll while we can
    if (Math.abs(dy) > Math.abs(dx) && canConsume(el, dy)) {
      e.preventDefault();
      el.scrollLeft -= dy; // invert so swipe down moves right
    }
  }, [canConsume]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ overscrollBehaviorX: 'contain', overscrollBehaviorY: 'none', ...style }}
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >
      {children}
    </div>
  );
}
