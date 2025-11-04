import { useState } from "react";

export default function Gallery({ images = [] }) {
  const [idx, setIdx] = useState(0);
  const current = images[idx] || images[0];

  return (
    <div className="grid gap-3">
      {/* Ảnh lớn */}
      <div className="relative overflow-hidden rounded-md border">
        <div className="aspect-[4/3] bg-gray-50">
          <img
            src={current}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`overflow-hidden rounded-md border ${i === idx ? "ring-2 ring-emerald-500" : ""}`}
          >
            <div className="aspect-[4/3] bg-white">
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
