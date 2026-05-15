"use client";

import { useEffect } from "react";
import Blobity from "blobity";

export default function Cursor() {
  useEffect(() => {
    const blobity = new Blobity({
      licenseKey: "opensource",

      focusableElements: "[data-blobity]",

      color: "#e4ded7",
      dotColor: "#000000",

      invert: true,

      magnetic: true,

      radius: 5,
      focusableElementsOffsetX:5,
      focusableElementsOffsetY:6,
    });

    return () => {
      blobity.destroy();
    };
  }, []);

  return null;
}