import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Gallery from "@/components/products/Gallery";
import PriceBlock from "@/components/products/PriceBlock";
import QuantityInput from "@/components/products/QuantityInput";
import BuyActions from "@/components/products/BuyActions";
import SellingPoints from "@/components/products/SellingPoints";
import PolicyTabs from "@/components/products/PolicyTabs";

import { addToCart } from "@/utils/cartStorage";

export default function ProductDetailPage({ product }) {
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product.id, qty);
    alert("Đã thêm vào giỏ hàng!");
  };

  const handleBuyNow = () => {
    addToCart(product.id, qty);
    navigate("/thanh-toan");
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <div className="mb-4 text-sm text-gray-500">
        Trang chủ / Tranh tô theo số / <span>{product.title}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
        <Gallery images={product.images} />

        <div className="space-y-5">
          <h1 className="text-3xl font-extrabold">{product.title}</h1>

          <PriceBlock
            minPrice={product.priceFrom}
            maxPrice={product.priceFrom}
          />

          <div className="border bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <QuantityInput value={qty} setValue={setQty} />
              <BuyActions
                disabled={false}
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
              />
            </div>
          </div>

          <SellingPoints points={product.sellingPoints || []} />
        </div>
      </div>

      {/* <PolicyTabs
        returnPolicy={<ul><li>Hỗ trợ đổi trả 7 ngày nếu lỗi.</li></ul>}
        warrantyPolicy={<ul><li>Bảo hành 12 tháng.</li></ul>}
        story={product.story}
      /> */}

      <PolicyTabs
        StoryComponent={product.StoryComponent}
        returnPolicy={
          <ul>
            <li>Hỗ trợ đổi trả 7 ngày nếu lỗi.</li>
          </ul>
        }
        warrantyPolicy={
          <ul>
            <li>Bảo hành 12 tháng.</li>
          </ul>
        }
      />
    </div>
  );
}
