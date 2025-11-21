import { Star } from "lucide-react";

export default function PriceBlock({ rating = 5, reviewCount = 110, minPrice, maxPrice }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1 text-amber-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < Math.round(rating) ? "fill-amber-400" : ""}`} />
        ))}
        <span className="ml-2 text-sm text-gray-600">({reviewCount}+ đánh giá)</span>
      </div>

      <div className="text-xl sm:text-2xl font-extrabold text-rose-600">
        {formatVND(minPrice)}
      </div>
    </div>
  );
}

function formatVND(n) {
  if (n == null) return "-";
  return n.toLocaleString("vi-VN") + " ₫";
}
