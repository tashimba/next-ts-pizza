import { cn } from "@/shared/lib/utils";
import React from "react";

import * as CartItem from "./cart-item-details";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { CountButton } from "./count-button";
import { Trash2Icon } from "lucide-react";
import { CartItemDetailsPrice } from "./cart-item-details/cart-item-details-price";
import { useCartStore } from "@/shared/store/cart";

interface Props extends CartItemProps {
  onClickCountButton?: (type: "plus" | "minus") => void;
  className?: string;
}

export const CartDrawerItem = ({
  id,
  imageUrl,
  details,
  name,
  price,
  quantity,
  onClickCountButton,
  className,
}: Props) => {
  const removeCartItem = useCartStore((state) => state.removeCartItem);

  return (
    <div className={cn("flex bg-white p-5 gap-6", className)}>
      <CartItem.Image src={imageUrl} />
      <div className="flex-1">
        <CartItem.Info details={details} name={name} />
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <CountButton onClick={onClickCountButton} value={quantity} />
          <div className="flex items-center gap-3">
            <CartItemDetailsPrice value={price} />

            <Trash2Icon
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
              size={24}
              onClick={() => removeCartItem(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
