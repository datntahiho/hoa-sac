// src/components/FeatureGrid.jsx
import {
  Award,
  Factory,
  Tag,
  ShieldCheck,
  Wrench,
  Handshake,
} from "lucide-react";

const FEATURES = [
  { title: "Kinh nghiệm lâu năm", desc: "15 năm kinh doanh ngành tranh", Icon: Award },
  { title: "Nhà xưởng tiên tiến", desc: "Diện tích 400m². Máy móc hiện đại", Icon: Factory },
  { title: "Giá thành cạnh tranh", desc: "Sản phẩm chất lượng cao với giá cạnh tranh", Icon: Tag },
  { title: "Chất lượng đảm bảo", desc: "Tranh đúng như mẫu. Đổi trả nếu không hài lòng", Icon: ShieldCheck },
  { title: "Sản xuất theo yêu cầu", desc: "Dịch vụ trọn gói. Tuỳ chỉnh linh hoạt theo yêu cầu", Icon: Wrench },
  { title: "Tư vấn tận tâm", desc: "Tư vấn chuyên nghiệp, đưa ra giải pháp phù hợp", Icon: Handshake },
];

function IconCircle({ Icon }) {
  return (
    <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-white grid place-items-center shadow-[0_10px_30px_rgb(0,0,0,0.08)]">
      {/* nếu dùng file svg riêng: 
          <img src="/icons/ten-icon.svg" className="h-8 w-8" alt="" />
      */}
      <Icon className="h-8 w-8 text-gray-800" strokeWidth={2} />
    </div>
  );
}

export default function FeatureGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((f) => (
          <article
            key={f.title}
            className="rounded-md bg-gray-50 px-8 py-10 text-center hover:shadow-md transition-shadow"
          >
            <IconCircle Icon={f.Icon} />
            <h3 className="text-lg font-extrabold uppercase tracking-tight text-gray-800">
              {f.title}
            </h3>
            <p className="mt-3 text-gray-600">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
