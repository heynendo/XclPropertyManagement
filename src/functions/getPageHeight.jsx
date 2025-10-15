// src/functions/usePageHeight.js
import { useState, useEffect } from "react";

export default function usePageHeight() {
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      const height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      setPageHeight(height);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return pageHeight;
}
