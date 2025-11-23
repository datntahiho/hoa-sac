import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function formatCurrency(value) {
  const n = Number(value) || 0;
  return n.toLocaleString("vi-VN") + " đ";
}

export default function OrderSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state?.order || {
    id: "188071",
    date: new Date().toLocaleDateString("vi-VN"),
    phone: "0376194022",
    paymentMethod: "Chuyển khoản ngân hàng",
    items: [
      {
        id: "p1",
        name: "Tranh Sơn Dầu Vẽ Tay Hoa Sen - OH01077",
        quantity: 1,
        price: 1467750,
        size: "1 tấm 40x60",
        frameColor: "Đen",
      },
    ],
    billing: {
      name: "Nguyễn",
      address: "Đông Anh Hà Nội",
      phone: "0376194022",
    },
  };

  const subtotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-yellow-50/60">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Thông báo trên đầu + nút quay lại cửa hàng */}
        <div className="text-center mb-8">
          <p className="text-sm text-gray-600 mb-3">
            Chưa có sản phẩm nào trong giỏ hàng.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-gray-900 text-white text-xs font-semibold tracking-wide"
          >
            QUAY TRỞ LẠI CỬA HÀNG
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
          {/* LEFT: Thông tin chuyển khoản + chi tiết đơn hàng */}
          <section className="space-y-6">
            {/* Thông tin chuyển khoản ngân hàng */}
            <div className="space-y-3">
              <h1 className="text-xl font-semibold">
                Thông tin chuyển khoản ngân hàng
              </h1>
              <p className="text-sm">
                <span className="font-semibold">NGO VO TRUONG NINH</span>
              </p>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>
                  Ngân hàng:{" "}
                  <span className="font-semibold">TpBank CN Hà Nội</span>
                </li>
                <li>
                  Số tài khoản:{" "}
                  <span className="font-semibold">0587102003</span>
                </li>
              </ul>
            </div>

            {/* Chi tiết đơn hàng */}
            <div className="space-y-3">
              <h2 className="text-lg font-semibold">Chi tiết đơn hàng</h2>

              <div className="border-t border-gray-200 text-sm">
                {/* Header */}
                <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] py-3 text-xs font-semibold text-gray-600 border-b border-gray-200">
                  <span className="uppercase">Sản phẩm</span>
                  <span className="uppercase text-right">Tổng</span>
                </div>

                {/* Các dòng sản phẩm */}
                {order.items.map((item) => (
                  <div key={item.id} className="border-b border-gray-200">
                    <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] px-0 py-3">
                      <div>
                        <div>
                          {item.name}{" "}
                          <span className="font-semibold">
                            × {item.quantity}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        {formatCurrency(item.price * item.quantity)}
                      </div>
                    </div>

                    {(item.size || item.frameColor) && (
                      <div className="px-0 pb-3 text-xs text-gray-700 space-y-1">
                        {item.size && (
                          <div className="grid grid-cols-[120px,minmax(0,1fr)]">
                            <span className="font-semibold">Kích thước:</span>
                            <span>{item.size}</span>
                          </div>
                        )}
                        {item.frameColor && (
                          <div className="grid grid-cols-[120px,minmax(0,1fr)]">
                            <span className="font-semibold">Màu khung:</span>
                            <span>{item.frameColor}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] py-2 border-b border-gray-200 text-sm">
                  <span className="font-semibold">Tổng số phụ:</span>
                  <span className="text-right">{formatCurrency(subtotal)}</span>
                </div>

                <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] py-2 border-b border-gray-200 text-sm">
                  <span className="font-semibold">Tổng cộng:</span>
                  <span className="text-right">{formatCurrency(subtotal)}</span>
                </div>

                <div className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] py-2 text-sm">
                  <span className="font-semibold">Phương thức thanh toán:</span>
                  <span className="text-right">{order.paymentMethod}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Địa chỉ thanh toán</h2>
              <div className="text-sm space-y-1">
                <p className="font-semibold">{order.billing.name}</p>
                <p>{order.billing.address}</p>
                <p>{order.billing.phone}</p>
              </div>
            </div>
          </section>

          {/* RIGHT: Box cảm ơn */}
          <aside className="rounded border border-gray-200 bg-white p-3 text-xs leading-relaxed space-y-1">
            <p className="text-green-700 font-semibold">
              Cảm ơn bạn. Đơn hàng của bạn đã được nhận.
            </p>
            <ul className="space-y-1">
              <li>
                <span className="font-semibold">Mã đơn hàng:</span>{" "}
                <span>{order.id}</span>
              </li>
              <li>
                <span className="font-semibold">Ngày:</span>{" "}
                <span>{order.date}</span>
              </li>
              <li>
                <span className="font-semibold">Số điện thoại:</span>{" "}
                <span>{order.phone}</span>
              </li>
              <li>
                <span className="font-semibold">Tổng cộng:</span>{" "}
                <span>{formatCurrency(subtotal)}</span>
              </li>
              <li>
                <span className="font-semibold">Phương thức thanh toán:</span>{" "}
                <span>{order.paymentMethod}</span>
              </li>
            </ul>

            <div className="mt-2 flex justify-center">
              <img
                src="/images/qr-code-thanh-toan.png"
                alt="QR TpBank"
                className="w-52 h-auto object-contain"
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
