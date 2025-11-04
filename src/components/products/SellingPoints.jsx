import { CheckCircle2 } from "lucide-react";

const DEFAULT_POINTS = [
  "Tư vấn tận tâm – Chọn tranh đúng ý",
  "Sản xuất theo yêu cầu – Phù hợp không gian",
  "Đổi mẫu – phối màu – viền tranh theo sở thích",
  "Chất lượng đảm bảo – Sử dụng bền lâu",
  "Mua tranh tại xưởng – Tiết kiệm chi phí",
];

export default function SellingPoints({ points = DEFAULT_POINTS }) {
  return (
    <div className="rounded-md bg-gray-50 p-4">
      <ul className="space-y-2">
        {points.map((t, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
            <span className="text-sm text-gray-700">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
