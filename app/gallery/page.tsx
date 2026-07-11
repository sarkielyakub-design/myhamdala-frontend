export const dynamic = "force-dynamic";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import GalleryGrid from "@/components/gallery/GalleryGrid";

import { getGallery } from "@/lib/api";

export default async function GalleryPage() {

  const gallery = await getGallery();

  return (
    <>
      <Navbar />

      <GalleryHero />

      <GalleryFilter />

      <GalleryGrid
        gallery={gallery}
      />

      <Footer />
    </>
  );
}