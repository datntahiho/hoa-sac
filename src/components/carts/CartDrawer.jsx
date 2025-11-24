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
    navigate("/thanh-toan");
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex">
      {/* overlay */}
      <div className="flex-1 bg-black/40" onClick={onClose} />

      {/* drawer */}
      <div className="flex h-full w-full max-w-md flex-col bg-white shadow-2xl sm:max-w-sm md:max-w-md">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 rounded p-1.5 text-gray-600 hover:bg-gray-100"
          aria-label="Đóng giỏ hàng"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex-1 overflow-y-auto px-4 pb-5 pt-10 sm:px-5">
          <h2 className="mb-4 text-base font-semibold sm:text-lg">Giỏ hàng</h2>

          {items.length === 0 && (
            <p className="text-sm text-gray-500">Giỏ hàng trống</p>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="mb-3 flex gap-3 border-b pb-3 last:border-b-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 flex-shrink-0 rounded object-cover sm:h-18 sm:w-18"
              />
              <div className="flex flex-1 flex-col">
                <div className="text-xs font-semibold sm:text-sm">
                  {item.title}
                </div>
                <div className="mt-1 text-xs text-gray-600">
                  {item.quantity} x {formatCurrency(item.priceFrom)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 border-t px-4 py-4 sm:px-5 sm:py-5">
          <div className="flex justify-between text-sm font-semibold sm:text-base">
            <span>Tạm tính</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>

          <button
            className="w-full rounded-md bg-gray-800 py-2.5 text-sm font-medium text-white hover:bg-gray-900 sm:py-3"
            onClick={goToCart}
          >
            Xem giỏ hàng
          </button>

          <button
            className="w-full rounded-md bg-gray-900 py-2.5 text-sm font-medium text-white hover:bg-black sm:py-3"
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
