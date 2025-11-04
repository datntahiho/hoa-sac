import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  href,
  image,
  title,
  priceFrom,
  currency = "đ",
}) {
  const to = `/${href}`;
  return (
    <article className="group rounded-md border bg-white shadow-sm hover:shadow-md transition">
      <Link to={to} className="block">
        <div className="relative w-full overflow-hidden rounded-t-md">
          <div className="aspect-[4/3]">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover group-hover:scale-[1.02] transition"
            />
          </div>
        </div>
        <div className="px-4 pb-4 pt-3">
          <h3 className="line-clamp-2 min-h-[3.25rem] text-sm font-medium text-gray-800">
            {title}
          </h3>
          <div className="mt-3">
            <div className="w-full rounded-full bg-gray-100 px-4 py-2 text-center text-sm text-gray-700">
              Giá chỉ từ{" "}
              <strong>
                {Number(priceFrom).toLocaleString("vi-VN")} {currency}
              </strong>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
