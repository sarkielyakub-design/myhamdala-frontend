export const dynamic = "force-dynamic";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import PackageHero from "@/components/packages/PackageHero";
import PackagesFilter from "@/components/packages/PackagesFilter";
import PackagesGrid from "@/components/packages/PackagesGrid";

import { getPackages } from "@/lib/api";

export default async function PackagesPage() {
  const packages = await getPackages();

  return (
    <>
      <Navbar />

      <PackageHero package={packages[0]} />

      <PackagesFilter />

      <PackagesGrid packages={packages} />

      <Footer />
    </>
  );
}