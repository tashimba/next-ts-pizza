import React from "react";
import qs from "qs";
import { useRouter } from "next/navigation";
import { QueryFilters } from "./use-filters";

export default function useQueryFilters(filters: QueryFilters) {
  const router = useRouter();
  React.useEffect(() => {
    const params = {
      ...filters.prices,
      sizes: Array.from(filters.sizes),
      pizzaTypes: Array.from(filters.pizzaTypes),
      ingredients: Array.from(filters.selectedIngredients),
    };
    const query = qs.stringify(params, {
      arrayFormat: "comma",
    });
    router.push(`?${query}`, { scroll: false });
  }, [filters, router]);
}
