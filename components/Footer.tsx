import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#06C167]">
                Stay updated
              </p>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Get delicious deals in your inbox
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                Get special offers, new restaurants, and exclusive food deals
                delivered straight to your inbox.
              </p>
            </div>

            <form className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-l-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-[#06C167]"
              />

              <button
                type="submit"
                className="flex items-center gap-2 rounded-r-xl bg-[#06C167] px-5 py-3 text-sm font-semibold transition hover:bg-[#049A50]"
              >
                Subscribe
                <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="text-2xl font-bold">
              Food<span className="text-[#06C167]">Go</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              Your favorite food, delivered right to your doorstep. Discover
              restaurants and delicious meals around Islamabad.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#06C167]"
              >
                <span className="text-sm font-bold" aria-hidden="true">f</span>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#06C167]"
              >
                <span className="text-sm font-bold" aria-hidden="true">◎</span>
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#06C167]"
              >
                <span className="text-sm font-bold" aria-hidden="true">t</span>
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#06C167]"
              >
                <span className="text-sm font-bold" aria-hidden="true">▶</span>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-[#06C167]">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#06C167]">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#06C167]">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#06C167]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customers */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Customers
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-[#06C167]">
                  Browse Restaurants
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#06C167]">
                  Track Order
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#06C167]">
                  My Account
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#06C167]">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Restaurants */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Restaurants
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="transition hover:text-[#06C167]">
                  Partner With Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#06C167]">
                  Restaurant Login
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#06C167]">
                  Business Dashboard
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-[#06C167]">
                  Restaurant Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 grid grid-cols-1 gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#06C167]/10">
              <MapPin size={18} className="text-[#06C167]" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="text-sm text-gray-300">
                Islamabad, Pakistan
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#06C167]/10">
              <Phone size={18} className="text-[#06C167]" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Call Us</p>
              <p className="text-sm text-gray-300">
                +92 300 1234567
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#06C167]/10">
              <Mail size={18} className="text-[#06C167]" />
            </div>

            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm text-gray-300">
                support@foodgo.pk
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © 2026 FoodGo. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}