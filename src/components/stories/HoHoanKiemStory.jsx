
export default function HoHoanKiemStory() {
  return (
    <div className="space-y-4">
      <h3 className="text-center font-semibold text-base">
        Hồ Hoàn Kiếm – Truyền Thuyết Giữa Lòng Thủ Đô
      </h3>

      <p>
        Giữa nhịp sống hối hả của Hà Nội, có một mặt hồ nhỏ chỉ rộng khoảng{" "}
        <strong>12 héc-ta</strong>, nhưng lại chứa đựng cả một trời lịch sử và
        huyền thoại. Người ta gọi đó là{" "}
        <strong>Hồ Hoàn Kiếm</strong> – nơi từng chứng kiến một câu chuyện
        thiêng liêng làm nên linh hồn của Thăng Long ngàn năm.
      </p>

      <p>
        Ngày xưa, khi đất nước còn chìm trong khói lửa chiến tranh,{" "}
        <strong>Lê Lợi</strong> được Rùa Thần trao tặng một thanh gươm báu. Nhờ
        sức mạnh của gươm thiêng, ông lãnh đạo nhân dân đánh đuổi giặc Minh,
        giành lại giang sơn. Một buổi sớm sau ngày hòa bình, khi thuyền của nhà
        vua lướt nhẹ trên mặt hồ xanh biếc, Rùa Thần lại trồi lên, khẽ khàng
        đòi lại gươm. Vua Lê Lợi đặt thanh kiếm trở về tay Rùa Thần, và từ đó,
        hồ mang tên <strong>Hoàn Kiếm – Hồ Trả Gươm</strong>.
      </p>

      {/* Ảnh 1 */}
      <figure className="space-y-1">
        <img
          src="/images/hoguom1.png" 
          alt="Phong cảnh Hồ Hoàn Kiếm với Tháp Rùa"
          className="mx-auto max-h-72 object-cover"
        />
        <figcaption className="text-center text-xs text-gray-500">
          Ảnh: Hồ Hoàn Kiếm với Tháp Rùa (Nguồn: Internet)
        </figcaption>
      </figure>

      <p>
        Trải qua nhiều thời kỳ, hồ từng được gọi là{" "}
        <strong>Lục Thủy</strong> vì nước xanh quanh năm, hay{" "}
        <strong>Thủy Quân</strong> khi trở thành nơi luyện tập thủy binh. Dẫu
        thời gian đổi thay, Hồ Hoàn Kiếm vẫn đứng giữa lòng phố cổ như một
        chứng nhân lặng lẽ.
      </p>

      <p>
        Giữa làn nước phẳng lặng ấy là <strong>Tháp Rùa</strong>, xây vào cuối
        thế kỷ XIX, nhỏ bé nhưng vững chãi – một biểu tượng của sự kết nối giữa
        cổ xưa và hiện đại. Ở phía bắc hồ là <strong>Đền Ngọc Sơn</strong> và{" "}
        <strong>Cầu Thê Húc</strong> đỏ thắm, cong như một dải lụa dẫn du khách
        đến thế giới của những giá trị tinh thần lưu giữ từ bao đời.
      </p>

      {/* Ảnh 2 */}
      <figure className="space-y-1">
        <img
          src="/images/hoguom2.jpg" // đổi lại đúng tên file của bạn
          alt="Toàn cảnh Hồ Hoàn Kiếm, Đền Ngọc Sơn và Cầu Thê Húc"
          className="mx-auto max-h-72 object-cover"
        />
        <figcaption className="text-center text-xs text-gray-500">
          Ảnh: Hồ Hoàn Kiếm – Đền Ngọc Sơn – Cầu Thê Húc (Nguồn: Internet)
        </figcaption>
      </figure>

      <p>
        Hồ Hoàn Kiếm không chỉ đẹp như tranh, mà còn là câu chuyện về{" "}
        <strong>niềm tin</strong>, về <strong>hòa bình</strong>, và về{" "}
        <strong>bản sắc Hà Nội</strong>. Mỗi nét vẽ của Họa Sắc khi khắc họa nơi
        đây không chỉ tái hiện phong cảnh, mà còn gói ghém tinh thần của một
        truyền thuyết đã sống cùng người Việt suốt hàng trăm năm qua.
      </p>

      {/* Ảnh 3 */}
      <figure className="space-y-1">
        <img
          src="/images/hoguom-524x400.jpg" 
          alt="Hồ Hoàn Kiếm nhìn từ trên cao"
          className="mx-auto max-h-72 object-cover"
        />
        <figcaption className="text-center text-xs text-gray-500">
          Ảnh: Hồ Hoàn Kiếm ngày nay (Nguồn: Internet)
        </figcaption>
      </figure>

      <p>
        <em>Một hồ nước nhỏ – nhưng là trái tim của cả Thủ đô.</em>
        <br />
        <em>Một truyền thuyết – nhưng là niềm tự hào của cả một dân tộc.</em>
      </p>
    </div>
  );
}
