// src/components/carts/CartDrawer.jsx
import React from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function formatCurrency(n) {
  return Number(n).toLocaleString("vi-VN") + " đ";
}

export default function CartDrawer({ open, onClose, items = [] }) {
  const navigate = useNavigate();

  if (!open) return null;

  const subtotal = items.reduce(
    (sum, i) => sum + i.priceFrom * i.quantity,
    0
  );

  const goToCart = () => {
    onClose();              
    navigate("/gio-hang");  
  };

  const goToCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/40" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white shadow-2xl flex flex-col">
        <button onClick={onClose} className="absolute right-3 top-3 p-1">
          <X className="h-5 w-5" />
        </button>

        <div className="flex-1 overflow-y-auto p-5">
          <h2 className="text-lg font-semibold mb-4">Giỏ hàng</h2>

          {items.length === 0 && (
            <p className="text-sm text-gray-500">Giỏ hàng trống</p>
          )}

          {items.map((item) => (
            <div key={item.id} className="flex gap-3 border-b pb-3 mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 rounded object-cover"
              />
              <div className="flex-1">
                <div className="text-sm font-semibold">{item.title}</div>
                <div className="text-xs mt-1">
                  {item.quantity} x {formatCurrency(item.priceFrom)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t p-5 space-y-3">
          <div className="flex justify-between font-semibold">
            <span>Tạm tính</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>

          <button
            className="w-full bg-gray-800 text-white py-3"
            onClick={goToCart}
          >
            Xem giỏ hàng
          </button>

          <button
            className="w-full bg-gray-900 text-white py-3"
            onClick={goToCheckout}
          >
            Thanh toán
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
