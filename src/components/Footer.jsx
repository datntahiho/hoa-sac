import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-red-700 text-red-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 text-sm sm:grid-cols-2 lg:grid-cols-4 sm:py-10">
        <div className="text-center sm:text-left">
          <h4 className="mb-2 font-semibold text-white">HOẠ SẮC</h4>
          <p className="text-red-100">
            Hotline: 0587102003 <br /> Email: tranhhoasac@gmail.com
          </p>
        </div>

        <div className="text-center sm:text-left">
          <h5 className="mb-2 font-semibold text-white">Chính sách</h5>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                to="/dieu-khoan-chung"
                className="text-red-100 transition-colors hover:text-white"
              >
                Điều khoản chung
              </Link>
            </li>
            <li>
              <Link
                to="/bao-hanh-doi-tra"
                className="text-red-100 transition-colors hover:text-white"
              >
                Bảo hành và đổi trả
              </Link>
            </li>
            <li>
              <Link
                to="/huong-dan-dat-hang-thanh-toan"
                className="text-red-100 transition-colors hover:text-white"
              >
                Hướng dẫn đặt hàng và thanh toán
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h5 className="mb-2 font-semibold text-white">Kết nối</h5>
          <div className="flex justify-center gap-3 text-sm sm:justify-start">
            <a
              href="#"
              className="text-red-100 transition-colors hover:text-white"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-red-100 transition-colors hover:text-white"
            >
              Tiktok
            </a>
          </div>
        </div>

        {/* Cột trống / future content nếu cần */}
        <div className="hidden lg:block" />
      </div>

      <div className="border-t border-red-600 py-4 text-center text-xs text-red-100">
        © {year} Hoạ Sắc. All rights reserved.
      </div>
    </footer>
  );
}
