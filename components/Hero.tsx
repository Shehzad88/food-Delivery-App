import Image from "next/image";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">

        {/* Left */}
        <div>
          <p className="mb-4 font-semibold text-[#06C167]">
            DELIVERED FRESH TO YOUR DOOR
          </p>

          <h1 className="text-5xl font-bold leading-tight text-[#111111] lg:text-7xl">
            Great food.
            <br />
            Right to your door.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Discover the best restaurants and delicious meals
            around Islamabad.
          </p>

          {/* Search */}
          <div className="mt-8 flex max-w-xl items-center rounded-full bg-white p-2 shadow-sm">
            <Search aria-hidden="true" className="mx-4 shrink-0 text-slate-500" size={20} strokeWidth={2} />

            <input
              type="text"
              placeholder="Search restaurants or dishes"
              className="flex-1 bg-transparent py-3 outline-none"
            />

            <button className="cursor-pointer rounded-full bg-[#06C167] px-7 py-3 font-semibold text-white">
              Find Food
            </button>
          </div>
        </div>

        {/* Right */}
        <div>
          <Image
            src="/images/hero.avif"
            alt="Delicious food"
            width={1200}
            height={900}
            className="w-full rounded-3xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}