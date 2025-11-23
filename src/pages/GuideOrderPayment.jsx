const GuideOrderPayment = () => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10 overflow-y-auto m-16">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        HƯỚNG DẪN ĐẶT HÀNG & THANH TOÁN
      </h1>

      {/* Bước 1 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Bước 1: Chọn sản phẩm</h2>
        <p>
          Truy cập website và lựa chọn sản phẩm bạn muốn mua. Bạn có thể xem nhiều
          mẫu tranh khác nhau và chọn kích thước, mức giá phù hợp.
        </p>
      </section>

      {/* Bước 2 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Bước 2: Thao tác với sản phẩm
        </h2>
        <p className="mb-3">
          Khi bấm vào sản phẩm, hệ thống sẽ hiển thị một pop-up với các lựa chọn:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Tiếp tục mua hàng:</strong> quay lại trang để chọn thêm sản phẩm.
          </li>
          <li>
            <strong>Xem giỏ hàng:</strong> kiểm tra, cập nhật số lượng hoặc thay đổi
            sản phẩm trước khi đặt hàng.
          </li>
          <li>
            <strong>Đặt hàng và thanh toán:</strong> tiến hành đặt hàng ngay.
          </li>
        </ul>
      </section>

      {/* Bước 3 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Bước 3: Nhập thông tin đặt hàng
        </h2>
        <p className="mb-3">
          Bạn vui lòng nhập đầy đủ và chính xác thông tin nhận hàng để việc giao
          hàng diễn ra nhanh chóng:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Họ tên người nhận hàng;</li>
          <li>Số điện thoại liên hệ;</li>
          <li>
            Địa chỉ chi tiết (ghi đầy đủ số nhà, phường/xã, quận/huyện, tỉnh/thành
            phố);
          </li>
          <li>Phương thức thanh toán;</li>
          <li>Hình thức vận chuyển phù hợp.</li>
        </ul>
      </section>

      {/* Bước 4 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Bước 4: Kiểm tra & gửi đơn hàng
        </h2>
        <p className="mb-3">
          Sau khi hoàn tất thông tin, bạn vui lòng kiểm tra lại lần cuối. Bạn có
          thể thêm ghi chú cho đơn hàng nếu có yêu cầu đặc biệt.
        </p>
        <p>
          Nhấn <strong>Gửi đơn hàng</strong>. Đội ngũ Hoạ Sắc sẽ liên hệ xác nhận đơn
          qua điện thoại trước khi tiến hành đóng gói và giao sản phẩm đến bạn.
        </p>
      </section>

      {/* Lời cảm ơn */}
      <section className="text-center mt-10">
        <p className="font-medium text-gray-700">
          Trân trọng cảm ơn quý khách đã tin tưởng và ủng hộ Hoạ Sắc!
        </p>
      </section>
    </div>
  );
};

export default GuideOrderPayment;
