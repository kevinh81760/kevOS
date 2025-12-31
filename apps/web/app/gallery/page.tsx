import GalleryHeader from "./components/GalleryHeader";
import PhotoGrid from "./components/PhotoGrid";

export default function GalleryPage() {
  return (
    <div className="min-h-[calc(100vh-100px)] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <GalleryHeader className="mb-12" />
        <PhotoGrid />
      </div>
    </div>
  );
}

