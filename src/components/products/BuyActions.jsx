export default function BuyActions({ onAddToCart, onBuyNow, disabled }) {
  return (
    <div className="flex gap-3">
      <button
        onClick={onBuyNow}
        disabled={disabled}
        className="rounded-md bg-emerald-600 px-5 py-3 text-white text-sm font-semibold hover:bg-emerald-700 disabled:opacity-50"
      >
        MUA NGAY
      </button>
      <button
        onClick={onAddToCart}
        disabled={disabled}
        className="rounded-md border px-5 py-3 text-sm font-semibold hover:bg-gray-50 disabled:opacity-50"
      >
        THÊM VÀO GIỎ HÀNG
      </button>
    </div>
  );
}
