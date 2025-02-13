import { cn } from "@/shared/lib/utils";

import { Button } from "../ui";
import { Title } from "./title";
import { DialogTitle } from "@radix-ui/react-dialog";
import { PizzaImage } from "./pizza-image";

interface Props {
  imageUrl: string;
  name: string;
  items?: any[];
  onClickAdd?: () => void;
  className?: string;
}

export const ChooseProductForm = ({
  imageUrl,
  name,
  items,
  onClickAdd,
  className,
}: Props) => {
  const textDetails = "30 см, традиционное тесто";
  const totalPrice = 123;
  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={40} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <DialogTitle className="font-extrabold mb-1">{name}</DialogTitle>

        <p className="text-gray-400">{textDetails}</p>

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
