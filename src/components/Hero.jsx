export default function Hero() {
  return (
    <section
      className="relative h-[58vh] min-h-[380px] w-full bg-center bg-cover"
      style={{
        backgroundImage:
          "url('/images/hero.jpg')", // thay ảnh banner của bạn
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto max-w-6xl h-full px-4 flex flex-col justify-center">
        <h1 className="max-w-xl text-white text-3xl sm:text-4xl font-semibold leading-tight">
          Mua tranh tại xưởng <br /> <span className="text-emerald-300">TIẾT KIỆM</span>
        </h1>

        <div className="mt-6 w-fit border border-white/30 p-6 rounded-lg text-white backdrop-blur">
          <p className="uppercase tracking-widest text-xs text-white/80">Ưu đãi</p>
          <p className="text-4xl font-bold">5 – 10%</p>
        </div>

        <div className="mt-6">
          <a
            href="#about"
            className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-white text-sm hover:bg-emerald-700"
          >
            Khám phá ngay
          </a>
        </div>
      </div>
    </section>
  );
}
