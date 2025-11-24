import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const SLIDES = [
  {
    image: "/images/hoa-sac-banner.png",
    title: "Họa Sắc – Tranh tô theo số",
    subtitle: "Tranh số hóa văn hóa Việt, giao nhanh toàn quốc",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative">
      <Carousel
        opts={{ loop: true, align: "start" }}
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
        className="h-[260px] sm:h-[320px] md:h-[420px] lg:h-[520px]"
      >
        <CarouselContent className="h-full">
          {SLIDES.map((s, idx) => (
            <CarouselItem key={idx} className="h-full">
              <div className="relative h-full w-full">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover object-center sm:object-top"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-center px-4 sm:px-6 text-white">
                  <div className="max-w-xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                      {s.title}
                    </h2>
                    {s.subtitle && (
                      <p className="mt-3 text-sm sm:text-base text-white/90">
                        {s.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
