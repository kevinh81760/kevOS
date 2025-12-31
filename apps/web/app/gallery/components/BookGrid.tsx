"use client";

import BookItem from "./BookItem";

interface BookGridProps {
  className?: string;
}

export default function BookGrid({ className = "" }: BookGridProps) {
  const bookSources = ["/Grid System Book.jpg", "/Atomic Habits Picture.jpg", "/Pragmatic Programmer.jpg"];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 ${className}`} style={{ marginLeft: 0 }}>
      {bookSources.map((src, index) => (
        <BookItem key={index} index={index} src={src} />
      ))}
    </div>
  );
}

