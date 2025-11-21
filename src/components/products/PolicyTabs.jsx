// src/components/products/PolicyTabs.jsx
import { useState } from "react";

export default function PolicyTabs({ StoryComponent }) {
  const [tab, setTab] = useState("story"); // hoặc "return" tuỳ bạn muốn tab nào mở trước

  return (
    <div className="mt-8">
      {/* Tabs */}
      <div className="flex gap-4 border-b">
        <button
          className={`px-3 py-2 text-sm ${
            tab === "story"
              ? "border-b-2 border-emerald-600 font-semibold"
              : "text-gray-600"
          }`}
          onClick={() => setTab("story")}
        >
          CÂU CHUYỆN BỨC TRANH
        </button>

        <button
          className={`px-3 py-2 text-sm ${
            tab === "return"
              ? "border-b-2 border-emerald-600 font-semibold"
              : "text-gray-600"
          }`}
          onClick={() => setTab("return")}
        >
          CHÍNH SÁCH ĐỔI TRẢ
        </button>

        <button
          className={`px-3 py-2 text-sm ${
            tab === "warranty"
              ? "border-b-2 border-emerald-600 font-semibold"
              : "text-gray-600"
          }`}
          onClick={() => setTab("warranty")}
        >
          CHÍNH SÁCH BẢO HÀNH
        </button>
      </div>

      {/* Content */}
      <div className="prose prose-sm mt-4 max-w-none">
        {tab === "story" && (
          StoryComponent ? (
            <StoryComponent />
          ) : (
            <>
              <p>
                Mỗi bức tranh tại <strong>Hoạ Sắc</strong> đều mang trong mình
                một câu chuyện riêng về lịch sử, văn hoá và cảm xúc.
              </p>
              <p>Hiện bức tranh này chưa có câu chuyện riêng.</p>
            </>
          )
        )}

        {tab === "return" && (
          <>
            <p>
              <strong>Hoạ Sắc</strong> chấp nhận yêu cầu trả hàng và hoàn tiền
              trong các trường hợp sau:
            </p>
            <ul className="list-disc pl-5 marker:text-gray-500">
              <li>Khách hàng thay đổi nhu cầu mua hàng.</li>
              <li>Người mua đã thanh toán nhưng không nhận được sản phẩm.</li>
              <li>Sản phẩm bị lỗi hoặc bị hư hại trong quá trình vận chuyển.</li>
              <li>
                Người bán giao sai sản phẩm cho Người mua (VD: sai kích cỡ, sai
                màu sắc, v.v.).
              </li>
              <li>
                Sản phẩm Người mua nhận được khác biệt một cách rõ rệt so với
                thông tin mà Người bán cung cấp trong mục mô tả sản phẩm.
              </li>
            </ul>
          </>
        )}

        {tab === "warranty" && (
          <>
            <h4 className="!mb-2 font-semibold">a. Điều kiện bảo hành</h4>
            <ul className="list-disc pl-5 marker:text-gray-500">
              <li>Sản phẩm bị lỗi hoặc bị hư hại trong quá trình vận chuyển.</li>
              <li>
                Người bán giao sai sản phẩm cho Người mua (VD: sai kích cỡ, sai
                màu sắc, v.v.).
              </li>
              <li>
                Sản phẩm Người mua nhận được khác biệt một cách rõ rệt so với
                thông tin mà Người bán cung cấp trong mục mô tả sản phẩm.
              </li>
            </ul>

            <h4 className="!mt-4 !mb-2 font-semibold">b. Từ chối bảo hành</h4>
            <ul className="list-disc pl-5 marker:text-gray-500">
              <li>Hết hạn thời gian bảo hành.</li>
              <li>Thiệt hại do thiên tai và tai nạn, cháy nổ, sét đánh,…</li>
              <li>
                Hư hỏng do người tiêu dùng sử dụng sai quy cách, không theo
                hướng dẫn sử dụng.
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
