// src/pages/news/PaintByNumbersGuide.jsx

const PaintByNumbersGuide = () => {
  return (
    <section className="w-full bg-slate-50 py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        {/* Meta + tag */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-yellow-800">
              Hướng dẫn
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
              Hướng Dẫn Cách Tô Tranh Số Hóa (Paint-by-Numbers)
            </h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600">
              Từ những ô số nhỏ trên canvas đến một bức tranh hoàn chỉnh – hành
              trình thư giãn, sáng tạo và chữa lành cùng tranh số hóa Họa Sắc.
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
              {/* ============ 1. GIỚI THIỆU ============ */}
              <h2
                className="
                  mt-2 mb-4 text-2xl md:text-3xl font-extrabold text-slate-900
                  flex items-center gap-3
                "
              >
                <span className="h-8 w-1 rounded-full bg-yellow-400 md:h-9" />
                <span>1. Giới thiệu ngắn về tô tranh số hóa</span>
              </h2>

              <p>
                Tranh số hóa – hay còn gọi là <em>paint-by-numbers</em> – là
                hình thức vẽ theo số, trong đó các ô trên canvas được đánh số và
                bạn dùng màu tương ứng để tô. Đây là một ý tưởng thú vị để vừa
                thư giãn, vừa tạo ra một tác phẩm nghệ thuật mang dấu ấn cá
                nhân, mà không cần phải là họa sĩ chuyên nghiệp.
              </p>
              <p>
                Với <strong>Họa Sắc</strong>, mỗi bộ tranh số hóa đi kèm
                canvas, bộ màu acrylic, màu dạ quang, cọ và hướng dẫn chi tiết —
                giúp bạn bắt đầu dễ dàng và tận hưởng trọn vẹn hành trình sáng
                tạo.
              </p>

              <figure className="mt-4 mb-8 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/cach-to-mau-tranh-so-hoa.jpg"
                  alt="Cách tô màu tranh số hóa"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Tranh số hóa – mỗi ô số là một mảnh ghép của cảm hứng.
                </figcaption>
              </figure>

              {/* ============ 2. CHUẨN BỊ ============ */}
              <h2
                className="
                  mt-10 mb-4 text-2xl md:text-3xl font-extrabold text-slate-900
                  flex items-center gap-3
                "
              >
                <span className="h-8 w-1 rounded-full bg-yellow-400 md:h-9" />
                <span>2. Chuẩn bị trước khi bắt đầu</span>
              </h2>

              {/* 2.1 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-[11px] font-bold text-slate-900">
                  2.1
                </span>
                <span>Mở hộp và kiểm tra dụng cụ</span>
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Mở bộ tranh ra nhẹ nhàng, kiểm tra canvas, hộp màu, cọ và
                  hướng dẫn.
                </li>
                <li>
                  Đặt canvas trên một bề mặt phẳng, thoải mái – có thể là bàn,
                  hoặc giá vẽ tranh.
                </li>
                <li>
                  Chuẩn bị một cốc nước để rửa cọ, cùng khăn giấy/giấy ăn để lau
                  khô cọ sau mỗi lần đổi màu.
                </li>
              </ul>

              {/* 2.2 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900 mt-4">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-[11px] font-bold text-slate-900">
                  2.2
                </span>
                <span>Làm mềm sơn (nếu cần)</span>
              </h3>
              <p>
                Một số màu acrylic khi mới mở nắp có thể hơi dày – bạn có thể
                thêm vài giọt nước sạch hoặc dung môi chuyên dụng vào lọ màu để
                điều chỉnh độ loãng, giúp việc tô mượt mà hơn. Đây cũng là mẹo
                thường dùng khi vẽ paint-by-numbers.
              </p>
              <p>
                Tuy nhiên, không nên pha quá loãng — tránh làm mất độ phủ màu.
              </p>

              {/* 2.3 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900 mt-4">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-[11px] font-bold text-slate-900">
                  2.3
                </span>
                <span>Lựa chọn chiến lược tô màu</span>
              </h3>

              <figure className="mt-3 mb-5 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/_106308919_paint_by_numbers2_getty.jpg"
                  alt="Tô tranh theo vùng màu"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Bạn có thể tô theo số hoặc theo từng vùng màu lớn trên tranh.
                </figcaption>
              </figure>

              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Tô theo thứ tự số:</strong> Bắt đầu từ số 1, sau đó
                  là số 2, … → cách này giúp bạn hệ thống phần việc, dễ kiểm
                  soát màu.
                </li>
                <li>
                  <strong>Tô theo vùng:</strong> Ví dụ: nếu tranh là phong
                  cảnh, bạn có thể tô phần bầu trời trước, rồi cây cỏ, cuối
                  cùng chi tiết nhỏ → giúp bức tranh hiện lên tự nhiên hơn, tạo
                  cảm giác “món quà từng phần” khi hoàn thành mỗi vùng.
                </li>
              </ul>

              {/* ============ 3. KỸ THUẬT TÔ MÀU ============ */}
              <h2
                className="
                  mt-10 mb-4 text-2xl md:text-3xl font-extrabold text-slate-900
                  flex items-center gap-3
                "
              >
                <span className="h-8 w-1 rounded-full bg-yellow-400 md:h-9" />
                <span>3. Kỹ thuật tô màu</span>
              </h2>

              {/* 3.1 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-[11px] font-bold text-slate-900">
                  3.1
                </span>
                <span>Cách cầm cọ và lượng sơn</span>
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Dùng cọ nhỏ hơn cho ô nhỏ, chi tiết; cọ lớn hơn cho các mảng
                  lớn.
                </li>
                <li>
                  Nhúng cọ vừa đủ vào lọ màu, tránh quá đầy → dễ chảy, lem sang
                  ô kế bên.
                </li>
                <li>
                  Sau khi nhúng, xoay nhẹ cọ quanh miệng lọ để loại bỏ sơn thừa.
                </li>
              </ul>

              <figure className="mt-3 mb-6 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/2aca64052dc1f9b3fbf593cb162c9303.jpg"
                  alt="Chi tiết cách cầm cọ và tô màu"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Điều chỉnh lực tay và lượng sơn sẽ giúp nét tô mịn, gọn hơn.
                </figcaption>
              </figure>

              {/* 3.2 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-[11px] font-bold text-slate-900">
                  3.2
                </span>
                <span>Kỹ thuật tô tinh xảo</span>
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Chồng lớp (Layering):</strong> Nếu màu gốc hơi nhạt,
                  bạn có thể tô lại lớp thứ hai sau khi lớp đầu khô → giúp màu
                  lên đậm, rõ nét hơn.
                </li>
                <li>
                  <strong>Tô theo chiều:</strong> Tùy vào hình dạng ô (dài,
                  vuông, cong…) bạn chỉnh hướng cọ ngang, dọc hoặc chéo sao cho
                  thuận tay và đẹp mắt.
                </li>
                <li>
                  <strong>Theo gam màu:</strong> Khi chuyển từ màu sáng sang tối
                  (hoặc ngược lại), rửa cọ sạch để tránh pha màu ngoài ý muốn.
                </li>
              </ul>

              {/* 3.3 */}
              <h3 className="flex items-center gap-2 text-base md:text-lg font-semibold text-slate-900 mt-4">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-[11px] font-bold text-slate-900">
                  3.3
                </span>
                <span>Hướng dẫn tô màu tranh (4 bước cơ bản)</span>
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Bước 1: Tìm màu cần tô theo số tương ứng trên canvas.</li>
                <li>
                  Bước 2: Tô một lớp dày, vừa phải, phủ kín số và đường viền.
                </li>
                <li>
                  Bước 3: Tô xong một màu thì rửa sạch cọ, lau khô rồi mới chuyển
                  sang màu mới.
                </li>
                <li>Bước 4: Lần lượt tô các màu tiếp theo cho đến khi hoàn tất.</li>
              </ul>
              <p>
                <strong>Lưu ý:</strong> Nếu lỡ tô sai, hãy chờ màu khô rồi tô
                đè màu đúng lên trên. Màu acrylic khô khá nhanh, vì vậy nhớ đóng
                nắp lọ sau khi dùng.
              </p>

              <figure className="mt-3 mb-6 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/huong-dan-to-mau-tranh.png"
                  alt="Các bước hướng dẫn tô tranh số hóa"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Quy trình 4 bước đơn giản để hoàn thành bức tranh số hóa.
                </figcaption>
              </figure>

              {/* ============ 4. BẢO VỆ TRANH ============ */}
              <h2
                className="
                  mt-10 mb-4 text-2xl md:text-3xl font-extrabold text-slate-900
                  flex items-center gap-3
                "
              >
                <span className="h-8 w-1 rounded-full bg-yellow-400 md:h-9" />
                <span>4. Bảo vệ tranh khi hoàn thành</span>
              </h2>

              <p>
                Sau khi tranh khô hoàn toàn (thường từ vài giờ đến một ngày tùy
                độ dày sơn), bạn có thể dùng sơn bóng phủ lên tranh để bảo vệ
                màu, chống bụi và tăng độ bền.
              </p>
              <p>
                Đóng khung hoặc treo tranh ở nơi khô ráo, tránh ánh nắng trực
                tiếp lâu ngày vì có thể khiến màu nhanh phai.
              </p>
              <p>
                Nếu bụi bẩn bám trên tranh, hãy lau nhẹ bằng khăn mềm hơi ẩm rồi
                để khô tự nhiên; không dùng nước mạnh hoặc hóa chất tẩy rửa.
              </p>

              {/* ============ 5. MẸO NHỎ ============ */}
              <h2
                className="
                  mt-10 mb-4 text-2xl md:text-3xl font-extrabold text-slate-900
                  flex items-center gap-3
                "
              >
                <span className="h-8 w-1 rounded-full bg-yellow-400 md:h-9" />
                <span>5. Mẹo nhỏ nhưng hữu ích từ Họa Sắc</span>
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Chia phần:</strong> Nếu tranh lớn, hãy chia thành
                  nhiều buổi tô (ví dụ: mỗi ngày một phần) – vừa không áp lực,
                  vừa dễ thấy tiến độ.
                </li>
                <li>
                  <strong>Tạo không gian sáng tạo:</strong> Bật một playlist
                  nhẹ nhàng, pha tách trà hoặc cà phê – biến việc tô tranh thành
                  một “khoảnh khắc thiền” nho nhỏ cho bản thân.
                </li>
                <li>
                  <strong>Chụp ảnh hành trình:</strong> Ghi lại các bước tô
                  màu, ảnh “trước – sau” không chỉ là kỷ niệm mà còn là nội dung
                  đẹp để chia sẻ trên mạng xã hội.
                </li>
                <li>
                  <strong>Chia sẻ &amp; học hỏi:</strong> Tham gia cộng đồng
                  Họa Sắc hoặc các nhóm paint-by-numbers để học thêm mẹo vẽ, đồng
                  thời truyền cảm hứng cho người mới bắt đầu.
                </li>
              </ul>

              <figure className="mt-4 mb-6 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/1-1628261830949477002501.jpg"
                  alt="Không gian tô tranh thư giãn"
                  className="w-full h-auto object-cover"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Một góc nhỏ bình yên – nơi tranh số hóa trở thành liệu pháp
                  thư giãn cho tâm hồn.
                </figcaption>
              </figure>

              <p>
                <strong>Họa Sắc</strong> luôn ở đây để đồng hành cùng bạn – từ
                những hướng dẫn chi tiết, mẹo vẽ, cho đến các gợi ý bảo quản
                tranh. Chúc bạn có những khoảnh khắc tô tranh thật thư thái và
                ngập tràn cảm hứng!
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintByNumbersGuide;
