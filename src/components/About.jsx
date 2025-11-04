// src/components/About.jsx
export default function About() {
   return (
    <section id="about" className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            VỀ CHÚNG TÔI
          </h2>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800 uppercase mb-4">
            HỌA SẮC – SỨ MỆNH LAN TỎA GIÁ TRỊ VĂN HÓA VIỆT
          </h3>

          <p className="text-gray-700 leading-7">
            Họa Sắc ra đời với một sứ mệnh trở thành cầu nối sáng tạo, dùng ngôn
            ngữ tranh số hóa để tuyên truyền và tôn vinh những giá trị lịch sử – 
            văn hóa vĩ đại của Việt Nam. Trong thời đại số, các câu chuyện lịch sử,
            hình ảnh di sản và văn hóa đẹp đẽ đang cần một phương thức truyền tải
            mới mẻ, hấp dẫn hơn để tiếp cận thế hệ trẻ.
          </p>

          <p className="mt-4 text-gray-700 leading-7">
            Họa Sắc nhìn thấy tiềm năng nghệ thuật đi cùng khả năng kinh doanh,
            biến màu sắc và hình vẽ thành công cụ kể chuyện để làm sống lại những
            khoảnh khắc lịch sử hào hùng, tái hiện danh lam thắng cảnh, biểu
            tượng di sản và các mốc lịch sử tiêu biểu. Mục tiêu của chúng tôi là
            chuyển hóa niềm tự hào dân tộc thành những tác phẩm nghệ thuật có
            giá trị toàn cầu.
          </p>

          <p className="mt-4 text-gray-700 leading-7">
            Mỗi bức tranh số hóa của Họa Sắc không chỉ là một sản phẩm thẩm mỹ
            mà còn là một “bài học” trực quan, một câu chuyện lịch sử, và một
            biểu tượng văn hóa được tô điểm bằng màu sắc. Qua đó, Họa Sắc mong
            muốn góp phần phát huy và lan tỏa bản sắc Việt Nam tới tất cả mọi người.
          </p>

          <a
            href="#"
            className="mt-6 inline-block rounded-full bg-emerald-600 px-6 py-3 text-white text-sm hover:bg-emerald-700"
          >
            Xem Catalogue
          </a>
        </div>

        {/* Right: stacked photos */}
        <PhotoStack
          bgSrc="/images/about-1.webp"
          frontSrc="/images/about-2.webp"
          bgAlt="Không gian trưng bày"
          frontAlt="Máy in UV và thành phẩm"
        />
      </div>
    </section>
  );
}

  function PhotoStack({
    bgSrc = "/images/about_bg.jpg",
    frontSrc = "/images/about_front.jpg",
    bgAlt = "",
    frontAlt = "",
  }) {
    return (
      <div className="relative w-full flex justify-end">
        <div className="relative w-full max-w-[620px]">
          {/* --- BACK PHOTO: nhỏ hơn & lệch trái-trên để luôn lộ ra --- */}
          <div
            className="
              absolute -top-6 -left-6 sm:-top-8 sm:-left-8 z-0
              w-[68%]                /* nhỏ hơn ảnh trước để không bị che hết */
              rounded-2xl overflow-hidden
              shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              hidden sm:block
            "
          >
            <div className="relative aspect-[4/3]">
              <img
                src={bgSrc}
                alt={bgAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* --- FRONT PHOTO: khung trắng dày --- */}
          <div className="relative z-10 ml-auto">
            <div className="rounded-3xl bg-white p-5 md:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
              <div className="relative aspect-[4/3] w-[540px] max-w-[90vw]">
                <img
                  src={frontSrc}
                  alt={frontAlt}
                  className="absolute inset-0 h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* bóng mềm dưới đáy */}
            <div className="pointer-events-none absolute -bottom-6 left-8 right-8 h-10 rounded-full blur-2xl opacity-40 bg-black/10" />
          </div>
        </div>
      </div>
    );
  }

