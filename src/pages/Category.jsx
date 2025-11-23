import { useParams } from "react-router-dom";
import productsData from "@/data/products.js";
import ProductsSection from "@/components/sections/ProductsSection";


export default function Category() {
  const { slug } = useParams();

  const products = productsData.filter(
    (p) => (p.category && p.category === slug) || !p.category
  );

  return (
    <div className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <ProductsSection title="" products={products} />
      </div>
    </div>
  );
}
