export const dynamic = "force-dynamic";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { BookingProvider } from "@/components/booking/BookingContext";
import BookingWizard from "@/components/booking/BookingWizard";

import { getPackage } from "@/lib/api";

interface Props {
  searchParams: Promise<{
    package?: string;
  }>;
}

export default async function BookingPage({
  searchParams,
}: Props) {

  const params = await searchParams;

  const packageId = params.package;

  let selectedPackage = null;

  if (packageId) {
    selectedPackage = await getPackage(packageId);
  }

  return (
    <>
      <Navbar />

      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <BookingProvider>

            <BookingWizard
              package={selectedPackage}
            />

          </BookingProvider>

        </div>

      </section>

      <Footer />
    </>
  );
}