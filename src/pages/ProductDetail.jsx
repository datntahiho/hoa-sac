import { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import data from "@/data/products.json";
import ProductDetailPage from "./ProductDetailPage";

export default function ProductDetail() {
  const { idOrSlug } = useParams();

  const product = useMemo(() => {
    const byId = data.find((p) => String(p.id) === idOrSlug);
    if (byId) return normalize(byId);

    const bySlug = data.find(
      (p) =>
        p.slug === idOrSlug ||
        p.href?.split("/").pop() === idOrSlug // fallback nếu đã có href sẵn
    );
    return bySlug ? normalize(bySlug) : null;
  }, [idOrSlug]);

  if (!product) return <Navigate to="/404" replace />;

  return <ProductDetailPage product={product} />;
}

// Chuẩn hóa data thành shape ProductDetailPage cần
function normalize(p) {
  return {
    title: p.title,
    images: p.images?.length ? p.images : [p.image],
    rating: p.rating ?? 4.8,
    reviewCount: p.reviewCount ?? 100,
    minPrice: p.priceFrom ?? 0,
    maxPrice: p.priceTo ?? (p.priceFrom ? p.priceFrom * 4 : 0),
    options: p.options ?? {
      sizes: [
        { value: "40x60", label: "40x60 (cm)" },
        { value: "50x75", label: "50x75 (cm)" },
        { value: "60x90", label: "60x90 (cm)" },
      ],
      materials: [
        { value: "canvas", label: "Canvas UV" },
        { value: "mica", label: "Mica tráng gương" },
      ],
      frameColors: [
        { value: "black", label: "Đen" },
        { value: "white", label: "Trắng" },
        { value: "gold", label: "Vàng" },
      ],
    },
    sellingPoints: p.sellingPoints,
    reviews: p.reviews ?? [],
  };
}
