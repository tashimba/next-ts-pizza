"use client";

import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { Skeleton } from "../ui/skeleton";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  onClickedCheckbox?: (id: string) => void;
  defaultValue?: string[];

  loading?: boolean;
  selectedIds: Set<string>;
  name?: string;
}

export function CheckboxFilterGroups({
  title,
  items,
  defaultItems,
  limit,
  searchInputPlaceholder = "Поиск...",
  className,
  onClickedCheckbox,
  defaultValue,
  loading,
  selectedIds,
  name,
}: Props) {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>

        {...Array(limit)
          .fill(0)
          .map((_, i) => (
            <Skeleton className="h-6 mb-5 rounded-[8px]" key={i} />
          ))}
        <Skeleton className="h-6 w-28 mb-5 rounded-[8px]" />
      </div>
    );
  }

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : (defaultItems || items)?.slice(0, limit);

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      <div className="mb-5">
        {showAll && (
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        )}
      </div>
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list?.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selectedIds.has(item.value)}
            onCheckedChange={() => onClickedCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>
      {limit && items.length > limit && (
        <div className={showAll ? "border-t mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
}
