import PhotoGrid from "./components/PhotoGrid";
import BookGrid from "./components/BookGrid";

export default function GalleryPage() {
  return (
    <div className="min-h-[calc(100vh-100px)] px-6 pt-[50px] pb-20">
      <div className="max-w-7xl mx-auto ml-[87px] mr-[87px]">
        <h1 className="text-5xl font-black text-white tracking-tighter mb-12" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
          PHOTO GALLERY
        </h1>
        <PhotoGrid />
        <h1 className="text-5xl font-black text-white tracking-tighter mt-12" style={{ fontWeight: 600, letterSpacing: '-0.01em' }}>
          MY LIBRARY
        </h1>
        <BookGrid className="mt-12" />
      </div>
    </div>
  );
}

