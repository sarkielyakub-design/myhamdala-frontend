import GalleryHero from "@/components/admin/gallery/GalleryHero";
import GalleryStats from "@/components/admin/gallery/GalleryStats";
import GalleryToolbar from "@/components/admin/gallery/GalleryToolbar";
import GalleryGrid from "@/components/admin/gallery/GalleryGrid";

import { getGallery } from "@/lib/api";

export default async function GalleryPage() {

  const gallery = await getGallery();

  return (
    <div className="space-y-8">

      <GalleryHero />

      <GalleryStats
        gallery={gallery}
      />

      <GalleryToolbar />

      <GalleryGrid
        gallery={gallery}
      />

    </div>
  );
}