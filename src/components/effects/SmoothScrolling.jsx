"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const PORTAL_LOCK = "portal:lock";
const PORTAL_UNLOCK = "portal:unlock";
/** Must match PortalHero — no portal on small viewports, Lenis must scroll. */
const MOBILE_MQ = "(max-width: 767px)";

export default function SmoothScrolling({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
    });

    const isMobileViewport = () => window.matchMedia(MOBILE_MQ).matches;

    // PortalHero runs useLayoutEffect before this effect; on mobile it fires
    // PORTAL_UNLOCK before listeners exist, so we start Lenis when there is no portal.
    if (isMobileViewport()) {
      lenis.start();
    } else {
      lenis.stop();
    }

    const onLock = () => lenis.stop();
    const onUnlock = () => lenis.start();

    window.addEventListener(PORTAL_LOCK, onLock);
    window.addEventListener(PORTAL_UNLOCK, onUnlock);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener(PORTAL_LOCK, onLock);
      window.removeEventListener(PORTAL_UNLOCK, onUnlock);
      lenis.destroy();
    };
  }, []);

  return children;
}