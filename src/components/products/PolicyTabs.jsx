// src/components/products/PolicyTabs.jsx
import { useState } from "react";

export default function PolicyTabs({ StoryComponent }) {
  const [tab, setTab] = useState("story"); // tab mở mặc định

  return (
    <section className="mt-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md">
        {/* Tabs */}
        <div className="p-4 md:px-6 pt-4 md:pt-5 border-b">
          <div className="flex flex-wrap gap-3">
            <button
              className={`px-3 py-2 text-xs md:text-sm uppercase tracking-wide rounded-full font-semibold transition
                ${
                  tab === "story"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              onClick={() => setTab("story")}
            >
              THÔNG TIN SẢN PHẨM
            </button>

            <button
              className={`px-3 py-2 text-xs md:text-sm uppercase tracking-wide rounded-full font-semibold transition
                ${
                  tab === "return"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              onClick={() => setTab("return")}
            >
              CHÍNH SÁCH ĐỔI TRẢ
            </button>

            <button
              className={`px-3 py-2 text-xs md:text-sm uppercase tracking-wide rounded-full font-semibold transition
                ${
                  tab === "warranty"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              onClick={() => setTab("warranty")}
            >
              CHÍNH SÁCH BẢO HÀNH
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 text-sm md:text-base text-slate-700 space-y-3">
          {tab === "story" &&
            (StoryComponent ? (
              <StoryComponent />
            ) : (
              <>
                <p>
                  Mỗi bức tranh tại{" "}
                  <span className="font-semibold text-slate-900">Họa Sắc</span>{" "}
                  đều mang trong mình một câu chuyện riêng về lịch sử, văn hoá
                  và cảm xúc.
                </p>
                <p>
                  Hiện bức tranh này{" "}
                  <span className="font-semibold">
                    chưa có câu chuyện riêng
                  </span>
                  . Chúng tôi sẽ cập nhật trong thời gian tới.
                </p>
              </>
            ))}

          {tab === "return" && (
            <>
              <p>
                <span className="font-semibold text-slate-900">Họa Sắc</span>{" "}
                chấp nhận yêu cầu trả hàng và hoàn tiền trong các trường hợp sau:
              </p>
              <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
                <li>Khách hàng thay đổi nhu cầu mua hàng.</li>
                <li>Người mua đã thanh toán nhưng không nhận được sản phẩm.</li>
                <li>Sản phẩm bị lỗi hoặc hư hại trong quá trình vận chuyển.</li>
                <li>
                  Người bán giao sai sản phẩm cho Người mua (ví dụ: sai kích
                  cỡ, sai màu sắc, v.v.).
                </li>
                <li>
                  Sản phẩm Người mua nhận được khác biệt rõ rệt so với thông
                  tin Người bán cung cấp trong mục mô tả sản phẩm.
                </li>
              </ul>
            </>
          )}

          {tab === "warranty" && (
            <>
              <h4 className="font-semibold text-slate-900 !mb-2">
                a. Điều kiện bảo hành
              </h4>
              <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
                <li>Sản phẩm bị lỗi hoặc hư hại trong quá trình vận chuyển.</li>
                <li>
                  Người bán giao sai sản phẩm cho Người mua (ví dụ: sai kích
                  cỡ, sai màu sắc, v.v.).
                </li>
                <li>
                  Sản phẩm Người mua nhận được khác biệt rõ rệt so với thông
                  tin Người bán cung cấp trong mục mô tả sản phẩm.
                </li>
              </ul>

              <h4 className="font-semibold text-slate-900 !mt-4 !mb-2">
                b. Từ chối bảo hành
              </h4>
              <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
                <li>Hết hạn thời gian bảo hành.</li>
                <li>Thiệt hại do thiên tai, tai nạn, cháy nổ, sét đánh,…</li>
                <li>
                  Hư hỏng do người tiêu dùng sử dụng sai quy cách, không theo
                  hướng dẫn sử dụng.
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
