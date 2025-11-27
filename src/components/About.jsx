function PhotoStack({
  bgSrc = "/images/about-1.webp",
  frontSrc = "/images/bg_front.png",
  bgAlt = "",
  frontAlt = "",
}) {
  return (
    <div className="relative flex w-full justify-center lg:justify-end">
      <div className="relative w-full max-w-[620px]">
        {/* BACK PHOTO: nhỏ hơn & lệch trái-trên */}
        {/* <div className="absolute -left-3 -top-6 hidden w-[60%] overflow-hidden rounded-3xl shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:block">
          <div className="relative aspect-[4/3]">
            <img
              src={bgSrc}
              alt={bgAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div> */}

        {/* FRONT PHOTO */}
        <div className="relative z-10 ml-auto">
          <div className="rounded-3xl bg-white p-4 sm:p-5 md:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
            <div className="relative aspect-[4/3] w-full md:w-[540px] max-w-[90vw]">
              <img
                src={frontSrc}
                alt={frontAlt}
                className="absolute inset-0 h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>

          {/* bóng mềm dưới đáy */}
          <div className="pointer-events-none absolute -bottom-6 left-8 right-8 h-10 rounded-full bg-black/10 opacity-40 blur-2xl" />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="border-b bg-yellow-50/60 py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
        {/* Left: text */}
        <div>
          <h2 className="mb-4 text-2xl sm:text-3xl font-extrabold tracking-tight">
            VỀ CHÚNG TÔI
          </h2>

          <h3 className="mb-4 text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-gray-800">
            HỌA SẮC – SỨ MỆNH LAN TỎA GIÁ TRỊ VĂN HÓA VIỆT
          </h3>

          <p className="text-sm sm:text-base leading-7 text-gray-700">
            Họa Sắc ra đời với một sứ mệnh trở thành cầu nối sáng tạo, dùng ngôn
            ngữ tranh số hóa để tuyên truyền và tôn vinh những giá trị lịch sử –
            văn hóa vĩ đại của Việt Nam. Trong thời đại số, các câu chuyện lịch
            sử, hình ảnh di sản và văn hóa đẹp đẽ đang cần một phương thức
            truyền tải mới mẻ, hấp dẫn hơn để tiếp cận thế hệ trẻ.
          </p>

          <p className="mt-3 text-sm sm:text-base leading-7 text-gray-700">
            Họa Sắc nhìn thấy tiềm năng nghệ thuật đi cùng khả năng kinh doanh,
            biến màu sắc và hình vẽ thành công cụ kể chuyện để làm sống lại
            những khoảnh khắc lịch sử hào hùng, tái hiện danh lam thắng cảnh,
            biểu tượng di sản và các mốc lịch sử tiêu biểu. Mục tiêu của chúng
            tôi là chuyển hóa niềm tự hào dân tộc thành những tác phẩm nghệ
            thuật có giá trị toàn cầu.
          </p>

          <p className="mt-3 text-sm sm:text-base leading-7 text-gray-700">
            Mỗi bức tranh số hóa của Họa Sắc không chỉ là một sản phẩm thẩm mỹ
            mà còn là một “bài học” trực quan, một câu chuyện lịch sử, và một
            biểu tượng văn hóa được tô điểm bằng màu sắc. Qua đó, Họa Sắc mong
            muốn góp phần phát huy và lan tỏa bản sắc Việt Nam tới tất cả mọi
            người.
          </p>
        

          <a
            href="#"
            className="mt-5 inline-block rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Xem Catalogue
          </a>
        </div>

        {/* Right: stacked photos */}
        <PhotoStack
          bgSrc="/images/about-1.webp"
          frontSrc="/images/bg_front.png"
          bgAlt="Không gian trưng bày"
          frontAlt="Máy in UV và thành phẩm"
        />
      </div>
    </section>
  );
}
