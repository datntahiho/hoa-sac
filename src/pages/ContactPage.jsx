import React, { useState } from "react";
import { Phone, Mail, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // reset form
    e.target.reset();
    // hiện thông báo cảm ơn
    setSuccess(true);
  };

  return (
    <section className="w-full bg-white py-10 md:py-16">
      <div className="mx-auto max-w-3xl px-4">
        {/* Tiêu đề + thông tin liên hệ */}
        <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
          HOẠ SẮC - LIÊN HỆ
        </h1>

        <div className="space-y-2 text-sm md:text-base text-slate-700 mb-6">
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-orange-500" />
            <span>Số điện thoại: 0587102003</span>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-orange-500" />
            <span>Email: tranhhoasac@gmail.com</span>
          </p>
        </div>

        <hr className="my-6 border-slate-200" />

        {/* Form liên hệ */}
        <h2 className="text-sm md:text-base font-semibold text-slate-900 mb-4 uppercase tracking-wide">
          Liên hệ với chúng tôi
        </h2>

        {/* Thông báo đẹp */}
        {success && (
          <div className="mb-4 flex items-start gap-3 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
            <p>
              Cảm ơn bạn đã liên hệ <strong>Họa Sắc</strong>. Chúng tôi sẽ phản
              hồi trong thời gian sớm nhất!
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              required
              placeholder="Họ tên*"
              className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm md:text-base outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder:text-slate-400"
            />
          </div>

          <div>
            <input
              type="email"
              required
              placeholder="Email*"
              className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm md:text-base outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder:text-slate-400"
            />
          </div>

          <div>
            <input
              type="tel"
              required
              placeholder="Số điện thoại*"
              className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm md:text-base outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder:text-slate-400"
            />
          </div>

          <div>
            <textarea
              required
              rows={4}
              placeholder="Nhập nội dung*"
              className="w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm md:text-base outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 placeholder:text-slate-400 resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-red-600 py-3 text-sm md:text-base font-semibold text-white hover:bg-red-700 transition-colors"
          >
            Gửi liên hệ của bạn
          </button>
        </form>
      </div>
    </section>
  );
}
