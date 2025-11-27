import { Phone, Search, ShoppingCart } from "lucide-react";

export default function TopBar({
  phone = "0587.10.20.03",
  logoSrc = "/images/new-logo2.png",
  onCartClick,
  cartCount = 0,
}) {
  return (
    <div className="w-full border-b bg-[#F3E1BD]">
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-2 gap-3">
        
        {/* LEFT: Hotline */}
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <Phone className="h-4 w-4 text-emerald-600" />
          <span className="hidden xs:inline">
            Hotline: <strong className="font-semibold whitespace-nowrap">{phone}</strong>
          </span>
          <span className="xs:hidden font-semibold">{phone}</span>
        </div>

        {/* CENTER: Logo */}
        <div className="flex items-center justify-center overflow-visible">
          <a href="/" className="flex justify-center items-center">
         <img
  src={logoSrc}
  alt="HOASAC"
  className="h-10 w-auto object-contain scale-[3.5]"
/>

          </a>
        </div>

        {/* RIGHT: Search + Cart */}
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <div className="relative hidden sm:block">
            <input
              className="w-56 rounded-full border px-4 py-2 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Tìm sản phẩm..."
            />
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>

          <button
            onClick={onCartClick}
            className="relative rounded-full border p-2 hover:bg-gray-50"
            aria-label="Giỏ hàng"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 grid h-5 min-w-[20px] place-items-center rounded-full bg-emerald-600 px-1 text-xs text-white">
              {cartCount}
            </span>
          </button>
        </div>

      </div>
    </div>
  );
}
