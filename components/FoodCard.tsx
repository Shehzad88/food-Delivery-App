"use client";

import {
  Heart,
  Star,
  Plus,
} from "lucide-react";

import { useCart } from "@/components/CartProvider";

type FoodCardProps = {
  name: string;
  image: string;
  price: number;
  rating: number;
  restaurant: string;
  category: string;
  isPopular?: boolean;
};

export default function FoodCard({
  name,
  image,
  price,
  rating,
  restaurant,
  category,
  isPopular = false,
}: FoodCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: `${name}-${restaurant}`,
      name,
      price,
      image,
      quantity: 1,
    });
  };

  return (
    <div className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute left-3 top-3 rounded-full bg-[#06C167] px-3 py-1 text-xs font-semibold text-white">
            Popular
          </div>
        )}

        {/* Favorite */}
        <button
          type="button"
          aria-label={`Add ${name} to favorites`}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-md transition-all hover:scale-105 hover:bg-white"
        >
          <Heart
            size={18}
            strokeWidth={2}
            className="text-gray-700"
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Name + Rating */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="line-clamp-1 text-lg font-bold text-[#111111]">
              {name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {category}
            </p>
          </div>

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

        {/* Restaurant */}
        <p className="mt-3 text-sm text-gray-500">
          From{" "}
          <span className="font-medium text-gray-700">
            {restaurant}
          </span>
        </p>

        {/* Bottom */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">

          {/* Price */}
          <div>
            <span className="text-xs text-gray-400">
              Price
            </span>

            <p className="text-lg font-bold text-[#111111]">
              Rs. {price.toLocaleString()}
            </p>
          </div>

          {/* Add Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex h-10 cursor-pointer items-center gap-1.5 rounded-full bg-[#06C167] px-4 text-sm font-semibold text-white transition-all hover:bg-[#049A50] hover:shadow-md active:scale-95"
          >
            <Plus size={18} strokeWidth={2.5} />
            Add
          </button>

        </div>
      </div>
    </div>
  );
}