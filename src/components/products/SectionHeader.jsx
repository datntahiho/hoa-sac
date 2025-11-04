export default function SectionHeader({
  title,
  ctaLabel = "Xem thêm",
  onClickCta,
  href,
}) {
  const Cta = (
    <button
      onClick={onClickCta}
      className="inline-flex items-center gap-1 rounded-full border px-4 py-2 text-sm hover:bg-gray-100"
    >
      {ctaLabel} <span>›</span>
    </button>
  );

  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight uppercase">
        {title}
      </h2>
      {href ? <a href={'tranh-to-theo-so'}>{Cta}</a> : Cta}
    </div>
  );
}
