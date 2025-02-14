import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { Ingredient } from "@prisma/client";

interface Props {
  name: string;
  price: number;
  count?: number;
  imageUrl: string;
  className?: string;
  ingredients: Ingredient[];
  id: number;
}

export function ProductCard({
  name,
  price,
  count,
  imageUrl,
  className,
  id,
  ingredients,
}: Props) {
  return (
    <div>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt="Logo" />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          {ingredients.map((ing) => ing.name).join(", ")}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="text-base fond-bold">
            <Plus className="w-5 h-5 mr-1"></Plus>
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
}
