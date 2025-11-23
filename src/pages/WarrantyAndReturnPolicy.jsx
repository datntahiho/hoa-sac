const WarrantyAndReturnPolicy = () => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10 overflow-y-auto m-16">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        BẢO HÀNH & ĐỔI TRẢ
      </h1>

      {/* 1. Chính sách bảo hành */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Chính sách bảo hành</h2>
        <p className="mb-3">
          Sản phẩm được bảo hành đối với các lỗi phát sinh từ phía nhà sản xuất, bao gồm nhưng không giới hạn:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>Thiếu linh kiện, phụ kiện kèm theo sản phẩm;</li>
          <li>Hư hỏng trong quá trình đóng gói, vận chuyển từ phía chúng tôi;</li>
          <li>Lỗi in ấn, lỗi kỹ thuật hoặc lỗi sản xuất khác.</li>
        </ul>
        <p className="mb-2">
          <strong>Thời hạn bảo hành:</strong> từ <strong>7–14 ngày</strong> kể từ khi khách nhận hàng (có thể điều chỉnh theo quy định nội bộ).
        </p>
        <p>
          Quý khách vui lòng giữ lại <strong>hóa đơn</strong>, <strong>mã đơn hàng</strong> và <strong>video mở hộp (nếu có)</strong> để được hỗ trợ kiểm tra và xử lý nhanh nhất.
        </p>
      </section>

      {/* 2. Điều kiện đổi trả */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Điều kiện đổi trả</h2>

        <p className="mb-2 font-semibold">Khách hàng được đổi trả sản phẩm khi:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Sản phẩm bị lỗi, thiếu phụ kiện hoặc không đúng mẫu mã/thiết kế đã đặt;</li>
          <li>Sản phẩm bị hỏng do quá trình vận chuyển (cần video mở hộp để xác minh);</li>
          <li>Sản phẩm còn đủ phụ kiện, tem nhãn, chưa qua sử dụng (trừ trường hợp lỗi sản xuất).</li>
        </ul>

        <p className="mb-2 font-semibold">Không áp dụng đổi trả đối với:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Sản phẩm đã qua sử dụng hoặc bị hư hại do người dùng;</li>
          <li>Sản phẩm yêu cầu đổi trả sau thời hạn quy định;</li>
          <li>Sản phẩm bị hư hỏng do bảo quản, sử dụng sai hướng dẫn;</li>
          <li>
            Các trường hợp khách hàng thay đổi ý kiến cá nhân (không thích, không còn nhu cầu, v.v.)
            nếu không phù hợp với chính sách nội bộ tại thời điểm áp dụng.
          </li>
        </ul>
      </section>

      {/* 3. Quy trình đổi trả */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Quy trình đổi trả</h2>
        <p className="mb-3">
          Để được hỗ trợ đổi trả, quý khách vui lòng thực hiện theo các bước sau:
        </p>
        <ul className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Bước 1:</strong> Liên hệ với chúng tôi qua hotline hoặc fanpage/website trong vòng{" "}
            <strong>24–48 giờ</strong> sau khi nhận hàng.
          </li>
          <li>
            <strong>Bước 2:</strong> Cung cấp <strong>mã đơn hàng</strong> và
            <strong> hình ảnh/video</strong> mô tả rõ tình trạng lỗi hoặc vấn đề của sản phẩm.
          </li>
          <li>
            <strong>Bước 3:</strong> Chúng tôi tiến hành xác nhận tình trạng sản phẩm và hướng dẫn hình thức
            <strong> đổi mới</strong> hoặc <strong>hoàn tiền</strong> (nếu phù hợp với chính sách).
          </li>
          <li>
            <strong>Bước 4:</strong> Gửi lại sản phẩm lỗi (nếu được yêu cầu). Sau khi nhận và kiểm tra, chúng tôi
            sẽ tiến hành đổi trả hoặc hoàn tiền theo đúng chính sách đã thông báo.
          </li>
        </ul>
      </section>

      {/* 4. Chi phí đổi trả */}
      <section>
        <h2 className="text-xl font-semibold mb-4">4. Chi phí đổi trả</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Miễn phí hoàn toàn</strong> chi phí đổi trả nếu lỗi thuộc về nhà sản xuất hoặc do quá trình vận chuyển
            từ phía chúng tôi.
          </li>
          <li>
            Trong trường hợp lỗi không thuộc về phía chúng tôi (ví dụ: khách đặt sai mẫu, đổi ý, bảo quản không đúng,…),
            khách hàng sẽ <strong>chịu chi phí vận chuyển</strong> hai chiều (nếu có) hoặc các chi phí liên quan khác theo
            thoả thuận.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default WarrantyAndReturnPolicy;
