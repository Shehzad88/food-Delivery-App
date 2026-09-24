import {
  Heart,
  Star,
  Clock3,
  Bike,
  MapPin,
} from "lucide-react";
import Link from "next/link";

type RestaurantCardProps = {
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
  deliveryFee: string;
  location: string;
  isOpen?: boolean;
  website?: string;
};

export default function RestaurantCard({
  name,
  image,
  rating,
  cuisine,
  deliveryTime,
  deliveryFee,
  location,
  isOpen = true,
  website,
}: RestaurantCardProps) {
  const cardLink = website || `/restaurant/${encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))}`;

  return (
    <Link
      href={cardLink}
      target={website ? "_blank" : undefined}
      rel={website ? "noopener noreferrer" : undefined}
      className="group block w-full cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Favorite */}
        <button
          type="button"
          aria-label={`Add ${name} to favorites`}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-md transition-all hover:scale-105 hover:bg-white"
        >
          <Heart
            size={19}
            strokeWidth={2}
            className="text-gray-700"
          />
        </button>

        {/* Open / Closed */}
        <div
          className={`absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold ${
            isOpen
              ? "bg-[#06C167] text-white"
              : "bg-gray-800 text-white"
          }`}
        >
          {isOpen ? "Open now" : "Closed"}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Restaurant Name */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-1 text-lg font-bold text-[#111111]">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex shrink-0 items-center gap-1">
            <Star
              size={15}
              fill="currentColor"
              className="text-[#FFB800]"
            />

            <span className="text-sm font-semibold text-[#111111]">
              {rating}
            </span>
          </div>
        </div>

        {/* Cuisine */}
        <p className="mt-1 text-sm text-gray-500">
          {cuisine}
        </p>

        {/* Location */}
        <div className="mt-3 flex items-center gap-1.5 text-sm text-gray-500">
          <MapPin size={15} className="text-[#06C167]" />

          <span className="line-clamp-1">
            {location}
          </span>
        </div>

        {/* Restaurant Information */}
        <div className="mt-4 flex items-center gap-4 border-t border-gray-100 pt-3">

          {/* Delivery Time */}
          <div className="flex items-center gap-1.5">
            <Clock3
              size={15}
              className="text-gray-500"
            />

            <span className="text-xs font-medium text-gray-600">
              {deliveryTime}
            </span>
          </div>

          {/* Delivery Fee */}
          <div className="flex items-center gap-1.5">
            <Bike
              size={16}
              className="text-[#06C167]"
            />

            <span className="text-xs font-medium text-gray-600">
              {deliveryFee}
            </span>
          </div>

        </div>
      </div>
    </Link>
  );
}