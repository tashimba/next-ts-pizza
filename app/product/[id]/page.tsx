export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <p>Product {id}</p>;
}
