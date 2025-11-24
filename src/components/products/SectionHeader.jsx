export default function SectionHeader({
  title,
  ctaLabel = "Xem thêm",
  onClickCta,
  href,
}) {
  const Cta = (
    <button
      type="button"
      onClick={onClickCta}
      className="inline-flex items-center gap-1 rounded-full border px-4 py-2 text-xs sm:text-sm hover:bg-gray-100"
    >
      {ctaLabel} <span>›</span>
    </button>
  );

  return (
    <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
        {title}
      </h2>
      {href ? (
        <a href={href} className="self-start sm:self-auto">
          {Cta}
        </a>
      ) : (
        Cta
      )}
    </div>
  );
}
