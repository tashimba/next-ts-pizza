import { cn } from "@/shared/lib/utils";

import { Button } from "../ui";
import { Title } from "./title";
import { DialogTitle } from "@radix-ui/react-dialog";
import { PizzaImage } from "./pizza-image";

interface Props {
  imageUrl: string;
  name: string;
  items?: any[];
  price: number;
  onSubmit?: () => void;
  loading: boolean;
  className?: string;
}

export const ChooseProductForm = ({
  imageUrl,
  name,
  items,
  price,
  onSubmit,
  className,
  loading,
}: Props) => {
  const textDetails = "30 см, традиционное тесто";

  return (
    <div className={cn(className, "flex flex-1")}>
      <PizzaImage imageUrl={imageUrl} size={40} />

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <DialogTitle className="font-extrabold mb-1">{name}</DialogTitle>

        <Button
          loading={loading}
          onClick={onSubmit}
          className="h-[55px] px-10 text-base rounded-[18px] w-full"
        >
          Добавить в корзину за {price} ₽
        </Button>
      </div>
    </div>
  );
};
