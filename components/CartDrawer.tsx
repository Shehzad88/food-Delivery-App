"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";

import { useCart } from "@/components/CartProvider";

export type CartDrawerItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartDrawerProps = {
  isOpen: boolean;
  items?: CartDrawerItem[];
  onClose: () => void;
};

const currency = new Intl.NumberFormat("en-PK", {
  style: "currency",
  currency: "PKR",
  maximumFractionDigits: 0,
});

export default function CartDrawer({
  isOpen,
  items = [],
  onClose,
}: CartDrawerProps) {
  const router = useRouter();
  const { updateQuantity } = useCart();

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const deliveryFee = items.length > 0 ? 199 : 0;
  const total = subtotal + deliveryFee;
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  const handleDecrease = (id: string, quantity: number) => {
    if (quantity <= 1) {
      updateQuantity(id, 0);
      return;
    }

    updateQuantity(id, quantity - 1);
  };

  const handleIncrease = (id: string, quantity: number) => {
    updateQuantity(id, quantity + 1);
  };

  const handleProceed = () => {
    onClose();
    router.push("/checkout");
  };

  return (
    <>
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] bg-slate-950/30 transition-opacity duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        onClick={onClose}
      />
      <aside
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#06C167]">Your order</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-950">Cart ({itemCount})</h2>
          </div>
          <button aria-label="Close cart" className="cursor-pointer rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950" onClick={onClose} type="button">
            <X aria-hidden="true" size={21} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-[#06C167]">
              <ShoppingBag aria-hidden="true" size={35} strokeWidth={1.6} />
            </div>
            <h3 className="mt-6 text-xl font-bold text-slate-950">Your cart is empty</h3>
            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">Add a delicious meal from your favorite restaurant and it will appear here.</p>
            <button className="mt-7 cursor-pointer rounded-full bg-[#06C167] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#049A50]" onClick={onClose} type="button">Explore food</button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              {items.map((item) => (
                <div className="flex gap-3" key={item.id}>
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                    {item.image && <Image alt={item.name} className="object-cover" fill sizes="80px" src={item.image} />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold text-slate-950">{item.name}</h3>
                    <p className="mt-1 text-sm text-slate-500">{currency.format(item.price)}</p>
                    <div className="mt-2 flex w-fit items-center gap-3 rounded-full border border-slate-200 px-2 py-1">
                      <button aria-label={`Decrease ${item.name} quantity`} className="cursor-pointer text-slate-500 hover:text-[#06C167]" type="button" onClick={() => handleDecrease(item.id, item.quantity)}><Minus size={14} /></button>
                      <span className="min-w-4 text-center text-sm font-semibold">{item.quantity}</span>
                      <button aria-label={`Increase ${item.name} quantity`} className="cursor-pointer text-slate-500 hover:text-[#06C167]" type="button" onClick={() => handleIncrease(item.id, item.quantity)}><Plus size={14} /></button>
                    </div>
                  </div>
                  <p className="font-semibold text-slate-950">{currency.format(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-100 px-6 py-5">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-slate-500"><span>Subtotal</span><span>{currency.format(subtotal)}</span></div>
                <div className="flex justify-between text-slate-500"><span>Delivery fee</span><span>{currency.format(deliveryFee)}</span></div>
                <div className="flex justify-between border-t border-slate-100 pt-3 text-base font-bold text-slate-950"><span>Total</span><span>{currency.format(total)}</span></div>
              </div>
              <button className="mt-5 w-full cursor-pointer rounded-full bg-[#06C167] py-3.5 font-bold text-white transition hover:bg-[#049A50]" type="button" onClick={handleProceed}>Proceed to checkout</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
