import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center">
      <h1 className="text-4xl font-extrabold mb-2">404</h1>
      <p className="text-gray-600 mb-6">Trang bạn tìm không tồn tại.</p>
      <Link to="/" className="rounded-md bg-emerald-600 px-5 py-3 text-white">
        Về trang chủ
      </Link>
    </div>
  );
}
