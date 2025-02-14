import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

export const CalcTotalPizzaPrice = (
  items: ProductItem[],
  size: PizzaSize,
  type: PizzaType,
  selectedIngredients: Set<number>,
  ingredients: Ingredient[]
) => {
  const pizzaPrice =
    items.find((item) => item.size === size && item.pizzaType === type)
      ?.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ing) => selectedIngredients.has(ing.id))
    .reduce((total, ing) => total + ing.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
