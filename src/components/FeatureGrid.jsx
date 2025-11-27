const BANNERS = [
  {
    title: "Sản phẩm chất lượng cao",
    desc: "Canvas dày, màu acrylic lên chuẩn, không lem – giúp bạn dễ dàng hoàn thiện bức tranh.",
    image: "/images/workshop-ve-tranh-sai-gon-04-1715652752.jpeg",
  },
   {
    title: "Giao hàng toàn quốc",
    desc: "Đặt tranh online cực dễ – Họa Sắc gửi tận nhà, đóng gói kỹ lưỡng.",
    image: "/images/_106308919_paint_by_numbers2_getty.jpg",
  },
  {
    title: "Trọn bộ dụng cụ đầy đủ",
    desc: "Mỗi sản phẩm bao gồm đầy đủ: tranh, màu acrylic, sơn dạ quang, cọ, bảng màu đánh số, dụng cụ treo tranh,...",
    image: "/images/1-1628261830949477002501.jpg",
  },
  {
    title: "Đa dạng chủ đề",
    desc: "Họa Sắc luôn có mẫu phù hợp với mọi sở thích và nhiều độ tuổi khác nhau.",
    image: "/images/pf-ccec312f-6036-4296-b74b-0e3cb45ad69e--Dan-Robbins-el-inventor-de-la-pintura-por-numeros-2_480x480.webp",
  },
];

export default function FeatureGrid() {
  return (
  <section className="bg-yellow-50/60 py-10 sm:py-12">
  <div className="mx-auto grid max-w-6xl gap-6 px-4 
      grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      {/* <== md trở lên sẽ hiển thị 4 khối */}
    {BANNERS.map((item) => (
      <article
        key={item.title}
        className="group cursor-pointer overflow-hidden rounded-lg bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]"
      >
        <div className="overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-44 w-full transform object-cover transition-transform duration-300 group-hover:-translate-y-2 sm:h-52"
          />
        </div>
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
