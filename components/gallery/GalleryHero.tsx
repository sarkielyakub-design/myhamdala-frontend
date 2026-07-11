import {
  Camera,
  Images,
  Globe2,
  Plane,
} from "lucide-react";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-slate-900 to-black" />

      <div className="absolute -top-52 -left-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute -bottom-52 -right-40 h-96 w-96 rounded-full bg-yellow-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-28">

        <div className="mx-auto max-w-4xl text-center">

          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-blue-500/30
              bg-blue-500/10
              px-6
              py-3
            "
          >
            <Camera
              size={20}
              className="text-yellow-400"
            />

            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[3px]
                text-blue-200
              "
            >
              Travel Gallery
            </span>

          </div>

          <h1
            className="
              mt-8
              text-5xl
              font-black
              leading-tight
              text-white
              lg:text-7xl
            "
          >
            Explore Our

            <span className="block text-yellow-400">
              Journey Gallery
            </span>

          </h1>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-slate-300
            "
          >
            Browse memorable moments from Umrah,
            Hajj, airport departures, hotels,
            Ziyarah tours and successful pilgrimages
            organized by M.Y Hamdala Travel & Tour.
          </p>

        </div>

        {/* Statistics */}

        <div
          className="
            mt-20
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-4
          "
        >

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

            <Images
              size={36}
              className="text-yellow-400"
            />

            <h3 className="mt-5 text-4xl font-black text-white">
              500+
            </h3>

            <p className="mt-2 text-slate-300">
              Gallery Photos
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

            <Plane
              size={36}
              className="text-yellow-400"
            />

            <h3 className="mt-5 text-4xl font-black text-white">
              100+
            </h3>

            <p className="mt-2 text-slate-300">
              Successful Trips
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

            <Globe2
              size={36}
              className="text-yellow-400"
            />

            <h3 className="mt-5 text-4xl font-black text-white">
              20+
            </h3>

            <p className="mt-2 text-slate-300">
              Destinations
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">

            <Camera
              size={36}
              className="text-yellow-400"
            />

            <h3 className="mt-5 text-4xl font-black text-white">
              Live
            </h3>

            <p className="mt-2 text-slate-300">
              Updated Gallery
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}