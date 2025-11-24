import React from "react";

const PaintByNumbersTrendDetail = () => {
  return (
    <section className="w-full bg-slate-50 py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        {/* Meta + tag */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-yellow-800">
              Tranh số hóa
            </span>
            <span className="hidden h-3 w-px bg-slate-300 md:inline-block" />
            <span>Cập nhật: 2025</span>
          </div>
          <span className="italic text-slate-400">
            Blog Họa Sắc · Tranh số hóa &amp; giới trẻ
          </span>
        </div>

        {/* Card chính */}
        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg">
          {/* Header + tiêu đề */}
          <div className="border-b border-slate-100 bg-gradient-to-r from-yellow-50/70 to-white px-5 py-6 md:px-8 md:py-7">
            <h1 className="text-2xl md:text-3xl font-bold leading-snug text-slate-900">
              Vì Sao Tranh Số Hóa (Paint-by-Numbers) Lại “Gây Sốt” Trong Giới
              Trẻ?
            </h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600">
              Từ thú vui thư giãn đến liệu pháp tinh thần, tranh số hóa đang trở
              thành một trong những hoạt động sáng tạo được giới trẻ đặc biệt
              yêu thích.
            </p>
          </div>

          {/* Nội dung */}
          <div className="px-5 py-6 md:px-8 md:py-8">
            <article
              className="
                prose prose-sm md:prose-base max-w-none
                prose-p:text-slate-700 prose-p:leading-relaxed
                prose-strong:text-slate-900
                prose-img:rounded-2xl prose-img:shadow-md
                prose-ul:list-disc prose-ul:pl-5
              "
            >
              {/* ========== 1. Mở Cánh Cửa Nghệ Thuật Không Phân Biệt Trình Độ ========== */}
              <h2 className="mt-4 mb-2 text-xl md:text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-xs md:text-sm font-bold text-slate-900">
                  1
                </span>
                <span>Mở Cánh Cửa Nghệ Thuật Không Phân Biệt Trình Độ</span>
              </h2>

              <p>
                Một trong những lý do khiến tranh số hóa trở nên phổ biến là vì
                tính “ai cũng có thể vẽ được”. Bạn không cần kinh nghiệm, không
                cần biết phác thảo – mọi bức tranh đã được chia ô, đánh số màu
                rõ ràng, giúp người mới bắt đầu dễ tiếp cận.
              </p>
              <p>
                Với Họa Sắc, chúng tôi tạo ra các bộ kit thân thiện, hướng dẫn
                chi tiết và thiết kế mẫu tranh cân đối — để cả người chưa từng
                cầm cọ cũng có thể tạo nên tác phẩm đẹp như ý.
              </p>

              <figure className="mt-3 mb-8 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/IMG_3520.JPG"
                  alt="Tranh số hóa dành cho người mới bắt đầu"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Tranh số hóa mở cánh cửa nghệ thuật cho mọi người – kể cả
                  người chưa từng cầm cọ.
                </figcaption>
              </figure>

              {/* ========== 2. Giảm Stress Hiệu Quả ========== */}
              <h2 className="mt-6 mb-2 text-xl md:text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-xs md:text-sm font-bold text-slate-900">
                  2
                </span>
                <span>Giảm Stress Hiệu Quả</span>
              </h2>

              <p>
                Cuộc sống hiện đại, nhất là đối với giới trẻ, thường rất bận
                rộn, áp lực. Vẽ tranh số hóa là cách “tái lập kết nối” với bản
                thân: mỗi ô màu, mỗi nét cọ buộc người vẽ phải tập trung, như
                một hình thức thiền nhẹ — giúp xoa dịu tâm trí, giảm lo âu.
              </p>
              <p>
                Quá trình tô màu lặp đi lặp lại còn giúp người vẽ đi vào trạng
                thái “flow” – quên thời gian, quên công việc, chỉ còn màu sắc và
                sự sáng tạo.
              </p>

              {/* ========== 3. Niềm Vui Khi Chiêm Ngưỡng Thành Quả ========== */}
              <h2 className="mt-6 mb-2 text-xl md:text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-xs md:text-sm font-bold text-slate-900">
                  3
                </span>
                <span>Niềm Vui Khi Chiêm Ngưỡng Thành Quả</span>
              </h2>

              <p>
                Khi bạn hoàn thành một bức tranh, cảm giác “mình làm được” rất
                rõ ràng — mỗi mảng đã tô, mỗi chi tiết đã đẹp lên theo thời
                gian. Sự tiến bộ này kích thích dopamine, mang lại niềm vui, tự
                hào về thành quả.
              </p>
              <p>
                Với Họa Sắc, bức tranh bạn làm ra không chỉ là thú vui tạm thời:
                nó có thể trở thành một bức tranh treo tường, một món quà độc
                đáo hoặc một biểu tượng cá nhân của “mình đã làm nên điều gì
                đó”.
              </p>

              <figure className="mt-3 mb-8 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/1.png"
                  alt="Thành quả tranh số hóa sau khi hoàn thiện"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Cảm giác tự hào khi nhìn ngắm bức tranh do chính mình hoàn
                  thiện.
                </figcaption>
              </figure>

              {/* ========== 4. Một Thú Vui “Chống Lại Thời Gian Màn Hình” ========== */}
              <h2 className="mt-6 mb-2 text-xl md:text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-xs md:text-sm font-bold text-slate-900">
                  4
                </span>
                <span> Một Thú Vui “Chống Lại Thời Gian Màn Hình”</span>
              </h2>

              <p>
                Giới trẻ hiện nay thường dành nhiều thời gian trước màn hình –
                học, làm việc, giải trí. Tranh số hóa trở thành lựa chọn tuyệt
                vời để tạm “rút phích” khỏi màn hình: một hoạt động analog,
                thủ công, nhưng vẫn rất sáng tạo và thư giãn.
              </p>
              <p>
                Hoạt động này không chỉ giúp giảm thời gian tiếp xúc điện
                thoại/laptop mà còn mang lại trải nghiệm “tương tác thực tế”:
                bạn dùng cọ, sơn, canvas – một khoảng lặng thực sự giữa nhịp
                sống số.
              </p>

              <figure className="mt-3 mb-8 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/275110551_5175824945781558_419422465210416982_n-1024x1365.jpeg"
                  alt="Giới trẻ thư giãn cùng tranh số hóa"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Tạm rời xa màn hình, kết nối với bản thân qua từng nét cọ và
                  mảng màu.
                </figcaption>
              </figure>

              {/* ========== 5. Có Tác Động Tích Cực Đến Sức Khỏe Tinh Thần ========== */}
              <h2 className="mt-6 mb-2 text-xl md:text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-xs md:text-sm font-bold text-slate-900">
                  5
                </span>
                <span>Có Tác Động Tích Cực Đến Sức Khỏe Tinh Thần</span>
              </h2>

              <p>
                Nhiều nghiên cứu và bài viết chỉ ra rằng vẽ tranh số hóa có lợi
                cho sức khỏe tinh thần: nó khuyến khích mindfulness, nâng cao tự
                tin, giúp thoát khỏi vòng luẩn quẩn căng thẳng.
              </p>

              <p>
                Không chỉ là giải trí, nó là liệu pháp nhỏ — một khoảng thời
                gian “seva” với bản thân, nơi bạn sáng tạo, thư giãn và làm mới
                tâm hồn.
              </p>

              {/* ========== 6. Món Quà Ý Nghĩa Để Tặng Người Thân & Trang Trí Trong Nhà ========== */}
              <h2 className="mt-6 mb-2 text-xl md:text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-xs md:text-sm font-bold text-slate-900">
                  6
                </span>
                <span>
                  Món Quà Ý Nghĩa Để Tặng Người Thân &amp; Trang Trí Trong Nhà
                </span>
              </h2>

              <p>
                Một lý do quan trọng khiến tranh số hóa được giới trẻ yêu thích
                chính là giá trị tinh thần mà nó mang lại. Trong thời đại mà quà
                tặng thường xoay quanh đồ công nghệ hay các món đồ có giá trị
                không bền vững, tranh số hóa lại mang một năng lượng rất khác:
                sự chân thành và thời gian.
              </p>
              <p>
                Bởi vì: Bạn tự tay tạo ra, bạn dành thời gian và tâm sức để
                hoàn thiện, mỗi nét cọ đều là sự gửi gắm tình cảm. Nên khi tặng
                cho người thân, người yêu, bạn bè… bức tranh không chỉ là một
                món quà – mà là tình yêu, sự trân trọng và một phần trái tim của
                chính bạn.
              </p>
              <p>
                Giới trẻ ngày nay càng quan tâm đến quà tặng mang dấu ấn cá
                nhân, và tranh số hóa chính là lựa chọn hoàn hảo: độc đáo, thẩm
                mỹ, lại mang nhiều cảm xúc hơn những món đồ mua sẵn.
              </p>
              <p>
                Và một căn phòng đẹp không chỉ bởi nội thất mà còn nhờ những
                điểm nhấn có ý nghĩa. Tranh số hóa sau khi hoàn thiện có thể trở
                thành tranh treo tường hiện đại, phù hợp nhiều phong cách như:
                tối giản, vintage, hiện đại, boho, hoặc Asian-style.
              </p>
              <p>
                Đặc biệt, bức tranh do chính bạn tạo ra luôn mang cảm giác ấm áp
                và tự hào – mỗi lần nhìn lại, bạn sẽ nhớ về hành trình sáng tạo
                của mình. Chính điều đó khiến tranh số hóa trở thành lựa chọn
                trang trí cực kỳ được ưa chuộng trong giới trẻ.
              </p>

              <figure className="mt-3 mb-8 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/3.png"
                  alt="Tranh số hóa làm quà tặng và trang trí"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Bức tranh do chính tay bạn hoàn thiện – món quà và vật trang
                  trí mang đậm dấu ấn cá nhân.
                </figcaption>
              </figure>

              {/* ========== Kết luận: Khi Giới Trẻ và Tranh Số Hóa Gặp Nhau ========== */}
              <h2 className="mt-6 mb-3 text-xl md:text-2xl font-extrabold text-slate-900">
                Khi Giới Trẻ và Tranh Số Hóa Gặp Nhau
              </h2>

              <p>
                Tranh số hóa không chỉ là một xu hướng thoáng qua — đó là sự hội
                tụ của công nghệ, nghệ thuật và tinh thần thời hiện đại. Với
                Họa Sắc, chúng tôi tin rằng chính khả năng tạo nên điều đẹp đẽ
                mà không cần kỹ năng cao, khả năng kết nối và chia sẻ, cùng giá
                trị chữa lành tinh thần đã làm cho loại hình này trở nên hấp
                dẫn đặc biệt với giới trẻ.
              </p>
              <p>
                Nếu bạn là người trẻ đang tìm kiếm một cách để thư giãn, để
                sáng tạo, hoặc chỉ để tạo ra điều gì đó mang dấu ấn cá nhân —
                hãy để tranh số hóa và Họa Sắc đồng hành cùng bạn trên hành
                trình đó. Dừng lại một chút, cầm cọ, chọn màu, và vẽ nên câu
                chuyện của riêng mình.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintByNumbersTrendDetail;
