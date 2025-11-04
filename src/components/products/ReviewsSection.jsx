export default function ReviewsSection({ reviews = [] }) {
  return (
    <section className="mt-10">
      <h3 className="mb-4 text-lg font-bold">ĐÁNH GIÁ TỪ KHÁCH HÀNG</h3>
      <div className="space-y-6">
        {reviews.map((rv, i) => (
          <article key={i} className="border-b pb-6">
            <div className="mb-2 text-sm font-semibold">{rv.name}</div>
            <div className="mb-2 text-sm text-gray-700">{rv.comment}</div>
            {rv.images?.length ? (
              <div className="grid grid-cols-5 gap-2">
                {rv.images.map((img, j) => (
                  <img key={j} src={img} alt="" className="h-20 w-full rounded object-cover" />
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
      {/* Pagination demo */}
      <div className="mt-6 flex items-center gap-2">
        <button className="rounded border px-3 py-1 text-sm">1</button>
        <button className="rounded border px-3 py-1 text-sm">2</button>
        <button className="rounded border px-3 py-1 text-sm">...</button>
        <button className="rounded border px-3 py-1 text-sm">Viết đánh giá</button>
      </div>
    </section>
  );
}
