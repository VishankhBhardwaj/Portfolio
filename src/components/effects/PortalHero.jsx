// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import Image from "next/image";

// export default function PortalHero() {
//   const overlayRef = useRef(null);
//   const imageRef = useRef(null);
//   const progressRef = useRef(0);
//   const portalDone = useRef(false);

//   useEffect(() => {
//     // Body scroll completely lock
//     document.documentElement.style.overflow = "hidden";
//     document.body.style.overflow = "hidden";

//     const tl = gsap.timeline({ paused: true });

//     tl.to(imageRef.current, {
//       scale: 1.8,
//       filter: "blur(40px)",
//       ease: "power2.inOut",
//       duration: 1,
//     }, 0);

//     tl.to(overlayRef.current, {
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out",
//     }, 0.2);

//     const complete = () => {
//       portalDone.current = true;
//       overlayRef.current.style.pointerEvents = "none";
//       overlayRef.current.style.display = "none";
//       // Scroll unlock
//       document.documentElement.style.overflow = "";
//       document.body.style.overflow = "";
//       window.removeEventListener("wheel", onWheel);
//       window.removeEventListener("touchmove", onTouch);
//       window.removeEventListener("touchstart", onTouchStart);
//     };

//     const onWheel = (e) => {
//       if (portalDone.current) return;
//       e.preventDefault();
//       e.stopPropagation();

//       progressRef.current = Math.min(1, progressRef.current + Math.abs(e.deltaY) / 1000);
//       tl.progress(progressRef.current);

//       if (progressRef.current >= 1) complete();
//     };

//     let touchStartY = 0;
//     const onTouchStart = (e) => {
//       touchStartY = e.touches[0].clientY;
//     };

//     const onTouch = (e) => {
//       if (portalDone.current) return;
//       e.preventDefault();
//       e.stopPropagation();

//       const delta = touchStartY - e.touches[0].clientY;
//       progressRef.current = Math.min(1, progressRef.current + Math.abs(delta) / 1000);
//       tl.progress(progressRef.current);
//       touchStartY = e.touches[0].clientY;

//       if (progressRef.current >= 1) complete();
//     };

//     window.addEventListener("wheel", onWheel, { passive: false });
//     window.addEventListener("touchstart", onTouchStart, { passive: true });
//     window.addEventListener("touchmove", onTouch, { passive: false });

//     return () => {
//       document.documentElement.style.overflow = "";
//       document.body.style.overflow = "";
//       window.removeEventListener("wheel", onWheel);
//       window.removeEventListener("touchstart", onTouchStart);
//       window.removeEventListener("touchmove", onTouch);
//     };
//   }, []);

//   return (
//     <div
//       ref={overlayRef}
//       className="fixed inset-0 z-[9999]"
//     >
//       <div
//         ref={imageRef}
//         className="relative w-full h-full will-change-transform"
//       >
//         <Image
//           src="/hlo.webp"
//           alt="Portal Overlay"
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>
//     </div>
//   );
// }