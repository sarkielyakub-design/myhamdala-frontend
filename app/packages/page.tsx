export const dynamic = "force-dynamic";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import PackagesHero from "@/components/packages/PackagesHero";
import PackagesFilter from "@/components/packages/PackagesFilter";
import PackagesGrid from "@/components/packages/PackagesGrid";

import { getPackages } from "@/lib/api";

export default async function PackagesPage() {
  const packages = await getPackages();

  return (
    <>
      <Navbar />

      <PackagesHero />

      <PackagesFilter />

      <PackagesGrid packages={packages} />

      <Footer />
    </>
  );
}