import Image from "next/image";
import { Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden">
      <Image
        src="/images/hero.avif"
        alt="Delicious food"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 z-10 bg-black/55" />

      <div className="relative z-20 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-20">
        <div className="max-w-2xl">
          <p className="mb-4 font-semibold text-white">
            DELIVERED FRESH TO YOUR DOOR
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white lg:text-7xl">
            Great food.
            <br />
            Right to your door.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/90">
            Discover the best restaurants and delicious meals
            around Islamabad.
          </p>

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
      </div>

    </section>
  );
}