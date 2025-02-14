import { cn } from "@/shared/lib/utils";
import React from "react";
import { Button } from "../ui";
import { DialogTitle } from "@radix-ui/react-dialog";
import { PizzaImage } from "./pizza-image";
import { GroupVariants } from "./group-variants";
import {
  mapPizzaTypes,
  PizzaSize,
  pizzaSizes,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { IngredientItem } from "./ingredient-item";
import { useSet } from "react-use";
import { CalcTotalPizzaPrice, getAvailablePizzaSizes } from "@/shared/lib";
import { usePizzaOptions } from "@/shared/hooks/use-pizza-options";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onSubmit: (itemId: number, ingredients: number[]) => void;
  loading: boolean;
  className?: string;
}

export const ChoosePizzaForm = ({
  imageUrl,
  name,
  ingredients,
  items,
  onSubmit,
  className,
  loading,
}: Props) => {
  const {
    size,
    type,
    setSize,
    availableSizes,
    setType,
    addIngredient,
    selectedIngredients,
    currentItemId,
  } = usePizzaOptions(items);

  const textDetails = `${size} см, ${mapPizzaTypes[
    type
  ].toLocaleLowerCase()} тесто`;

  const totalPrice = CalcTotalPizzaPrice(
    items,
    size,
    type,
    selectedIngredients,
    ingredients
  );

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#f7f6f5] p-7 ">
        <DialogTitle className="font-extrabold mb-1">{name}</DialogTitle>

        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-2 my-5">
          <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

          <GroupVariants
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />
        </div>

        <div className="bg-gray-50 p-5 rounded-md overflow-y-scroll h-[360px] scrollbar my-3">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button
          loading={loading}
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full"
        >
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
