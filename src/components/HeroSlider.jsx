import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";

const SLIDES = [
  {
    image: "/images/hoa-sac-banner.png",
  }
];

export default function HeroSlider() {
  return (
    <section className="relative">
      <Carousel
        opts={{ loop: true, align: "start" }}
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
        className="h-[58vh] min-h-[380px]"
      >
        <CarouselContent className="h-full">
          {SLIDES.map((s, idx) => (
            <div key={idx} className="min-w-0 flex-[0_0_100%] pl-0 h-full">
              <CarouselItem>
                <div className="relative h-full w-full">

                  {/* Ảnh full — không bị mất phần trên */}
                  <img
                    src={s.image}
                    alt="banner"
                    className="h-full w-full object-cover object-top"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* content */}
                  <div className="absolute inset-0 mx-auto max-w-6xl px-4 flex flex-col justify-center text-white">
                    <h2 className="text-3xl sm:text-5xl font-semibold leading-tight">
                      {s.title}
                      <br />
                      <span className="text-white/90">{s.subtitle}</span>
                    </h2>
                  </div>

                </div>
              </CarouselItem>
            </div>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
