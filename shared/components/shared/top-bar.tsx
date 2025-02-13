import { cn } from "@/shared/lib/utils";
import React from "react";
import { Categories } from "./categories";
import { SortPopup } from "./sort-popup";
import { Container } from "./container";
import { Category } from "@prisma/client";

type Props = {
  className?: string;
  items: Category[];
};

export const TopBar = ({ className, items }: Props) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories items={items}></Categories>
        <SortPopup />
      </Container>
    </div>
  );
};
