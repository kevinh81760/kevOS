"use client";

import { useLoading } from "@/components/providers/LoadingProvider";
import { NavBar } from "@/components/navbar";
import SmoothScroll from "@/components/providers/SmoothScroll";

export default function AppContent({ children }: { children: React.ReactNode }) {
  const { isLoading } = useLoading();

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black z-[9998]" />
    );
  }

  return (
    <SmoothScroll>
      {/* Multi-layered background system */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-zinc-900/30 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[300px] bg-gradient-to-r from-transparent via-zinc-700/10 to-transparent blur-[100px]" />
      </div>

      <NavBar />
      <main className="pt-20">{children}</main>
    </SmoothScroll>
  );
}

