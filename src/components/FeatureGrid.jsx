const BANNERS = [
  {
    title: "Xưởng tranh tô tại Hà Nội",
    desc: "Sản xuất trực tiếp – giá tốt cho mọi đơn hàng.",
    image: "/images/banner-col-1.webp",
  },
  {
    title: "Trọn bộ dụng cụ đầy đủ",
    desc: "Mỗi tranh đều kèm màu, cọ, móc treo – mở ra là tô được ngay.",
    image: "/images/banner-col-2.webp",
  },
  {
    title: "Đóng gói & giao hàng cẩn thận",
    desc: "Đóng gói chống sốc, giao hàng toàn quốc nhanh chóng.",
    image: "/images/banner-col-3.webp",
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-yellow-50/60 py-10 sm:py-12">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3">
        {BANNERS.map((item) => (
          <article
            key={item.title}
            className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
          >
            {/* Ảnh */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full transform object-cover transition-transform duration-300 group-hover:-translate-y-2 sm:h-52"
              />
            </div>

            {/* Text */}
            <div className="px-4 py-4 sm:py-5">
              <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
