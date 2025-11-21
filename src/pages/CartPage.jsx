// src/pages/CartPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import {
  getCartItems,
  removeFromCart,
  updateItemQuantity,
} from "@/utils/cartStorage";
import productsData from "@/data/products";

function formatCurrency(value) {
  const n = Number(value) || 0;
  return n.toLocaleString("vi-VN") + " đ";
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]); // [{id, title, image, priceFrom, quantity}]
  const navigate = useNavigate();

  // JOIN localStorage (id + quantity) với productsData
  const loadCart = () => {
    const rawCart = getCartItems(); // [{id, quantity}]
    const fullItems = rawCart
      .map((c) => {
        const product = productsData.find((p) => p.id === c.id);
        if (!product) return null;
        return {
          ...product,
          quantity: c.quantity,
        };
      })
      .filter(Boolean);

    setCartItems(fullItems);
  };

  useEffect(() => {
    loadCart();

    // nếu nơi khác thay đổi giỏ -> lắng nghe event để reload
    const onChanged = () => loadCart();
    window.addEventListener("cart-changed", onChanged);
    return () => window.removeEventListener("cart-changed", onChanged);
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.priceFrom || 0) * item.quantity,
    0
  );

  const handleIncrease = (id) => {
    updateItemQuantity(id, +1);
    loadCart();
  };

  const handleDecrease = (id) => {
    updateItemQuantity(id, -1);
    loadCart();
  };

  const handleRemove = (id) => {
    removeFromCart(id);
    loadCart();
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    navigate("/thanh-toan");
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Tiêu đề */}
        <h1 className="text-xl font-semibold mb-6 uppercase tracking-wide">
          Giỏ hàng
        </h1>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]">
          {/* LEFT: danh sách sản phẩm */}
          <section>
            <h2 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              Sản phẩm
            </h2>

            <div className="w-full border-t border-gray-200">
              {/* Header row */}
              <div className="grid grid-cols-[minmax(0,2.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] py-3 text-xs font-semibold text-gray-500">
                <span className="pl-10">Sản phẩm</span>
                <span className="text-center">Giá</span>
                <span className="text-center">Số lượng</span>
                <span className="text-right pr-2">Tạm tính</span>
              </div>

              {/* Items */}
              {cartItems.length === 0 ? (
                <div className="py-8 text-center text-sm text-gray-500">
                  Giỏ hàng của bạn đang trống.
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[minmax(0,2.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] items-center border-t border-gray-200 py-4 text-sm"
                  >
                    {/* Cột sản phẩm */}
                    <div className="flex items-start gap-3 pr-4">
                      {/* Nút xoá */}
                      <button
                        className="mt-2 h-6 w-6 flex-shrink-0 rounded-full border border-red-500 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white"
                        onClick={() => handleRemove(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </button>

                      {/* Ảnh + thông tin */}
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-16 w-24 flex-shrink-0 object-cover border"
                        />
                      )}

                      <div>
                        <div className="font-semibold">{item.title}</div>
                        {/* nếu có mô tả chi tiết hơn thì thêm ở đây */}
                      </div>
                    </div>

                    {/* Giá */}
                    <div className="text-center text-sm">
                      {formatCurrency(item.priceFrom)}
                    </div>

                    {/* Số lượng */}
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="h-8 w-8 border text-lg leading-none flex items-center justify-center"
                        onClick={() => handleDecrease(item.id)}
                      >
                        −
                      </button>
                      <span className="w-8 text-center border-t border-b h-8 flex items-center justify-center">
                        {item.quantity}
                      </span>
                      <button
                        className="h-8 w-8 border text-lg leading-none flex items-center justify-center"
                        onClick={() => handleIncrease(item.id)}
                      >
                        +
                      </button>
                    </div>

                    {/* Tạm tính */}
                    <div className="text-right pr-2 font-semibold">
                      {formatCurrency(item.priceFrom * item.quantity)}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Nút tiếp tục xem sản phẩm */}
            <div className="mt-6">
              <button className="border px-5 py-2 text-xs font-semibold tracking-wide">
                ← TIẾP TỤC XEM SẢN PHẨM
              </button>
            </div>
          </section>

          {/* RIGHT: tổng cộng + mã giảm giá */}
          <aside className="space-y-6">
            {/* Box tổng cộng */}
            <div className="border border-gray-200 p-4 space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wide">
                Tổng cộng giỏ hàng
              </h2>

              <div className="flex justify-between text-sm">
                <span>Tạm tính</span>
                <span className="font-semibold">
                  {formatCurrency(subtotal)}
                </span>
              </div>

              <div className="flex justify-between text-sm font-semibold pt-2 border-t border-gray-200">
                <span>Tổng</span>
                <span className="text-base">
                  {formatCurrency(subtotal)}
                </span>
              </div>

              <button
                className="mt-4 w-full bg-gray-900 text-white py-3 text-sm font-semibold tracking-wide disabled:bg-gray-300 disabled:cursor-not-allowed"
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                TIẾN HÀNH THANH TOÁN
              </button>
            </div>

            {/* Box mã ưu đãi */}
            <div className="border border-gray-200 p-4 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide">
                Mã ưu đãi
              </h3>
              <input
                type="text"
                placeholder="Nhập mã giảm giá"
                className="w-full border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button className="w-full bg-gray-100 text-sm font-semibold py-2 border border-gray-300">
                Áp dụng
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
