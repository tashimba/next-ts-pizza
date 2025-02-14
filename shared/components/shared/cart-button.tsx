"use client";

import React from "react";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { CartDrawer } from "./cart-drawer";
import { useCartStore } from "@/shared/store/cart";

interface Props {
  className?: string;
}

export const CartButton = ({ className }: Props) => {
  const totalAmount = useCartStore((state) => state.totalAmount);
  const loading = useCartStore((state) => state.loading);
  const items = useCartStore((state) => state.items.length);
  return (
    <CartDrawer>
      <div className={className}>
        {" "}
        <Button loading={loading} className="group relative ">
          <b>{totalAmount} ₽</b>
          <span className="h-full w-[1px] bg-white/30 mx-3" />
          <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
            <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
            <b>{items}</b>
          </div>
          <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
        </Button>
      </div>
    </CartDrawer>
  );
};
