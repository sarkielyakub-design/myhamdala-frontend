"use client";

interface Props {
  categories?: string[];
  selected?: string;
  onSelect?: (category: string) => void;
}

export default function NewsCategories({
  categories = [
    "All",
    "Umrah",
    "Hajj",
    "Visa",
    "Travel",
    "Flights",
    "Hotels",
    "Company News",
  ],
  selected = "All",
  onSelect,
}: Props) {
  return (
    <section className="bg-white py-8">

      <div className="mx-auto flex max-w-7xl flex-wrap gap-4 px-6">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => onSelect?.(category)}
            className={`
              rounded-full
              px-6
              py-3
              text-sm
              font-semibold
              transition-all
              duration-300
              ${
                selected === category
                  ? "bg-blue-700 text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              }
            `}
          >
            {category}
          </button>

        ))}

      </div>

    </section>
  );
}