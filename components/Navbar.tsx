"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CartDrawer from "@/components/CartDrawer";
import { useCart } from "@/components/CartProvider";
import {
  ChevronDown,
  ClipboardList,
  Home,
  Leaf,
  LocateFixed,
  MapPin,
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
} from "lucide-react";

const sectors = ["F-6", "F-7", "F-8", "F-10", "F-11", "E-7", "G-10"];

export default function Navbar() {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Islamabad");
  const { items, itemCount, notification, clearNotification } = useCart();

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setSelectedLocation("Current location");
      setIsLocationOpen(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setSelectedLocation(`Current location (${latitude.toFixed(3)}, ${longitude.toFixed(3)})`);
        setIsLocationOpen(false);
      },
      () => {
        setSelectedLocation("Current location");
        setIsLocationOpen(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  };

  useEffect(() => {
    if (!notification) return;

    const timer = setTimeout(() => {
      clearNotification();
    }, 1800);

    return () => clearTimeout(timer);
  }, [notification, clearNotification]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
          <button
            aria-label="Open navigation menu"
            className="cursor-pointer text-2xl text-slate-700 lg:hidden"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            {isMobileMenuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>

          <Link className="flex shrink-0 cursor-pointer items-center gap-2 text-xl font-bold tracking-tight text-slate-900" href="/">
            <Leaf aria-hidden="true" className="text-[#06C167]" size={25} strokeWidth={2.4} />
            <span>Food<span className="text-[#06C167]">Go</span></span>
          </Link>

          <div
            className="relative hidden shrink-0 lg:block"
            onMouseEnter={() => setIsLocationOpen(true)}
            onMouseLeave={() => setIsLocationOpen(false)}
          >
            <button
              className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              onClick={() => setIsLocationOpen((isOpen) => !isOpen)}
              type="button"
            >
              <MapPin aria-hidden="true" className="text-[#06C167]" size={18} />
              {selectedLocation}
              <ChevronDown aria-hidden="true" size={15} />
            </button>
            {isLocationOpen && (
              <div className="absolute left-0 top-12 w-72 rounded-xl border border-slate-200 bg-white p-4 shadow-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Where do you want your food delivered?</p>
                <button
                  className="mt-4 flex w-full cursor-pointer items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-left text-sm font-semibold text-[#06C167]"
                  onClick={handleUseCurrentLocation}
                  type="button"
                >
                  <LocateFixed aria-hidden="true" size={17} /> Use current location
                </button>
                <p className="mt-4 border-b border-slate-100 pb-2 text-sm font-bold text-slate-900">{selectedLocation}</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-3">
                  {sectors.map((sector) => (
                    <button
                      className="cursor-pointer text-left text-sm text-slate-600 transition hover:text-[#06C167]"
                      key={sector}
                      onClick={() => {
                        setSelectedLocation(sector);
                        setIsLocationOpen(false);
                      }}
                      type="button"
                    >
                      {sector}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <label className="hidden min-w-0 flex-1 lg:block">
            <span className="sr-only">Search restaurants, dishes, or cuisines</span>
            <div className="flex items-center gap-3 rounded-lg bg-slate-100 px-4 py-2.5 text-slate-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#06C167]">
              <Search aria-hidden="true" size={18} />
              <input className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400" placeholder="Search restaurants, dishes, or cuisines" type="search" />
            </div>
          </label>

          <nav className="ml-auto hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
            <a className="cursor-pointer text-sm font-semibold text-slate-700 transition hover:text-[#06C167]" href="/orders">Orders</a>
            <button className="relative cursor-pointer text-slate-700" onClick={() => setIsCartOpen(true)} type="button" aria-label={`Open cart with ${itemCount} items`}>
              <ShoppingCart aria-hidden="true" size={21} />
              {itemCount > 0 && (
                <span className="absolute -right-3 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#06C167] px-1 text-[11px] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </button>
            <div
              className="relative"
              onMouseEnter={() => setIsAccountOpen(true)}
              onMouseLeave={() => setIsAccountOpen(false)}
            >
              <button aria-expanded={isAccountOpen} aria-label="Open account menu" className="cursor-pointer text-slate-700" onClick={() => setIsAccountOpen((isOpen) => !isOpen)} type="button"><User aria-hidden="true" size={21} /></button>
              {isAccountOpen && (
                <div className="absolute right-0 top-11 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                  {["My Profile", "My Orders", "Saved Addresses", "Favorites", "Payment Methods", "Settings", "Log out"].map((item) => (
                    <a className="block cursor-pointer rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-emerald-50 hover:text-[#06C167]" href="#" key={item}>{item}</a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <button className="relative cursor-pointer text-slate-700" onClick={() => setIsCartOpen(true)} type="button" aria-label={`Open cart with ${itemCount} items`}>
              <ShoppingCart aria-hidden="true" size={21} />
              {itemCount > 0 && (
                <span className="absolute -right-3 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#06C167] px-1 text-[11px] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </button>
            <button aria-label="Open account menu" className="cursor-pointer text-slate-700" type="button"><User aria-hidden="true" size={21} /></button>
          </div>
        </div>

        <div className="border-t border-slate-100 px-4 py-3 lg:hidden">
          <button className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-700" onClick={() => setIsLocationOpen((isOpen) => !isOpen)} type="button">
            <MapPin aria-hidden="true" className="text-[#06C167]" size={17} /> {selectedLocation} <ChevronDown aria-hidden="true" size={15} />
          </button>
          {isLocationOpen && (
            <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
              <div className="mb-3">
                <button
                  className="flex w-full cursor-pointer items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-left font-semibold text-[#06C167]"
                  onClick={handleUseCurrentLocation}
                  type="button"
                >
                  <LocateFixed aria-hidden="true" size={16} /> Use current location
                </button>
              </div>
              {sectors.join(" · ")}
            </div>
          )}
        </div>

        <label className="block border-t border-slate-100 px-4 py-3 lg:hidden">
          <span className="sr-only">Search food or restaurants</span>
          <div className="flex items-center gap-3 rounded-lg bg-slate-100 px-4 py-2.5 text-slate-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#06C167]">
            <Search aria-hidden="true" size={18} />
            <input className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400" placeholder="Search food or restaurants" type="search" />
          </div>
        </label>
      </header>

      {isMobileMenuOpen && <div className="border-b border-slate-200 bg-white px-4 py-3 lg:hidden"><a className="block cursor-pointer py-2 text-sm font-semibold text-slate-700" href="/orders">Orders</a></div>}

      <nav className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-4 border-t border-slate-200 bg-white py-2 text-center text-xs text-slate-600 lg:hidden" aria-label="Mobile navigation">
        <Link className="flex cursor-pointer flex-col items-center gap-1 font-semibold text-[#06C167]" href="/"><Home aria-hidden="true" size={18} />Home</Link>
        <a className="flex cursor-pointer flex-col items-center gap-1" href="#search"><Search aria-hidden="true" size={18} />Search</a>
        <a className="flex cursor-pointer flex-col items-center gap-1" href="/orders"><ClipboardList aria-hidden="true" size={18} />Orders</a>
        <button className="flex cursor-pointer flex-col items-center gap-1" onClick={() => setIsCartOpen(true)} type="button"><ShoppingCart aria-hidden="true" size={18} />Cart</button>
      </nav>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={items} />

      {notification && (
        <div className="fixed bottom-24 left-1/2 z-[80] -translate-x-1/2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-lg">
          {notification}
        </div>
      )}
    </>
  );
}
