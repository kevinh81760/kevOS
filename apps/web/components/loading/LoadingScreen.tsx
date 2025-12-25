"use client";

import { useEffect, useState } from "react";
import { useLoading } from "@/components/providers/LoadingProvider";

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const hasSeenLoader = typeof window !== "undefined" && sessionStorage.getItem("kevos_loaded");

    if (hasSeenLoader) {
      setIsLoading(false);
      return;
    }

    // Brief delay before showing loading text (black screen first)
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 1200);

    const doneTimer = setTimeout(() => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("kevos_loaded", "true");
      }
      setVisible(false);
      setIsLoading(false);
    }, 4400); // 1200ms delay + 3200ms

    return () => {
      clearTimeout(showTimer);
      clearTimeout(doneTimer);
    };
  }, [mounted, setIsLoading]);

  if (!mounted || !visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
      <span className="text-3xl font-black tracking-tighter uppercase text-white">
        loading
      </span>
    </div>
  );
}
