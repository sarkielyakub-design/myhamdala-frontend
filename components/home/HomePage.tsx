export const dynamic = "force-dynamic";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import FeaturedPackages from "@/components/home/FeaturedPackages";
import PopularDestinations from "@/components/home/PopularDestinations";
import LatestNews from "@/components/home/LatestNews";
import Gallery from "@/components/home/Gallery";
import WhyTrustUs from "@/components/home/WhyTrustUs";
import Newsletter from "@/components/home/Newsletter";

import { getHomeData } from "@/lib/api";

export default async function HomePage() {
  const home = await getHomeData();

  return (
    <>
      <Navbar />

      <Hero hero={home.hero} />

      <FeaturedPackages
        packages={home.featured_packages}
      />

      <PopularDestinations />

      <LatestNews
        news={home.latest_news}
      />

      <Gallery
        gallery={home.gallery}
      />

      <WhyTrustUs />

      <Newsletter />

      <Footer />
    </>
  );
}