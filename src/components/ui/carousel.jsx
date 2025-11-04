import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

export function Carousel({ opts, plugins = [], className = "", children }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...opts }, plugins);
  return (
    <div className={`relative overflow-hidden ${className}`} ref={emblaRef}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { emblaApi })
      )}
    </div>
  );
}

export function CarouselContent({ className = "", emblaApi, children }) {
  return (
    <div className={`flex -ml-4 ${className}`}>
      {React.Children.map(children, (child) => (
        <div className="min-w-0 flex-[0_0_100%] pl-4">{child}</div>
      ))}
    </div>
  );
}

export function CarouselItem({ children }) {
  return <div className="w-full h-full">{children}</div>;
}

export function CarouselPrevious({ emblaApi }) {
  return (
    <button
      onClick={() => emblaApi && emblaApi.scrollPrev()}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full bg-white/80 backdrop-blur hover:bg-white shadow"
      aria-label="Prev"
    >
      ‹
    </button>
  );
}

export function CarouselNext({ emblaApi }) {
  return (
    <button
      onClick={() => emblaApi && emblaApi.scrollNext()}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full bg-white/80 backdrop-blur hover:bg-white shadow"
      aria-label="Next"
    >
      ›
    </button>
  );
}

export function CarouselDots({ emblaApi }) {
  const [selected, setSelected] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.slideNodes().length);
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  if (!count) return null;
  return (
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => emblaApi && emblaApi.scrollTo(i)}
          className={`h-2 w-2 rounded-full ${i === selected ? "bg-white" : "bg-white/60"}`}
          aria-label={`Go to slide ${i + 1}`}
        />
      ))}
    </div>
  );
}
