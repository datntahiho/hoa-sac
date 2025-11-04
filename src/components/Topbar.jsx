import { Phone, Search, ShoppingCart } from "lucide-react";

export default function TopBar({
  phone = "0587.10.20.03",
  logoSrc = "/images/hoa-sac-logo.jpeg",
  onCartClick,
}) {
  return (
    <div className="w-full h-20">
      <div className="mx-auto max-w-6xl px-4 py-2 grid grid-cols-3 items-center gap-3">
        {/* Left: Hotline */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-4 text-sm">
            <Phone className="h-4 w-4 text-emerald-600" />
            {/* <Phone /> */}
            <span>
              Hotline: <strong className="font-semibold">{phone}</strong>
            </span>
          </span>
        </div>

        {/* Center: Logo */}
        <div className="flex justify-center">
          <a href="/" className="font-semibold tracking-wide text-lg">
            HOA<span className="text-emerald-600">SAC</span>
          </a>
        </div>

        {/* Right: Search + Cart */}
        <div className="flex items-center justify-end gap-3">
          <div className="relative hidden sm:block">
            <input
              className="w-56 rounded-full border px-4 py-2 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Tìm sản phẩm..."
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <button
            onClick={onCartClick}
            className="relative rounded-full p-2 hover:bg-white border"
            aria-label="Giỏ hàng"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-emerald-600 text-white text-xs grid place-items-center">
              0
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
