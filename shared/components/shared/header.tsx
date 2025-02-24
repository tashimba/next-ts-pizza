import { cn } from "@/shared/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";

interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  return (
    <header className={cn("border-b ", className)}>
      <Container className="flex items-center justify-between py-6">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <div>
            <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              Вкуснее уже некуда{" "}
            </p>
          </div>
        </div>
        <div className="flex-1 mx-10">
          <SearchInput />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-3">
            <User size={16} />
            Войти
          </Button>
          <div>
            <CartButton />
          </div>
        </div>
      </Container>
    </header>
  );
};
