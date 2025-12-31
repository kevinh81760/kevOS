"use client";

import PhotoItem from "./PhotoItem";

interface PhotoGridProps {
  className?: string;
}

export default function PhotoGrid({ className = "" }: PhotoGridProps) {
  const photos = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-0 pr-4 -ml-[10px] -mt-[20px] ${className}`}>
      {photos.map((index) => (
        <PhotoItem key={index} index={index} />
      ))}
    </div>
  );
}

