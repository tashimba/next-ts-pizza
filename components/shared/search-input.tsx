"use client";
import { cn } from "@/lib/utils";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useClickAway, useDebounce } from "react-use";

interface Props {
  className?: string;
}

export const SearchInput = ({ className }: Props) => {
  const ref = React.useRef(null);
  const [focused, setFocused] = React.useState(false);
  const [inputSearchValue, setInputSearchValue] = React.useState("");
  const [searchedProducts, setSearchedProducts] = React.useState<Product[]>([]);
  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    () => {
      Api.products.search(inputSearchValue).then((res) => {
        setSearchedProducts(res);
      });
    },
    200,
    [inputSearchValue]
  );

  const onClickItem = () => {
    setFocused(false);
    setInputSearchValue("");
    setSearchedProducts([]);
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0  bg-black/50 z-30"></div>
      )}
      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11  "
          type="text"
          placeholder="Найти пиццу..."
          value={inputSearchValue}
          onChange={(e) => setInputSearchValue(e.target.value)}
          onFocus={() => setFocused(true)}
        />

        {searchedProducts.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-300 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-12"
            )}
          >
            {searchedProducts.map((product) => (
              <Link
                href={`product/${product.id}`}
                className="flex items-center px-4 w-full hover:bg-primary/10"
                key={product.id}
                onClick={onClickItem}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-8 h-8 "
                />
                <div className="px-3 py-2  cursor-pointer">{product.name}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
