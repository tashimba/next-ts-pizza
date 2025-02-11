"use client";
import { useCategoryStore } from "@/app/store/category";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Categories = ({ className }: Props) => {
  const cats = [
    { id: 1, name: "Пиццы" },
    { id: 2, name: "Комбо" },
    { id: 3, name: "Закуски" },
    { id: 4, name: "Коктейли" },
    { id: 5, name: "Кофе" },
    { id: 6, name: "Напитки" },
    { id: 7, name: "Десерты" },
    { id: 8, name: "Десерты" },
  ];
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  return (
    <div
      className={cn("inline-flex rounded-2xl bg-gray-100 p-1 gap-1", className)}
    >
      {cats.map(({ id, name }) => (
        <a
          key={id}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
