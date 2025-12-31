"use client";

interface GalleryHeaderProps {
  className?: string;
}

export default function GalleryHeader({ className = "" }: GalleryHeaderProps) {
  return (
    <h1 className={`text-6xl font-black text-white tracking-tighter ${className}`} style={{ fontWeight: 900, letterSpacing: '-0.05em' }}>
      PHOTO GALLERY
    </h1>
  );
}

