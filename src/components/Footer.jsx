export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-2">HOẠ SẮC</h4>
          <p className="text-sm text-gray-600">
            Xưởng tranh tô – giá tốt – giao nhanh tại TP.HN.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Liên hệ</h5>
          <p className="text-sm text-gray-600">
            Hotline: 0587102003 <br /> Email: tranhhoasac@gmail.com
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Chính sách</h5>
          <ul className="text-sm text-gray-600 space-y-1">
            <li><a href="#">Bảo hành & Đổi trả</a></li>
            <li><a href="#">Vận chuyển</a></li>
            <li><a href="#">Thanh toán</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Kết nối</h5>
          <div className="flex gap-3 text-sm text-gray-600">
            <a href="#">Facebook</a>
            <a href="#">Tiktok</a>
          </div>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-gray-500 border-t">
        © {new Date().getFullYear()} Hoạ sắc. All rights reserved.
      </div>
    </footer>
  );
}
