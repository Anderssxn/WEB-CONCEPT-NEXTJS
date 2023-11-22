"use client";
import { useEffect, useState } from "react";
const useSize = () => {
  let isClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState([
    isClient ? window.innerWidth : undefined,
    isClient ? window.innerHeight : undefined,
  ]);

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, [windowSize]);

  return windowSize;
};

export default useSize;
