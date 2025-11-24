import React from "react";

const HoasacNewsBlock = () => {
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
            Blog Họa Sắc · Hành trình nghệ thuật cho mọi người
          </span>
        </div>

        {/* Card chính */}
        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg">
          {/* Header + tiêu đề */}
          <div className="border-b border-slate-100 bg-gradient-to-r from-yellow-50/70 to-white px-5 py-6 md:px-8 md:py-7">
            <h1 className="text-2xl md:text-3xl font-bold leading-snug text-slate-900">
              Họa Sắc &amp; Tranh Số Hóa: Khi Nghệ Thuật Gặp Công Nghệ để Khơi
              Gợi Tâm Hồn
            </h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600">
              Một hành trình sáng tạo nhẹ nhàng nhưng sâu sắc, nơi bất kỳ ai
              cũng có thể trở thành “họa sĩ” với bộ tranh tô màu theo số.
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
                prose-h3:text-lg prose-h3:text-slate-900 prose-h3:font-semibold
                prose-h3:mt-6 prose-h3:mb-2
                prose-ul:list-disc prose-ul:pl-5
              "
            >
              {/* ================= SECTION 1 ================= */}
              <h2
                className="
                  mt-8 mb-4 text-2xl md:text-3xl font-extrabold text-slate-900
                  flex items-center gap-3
                "
              >
                <span className="h-8 w-1 rounded-full bg-yellow-400 md:h-9" />
                <span>1. Tranh số hóa là gì — và tại sao Họa Sắc chọn nó?</span>
              </h2>

              <p>
                Trong thế giới Họa Sắc, “tranh số hóa” không chỉ là một trò chơi
                tô màu, mà là một hành trình sáng tạo đầy cảm hứng — nơi công
                nghệ và nghệ thuật hòa quyện, để mỗi người, dù chưa từng cầm cọ,
                vẫn có thể trở thành “họa sĩ”.
              </p>
              <p>
                Vậy tranh số hóa (còn gọi là paint by numbers) là gì? Về cơ bản,
                đây là những bức tranh được số hóa (phác thảo dưới dạng “ô –
                số”), và người tô chỉ cần dùng màu tương ứng với các con số để
                làm nên tác phẩm. Từng nét, từng mảng màu gợi lên một bức tranh
                hoàn chỉnh, giống đến 90–95% một bức sơn dầu truyền thống.
              </p>
              <p>
                Họa Sắc mang đến trải nghiệm này như một cánh cửa mở — không
                phân biệt tuổi tác, không cần kỹ năng vẽ, chỉ cần đam mê hoặc
                mong muốn tìm một nơi để “lắng mình” trong nghệ thuật.
              </p>

              <figure className="mt-4 mb-8 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/IMG_3533.JPG"
                  alt="Tranh số hóa Họa Sắc"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Không gian thư giãn cùng tranh số hóa Họa Sắc.
                </figcaption>
              </figure>

              {/* ================= SECTION 2 ================= */}
              <h2
                className="
    mt-10 mb-4 text-2xl md:text-3xl font-extrabold text-slate-900
    flex items-center gap-3
  "
              >
                <span className="h-8 w-1 rounded-full bg-yellow-400 md:h-9" />
                <span>
                  2. Lợi ích bất ngờ khi bạn bắt tay vào tô một bức tranh số hóa
                </span>
              </h2>

              {/* 2.1 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-[11px] font-bold text-slate-900">
                  2.1
                </span>
                <span>Thư giãn &amp; giải tỏa stress</span>
              </h3>
              <p>
                Cuộc sống bộn bề hàng ngày khiến nhiều người mệt mỏi, căng
                thẳng. Vẽ tranh số hóa là cách tuyệt vời để “giết thời gian”
                theo cách nghệ thuật. Trong những giai đoạn giãn cách, nhiều
                người đã chọn hình thức này như một liệu pháp thư giãn, giúp họ
                quên đi áp lực và tìm về sự bình yên.
              </p>
              <p>
                Chỉ cần vài giờ mỗi ngày, bạn có thể tạm quên đi công việc,
                trường lớp, để tâm hồn lắng lại cùng mỗi nét cọ.
              </p>

              {/* 2.2 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900 mt-4">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-[11px] font-bold text-slate-900">
                  2.2
                </span>
                <span>Phát triển thẩm mỹ &amp; sáng tạo</span>
              </h3>
              <p>
                Dù bạn không học vẽ, bạn vẫn có thể rèn luyện cảm nhận màu sắc,
                sự cân bằng hình khối và tỷ lệ. Khi dò từng số, chọn từng màu,
                bạn sẽ dần thấu hiểu cách phối hợp màu sao cho hài hòa, cách
                điều chỉnh đậm nhạt – điều vốn chỉ có trong hội họa chuyên
                nghiệp. Nhiều người mới bắt đầu chia sẻ rằng chính việc tô tranh
                số hóa đã mở ra cánh cửa mới cho sự sáng tạo của họ.
              </p>
              <p>
                Với Họa Sắc, mỗi mẫu tranh đều được tuyển chọn kỹ, đảm bảo thẩm
                mỹ cao và tạo cảm hứng sáng tạo lâu dài.
              </p>

              {/* 2.3 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900 mt-4">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-[11px] font-bold text-slate-900">
                  2.3
                </span>
                <span>Gắn kết gia đình &amp; bạn bè</span>
              </h3>
              <p>
                Một bức tranh số hóa không chỉ là dự án cá nhân – nó có thể trở
                thành hoạt động chung. Cả gia đình, bạn bè hoặc người yêu có thể
                cùng nhau làm; từ trẻ nhỏ đến người lớn tuổi đều có thể tham
                gia. Điều này tạo nên những khoảnh khắc gắn kết, cùng hoàn thành
                tác phẩm kỷ niệm chung.
              </p>
              <p>
                Khi bức tranh hoàn thiện, việc đóng khung, treo ở phòng khách,
                phòng làm việc hay tặng người thân càng thêm giá trị vì nó mang
                dấu ấn tay của chính bạn và những người cùng tham gia.
              </p>

              <figure className="mt-4 mb-8 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/Workshop-ve-tranh-thu-gian-tai-Hai-Phong.jpg"
                  alt="Workshop vẽ tranh thư giãn Họa Sắc"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Workshop vẽ tranh thư giãn – nơi nghệ thuật kết nối mọi người.
                </figcaption>
              </figure>

              {/* 2.4 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900 mt-4">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-[11px] font-bold text-slate-900">
                  2.4
                </span>
                <span>Rèn tính kiên nhẫn &amp; tư duy chi tiết</span>
              </h3>
              <p>
                Vẽ theo số không phải việc “nhanh cho xong” – nó đòi hỏi kiên
                trì, tập trung vào chi tiết. Những ô nhỏ, những khu vực màu khó
                sẽ giúp người vẽ rèn luyện tính tỉ mỉ, khả năng lên kế hoạch
                (nên tô phần nào trước, tô màu nào trước…) và tư duy quan sát.
              </p>
              <p>
                Đó là bài học về kiên nhẫn, rất thích hợp cho người hiện đại
                đang sống nhanh nhưng cần tìm cách dừng lại, tập trung và hoàn
                thiện.
              </p>

              {/* 2.5 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900 mt-4">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-[11px] font-bold text-slate-900">
                  2.5
                </span>
                <span>Trải nghiệm nghệ thuật kinh tế &amp; linh hoạt</span>
              </h3>
              <p>
                So với việc đặt một bức tranh sơn dầu cao cấp, tranh số hóa có
                chi phí hợp lý hơn nhiều, đồng thời bạn tự làm chủ quá trình
                sáng tạo.
              </p>
              <p>
                Hơn nữa, Họa Sắc cung cấp nhiều kích cỡ, mẫu mã đa dạng: từ cảnh
                thiên nhiên, chân dung, hoa lá đến trừu tượng – bạn dễ chọn chủ
                đề phù hợp với không gian sống hoặc tâm trạng của mình.
              </p>

              {/* ================= SECTION 3 ================= */}
              <h2
                className="
    mt-10 mb-4 text-2xl md:text-3xl font-extrabold text-slate-900
    flex items-center gap-3
  "
              >
                <span className="h-8 w-1 rounded-full bg-yellow-400 md:h-9" />
                <span>
                  3. Cách thức vẽ tranh số hóa với Họa Sắc – dễ dàng nhưng sâu
                  sắc
                </span>
              </h2>

              <figure className="mt-2 mb-6 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/huong-dan-to-mau-tranh-so-hoa.webp"
                  alt="Hướng dẫn tô màu tranh số hóa"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Các bước tô màu đơn giản để ai cũng có thể bắt đầu.
                </figcaption>
              </figure>

              {/* Bước 1 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-slate-900">
                  1
                </span>
                <span>Bước 1: Chuẩn bị bộ dụng cụ</span>
              </h3>
              <p>
                Khi bạn chọn một mẫu tranh từ Họa Sắc, chúng tôi sẽ cung cấp
                trọn bộ: canvas đã căng khung, bảng màu đã đánh số, cọ vẽ và
                hướng dẫn chi tiết.
              </p>

              {/* Bước 2 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900 mt-4">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-slate-900">
                  2
                </span>
                <span>Bước 2: Lựa ô số – chọn màu</span>
              </h3>
              <p>
                Bạn nhìn vào số in sẵn trên khung tranh và bảng màu, sau đó chọn
                đúng lọ màu phù hợp. Sự đồng nhất màu là chìa khóa để bức tranh
                trở nên sống động, hài hòa.
              </p>

              {/* Bước 3 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900 mt-4">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-slate-900">
                  3
                </span>
                <span>Bước 3: Tô mảng – từ lớn đến nhỏ</span>
              </h3>
              <p>
                Bạn có thể bắt đầu từ mảng lớn (nền) trước, sau đó đến các chi
                tiết nhỏ. Cách này giúp giảm độ mệt mỏi, dễ kiểm soát lượng sơn
                và phân bổ thời gian hiệu quả.
              </p>

              {/* Bước 4 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900 mt-4">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-slate-900">
                  4
                </span>
                <span>Bước 4: Nghỉ giải lao – tận hưởng hành trình</span>
              </h3>
              <p>
                Khi tô tranh, hãy dừng lại nghỉ nhẹ, nhắm mắt thư giãn rồi tiếp
                tục. Vẽ tranh số hóa không phải cuộc đua mà là hành trình thăng
                hoa cảm xúc.
              </p>

              {/* Bước 5 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900 mt-4">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-slate-900">
                  5
                </span>
                <span>Bước 5: Hoàn thiện &amp; bảo quản</span>
              </h3>
              <p>
                Khi bức tranh đã hoàn tất, bạn có thể phủ một lớp keo bóng bảo
                vệ để giữ màu tươi sáng lâu hơn. Đây cũng là lúc để đóng khung
                và biến nó thành tác phẩm nghệ thuật thực sự, sẵn sàng để treo
                hoặc tặng người thân.
              </p>

              {/* Bước 6 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900 mt-4">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-slate-900">
                  6
                </span>
                <span>Bước 6: Chia sẻ khoảnh khắc</span>
              </h3>
              <p>
                Hãy chụp lại quá trình và sản phẩm cuối cùng, chia sẻ lên
                Instagram/Facebook hay trong cộng đồng Họa Sắc. Không chỉ là
                niềm tự hào cá nhân, mà còn là nguồn cảm hứng cho người khác.
              </p>

              {/* ================= SECTION 4 ================= */}
              <h2
                className="
                  mt-10 mb-4 text-2xl md:text-3xl font-extrabold text-slate-900
                  flex items-center gap-3
                "
              >
                <span className="h-8 w-1 rounded-full bg-yellow-400 md:h-9" />
                <span>4. Lời mời đến bạn</span>
              </h2>

              <p>
                Nếu bạn đang tìm kiếm một hoạt động để thư giãn, để kết nối, để
                sáng tạo và để thể hiện bản thân – Họa Sắc chính là điểm dừng lý
                tưởng. Không cần là họa sĩ chuyên nghiệp, cũng không cần có kỹ
                năng vẽ – chỉ cần trái tim muốn tô, muốn tạo và muốn chia sẻ.
              </p>
              <p>
                Hãy để Họa Sắc đồng hành cùng bạn. Cầm cọ, chọn màu và xây dựng
                bức tranh của riêng bạn – một tác phẩm chứa đựng cảm xúc, ký ức
                và vẻ đẹp cá nhân. Khám phá ngay trang web của Họa Sắc, chọn mẫu
                đầu tiên và bắt đầu hành trình nghệ thuật của bạn hôm nay.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoasacNewsBlock;
