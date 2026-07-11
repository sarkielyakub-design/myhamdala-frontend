export const dynamic = "force-dynamic";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import PackageHero from "@/components/package-details/PackageHero";
import PackageOverview from "@/components/package-details/PackageOverview";
import PackageSidebar from "@/components/package-details/PackageSidebar";
import RelatedPackages from "@/components/package-details/RelatedPackages";

import {
  getPackage,
  getPackages,
} from "@/lib/api";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PackageDetailsPage({
  params,
}: Props) {

  const { id } = await params;

  const pkg = await getPackage(id);

  if (!pkg) {
    return (
      <>
        <Navbar />

        <section className="py-32 text-center">
          <h1 className="text-4xl font-bold">
            Package Not Found
          </h1>

          <p className="mt-4 text-slate-600">
            The package you are looking for does not exist.
          </p>
        </section>

        <Footer />
      </>
    );
  }

  const relatedPackages = await getPackages();

  return (
    <>
      <Navbar />

      <PackageHero package={pkg} />

      <section className="bg-slate-50 py-20">

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-10
            px-6
            lg:grid-cols-3
          "
        >

          <div className="lg:col-span-2">
            <PackageOverview package={pkg} />
          </div>

          <PackageSidebar package={pkg} />

        </div>

      </section>

      <RelatedPackages
        packages={relatedPackages}
        currentId={pkg.id}
      />

      <Footer />
    </>
  );
}