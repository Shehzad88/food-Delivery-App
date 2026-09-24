"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { CartDrawerItem } from "@/components/CartDrawer";

type CartProviderProps = {
  children: ReactNode;
};

type CartContextValue = {
  items: CartDrawerItem[];
  itemCount: number;
  notification: string | null;
  addItem: (item: Omit<CartDrawerItem, "quantity"> & { quantity?: number }) => void;
  updateQuantity: (id: string, value: number) => void;
  removeItem: (id: string) => void;
  clearNotification: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartDrawerItem[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const addItem = (item: Omit<CartDrawerItem, "quantity"> & { quantity?: number }) => {
    const quantityToAdd = item.quantity ?? 1;

    setItems((currentItems) => {
      const existingItem = currentItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantityToAdd }
            : cartItem,
        );
      }

      return [...currentItems, { ...item, quantity: quantityToAdd }];
    });

    setNotification(`${item.name} added to cart`);
  };

  const updateQuantity = (id: string, value: number) => {
    setItems((currentItems) => {
      if (value <= 0) {
        return currentItems.filter((item) => item.id !== id);
      }

      return currentItems.map((item) =>
        item.id === id ? { ...item, quantity: value } : item,
      );
    });
  };

  const removeItem = (id: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const clearNotification = () => setNotification(null);

  const itemCount = useMemo(
    () => items.reduce((count, item) => count + item.quantity, 0),
    [items],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount,
      notification,
      addItem,
      updateQuantity,
      removeItem,
      clearNotification,
    }),
    [items, itemCount, notification],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
