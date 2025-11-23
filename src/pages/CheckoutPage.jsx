import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  getCartItems,
  clearCart,
  removeFromCart,
  updateItemQuantity,
} from "@/utils/cartStorage";
import productsData from "@/data/products";
import { useNavigate } from "react-router-dom";

function formatCurrency(value) {
  const n = Number(value) || 0;
  return n.toLocaleString("vi-VN") + " đ";
}

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const [voucher, setVoucher] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const loadCart = () => {
    const rawCart = getCartItems();
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

    const onChanged = () => loadCart();
    window.addEventListener("cart-changed", onChanged);
    return () => window.removeEventListener("cart-changed", onChanged);
  }, []);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + (item.priceFrom || 0) * item.quantity,
    0
  );

  const generateOrderId = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

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

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!acceptTerms) return;
    if (cartItems.length === 0) return;

    const order = {
      id: generateOrderId(),
      date: new Date().toISOString(),
      phone,
      paymentMethod:
        paymentMethod === "bank"
          ? "Chuyển khoản ngân hàng"
          : "Trả tiền mặt khi nhận hàng",
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.title,
        quantity: item.quantity,
        price: item.priceFrom,
      })),
      billing: {
        name: fullName,
        address,
        phone,
      },
      note,
    };

    // Clear giỏ hàng sau khi đặt thành công
    clearCart();

    // Điều hướng sang trang cảm ơn, truyền thông tin đơn hàng
    navigate("/don-hang-thanh-cong", { state: { order } });
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-xl font-semibold mb-6 uppercase tracking-wide">
          Thanh toán
        </h1>

        <form
          onSubmit={handlePlaceOrder}
          className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]"
        >
          {/* LEFT */}
          <section className="space-y-8">
            <div>
              <h2 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                Sản phẩm
              </h2>

              <div className="w-full border-t border-gray-200">
                <div className="grid grid-cols-[minmax(0,2.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] py-3 text-xs font-semibold text-gray-500">
                  <span className="pl-10">Sản phẩm</span>
                  <span className="text-center">Giá</span>
                  <span className="text-center">Số lượng</span>
                  <span className="text-right pr-2">Tạm tính</span>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[minmax(0,2.5fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] items-center border-t border-gray-200 py-4 text-sm"
                  >
                    {/* Cột sản phẩm */}
                    <div className="flex items-start gap-3 pr-4">
                      <button
                        type="button"
                        className="mt-2 h-6 w-6 flex-shrink-0 rounded-full border border-red-500 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white"
                        onClick={() => handleRemove(item.id)}
                      >
                        <X className="h-4 w-4" />
                      </button>

                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-16 w-24 flex-shrink-0 object-cover border"
                        />
                      )}

                      <div>
                        <div className="font-semibold">{item.title}</div>
                      </div>
                    </div>

                    {/* Giá */}
                    <div className="text-center">
                      {formatCurrency(item.priceFrom)}
                    </div>

                    {/* Số lượng (có nút +/-) */}
                    <div className="flex items-center justify-center gap-2">
                      <button
                        type="button"
                        className="h-8 w-8 border text-lg leading-none flex items-center justify-center"
                        onClick={() => handleDecrease(item.id)}
                      >
                        −
                      </button>
                      <span className="w-8 text-center border-t border-b h-8 flex items-center justify-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
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
                ))}

                {cartItems.length === 0 && (
                  <div className="py-6 text-center text-sm text-gray-500">
                    Giỏ hàng của bạn đang trống.
                  </div>
                )}
              </div>

              <div className="mt-4 text-sm">
                <button
                  type="button"
                  className="border px-5 py-2 text-xs font-semibold tracking-wide"
                  onClick={() => navigate("/tranh-to-theo-so")}
                >
                  ← TIẾP TỤC XEM SẢN PHẨM
                </button>
              </div>
            </div>

            <p className="text-sm">
              Bạn có mã ưu đãi?{" "}
              <button
                type="button"
                className="text-yellow-600 underline font-semibold"
                onClick={() => {
                  const el = document.getElementById("voucher-input");
                  el?.focus();
                  el?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                Ấn vào đây để nhập mã
              </button>
            </p>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wide">
                Thông tin thanh toán
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Tên *
                  </label>
                  <input
                    type="text"
                    className="w-full border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Số điện thoại *
                  </label>
                  <input
                    type="tel"
                    className="w-full border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1">
                  Địa chỉ *
                </label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-semibold uppercase tracking-wide">
                Thông tin bổ sung
              </h2>
              <label className="block text-xs font-semibold mb-1">
                Ghi chú đơn hàng (tuỳ chọn)
              </label>
              <textarea
                rows={4}
                className="w-full border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500"
                placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </section>

          {/* RIGHT */}
          <aside className="space-y-6">
            <div className="border border-gray-200 p-4 space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide">
                Mã ưu đãi
              </h3>
              <input
                id="voucher-input"
                type="text"
                placeholder="Nhập mã giảm giá"
                className="w-full border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                value={voucher}
                onChange={(e) => setVoucher(e.target.value)}
              />
              <button
                type="button"
                className="w-full bg-gray-100 text-sm font-semibold py-2 border border-gray-300"
              >
                Áp dụng
              </button>
            </div>

            <div className="border border-yellow-400 p-4 space-y-4 bg-yellow-50/60">
              <h2 className="text-sm font-semibold uppercase tracking-wide">
                Đơn hàng của bạn
              </h2>

              <div className="border border-gray-200 bg-white text-sm">
                <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] px-3 py-2 border-b text-xs font-semibold text-gray-500">
                  <span>Sản phẩm</span>
                  <span className="text-right">Tạm tính</span>
                </div>

                {cartItems.map((item) => (
                  <div
                    key={[item.id, "summary"].join("-")}
                    className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] px-3 py-2 border-b text-sm"
                  >
                    <div>
                      <div>
                        {item.title}{" "}
                        <span className="font-semibold">× {item.quantity}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      {formatCurrency(item.priceFrom * item.quantity)}
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] px-3 py-2 border-b text-sm">
                  <span className="font-semibold">Tạm tính</span>
                  <span className="text-right">{formatCurrency(subtotal)}</span>
                </div>

                <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] px-3 py-2 text-sm font-semibold">
                  <span>Tổng</span>
                  <span className="text-right">{formatCurrency(subtotal)}</span>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>Chuyển khoản ngân hàng</span>
                  </label>

                  <div className="rounded border border-gray-200 bg-white p-3 text-xs leading-relaxed space-y-1">
                    <p>Quý khách thực hiện chuyển khoản theo thông tin sau:</p>
                    <p>
                      • <strong>Số tài khoản:</strong>{" "}
                      <span className="text-red-600 font-semibold">
                        0587102003
                      </span>
                    </p>
                    <p>
                      • <strong>Chủ tài khoản:</strong>{" "}
                      <span className="font-semibold">NGO VO TRUONG NINH</span>
                    </p>
                    <p>
                      • <strong>Nội dung:</strong>{" "}
                      <span className="font-semibold text-red-600">
                        Họ tên chuyển tiền mua tranh
                      </span>
                    </p>
                    <p>
                      • <strong>Ngân hàng:</strong> TpBank CN Hà Nội
                    </p>

                    <div className="mt-2 flex justify-center">
                      <img
                        src="/images/qr-code-thanh-toan.png"
                        alt="QR TpBank"
                        className="w-52 h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <span>Trả tiền mặt khi nhận hàng</span>
                </label>
              </div>

              <div className="space-y-2 text-xs text-gray-700">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                  />
                  <span>
                    Tôi đã đọc và đồng ý với điều khoản và điều kiện của website
                    *
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!acceptTerms || cartItems.length === 0}
                  className="mt-2 w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 text-sm font-semibold tracking-wide"
                >
                  ĐẶT HÀNG
                </button>

                <p className="text-[11px] leading-relaxed text-gray-500 mt-1">
                  Thông tin cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng,
                  tăng trải nghiệm sử dụng website, và cho các mục đích cụ thể
                  khác được mô tả trong chính sách riêng tư của chúng tôi.
                </p>
              </div>
            </div>
          </aside>
        </form>
      </div>
    </div>
  );
}
