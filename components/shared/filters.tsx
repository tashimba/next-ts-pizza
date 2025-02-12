"use client";

import React from "react";
import { Title } from "./title";
import { Input } from "../ui";
import { RangeSlider } from "../ui";
import { CheckboxFilterGroups } from "./checkbox-filter-groups";
import { cn } from "@/lib/utils";
import { useFilters } from "@/hooks/use-filters";
import useIngredients from "@/hooks/use-ingredients";
import useQueryFilters from "@/hooks/use-query-filters";

type Props = {
  className?: string;
};

export function Filters({ className }: Props) {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();

  const items = ingredients.map((item) => ({
    text: item.name,
    value: String(item.id),
  }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  useQueryFilters(filters);

  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFilterGroups
        title="Размеры"
        name="sizes"
        className="mt-5"
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
        onClickedCheckbox={filters.setSizes}
        selectedIds={filters.sizes}
      />

      <CheckboxFilterGroups
        title="Тесто"
        name="pizzaTypes"
        className="mt-5"
        items={[
          { text: "Традиционное", value: "1" },
          { text: "Тонкое", value: "2" },
        ]}
        onClickedCheckbox={filters.setPizzaTypes}
        selectedIds={filters.pizzaTypes}
      />

      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={5000}
            value={filters.prices.priceFrom ?? 0}
            onChange={(e) =>
              filters.setPrices("priceFrom", Number(e.target.value))
            }
          />
          <Input
            type="number"
            min={0}
            max={5000}
            value={filters.prices.priceTo ?? 5000}
            placeholder="5000"
            onChange={(e) =>
              filters.setPrices("priceTo", Number(e.target.value))
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={5000}
          step={10}
          value={[
            filters.prices.priceFrom || 0,
            filters.prices.priceTo || 5000,
          ]}
          onValueChange={updatePrices}
        />
      </div>

      {/* Фильтр ингридиентов */}
      <div>
        <CheckboxFilterGroups
          title="Ингридиенты"
          name="ingredients"
          className="mt-5"
          limit={6}
          defaultItems={items}
          items={items}
          loading={loading}
          onClickedCheckbox={filters.setSelectedIngredients}
          selectedIds={filters.selectedIngredients}
        />
      </div>
    </div>
  );
}
