import { pizzaSizes } from "./../constants/pizza";
import { ProductItem } from "@prisma/client";
import { PizzaType } from "../constants/pizza";

export const getAvailablePizzaSizes = (
  items: ProductItem[],
  type: PizzaType
) => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));
};
