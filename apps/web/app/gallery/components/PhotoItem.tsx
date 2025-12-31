"use client";

import HoverScale from "@/components/animations/HoverScale";
import Image from "next/image";

interface PhotoItemProps {
  index: number;
  src?: string | null;
}

export default function PhotoItem({ index, src }: PhotoItemProps) {
  return (
    <HoverScale scale={1.02} duration={0.5}>
      <div className="relative aspect-[4/4] rounded-lg overflow-hidden bg-[#111111] transition-colors -m-[20px] scale-[0.855]">
        {src ? (
          <Image
            src={src}
            alt={`Gallery photo ${index + 1}`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-zinc-800/50"></div>
            <span className="text-zinc-500 text-xs uppercase tracking-wide">Photo {index + 1}</span>
          </div>
        )}
      </div>
    </HoverScale>
  );
}

