import { prisma } from "@/app/prisma/prisma-client";
import {
  ChooseProductModal,
  Container,
  Title,
} from "@/shared/components/shared";
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
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}
