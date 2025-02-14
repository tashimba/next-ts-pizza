import { prisma } from "@/app/prisma/prisma-client";
import { Container, PizzaImage, Title } from "@/shared/components/shared";
import { ChoosePizzaForm } from "@/shared/components/shared/choose-pizza-form";
import { ChooseProductForm } from "@/shared/components/shared/choose-product-form";
import { GroupVariants } from "@/shared/components/shared/group-variants";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) return notFound();

  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);

  return (
    <Container className="flex flex-col my-10">
      {isPizzaForm ? (
        <ChoosePizzaForm
          imageUrl={product.imageUrl}
          name={product.name}
          ingredients={product.ingredients}
          items={product.items}
          onSubmit={onSubmit}
          loading={loading}
        />
      ) : (
        <ChooseProductForm
          imageUrl={product.imageUrl}
          name={product.name}
          price={firstItem.price}
          onSubmit={onSubmit}
          loading={loading}
        />
      )}
    </Container>
  );
}
