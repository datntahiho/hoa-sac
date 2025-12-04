// src/components/stories/KinhThanhHueStory.jsx

export default function KinhThanhHueStory() {
  return (
    <div className="space-y-4">
      <h3 className="text-center font-semibold text-base">
        Kinh Thành Huế – Dấu ấn vàng son giữa lòng cố đô
      </h3>

      <p>
        Giữa miền Trung dịu dàng, nơi dòng <strong>sông Hương</strong> lững lờ
        trôi qua bao thế kỷ, có một vùng đất mà mỗi viên gạch, mỗi mái ngói đều
        mang theo câu chuyện của triều đại cuối cùng của Việt Nam. Đó là{" "}
        <strong>Kinh Thành Huế</strong> – trái tim của Cố đô Huế, nơi từng chứng
        kiến gần <strong>150 năm</strong> thịnh suy của nhà Nguyễn.
      </p>

      <p>
        Câu chuyện bắt đầu từ năm <strong>1805</strong>, khi vua{" "}
        <strong>Gia Long</strong> cho khởi công xây dựng một tòa thành mới, bền
        vững như ý chí thống nhất non sông. Dựa trên tinh hoa{" "}
        <strong>phong thủy phương Đông</strong> và nghệ thuật{" "}
        <strong>quân sự Vauban</strong> từ châu Âu, Kinh Thành Huế hình thành
        với dáng vẻ uy nghi: tường thành kiên cố, hào sâu bao quanh, và ba lớp
        thành nối tiếp nhau như những vòng bảo vệ của một viên ngọc quý.
      </p>

      {/* Ảnh 1 */}
      <figure className="space-y-1">
        <img
          src="/images/kinhthanhhue1.png" // đổi lại đúng tên file của bạn
          alt="Toàn cảnh Kinh Thành Huế nhìn từ bên ngoài"
          className="mx-auto max-h-72 object-cover"
        />
        <figcaption className="text-center text-xs text-gray-500">
          Ảnh: Một góc Kinh Thành Huế (Nguồn: Internet)
        </figcaption>
      </figure>

      <p>
        Bước qua <strong>Ngọ Môn</strong>, cánh cổng lớn nhất và đẹp nhất của
        Hoàng thành, ta như nghe tiếng trống thiết triều, thấy bóng dáng vua
        chúa xưa bước vào <strong>điện Thái Hòa</strong> – nơi ngự trị của những
        nghi lễ trọng đại. Sau lớp Hoàng thành là{" "}
        <strong>Tử Cấm Thành</strong>, chốn riêng tư của hoàng gia, nơi từng lưu
        giữ bao khoảnh khắc thầm lặng của đời sống cung đình.
      </p>

      {/* Ảnh 2 */}
      <figure className="space-y-1">
        <img
          src="/images/kinhthanhhue2.jpg" // đổi lại đúng tên file của bạn
          alt="Ngọ Môn và điện Thái Hòa trong Kinh Thành Huế"
          className="mx-auto max-h-72 object-cover"
        />
        <figcaption className="text-center text-xs text-gray-500">
          Ảnh: Ngọ Môn – Điện Thái Hòa (Nguồn: Internet)
        </figcaption>
      </figure>

      <p>
        Kinh Thành Huế không chỉ là một tòa thành. Đó là một{" "}
        <strong>thế giới thu nhỏ</strong> của lịch sử, kiến trúc và văn hóa Việt
        Nam. Trải qua chiến tranh và biến động thời gian, nhiều công trình đã
        phai màu, nhưng di sản vẫn sống mãi – trong từng lớp rêu phong, trong mỗi
        tiếng chuông chùa vang xa, và trong nỗ lực của bao thế hệ gìn giữ.
      </p>

      <p>
        Ngày nay, khi bước chân vào <strong>Đại Nội</strong>, ta không chỉ ngắm
        cảnh. Ta đang <strong>lắng nghe câu chuyện của quá khứ</strong>, chạm
        vào hơi thở của một triều đại đã qua, và cảm nhận vẻ đẹp trầm mặc mà
        hiếm nơi nào có được.
      </p>

      {/* Ảnh 3 */}
      <figure className="space-y-1">
        <img
          src="/images/kinhthanhhue3.jpg" // đổi lại đúng tên file của bạn
          alt="Bên trong Đại Nội Kinh Thành Huế"
          className="mx-auto max-h-72 object-cover"
        />
        <figcaption className="text-center text-xs text-gray-500">
          Ảnh: Không gian bên trong Đại Nội Huế (Nguồn: Internet)
        </figcaption>
      </figure>

      <p>
        <strong>Kinh Thành Huế</strong> – không chỉ là di tích. Đó là một{" "}
        <strong>ký ức sống</strong>, là <strong>mạch nguồn cảm hứng</strong> cho
        nghệ thuật, và là lời nhắc dịu dàng rằng lịch sử luôn hiện diện trong
        từng đường nét của đất Việt.
      </p>
    </div>
  );
}
