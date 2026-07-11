import PackageCard from "./PackageCard";

interface Package {
  id: number;
  title: string;
  slug: string;
  description: string;
  image_url: string;
  hotel_name: string;
  hotel_rating: string;
  category: string;
  price: number;
  flight_from: string;
  flight_to: string;
  duration_days: number;
  departure_date: string;
  return_date: string;
  total_slots: number;
  booked_slots: number;
}

interface PackagesGridProps {
  packages: Package[];
}

export default function PackagesGrid({
  packages,
}: PackagesGridProps) {
  if (!packages || packages.length === 0) {
    return (
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div
            className="
              rounded-3xl
              border
              border-dashed
              border-slate-300
              bg-white
              py-24
              text-center
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                text-slate-900
              "
            >
              No Packages Found
            </h2>

            <p
              className="
                mt-4
                text-slate-600
              "
            >
              There are currently no travel packages available.
              Please check back later.
            </p>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 pb-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div
          className="
            mb-10
            flex
            items-center
            justify-between
          "
        >

          <div>

            <h2
              className="
                text-4xl
                font-black
                text-slate-900
              "
            >
              Available Packages
            </h2>

            <p
              className="
                mt-2
                text-slate-600
              "
            >
              {packages.length} package(s) available
            </p>

          </div>

        </div>

        {/* Grid */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {packages.map((pkg) => (

            <PackageCard
              key={pkg.id}
              pkg={pkg}
            />

          ))}

        </div>

      </div>

    </section>
  );
}