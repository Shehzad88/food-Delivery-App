"use client";

import { useCart } from "@/components/CartProvider";

const currency = new Intl.NumberFormat("en-PK", {
  style: "currency",
  currency: "PKR",
  maximumFractionDigits: 0,
});

export default function CheckoutPage() {
  const { items } = useCart();

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = items.length > 0 ? 199 : 0;
  const total = subtotal + deliveryFee;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#06C167]">Checkout</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">Your order</h1>
      </div>

      {items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Your cart is empty</h2>
          <p className="mt-2 text-slate-500">Add items from the home page to continue.</p>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <section className="space-y-5">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-slate-100">
                  {item.image && (
                    <img
                      alt={item.name}
                      className="h-full w-full object-cover"
                      src={item.image}
                    />
                  )}
                </div>

                <div className="flex flex-1 items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{currency.format(item.price)} each</p>
                  </div>

                  <div className="text-right">
                    <p className="text-base font-bold text-slate-900">Qty: {item.quantity}</p>
                    <p className="mt-1 text-sm font-medium text-[#06C167]">
                      {currency.format(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">Summary</h2>

            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{currency.format(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery fee</span>
                <span>{currency.format(deliveryFee)}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200 pt-4 text-base font-semibold text-slate-900">
                <span>Total</span>
                <span>{currency.format(total)}</span>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-[#06C167] px-4 py-3.5 text-sm font-bold text-white transition hover:bg-[#049A50]"
            >
              Place order
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}
