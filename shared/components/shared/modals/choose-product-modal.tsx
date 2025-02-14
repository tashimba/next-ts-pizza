"use client";

import React from "react";
import { cn } from "@/shared/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ChooseProductForm } from "../choose-product-form";
import { ProductWithRelations } from "@/@types/prisma";
import { ChoosePizzaForm } from "../choose-pizza-form";
import { useCartStore } from "@/shared/store/cart";
import toast from "react-hot-toast";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal = ({ className, product }: Props) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const addCartItem = useCartStore((state) => state.addCartItem);
  const loading = useCartStore((state) => state.loading);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      if (isPizzaForm) {
        await addCartItem({ productItemId, ingredients });
        toast.success("Пицца добавлена в корзину");
      } else {
        addCartItem({ productItemId: firstItem.id });
        toast.success("Продукт добавлен в корзину");
      }
      router.back();
    } catch (error) {
      toast.error("Не удалось добавить в корзину");
      console.log(error);
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px]  max-w-[1060px] min-h-[550px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            price={firstItem.price}
            onSubmit={onSubmit}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
