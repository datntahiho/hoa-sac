const PrivacyPolicy = () => {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10 overflow-y-auto m-16">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        ĐIỀU KHOẢN CHUNG
      </h1>

      {/* 1. Chấp nhận điều khoản */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Chấp nhận điều khoản</h2>
        <p className="space-y-2">
          Khi truy cập hoặc sử dụng bất kỳ phần nào của website, bạn đồng ý tuân
          thủ và chịu ràng buộc bởi các Điều khoản này. Nếu bạn không đồng ý với
          bất kỳ nội dung nào trong Điều khoản, vui lòng ngừng truy cập và sử
          dụng website.
        </p>
      </section>

      {/* 2. Trách nhiệm của người sử dụng */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          2. Trách nhiệm của người sử dụng
        </h2>
        <p className="mb-3">
          Khi truy cập website, bạn tự chấp nhận mọi rủi ro có thể phát sinh.
          Chúng tôi không chịu trách nhiệm đối với bất kỳ tổn thất nào dưới dạng
          trực tiếp, gián tiếp hay hệ quả, bao gồm nhưng không giới hạn:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Lỗi hệ thống, virus, phần mềm độc hại, tấn công mạng hoặc truy cập
            trái phép;
          </li>
          <li>Lỗi đường truyền, kết nối mạng chậm hoặc gián đoạn;</li>
          <li>Thiệt hại khi tải dữ liệu từ website;</li>
          <li>
            Các chi phí phát sinh như chi phí pháp lý, tư vấn hoặc các khoản chi
            tiêu khác.
          </li>
        </ul>
        <p className="mt-3">
          Bạn chịu trách nhiệm đảm bảo thiết bị và phương tiện truy cập của mình
          hoạt động an toàn, bảo mật.
        </p>
      </section>

      {/* 3. Nội dung trên website */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. Nội dung trên website</h2>
        <p className="mb-3">
          Mọi thông tin được đăng tải trên website nhằm phục vụ cộng đồng và
          được cung cấp một cách trung thực. Tuy nhiên, chúng tôi không cam kết
          tuyệt đối về tính chính xác, đầy đủ, kịp thời hoặc độ tin cậy của nội
          dung.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Người dùng không được sử dụng nội dung website cho mục đích thương
            mại khi chưa có sự đồng ý bằng văn bản của chúng tôi.
          </li>
          <li>
            Nội dung trên website có thể được thay đổi, cập nhật, chỉnh sửa hoặc
            gỡ bỏ bất kỳ lúc nào mà không cần thông báo trước.
          </li>
        </ul>
      </section>

      {/* 4. Bản quyền */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Bản quyền</h2>
        <p className="mb-3">
          Website và toàn bộ nội dung trên đó thuộc quyền sở hữu của chúng tôi
          và/hoặc các bên liên quan, được bảo hộ bởi Luật Sở hữu Trí tuệ Việt
          Nam và các điều ước quốc tế liên quan.
        </p>
        <p>
          Việc sao chép, chỉnh sửa, phân phối, tái sử dụng, trích dẫn nội dung
          website phải được sự đồng ý trước bằng văn bản của chúng tôi, trừ
          trường hợp pháp luật có quy định khác.
        </p>
      </section>

      {/* 5. Sử dụng thông tin cá nhân */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          5. Sử dụng thông tin cá nhân
        </h2>
        <p className="mb-3">
          Chúng tôi cam kết không sử dụng thông tin cá nhân của bạn nếu không có
          sự cho phép, trừ khi pháp luật có quy định khác. Thông tin của bạn có
          thể được sử dụng để:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            Liên hệ, thông báo về các cập nhật, chương trình khuyến mãi, thay
            đổi chính sách;
          </li>
          <li>
            Cung cấp dịch vụ, chăm sóc khách hàng hoặc hỗ trợ theo yêu cầu.
          </li>
        </ul>
        <p>
          Chúng tôi không chia sẻ thông tin cá nhân với bên thứ ba, ngoại trừ
          các đối tác cung cấp dịch vụ liên quan và các đơn vị này cũng phải
          tuân thủ quy định bảo mật như chúng tôi.
        </p>
      </section>

      {/* 6. Thay đổi điều khoản */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">6. Thay đổi điều khoản</h2>
        <p>
          Chúng tôi có quyền điều chỉnh, cập nhật hoặc thay đổi Điều khoản bất
          kỳ lúc nào. Các thay đổi sẽ được công bố trên website và có hiệu lực
          ngay khi được đăng tải. Việc bạn tiếp tục sử dụng website sau khi điều
          khoản được cập nhật đồng nghĩa bạn chấp nhận các sửa đổi đó.
        </p>
      </section>

      {/* 7. Liên kết đến website khác */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          7. Liên kết đến website khác
        </h2>
        <p className="mb-3">
          Website có thể chứa liên kết tới các trang web của bên thứ ba. Các
          liên kết này chỉ nhằm mục đích cung cấp thông tin, tiện ích cho người
          dùng.
        </p>
        <p className="mb-3">
          Chúng tôi không kiểm soát và không chịu trách nhiệm về nội dung, chính
          sách bảo mật hoặc hoạt động của các website bên thứ ba.
        </p>
        <p>
          Việc bạn truy cập các liên kết này đồng nghĩa bạn tự chịu trách nhiệm
          với mọi rủi ro phát sinh khi sử dụng các website đó.
        </p>
      </section>

      {/* 8. Nội dung người dùng đăng tải */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          8. Nội dung người dùng đăng tải
        </h2>
        <p className="mb-3">
          Bạn không được đăng tải, truyền tải, chia sẻ trên website bất kỳ nội
          dung nào thuộc một trong các nhóm sau:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>Khiêu dâm, thô tục, xúc phạm, bôi nhọ cá nhân hoặc tổ chức;</li>
          <li>
            Vi phạm pháp luật hoặc khuyến khích hành vi vi phạm pháp luật;
          </li>
          <li>
            Gây hại hoặc có khả năng gây hại đến danh dự, quyền lợi của tổ chức,
            cá nhân khác;
          </li>
          <li>
            Chứa mã độc hoặc có khả năng xâm phạm an ninh, an toàn hệ thống.
          </li>
        </ul>
        <p>
          Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại nào phát sinh từ
          nội dung do người dùng đăng tải, nhưng có quyền gỡ bỏ các nội dung vi
          phạm theo quyết định của mình.
        </p>
      </section>

      {/* 9. Thư điện tử */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">9. Thư điện tử</h2>
        <p className="mb-3">
          Chúng tôi không đảm bảo tính an toàn tuyệt đối của email gửi qua
          Internet do các rủi ro khách quan của môi trường mạng.
        </p>
        <p>
          Chúng tôi không chịu trách nhiệm đối với các thiệt hại phát sinh nếu
          bạn gửi hoặc nhận email từ hệ thống theo yêu cầu của mình, bao gồm
          trường hợp email bị chặn, thất lạc, giả mạo hoặc bị truy cập trái
          phép.
        </p>
      </section>

      {/* 10. Luật áp dụng */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">10. Luật áp dụng</h2>
        <p>
          Các Điều khoản và Điều kiện này được điều chỉnh và giải thích theo{" "}
          <strong>pháp luật Việt Nam</strong> và được lập bằng tiếng Việt. Nếu
          bất kỳ điều khoản nào bị coi là không hợp pháp, vô hiệu hoặc không thể
          thực thi, thì phần còn lại của Điều khoản vẫn giữ nguyên hiệu lực.
        </p>
      </section>

      {/* 11. Cam kết thực hiện & giải quyết tranh chấp */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          11. Cam kết thực hiện & giải quyết tranh chấp
        </h2>
        <p className="mb-3">
          Các bên có trách nhiệm tuân thủ nghiêm túc các Điều khoản này. Trong
          trường hợp phát sinh tranh chấp liên quan đến việc sử dụng website
          hoặc dịch vụ:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-3">
          <li>
            Trước hết, các bên ưu tiên giải quyết bằng thương lượng, hòa giải
            trên tinh thần hợp tác và tôn trọng lẫn nhau;
          </li>
          <li>
            Nếu không thể tự hòa giải, tranh chấp sẽ được đưa ra{" "}
            <strong>Tòa án Nhân dân có thẩm quyền</strong> tại Việt Nam để giải
            quyết theo quy định pháp luật;
          </li>
          <li>
            Phán quyết của Tòa án là cuối cùng và các bên có nghĩa vụ chấp hành;
          </li>
          <li>
            Các chi phí phát sinh trong quá trình tranh chấp (bao gồm nhưng
            không giới hạn: án phí, phí luật sư, chi phí giám định, v.v.) do{" "}
            <strong>bên thua kiện</strong> chịu, trừ khi Tòa án có quyết định
            khác.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
