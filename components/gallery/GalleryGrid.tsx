import GalleryCard from "./GalleryCard";

interface GalleryItem {
  id: number;
  title: string;
  image_url: string;
  category: string;
  description: string;
  created_at: string;
}

interface Props {
  gallery: GalleryItem[];
}

export default function GalleryGrid({
  gallery,
}: Props) {

  if (!gallery || gallery.length === 0) {
    return (
      <section className="bg-slate-50 pb-24">

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

            <h2 className="text-3xl font-bold text-slate-900">
              Gallery is Empty
            </h2>

            <p className="mt-4 text-slate-600">
              Photos uploaded by the administrator will
              appear here.
            </p>

          </div>

        </div>

      </section>
    );
  }

  return (
    <section className="bg-slate-50 pb-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">

          <h2 className="text-4xl font-black text-slate-900">
            Travel Memories
          </h2>

          <p className="mt-3 text-slate-600">
            Browse our collection of memorable moments
            from Umrah, Hajj and international travel.
          </p>

        </div>

        <div
          className="
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          "
        >

          {gallery.map((image) => (

            <GalleryCard
              key={image.id}
              image={image}
            />

          ))}

        </div>

      </div>

    </section>
  );
}