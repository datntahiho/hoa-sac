import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t bg-red-700 text-red-50">
      <div className="mx-auto max-w-6xl px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-2 text-white">HOẠ SẮC</h4>
      
          <p className="text-sm text-red-100">
            Hotline: 0587102003 <br /> Email: tranhhoasac@gmail.com
          </p>
        </div>

        <div>
          <h5 className="font-semibold mb-2 text-white">Chính sách</h5>
          <ul className="text-sm space-y-1">
            <li>
              <Link
                to="/dieu-khoan-chung"
                className="text-red-100 hover:text-white transition-colors"
              >
                Điều khoản chung
              </Link>
            </li>
            <li>
              <Link
                to="/bao-hanh-doi-tra"
                className="text-red-100 hover:text-white transition-colors"
              >
                Bảo hành và đổi trả
              </Link>
            </li>
            <li>
              <Link
                to="/huong-dan-dat-hang-thanh-toan"
                className="text-red-100 hover:text-white transition-colors"
              >
                Hướng dẫn đặt hàng và thanh toán
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2 text-white">Kết nối</h5>
          <div className="flex gap-3 text-sm">
            <a
              href="#"
              className="text-red-100 hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-red-100 hover:text-white transition-colors"
            >
              Tiktok
            </a>
          </div>
        </div>
      </div>

      <div className="py-4 text-center text-xs text-red-100 border-t border-red-600">
        © {new Date().getFullYear()} Hoạ sắc. All rights reserved.
      </div>
    </footer>
  );
}
