import ProductCard from "./ProductCard";

export default function ProductGrid({
  products = [],
  columns = { sm: 2, lg: 4 },
}) {
  const smColsClasses = {
    1: "sm:grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
  };

  const lgColsClasses = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
  };

  const smCols = smColsClasses[columns.sm] || "sm:grid-cols-2";
  const lgCols = lgColsClasses[columns.lg] || "lg:grid-cols-4";

  const gridClasses = `grid grid-cols-2 gap-4 sm:gap-5 ${smCols} ${lgCols}`;

  return (
    <div className={gridClasses}>
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
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
