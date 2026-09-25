import FoodCard from "./FoodCard";

const foods = [
  {
    name: "Zinger Burger",
    image: "/images/burger.jfif",
    price: 599,
    rating: 4.8,
    restaurant: "Burger Lab",
    category: "Burgers • Fast Food",
    isPopular: true,
  },
  {
    name: "Chicken Biryani",
    image: "/images/pakistani.jfif",
    price: 450,
    rating: 4.7,
    restaurant: "Desi Kitchen",
    category: "Pakistani • Rice",
    isPopular: true,
  },
  {
    name: "Pepperoni Pizza",
    image: "/images/pizza.jfif",
    price: 1299,
    rating: 4.6,
    restaurant: "Pizza House",
    category: "Pizza • Italian",
    isPopular: false,
  },
  {
    name: "Chicken Chow Mein",
    image: "/images/chinees.jfif",
    price: 699,
    rating: 4.5,
    restaurant: "Asian Wok",
    category: "Chinese • Noodles",
    isPopular: false,
  },
  {
    name: "Grilled Chicken Platter",
    image: "/images/chicken.jfif",
    price: 899,
    rating: 4.7,
    restaurant: "Monal Restaurant",
    category: "Grill • Chicken",
    isPopular: true,
  },
  {
    name: "Hot Wings Bucket",
    image: "/images/fast-food.jfif",
    price: 799,
    rating: 4.4,
    restaurant: "KFC",
    category: "Fast Food • Wings",
    isPopular: false,
  },
  {
    name: "Classic Pasta Alfredo",
    image: "/images/dessert.jfif",
    price: 1099,
    rating: 4.6,
    restaurant: "Cafe Aylanto",
    category: "Pasta • Italian",
    isPopular: false,
  },
  {
    name: "Peri Peri Chicken Combo",
    image: "/images/chicken.jfif",
    price: 1199,
    rating: 4.8,
    restaurant: "Nando's",
    category: "Grill • Chicken",
    isPopular: true,
  },
];

export default function FoodSection() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#06C167]">
              Popular dishes
            </p>

            <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl md:text-4xl">
              What&apos;s trending
            </h2>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Popular dishes people are ordering right now
            </p>
          </div>

          <button
            type="button"
            className="hidden text-sm font-semibold text-[#06C167] transition-colors hover:text-[#049A50] sm:block"
          >
            View all →
          </button>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {foods.map((food) => (
            <FoodCard
              key={food.name}
              {...food}
            />
          ))}
        </div>

        {/* Mobile */}
        <div className="mt-6 text-center sm:hidden">
          <button
            type="button"
            className="text-sm font-semibold text-[#06C167] hover:text-[#049A50]"
          >
            View all dishes →
          </button>
        </div>

      </div>
    </section>
  );
}