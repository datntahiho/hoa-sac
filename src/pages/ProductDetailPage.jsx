import { useState } from "react";
import Gallery from "@/components/products/Gallery";
import PriceBlock from "@/components/products/PriceBlock";
import OptionSelect from "@/components/products/OptionSelect";
import QuantityInput from "@/components/products/QuantityInput";
import BuyActions from "@/components/products/BuyActions";
import SellingPoints from "@/components/products/SellingPoints";
import PolicyTabs from "@/components/products/PolicyTabs";
import ReviewsSection from "@/components/products/ReviewsSection";

export default function ProductDetailPage({ product }) {
  // state biến thể
  const [size, setSize] = useState("");
  const [material, setMaterial] = useState("");
  const [frameColor, setFrameColor] = useState("");
  const [qty, setQty] = useState(1);

  const disabled = !size || !material; // ví dụ: bắt buộc chọn size + chất liệu

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      {/* breadcrumb đơn giản */}
      <div className="mb-4 text-sm text-gray-500">
        Trang chủ / Tranh tô theo số /{" "}
        <span className="text-gray-800">{product.title}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
        {/* Left: Gallery */}
        <Gallery images={product.images} />

        {/* Right: Info */}
        <div className="space-y-5">
          <h1 className="text-2xl sm:text-3xl font-extrabold">
            {product.title}
          </h1>

          <PriceBlock
            rating={product.rating}
            reviewCount={product.reviewCount}
            minPrice={product.minPrice}
            maxPrice={product.maxPrice}
          />

          <div className="space-y-4 rounded-md border bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <QuantityInput value={qty} setValue={setQty} />
              <BuyActions
                disabled={disabled}
                onBuyNow={() =>
                  console.log("BUY NOW", { size, material, frameColor, qty })
                }
                onAddToCart={() =>
                  console.log("ADD CART", { size, material, frameColor, qty })
                }
              />
            </div>
          </div>
          <SellingPoints points={product.sellingPoints} />
        </div>
      </div>

      <PolicyTabs
        returnPolicy={
          <ul>
            <li>Chấp nhận đổi trả nếu hàng lỗi do nhà sản xuất.</li>
            <li>Không áp dụng đổi trả cho sản phẩm đặt theo yêu cầu riêng.</li>
            <li>Thời hạn đổi trả trong vòng 7 ngày kể từ ngày nhận hàng.</li>
          </ul>
        }
        warrantyPolicy={
          <ul>
            <li>
              Bảo hành màu in UV 12 tháng trong điều kiện sử dụng bình thường.
            </li>
            <li>Hỗ trợ thay khung, thay kính (nếu có) với chi phí ưu đãi.</li>
          </ul>
        }
      />

      {/* <ReviewsSection reviews={product.reviews} /> */}
    </div>
  );
}
