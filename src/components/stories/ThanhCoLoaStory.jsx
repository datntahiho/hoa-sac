// src/components/stories/ThanhCoLoaStory.jsx

export default function ThanhCoLoaStory() {
  return (
    <div className="space-y-4">
      <h3 className="text-center font-semibold text-base">
        Huyền sử Cổ Loa: Khi Đất Trời Khắc Lên Một Kinh Thành
      </h3>

      <p>
        Giữa <strong>đồng bằng sông Hồng</strong> trù phú, nơi những con sông
        uốn lượn như ôm ấp đất mẹ, có một vòng xoáy đất kỳ lạ xuất hiện từ hơn{" "}
        <strong>hai ngàn năm trước</strong>: đó là{" "}
        <strong>Thành Cổ Loa</strong> – kinh đô của nước Âu Lạc thời{" "}
        <strong>An Dương Vương</strong>. Đứng giữa Cổ Loa hôm nay, ta như nghe
        được tiếng vọng của một thời dựng nước đầy sáng tạo và kiêu hãnh.
      </p>

      {/* Ảnh 1 */}
      <figure className="space-y-1">
        <img
          src="/images/thanhcolo1.jpg" // đổi lại đúng tên file, ví dụ: "/images/Thành Cổ Loa 1.jpg"
          alt="Một góc Thành Cổ Loa nhìn từ trên cao"
          className="mx-auto max-h-72 object-cover"
        />
        <figcaption className="text-center text-xs text-gray-500">
          Ảnh: Thành Cổ Loa từ trên cao (Nguồn: Internet)
        </figcaption>
      </figure>

      <p>
        Tương truyền rằng thành được đắp theo hình{" "}
        <strong>xoắn ốc 9 vòng</strong>, nhưng khảo cổ học cho biết đã từng có{" "}
        <strong>ba vòng thành lớn</strong> tồn tại – vòng ngoài gần{" "}
        <strong>8km</strong>, vòng giữa khoảng <strong>6,5km</strong> và vòng
        trong hơn <strong>1,6km</strong>. Tất cả đều nối liền với{" "}
        <strong>hào nước</strong>, tạo thành một “pháo đài” tự nhiên – nơi địa
        thế, con người và kỹ thuật hòa vào nhau, trở thành một{" "}
        <strong>tuyệt tác phòng thủ</strong>.
      </p>

      {/* Ảnh 2 */}
      <figure className="space-y-1">
        <img
          src="/images/thanhcolo-main.jpg" // đổi lại đúng tên file, ví dụ: "/images/Thành Cổ Loa.jpeg"
          alt="Đường thành đất và hào nước ở Cổ Loa"
          className="mx-auto max-h-72 object-cover"
        />
        <figcaption className="text-center text-xs text-gray-500">
          Ảnh: Tường thành đất và hào nước Cổ Loa (Nguồn: Internet)
        </figcaption>
      </figure>

      <p>
        <strong>Cổ Loa</strong> không chỉ là nơi vua An Dương Vương trị vì, mà
        còn là <strong>trung tâm chính trị – quân sự</strong> sôi động của cả
        một thời đại. Nơi đây từng vang tiếng{" "}
        <strong>rèn giáp, đúc nỏ</strong>, và những{" "}
        <strong>mũi tên đồng ba cạnh</strong> – dấu mốc của một nền luyện kim
        rực rỡ. Hàng vạn hiện vật được tìm thấy chứng minh rằng cư dân Âu Lạc đã
        sớm biết tổ chức xã hội, phát triển nông nghiệp, thủ công và xây dựng
        thành lũy quy mô lớn.
      </p>

      {/* Ảnh 3 */}
      <figure className="space-y-1">
        <img
          src="/images/thanhcolo2.jpg" // đổi lại đúng tên file, ví dụ: "/images/Thành Cổ Loa 2.jpg"
          alt="Không gian làng quê bao quanh Thành Cổ Loa ngày nay"
          className="mx-auto max-h-72 object-cover"
        />
        <figcaption className="text-center text-xs text-gray-500">
          Ảnh: Thành Cổ Loa giữa làng quê Đông Anh (Nguồn: Internet)
        </figcaption>
      </figure>

      <p>
        Ngày nay, <strong>Thành Cổ Loa</strong> trầm mặc giữa làng quê Đông Anh,
        nhưng từng đường cong đất, từng đoạn hào nước vẫn kể lại câu chuyện của
        một <strong>nền văn minh rực rỡ thời dựng nước</strong>. Đó không chỉ là
        di tích, mà còn là <strong>ký ức sống động</strong>, là{" "}
        <strong>niềm tự hào</strong> của người Việt về trí tuệ và bản lĩnh cha
        ông.
      </p>
    </div>
  );
}
