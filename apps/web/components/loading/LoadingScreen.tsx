"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"loading" | "glitch" | "done">("loading");

  useEffect(() => {
    const glitchTimer = setTimeout(() => {
      setPhase("glitch");
    }, 1200);

    const doneTimer = setTimeout(() => {
      setPhase("done");
    }, 2200);

    return () => {
      clearTimeout(glitchTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
      {phase === "loading" && (
        <span className="text-xs tracking-[0.4em] uppercase text-white animate-pulse">
          loading
        </span>
      )}

      {phase === "glitch" && (
        <span className="glitch text-xs tracking-[0.4em] uppercase text-white">
          loading
        </span>
      )}
    </div>
  );
}
