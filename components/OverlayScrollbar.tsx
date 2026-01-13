'use client';

import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  scrollRef: React.RefObject<HTMLElement>;
};

type Metrics = {
  thumbHeight: number;
  thumbTop: number;
  visible: boolean;
};

const TRACK_PADDING = 12; // px space from top/bottom
const MIN_THUMB = 42; // keep thumb usable
const HIDE_DELAY = 1000; // ms before hiding

export default function OverlayScrollbar({ scrollRef }: Props) {
  const [metrics, setMetrics] = useState<Metrics>({
    thumbHeight: MIN_THUMB,
    thumbTop: TRACK_PADDING,
    visible: false,
  });
  const [isIdleHidden, setIsIdleHidden] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const dragState = useRef<{
    startY: number;
    startScrollTop: number;
    trackHeight: number;
  } | null>(null);
  const hideTimeout = useRef<number | null>(null);

  // Use refs to track current state for callbacks
  const isActiveRef = useRef(isActive);
  const isHoverRef = useRef(isHover);
  useEffect(() => { isActiveRef.current = isActive; }, [isActive]);
  useEffect(() => { isHoverRef.current = isHover; }, [isHover]);

  const showBar = useCallback(() => {
    if (hideTimeout.current) {
      window.clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setIsIdleHidden(false);
  }, []);

  const scheduleHide = useCallback(() => {
    if (hideTimeout.current) window.clearTimeout(hideTimeout.current);
    hideTimeout.current = window.setTimeout(() => {
      if (!isActiveRef.current && !isHoverRef.current) {
        setIsIdleHidden(true);
      }
    }, HIDE_DELAY);
  }, []);

  const computeMetrics = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { clientHeight, scrollHeight, scrollTop } = el;
    const trackHeight = Math.max(clientHeight - TRACK_PADDING * 2, 0);

    if (scrollHeight <= clientHeight || trackHeight <= 0) {
      setMetrics((prev) => ({ ...prev, visible: false }));
      return;
    }

    const ratio = clientHeight / scrollHeight;
    const thumbHeight = Math.max(Math.floor(trackHeight * ratio), MIN_THUMB);
    const maxThumbTravel = Math.max(trackHeight - thumbHeight, 0);
    const maxScroll = scrollHeight - clientHeight;
    const scrollRatio = maxScroll ? scrollTop / maxScroll : 0;
    const thumbTop = TRACK_PADDING + maxThumbTravel * scrollRatio;

    setMetrics({
      thumbHeight,
      thumbTop,
      visible: true,
    });
  }, [scrollRef]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onActivity = () => {
      showBar();
      scheduleHide();
    };

    computeMetrics();
    onActivity();

    const onScroll = () => {
      computeMetrics();
      onActivity();
    };
    const onWheel = () => onActivity();
    const onTouchMove = () => onActivity();
    const onTouchStart = () => onActivity();

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchstart", onTouchStart, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      computeMetrics();
      onActivity();
    });
    resizeObserver.observe(el);

    const onResize = () => {
      computeMetrics();
      onActivity();
    };
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchstart", onTouchStart);
      resizeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      if (hideTimeout.current) window.clearTimeout(hideTimeout.current);
    };
  }, [computeMetrics, scrollRef, showBar, scheduleHide]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!dragState.current || !scrollRef.current) return;
      const el = scrollRef.current;
      const { clientHeight, scrollHeight } = el;
      const { startY, startScrollTop, trackHeight } = dragState.current;
      const thumbHeight = metrics.thumbHeight;
      const maxScroll = scrollHeight - clientHeight;
      const maxThumbTravel = Math.max(trackHeight - thumbHeight, 0);

      if (maxScroll <= 0 || maxThumbTravel <= 0) return;

      const deltaY = event.clientY - startY;
      const scrollPerPixel = maxScroll / maxThumbTravel;
      const nextScrollTop = Math.min(
        Math.max(startScrollTop + deltaY * scrollPerPixel, 0),
        maxScroll
      );

      el.scrollTo({ top: nextScrollTop, behavior: "auto" });
    };

    const handlePointerUp = () => {
      dragState.current = null;
      setIsActive(false);
      scheduleHide();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };

    if (dragState.current) {
      window.addEventListener("pointermove", handlePointerMove, { passive: false });
      window.addEventListener("pointerup", handlePointerUp);
      window.addEventListener("pointercancel", handlePointerUp);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [metrics.thumbHeight, scrollRef]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;

    event.preventDefault();
    event.stopPropagation();

    const { clientHeight } = el;
    const trackHeight = Math.max(clientHeight - TRACK_PADDING * 2, 0);

    dragState.current = {
      startY: event.clientY,
      startScrollTop: el.scrollTop,
      trackHeight,
    };

    setIsActive(true);
    showBar();
    scheduleHide();
  };

  // Don't render if there's no overflow
  if (!metrics.visible) return null;

  const isVisible = !isIdleHidden;
  const opacity = isVisible ? (isActive ? 1 : isHover ? 0.9 : 0.75) : 0;
  const scale = isActive ? 0.98 : 1;

  return (
    <div className="overlay-scrollbar" aria-hidden>
      <div
        className="overlay-scrollbar-thumb"
        style={{
          top: `${metrics.thumbTop}px`,
          height: `${metrics.thumbHeight}px`,
          opacity,
          transform: `scale(${scale})`,
          pointerEvents: isVisible ? "auto" : "none",
        }}
        onPointerDown={handlePointerDown}
        onPointerEnter={() => {
          setIsHover(true);
          showBar();
        }}
        onPointerLeave={() => {
          setIsHover(false);
          scheduleHide();
        }}
      />
    </div>
  );
}
