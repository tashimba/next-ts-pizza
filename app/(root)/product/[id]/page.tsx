import { prisma } from "@/app/prisma/prisma-client";
import { Container, PizzaImage, Title } from "@/shared/components/shared";
import { GroupVariants } from "@/shared/components/shared/group-variants";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });
  if (!product) return notFound();

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <PizzaImage imageUrl={product.imageUrl} size={40} />

        <div className="w-[490px] bg-[#fafafa] h p-7">
          <Title
            text={product.name}
            size="lg"
            className="font-extrabold mb-1"
          />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            fugit reprehenderit animi voluptatibus fuga, esse pariatur omnis
            tempore ipsa alias corporis. Adipisci hic omnis, a vel voluptates
            quam eius vitae?
          </p>

          <GroupVariants
            items={[
              {
                name: "Маленькая",
                value: "1",
              },
              {
                name: "Средняя",
                value: "2",
              },
              {
                name: "Большая",
                value: "3",
                disabled: true,
              },
            ]}
            selectedValue="2"
          />
        </div>
      </div>
    </Container>
  );
}
