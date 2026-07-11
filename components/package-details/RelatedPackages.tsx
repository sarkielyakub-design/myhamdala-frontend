import PackageCard from "@/components/packages/PackageCard";

interface Props {
  packages: any[];
  currentId: number;
}

export default function RelatedPackages({
  packages,
  currentId,
}: Props) {

  const relatedPackages = packages
    .filter((pkg) => pkg.id !== currentId)
    .slice(0, 3);

  if (relatedPackages.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-100 py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-12 text-center">

          <span
            className="
              inline-flex
              rounded-full
              bg-blue-100
              px-5
              py-2
              text-sm
              font-semibold
              text-blue-700
            "
          >
            More Packages
          </span>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              text-slate-900
            "
          >
            You May Also Like
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            Explore more carefully selected Umrah packages
            designed to suit different budgets and travel
            preferences.
          </p>

        </div>

        {/* Cards */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {relatedPackages.map((pkg) => (

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