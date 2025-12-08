// ví dụ: src/components/pr
// oducts/HoaLuStory.jsx

const HoaLuStory = () => {
  return (
    <div>
      {/* <h2 className="text-2xl font-bold tracking-wide text-slate-900 mb-6 border-b pb-3">
        Thông tin sản phẩm
      </h2> */}

      {/* Thông tin chung */}
      <div className="space-y-1 text-sm md:text-base text-slate-700 mb-6">
        <p>
          <span className="font-semibold text-slate-900">Thương hiệu:</span> Họa
          Sắc.
        </p>
        <p>
          <span className="font-semibold text-slate-900">Xuất xứ:</span> Việt
          Nam.
        </p>
        <p>
          <span className="font-semibold text-slate-900">Nhà sản xuất:</span>{" "}
          GAM.
        </p>
        <p>
          <span className="font-semibold text-slate-900">Địa chỉ:</span> Số 24,
          Thôn 3, Xã Thạch Thất, Thành Phố Hà Nội.
        </p>
        <p>
          <span className="font-semibold text-slate-900">Liên hệ:</span>{" "}
          0587102003.
        </p>
      </div>

      {/* Bộ sản phẩm bao gồm */}
      <div className="mb-6">
        <h3 className="inline-block px-3 py-1 rounded-full bg-slate-900 text-white text-sm font-semibold uppercase tracking-wide mb-3">
          Bộ sản phẩm bao gồm
        </h3>

        <ul className="list-none space-y-2 text-sm md:text-base text-slate-700">
          <li className="flex gap-2">
            <span className="mt-1">•</span>
            <span>
              <span className="font-semibold">Giấy hướng dẫn tô tranh</span>.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1">•</span>
            <span>
              <span className="font-semibold">Khung tranh (2.5cm) canvas</span>{" "}
              đã được căng sẵn.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1">•</span>
            <span>
              <span className="font-semibold">Bộ màu acrylic</span> đã được đánh
              số trên nắp.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1">•</span>
            <span>
              <span className="font-semibold">Bộ màu dạ quang</span> có thể tô
              vào bất cứ vị trí bạn muốn.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1">•</span>
            <span>
              <span className="font-semibold">Vải canvas</span> được phác thảo
              &amp; đánh số sẵn.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1">•</span>
            <span>
              <span className="font-semibold">Bộ cọ nhiều kích cỡ</span> với đầu
              vẽ khác nhau giúp dễ dàng tô các nét thanh, đậm, các mảng to, nhỏ
              trên tranh.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1">•</span>
            <span>
              <span className="font-semibold">Bản nháp bằng giấy</span> để tô
              thử hoặc đối chiếu với bản canvas.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1">•</span>
            <span>
              <span className="font-semibold">
                Lọ sơn bóng &amp; bộ đinh ốc vít
              </span>{" "}
              dùng treo tranh khi hoàn tất.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1">•</span>
            <span>
              <span className="font-semibold">Thẻ NFC</span> giới thiệu câu
              chuyện văn hóa - lịch sử đằng sau bức tranh.
            </span>
          </li>
        </ul>
      </div>

      {/* Cảnh báo & bảo quản */}
      <div className="space-y-3 mb-6">
        <div className="flex gap-3 items-start rounded-xl border border-amber-300 bg-amber-50 px-4 py-3">
          <span className="text-lg">⚠️</span>
          <p className="text-sm md:text-base text-amber-900">
            <span className="font-semibold">
              Không phù hợp cho trẻ em dưới 6 tuổi.
            </span>{" "}
            Sử dụng dưới sự giám sát của người lớn.
          </p>
        </div>
        <p className="text-sm md:text-base text-slate-700 italic">
          Tránh tiếp xúc với ánh nắng trực tiếp và nhiệt độ cao. Bảo quản màu ở
          nơi khô ráo, thoáng mát.
        </p>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t text-center text-sm md:text-base text-slate-800">
        <p className="mb-1">Cảm ơn bạn đã lựa chọn chúng tôi</p>
        <p className="font-semibold tracking-wide">SẢN XUẤT TẠI VIỆT NAM</p>
      </div>
    </div>
  );
};

export default HoaLuStory;
