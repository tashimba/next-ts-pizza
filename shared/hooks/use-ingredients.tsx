import { Api } from "@/shared/services/api-client";
import { Ingredient } from "@prisma/client";
import React from "react";

export default function useIngredients() {
  const [loading, setLoading] = React.useState(true);
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);

  React.useEffect(() => {
    setLoading(true);

    Api.ingredients
      .getAll()
      .then((res) => {
        setIngredients(res);
      })
      .finally(() => setLoading(false));
  }, []);

  return { ingredients, loading };
}
