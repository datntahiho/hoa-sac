import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "./ui/carousel";

const SLIDES = [
  {
    image: "/images/slider1.webp",
  },
  {
    image: "/images/slider2.jpg",
  },
  {
    image: "/images/slider3.jpg",
  },
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
                <div
                  className="relative h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${s.image}')` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative mx-auto max-w-6xl h-full px-4 flex flex-col justify-center text-white">
                    <h2 className="text-3xl sm:text-5xl font-semibold leading-tight">
                      {s.title}
                      <br />
                      <span className="text-white/90">{s.subtitle}</span>
                    </h2>

                    {/* khung ưu đãi viền đôi */}
                    {/* <div className="relative mt-8 w-fit">
                      <div className="absolute -inset-3 border border-white/40 rounded-lg" />
                      <div className="rounded-lg border border-white/60 px-8 py-6 backdrop-blur-sm bg-white/10">
                        <p className="uppercase tracking-widest text-xs text-white/80">
                          Ưu đãi
                        </p>
                        <p className="text-4xl sm:text-5xl font-extrabold">
                          {s.promo}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <a
                        href="#about"
                        className="inline-block rounded-full bg-emerald-600 px-6 py-3 text-white text-sm hover:bg-emerald-700"
                      >
                        Khám phá ngay
                      </a>
                    </div> */}
                  </div>
                </div>
              </CarouselItem>
            </div>
          ))}
        </CarouselContent>

        {/* Controls + Dots */}
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots />
      </Carousel>
    </section>
  );
}
