// src/pages/news/DanRobbinsStory.jsx

const DanRobbinsStory = () => {
  return (
    <section className="w-full bg-slate-50 py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        {/* Meta + tag */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs md:text-sm text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-yellow-800">
              Câu chuyện tranh số hóa
            </span>
            <span className="hidden h-3 w-px bg-slate-300 md:inline-block" />
            <span>Cập nhật: 2025</span>
          </div>
          <span className="italic text-slate-400">
            Blog Họa Sắc · Những người đứng sau paint-by-numbers
          </span>
        </div>

        {/* Card chính */}
        <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg">
          {/* Header */}
          <div className="border-b border-slate-100 bg-gradient-to-r from-yellow-50/70 to-white px-5 py-6 md:px-8 md:py-7">
            <h1 className="text-2xl md:text-3xl font-bold leading-snug text-slate-900">
              Dan Robbins: Người sáng tạo ra “Tranh số hóa”
            </h1>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-600">
              Từ một ý tưởng bán thêm sơn, Dan Robbins đã tạo nên trào lưu
              paint-by-numbers – biến hàng triệu người bình thường thành “họa
              sĩ tại gia”.
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
              {/* ========== 1. Lịch sử ra đời ========== */}
              <h2
                className="
                  mt-2 mb-4 text-2xl md:text-3xl font-extrabold text-slate-900
                  flex items-center gap-3
                "
              >
                <span className="h-8 w-1 rounded-full bg-yellow-400 md:h-9" />
                <span>1. Lịch sử ra đời đặc biệt của tranh số hóa</span>
              </h2>

              <p>
                <strong>Dan Robbins (1925–2019)</strong> sinh ra tại Detroit
                (Michigan, Hoa Kỳ) vào ngày 26 tháng 5 năm 1925. Ông là người đã
                phát minh ra trào lưu tranh số hóa mang tính cách mạng vào những
                năm 1950, lấy cảm hứng từ Leonardo da Vinci – người từng giao
                cho học trò những bức vẽ được đánh số để rèn luyện và giúp họ
                tiến bộ.
              </p>

              <figure className="mt-4 mb-6 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/_106313465_dan.jpg"
                  alt="Dan Robbins – người khai sinh tranh số hóa"
                  className="mx-auto h-auto max-h-72 md:max-h-96 w-full object-contain"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Dan Robbins – người đứng sau trào lưu paint-by-numbers nổi
                  tiếng trên toàn nước Mỹ.
                </figcaption>
              </figure>

              <p>
                Câu hỏi đặt ra khi đó rất đơn giản:{" "}
                <em>
                  “Làm thế nào để vẽ nên một bức tranh khi bạn là người mới
                  bắt đầu?”
                </em>{" "}
                Và lời giải của ông là: một bộ màu vẽ với các lọ sơn được đánh
                số, một bức tranh vẽ theo số và cọ vẽ. Chỉ vậy thôi, bất kỳ ai
                cũng có thể tạo nên một bức tranh rất ấn tượng.
              </p>

              <p>
                Dan Robbins nảy ra ý tưởng này vào năm 1949 khi đang làm việc
                cho Công ty Sơn Palmer ở ​​Detroit và được giao nhiệm vụ tìm một
                sản phẩm giải trí sáng tạo dành cho người trưởng thành. Người
                sáng lập công ty, <strong>Max Klein</strong>, đã giao cho
                Robbins một nhiệm vụ rất “thực tế”:{" "}
                <em>“Bán được nhiều sơn hơn.”</em> Câu trả lời của ông chính là
                trào lưu vẽ tranh theo số.
              </p>

              <p>
                Chiến tranh thế giới thứ II đã kết thúc, người Mỹ có nhiều thời
                gian hơn cho sở thích và hoạt động giải trí. Trong bối cảnh đó,
                paint-by-numbers đã bùng nổ và nhanh chóng trở thành một trong
                những trò tiêu khiển được yêu thích của cả một thế hệ.
              </p>

              <p>
                Thời điểm ấy chưa có máy tính, nên việc tạo ra và sản xuất các
                bộ tô màu theo số gần như hoàn toàn thủ công. Những bộ tô màu
                đầu tiên tương đối đơn giản, chỉ với một vài màu cơ bản. Sau
                này, chúng trở nên tinh vi hơn với bảng màu phong phú, chi tiết
                nhiều cấp độ – cho đến tận ngày nay.
              </p>

              {/* ========== 2. Bức tô màu theo số đầu tiên ========== */}
              <h2
                className="
                  mt-10 mb-4 text-2xl md:text-3xl font-extrabold text-slate-900
                  flex items-center gap-3
                "
              >
                <span className="h-8 w-1 rounded-full bg-yellow-400 md:h-9" />
                <span>2. Bức tô màu theo số đầu tiên</span>
              </h2>

              <p>
                Bức tranh được đánh số đầu tiên của Robbins có tên{" "}
                <strong>“Abstract No. One”</strong>, thuộc thể loại tranh tĩnh
                vật. Sau đó, ông tiếp tục thiết kế rất nhiều mẫu tranh số phong
                cảnh phong phú, đa dạng và cực kỳ được ưa chuộng.
              </p>

              <figure className="mt-4 mb-6 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/pf-ccec312f-6036-4296-b74b-0e3cb45ad69e--Dan-Robbins-el-inventor-de-la-pintura-por-numeros-2_480x480.webp"
                  alt="Abstract No. One – bức tranh tô màu theo số đầu tiên"
                  className="mx-auto h-auto max-h-72 md:max-h-96 w-full object-contain"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  “Abstract No. One” – một trong những tác phẩm paint-by-numbers
                  đầu tiên của Dan Robbins.
                </figcaption>
              </figure>

              <p>
                Ý tưởng của Robbins rất rõ ràng và đầy nhân văn:{" "}
                <strong>
                  một bộ dụng cụ cho phép bất kỳ ai, kể cả người chưa từng học
                  mỹ thuật, cũng có thể tạo ra một bức tranh chi tiết.
                </strong>
              </p>
              <p>
                Dựa trên kiến thức hội họa của mình, ông xây dựng bố cục tranh
                sao cho dễ tô, bằng cách phân lớp, chia mảng và sắp xếp màu sắc
                logic. Để tạo ra mỗi bộ kit, ông sẽ:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Vẽ một tác phẩm nghệ thuật gốc hoàn chỉnh.</li>
                <li>
                  Đặt một tấm nhựa trong lên trên, phác thảo lại các hình khối,
                  chia vùng.
                </li>
                <li>Đánh số từng mảng và gán màu tương ứng cho mỗi số.</li>
              </ul>
              <p>
                Từ quy trình đó, nghệ thuật{" "}
                <strong>vẽ tranh theo số (paint-by-numbers)</strong> chính thức
                ra đời.
              </p>

              <p>
                Vào những năm 1950, hơn{" "}
                <strong>20 triệu bộ tô màu theo số</strong> được bán ra mỗi năm
                tại Hoa Kỳ, khiến tranh số hóa xuất hiện khắp mọi ngôi nhà trên
                đất nước.
              </p>
              <p>
                Người hâm mộ ca ngợi sở thích mới này trên nhiều tạp chí nổi
                tiếng như <em>American Artist</em>. Những bức tranh sơn dầu
                theo số thậm chí còn xuất hiện ở Nhà Trắng: thư ký bổ nhiệm
                tổng thống của Tổng thống Eisenhower,{" "}
                <strong>Thomas Edwin Stephens</strong>, đã sưu tầm cả một phòng
                trưng bày gồm các tác phẩm do các quan chức trong chính quyền tự
                tay thực hiện.
              </p>
              <p>
                Dan Robbins vẫn tiếp tục làm việc trong lĩnh vực này cho đến
                cuối những năm 1980, và các tác phẩm của ông hiện vẫn được trưng
                bày tại <strong>Bảo tàng Lịch sử Detroit</strong>.
              </p>

              {/* ========== 3. Một số tác phẩm của Dan Robbins ========== */}
              <h2
                className="
                  mt-10 mb-4 text-2xl md:text-3xl font-extrabold text-slate-900
                  flex items-center gap-3
                "
              >
                <span className="h-8 w-1 rounded-full bg-yellow-400 md:h-9" />
                <span>3. Một số tác phẩm của Dan Robbins</span>
              </h2>

              {/* Ảnh 1 */}
              <figure className="mt-4 mb-6 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/06Robbins-obit1-articleLarge-v2.webp"
                  alt="Chân dung tự họa theo phong cách paint-by-numbers của Dan Robbins"
                  className="mx-auto h-auto max-h-72 md:max-h-96 w-full object-contain"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Chân dung tự họa theo phong cách paint-by-numbers của Dan
                  Robbins (2007). Được cung cấp bởi Dan Robbins Estate và 20
                  North Gallery.
                </figcaption>
              </figure>

              {/* Ảnh 2 */}
              <figure className="mt-4 mb-6 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/cha-de-1.webp"
                  alt="Abstract No. 1 – tác phẩm paint-by-numbers đầu tiên"
                  className="mx-auto h-auto max-h-72 md:max-h-96 w-full object-contain"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Abstract No. 1 – tác phẩm đầu tiên được Dan Robbins thiết kế
                  theo phong cách paint-by-numbers. Nguồn: 20 North Gallery.
                </figcaption>
              </figure>

              {/* Ảnh 3 */}
              <figure className="mt-4 mb-6 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/cha-de-2.webp"
                  alt="Dan Robbins cùng bức Old Mill Stream"
                  className="mx-auto h-auto max-h-72 md:max-h-96 w-full object-contain"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Dan Robbins cầm bức tranh tô màu theo số yêu thích của mình –
                  Old Mill Stream (1997). Ảnh: 20 North Gallery.
                </figcaption>
              </figure>

              {/* Ảnh 4 */}
              <figure className="mt-4 mb-6 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/cha-de-3.webp"
                  alt="Clipper Ship – tác phẩm của Dan Robbins"
                  className="mx-auto h-auto max-h-72 md:max-h-96 w-full object-contain"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Tác phẩm Clipper Ship của Dan Robbins, do một họa sĩ vô danh
                  thực hiện (1952). Nguồn: 20 North Gallery.
                </figcaption>
              </figure>

              {/* Ảnh 5 */}
              <figure className="mt-4 mb-2 overflow-hidden rounded-2xl shadow-md">
                <img
                  src="/images/cha-de-4.webp"
                  alt="Love's Tribute – tác phẩm của Dan Robbins"
                  className="mx-auto h-auto max-h-72 md:max-h-96 w-full object-contain"
                />
                <figcaption className="bg-slate-50 px-4 py-2 text-center text-xs text-slate-500 italic">
                  Love&apos;s Tribute – tác phẩm của Dan Robbins, do một họa sĩ
                  vô danh thực hiện (1951). Nguồn: 20 North Gallery.
                </figcaption>
              </figure>

              <p className="mt-4">
                Từ những bức tranh đầu tiên đến cả một trào lưu lan rộng khắp
                nước Mỹ, Dan Robbins không chỉ tạo ra một sản phẩm giải trí mà
                còn mở ra cánh cửa nghệ thuật cho hàng triệu người – những người
                từng nghĩ rằng “mình không biết vẽ”.
              </p>
              <p>
                Và đến hôm nay, khi bạn ngồi trước một bức{" "}
                <strong>tranh số hóa Họa Sắc</strong>, tô từng ô nhỏ theo số,
                thì đâu đó, di sản của Dan Robbins vẫn đang tiếp tục sống trong
                từng lớp màu.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DanRobbinsStory;
