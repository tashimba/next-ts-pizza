import {
  Container,
  Filters,
  ProductsGroupList,
  TopBar,
} from "@/shared/components/shared";
import { Title } from "@/shared/components/shared";
import { prisma } from "../prisma/prisma-client";
import { findPizzas, GetSearchParams } from "@/shared/lib/find-pizzas";

export default async function Home({
  searchParams,
}: {
  searchParams: GetSearchParams;
}) {
  const categories = await findPizzas(searchParams);

  return (
    <>
      <Container className="mt-8">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar items={categories.filter((el) => el.products.length > 0)} />
      <Container className="pt-14">
        <div className="flex gap-[100px]">
          {/* Фильтрация   */}
          <div className="w-[500px]">
            <Filters />
          </div>
          <div>
            {/* Список товаров */}
            {categories.map(
              (category) =>
                category.products.length > 0 && (
                  <ProductsGroupList
                    key={category.id}
                    title={category.name}
                    items={category.products}
                    categoryId={category.id}
                  />
                )
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
