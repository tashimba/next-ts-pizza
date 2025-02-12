import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  TopBar,
} from "@/components/shared/";
import { Title } from "@/components/shared/";

export default function Home() {
  return (
    <>
      <Container className="mt-8">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pt-14">
        <div className="flex gap-[100px]">
          {/* Фильтрация   */}
          <div className="w-[500px]">
            <Filters />
          </div>
          <div>
            {/* Список товаров */}
            <ProductsGroupList
              title="Пиццы"
              items={[
                {
                  id: 1,
                  name: "Пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "Пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                  items: [{ price: 550 }],
                },
                {
                  id: 3,
                  name: "Пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                  items: [{ price: 550 }],
                },
                {
                  id: 4,
                  name: "Пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                  items: [{ price: 550 }],
                },
                {
                  id: 5,
                  name: "Пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                  items: [{ price: 550 }],
                },
              ]}
              categoryId={1}
            />
            <ProductsGroupList
              title="Комбо"
              items={[
                {
                  id: 1,
                  name: "Пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "Пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                  items: [{ price: 550 }],
                },
                {
                  id: 3,
                  name: "Пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                  items: [{ price: 550 }],
                },
                {
                  id: 4,
                  name: "Пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                  items: [{ price: 550 }],
                },
                {
                  id: 5,
                  name: "Пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                  items: [{ price: 550 }],
                },
              ]}
              categoryId={2}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
