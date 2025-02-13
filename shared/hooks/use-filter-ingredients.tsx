import { Api } from "@/shared/services/api-client";
import React from "react";
import { useSet } from "react-use";

type IngredientItem = {
  text: string;
  value: string;
};

interface ReturnProps {
  ingredients: IngredientItem[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (ids: string[]): ReturnProps => {
  const [loading, setLoading] = React.useState(true);
  const [ingredients, setIngredients] = React.useState<IngredientItem[]>([]);
  const [selectedIds, { toggle }] = useSet(new Set<string>(ids));
  React.useEffect(() => {
    setLoading(true);

    Api.ingredients
      .getAll()
      .then((res) => {
        setIngredients(
          res.map((item) => ({ text: item.name, value: String(item.id) }))
        );
      })
      .finally(() => setLoading(false));
  }, []);

  return { ingredients, loading, selectedIds, onAddId: toggle };
};
