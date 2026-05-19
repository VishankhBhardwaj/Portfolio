"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ArrowDown } from 'lucide-react';
const PORTAL_LOCK = "portal:lock";
const PORTAL_UNLOCK = "portal:unlock";
const ENTER_THRESHOLD = 0.995;
const SCROLL_FACTOR = 0.00115;
const SMOOTHING = 0.1;
const MOBILE_MQ = "(max-width: 767px)";

export default function PortalHero() {
  const overlayRef = useRef(null);
  const imageRef = useRef(null);
  const hintRef = useRef(null);
  const targetProgress = useRef(0);
  const smoothProgress = useRef(0);
  const isUnlocked = useRef(false);

  useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const overlay = overlayRef.current;
    const image = imageRef.current;
    const hint = hintRef.current;

    if (!overlay || !image) return;

    const isMobile = () => window.matchMedia(MOBILE_MQ).matches;

    if (isMobile()) {
      overlay.style.display = "none";
      overlay.style.pointerEvents = "none";
      html.style.overflow = "";
      body.style.overflow = "";
      window.dispatchEvent(new Event(PORTAL_UNLOCK));
      return;
    }

    const lockScroll = () => {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      window.dispatchEvent(new Event(PORTAL_LOCK));
    };

    const unlockScroll = () => {
      html.style.overflow = "";
      body.style.overflow = "";
      window.dispatchEvent(new Event(PORTAL_UNLOCK));
    };

    const setOverlayInteractive = (active) => {
      overlay.style.pointerEvents = active ? "auto" : "none";
      overlay.style.visibility = active ? "visible" : "hidden";
    };

    lockScroll();
    setOverlayInteractive(true);

    const tl = gsap.timeline({ paused: true });

    // Zoom + blur first while image stays fully visible
    tl.fromTo(
      image,
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px) brightness(1)",
      },
      {
        scale: 5,
        filter: "blur(56px) brightness(1.35)",
        ease: "power3.inOut",
        duration: 0.78,
      },
      0
    );

    // Fade image only in the last ~22% of the scroll journey
    tl.to(
      image,
      {
        opacity: 0,
        ease: "power2.in",
        duration: 0.22,
      },
      0.78
    );

    // Overlay fades near the end, not at the start
    tl.fromTo(
      overlay,
      { opacity: 1 },
      { opacity: 0, ease: "power2.inOut", duration: 0.28 },
      0.72
    );

    if (hint) {
      tl.fromTo(
        hint,
        { opacity: 0.55, y: 0 },
        { opacity: 0, y: 14, ease: "power2.out", duration: 0.25 },
        0.55
      );
    }

    const applyProgress = (progress) => {
      const p = gsap.utils.clamp(0, 1, progress);
      tl.progress(p);

      if (p < ENTER_THRESHOLD) {
        setOverlayInteractive(true);
      } else {
        setOverlayInteractive(false);
      }
    };

    const syncLockState = (progress) => {
      const shouldUnlock = progress >= ENTER_THRESHOLD;

      if (shouldUnlock && !isUnlocked.current) {
        isUnlocked.current = true;
        unlockScroll();
      } else if (!shouldUnlock && isUnlocked.current) {
        isUnlocked.current = false;
        window.scrollTo({ top: 0, behavior: "instant" });
        lockScroll();
      }
    };

    const tick = () => {
      const diff = targetProgress.current - smoothProgress.current;

      if (Math.abs(diff) > 0.0004) {
        smoothProgress.current += diff * SMOOTHING;
        applyProgress(smoothProgress.current);
        syncLockState(smoothProgress.current);
      }
    };

    gsap.ticker.add(tick);

    const nudgeProgress = (delta) => {
      targetProgress.current = gsap.utils.clamp(
        0,
        1,
        targetProgress.current + delta
      );
    };

    const isAtPageTop = () => window.scrollY <= 4;

    const shouldHandlePortalScroll = (deltaY) => {
      if (!isUnlocked.current) return true;
      return isAtPageTop() && deltaY < 0;
    };

    const onWheel = (e) => {
      if (!shouldHandlePortalScroll(e.deltaY)) return;

      e.preventDefault();
      e.stopPropagation();
      nudgeProgress(e.deltaY * SCROLL_FACTOR);
    };

    let touchStartY = 0;

    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouch = (e) => {
      const delta = touchStartY - e.touches[0].clientY;
      touchStartY = e.touches[0].clientY;

      if (!shouldHandlePortalScroll(delta)) return;

      e.preventDefault();
      e.stopPropagation();
      nudgeProgress(delta * SCROLL_FACTOR * 1.4);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: false });

    return () => {
      gsap.ticker.remove(tick);
      html.style.overflow = "";
      body.style.overflow = "";
      window.dispatchEvent(new Event(PORTAL_UNLOCK));
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] hidden bg-black/20 backdrop-blur-[1px] md:block"
    >
      <div
        ref={imageRef}
        className="relative h-full w-full origin-center will-change-[transform,opacity,filter]"
      >
        <Image
          src="/hlo.webp"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="w-full flex justify-center border">
        <p
        ref={hintRef}
        className="pointer-events-none absolute bottom-10  -translate-x-1/2 text-xs uppercase tracking-[0.35em] text-white flex gap-3 text-shadow-black float-bounce  items-center justify-around"
      >
        Scroll to enter
        <ArrowDown />
      </p>
      </div>
    </div>
  );
}
