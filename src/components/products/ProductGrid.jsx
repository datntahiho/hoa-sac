import ProductCard from "./ProductCard";

export default function ProductGrid({ products = [], columns = { sm: 2, lg: 4 } }) {
  const gridCols = `grid gap-6 sm:grid-cols-${columns.sm} lg:grid-cols-${columns.lg}`;
  return (
    <div className={gridCols}>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          image={p.image}
          title={p.title}
          priceFrom={p.priceFrom}
          currency={p.currency || "đ"}
          href={p.href}
          onClick={p.onClick}
        />
      ))}
    </div>
  );
}
