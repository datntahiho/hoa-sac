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
    <section className="py-12 bg-yellow-50/60">
      <div className="mx-auto max-w-6xl px-4 grid gap-6 sm:grid-cols-3">
        {BANNERS.map((item) => (
          <article
            key={item.title}
            className="group rounded-lg bg-white overflow-hidden shadow-[0_10px_25px_rgba(0,0,0,0.06)] cursor-pointer"
          >
            {/* Ảnh */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover transform transition-transform duration-300 group-hover:-translate-y-2"
              />
            </div>

         
          </article>
        ))}
      </div>
    </section>
  );
}
