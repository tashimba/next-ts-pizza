import { ingredients } from "./../app/prisma/constants";
import { Ingredient, Product, ProductItem } from "@prisma/client";

export type ProductWithRelations = Product & {
  items: ProductItem[];
  ingredients: Ingredient[];
};
