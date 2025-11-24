import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  href,
  image,
  title,
  priceFrom,
  currency = "đ",
}) {
  const to = href?.startsWith("/") ? href : `/${href || ""}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border bg-white shadow-sm transition hover:shadow-md">
      <Link to={to} className="flex flex-1 flex-col">
        <div className="relative w-full overflow-hidden">
          <div className="aspect-[4/3]">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.03]"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col px-3 pb-3 pt-2 sm:px-4 sm:pb-4 sm:pt-3">
          <h3 className="line-clamp-2 min-h-[2.5rem] text-xs sm:text-sm font-medium text-gray-800">
            {title}
          </h3>
          <div className="mt-2 sm:mt-3">
            <div className="w-full rounded-full bg-gray-100 px-3 py-1.5 text-center text-xs sm:text-sm text-gray-700">
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
