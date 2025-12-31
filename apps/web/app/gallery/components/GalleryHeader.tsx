"use client";

interface GalleryHeaderProps {
  className?: string;
}

export default function GalleryHeader({ className = "" }: GalleryHeaderProps) {
  return (
    <h1 className={`text-5xl font-black text-white tracking-tighter ${className}`} style={{ fontWeight: 600, letterSpacing: '-.017em' }}>
      PHOTO GALLERY
    </h1>
  );
}

