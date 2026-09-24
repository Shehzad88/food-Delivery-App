import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: "Burgers",
    image: "/images/burger.jfif",
  },
  {
    name: "Pizza",
    image: "/images/pizza.jfif",
  },
  {
    name: "Chicken",
    image: "/images/chicken.jfif",
  },
  {
    name: "Pakistani",
    image: "/images/pakistani.jfif",
  },
  {
    name: "Chinese",
    image: "/images/chinees.jfif",
  },
  {
    name: "Fast Food",
    image: "/images/fast%20food.jfif",
  },
  {
    name: "Desserts",
    image: "/images/dessert.jfif",
  },
  {
    name: "Cafe",
    image: "/images/cafe.jfif",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#06C167]">
            Explore food
          </p>

          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl md:text-4xl">
                Browse by category
              </h2>

              <p className="mt-2 text-sm text-gray-500 sm:text-base">
                Explore what you&apos;re craving
              </p>
            </div>

            <button
              type="button"
              className="hidden text-sm font-semibold text-[#06C167] transition-colors hover:text-[#049A50] sm:block"
            >
              View all →
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-5 overflow-x-auto pb-4 sm:gap-7 md:justify-between md:overflow-visible">
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>

        {/* Mobile View All */}
        <button
          type="button"
          className="mt-4 text-sm font-semibold text-[#06C167] hover:text-[#049A50] sm:hidden"
        >
          View all →
        </button>

      </div>
    </section>
  );
}