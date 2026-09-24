import RestaurantCard from "./RestaurantCard";

const restaurants = [
  {
    name: "Monal Restaurant",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    rating: 4.8,
    cuisine: "Pakistani • BBQ • Continental",
    deliveryTime: "25–35 min",
    deliveryFee: "Rs. 99 delivery",
    location: "F-6, Islamabad",
    isOpen: true,
    website: "https://themonal.com/",
  },
  {
    name: "Asian Wok",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    rating: 4.6,
    cuisine: "Chinese • Asian • Noodles",
    deliveryTime: "30–40 min",
    deliveryFee: "Rs. 79 delivery",
    location: "F-7, Islamabad",
    isOpen: true,
    website: "https://asianwok.pk/",
  },
  {
    name: "Burger Lab",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
    rating: 4.7,
    cuisine: "Burgers • Fast Food",
    deliveryTime: "20–30 min",
    deliveryFee: "Rs. 59 delivery",
    location: "F-10, Islamabad",
    isOpen: true,
    website: "https://burgerlab.com.pk/",
  },
  {
    name: "Cheezious",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    rating: 4.5,
    cuisine: "Pizza • Fast Food",
    deliveryTime: "25–35 min",
    deliveryFee: "Rs. 69 delivery",
    location: "G-9, Islamabad",
    isOpen: true,
    website: "https://cheezious.com/",
  },
  {
    name: "Pizza Hut",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    rating: 4.4,
    cuisine: "Pizza • Italian • Pasta",
    deliveryTime: "25–35 min",
    deliveryFee: "Rs. 89 delivery",
    location: "G-11, Islamabad",
    isOpen: true,
    website: "https://www.pizzahut.com.pk/",
  },
  {
    name: "KFC",
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
    rating: 4.3,
    cuisine: "Chicken • Fast Food",
    deliveryTime: "20–30 min",
    deliveryFee: "Rs. 79 delivery",
    location: "E-11, Islamabad",
    isOpen: true,
    website: "https://www.kfcpakistan.com/",
  },
  {
    name: "Cafe Aylanto",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    rating: 4.7,
    cuisine: "Cafe • Coffee • Desserts",
    deliveryTime: "30–40 min",
    deliveryFee: "Rs. 149 delivery",
    location: "D-12, Islamabad",
    isOpen: true,
    website: "https://www.aylanto.com/",
  },
  {
    name: "Nando's",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    rating: 4.5,
    cuisine: "Peri Peri • Grills",
    deliveryTime: "25–35 min",
    deliveryFee: "Rs. 99 delivery",
    location: "F-8, Islamabad",
    isOpen: true,
    website: "https://www.nandos.com.pk/",
  },
];

export default function RestaurantSection() {
  return (
    <section className="bg-[#F8F8F8] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#06C167]">
              Near you
            </p>

            <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl md:text-4xl">
              Popular restaurants
            </h2>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              Delicious food from restaurants around Islamabad
            </p>
          </div>

          <button
            type="button"
            className="hidden text-sm font-semibold text-[#06C167] transition-colors hover:text-[#049A50] sm:block"
          >
            View all →
          </button>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.name}
              {...restaurant}
            />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-6 text-center sm:hidden">
          <button
            type="button"
            className="text-sm font-semibold text-[#06C167] hover:text-[#049A50]"
          >
            View all restaurants →
          </button>
        </div>

      </div>
    </section>
  );
}