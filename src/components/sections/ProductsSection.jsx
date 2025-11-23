import ProductGrid from "../products/ProductGrid";
import SectionHeader from "../products/SectionHeader";
export default function ProductsSection({
  title = "Tranh TÔ THEO SỐ",
  products = [],
  onViewMore,
  viewMoreHref,
}) {
  return (
    <section className=" py-12">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          title={title}
          ctaLabel="Xem thêm"
          onClickCta={onViewMore}
          href={viewMoreHref}
        />
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
