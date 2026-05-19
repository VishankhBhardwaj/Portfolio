"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const PORTAL_LOCK = "portal:lock";
const PORTAL_UNLOCK = "portal:unlock";

export default function SmoothScrolling({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
    });

    lenis.stop();

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