// src/components/WhyUsWithImage.jsx
import { Palette, MonitorCog, BadgeCheck } from "lucide-react";

const DEFAULT_FEATURES = [
  {
    icon: MonitorCog,
    title: "THIẾT KẾ CHUYÊN NGHIỆP",
    desc: "Đội ngũ họa sĩ và thiết kế sáng tạo, mang đến tác phẩm sống động, tinh tế và giá trị thẩm mỹ.",
  },
  {
    icon: Palette,
    title: "CHẤT LIỆU CAO CẤP",
    desc: "Nguyên liệu tuyển chọn kỹ lưỡng từ các nguồn uy tín, đảm bảo chất lượng tối ưu và bền màu theo thời gian.",
  },
  {
    icon: BadgeCheck,
    title: "SẢN XUẤT KHÉP KÍN",
    desc: "Quy trình tại xưởng đảm bảo chỉn chu từng chi tiết, mang đến bức tranh hoàn thiện nhất.",
  },
];

export default function WhyUsWithImage({
  features = DEFAULT_FEATURES,
  imageSrc = "/images/workshop.jpg",
  imageAlt = "Xưởng sản xuất tranh",
}) {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid gap-8 lg:grid-cols-2 items-center">
        {/* Left: features */}
        <div className="space-y-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex gap-4">
              {/* icon trong vòng tròn nhạt */}
              <div className="mt-1 shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-100 grid place-items-center">
                  <Icon className="h-5 w-5 text-gray-800" />
                </div>
              </div>
              <div>
                <h3 className="font-extrabold tracking-tight uppercase text-gray-800">
                  {title}
                </h3>
                <p className="mt-1 text-gray-600">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: image (thay cho video) */}
        <div className="relative">
          <div className="rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <div className="relative w-full aspect-[16/9] bg-gray-50">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          {/* viền mềm giống card video */}
          <div className="pointer-events-none absolute -bottom-4 left-6 right-6 h-10 rounded-full blur-2xl bg-black/10 opacity-40" />
        </div>
      </div>
    </section>
  );
}
