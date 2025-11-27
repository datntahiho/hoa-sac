const BANNERS = [
  {
    title: "Shop tranh tô tại Hà Nội",
    desc: "Các workshop được tổ chức thường niên.",
    image: "/images/workshop-ve-tranh-sai-gon-04-1715652752.jpeg",
  },
  {
    title: "Trọn bộ dụng cụ đầy đủ",
    desc: "Mỗi tranh đều kèm màu, cọ, móc treo – mở ra là tô được ngay.",
    image: "/images/1-1628261830949477002501.jpg",
  },
  {
    title: "Đa dạng các loại mẫu mã",
    desc: "Nhiều chủ đề tranh phù hợp với mọi lứa tuổi và sở thích.",
    image: "/images/pf-ccec312f-6036-4296-b74b-0e3cb45ad69e--Dan-Robbins-el-inventor-de-la-pintura-por-numeros-2_480x480.webp",
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
