"use client";

import PhotoItem from "./PhotoItem";

interface PhotoGridProps {
  className?: string;
}

export default function PhotoGrid({ className = "" }: PhotoGridProps) {
  const photos = Array.from({ length: 9 }, (_, i) => i);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
      {photos.map((index) => (
        <PhotoItem key={index} index={index} />
      ))}
    </div>
  );
}

