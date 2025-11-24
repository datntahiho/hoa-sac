import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TopNav = ({ onGoScroll }) => {
  const location = useLocation();

  // map path -> label ban đầu
  const getInitialActive = (path) => {
    switch (path) {
      case "/":
        return "Trang chủ";
      case "/blog-tin-tuc":
        return "Tin tức";
      case "/#":
        return "NFC"; // hoặc Liên hệ tuỳ bạn
      default:
        return "Trang chủ";
    }
  };

  const [activeItem, setActiveItem] = useState(() =>
    getInitialActive(location.pathname)
  );

  const menuItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Giới thiệu", scroll: "about" },
    { label: "Sản phẩm", scroll: "products" },
    { label: "Tin tức", path: "/blog-tin-tuc" },
    { label: "NFC", path: "/#" },
    { label: "Liên hệ", path: "/#" },
  ];

  // Giờ chỉ dùng state để quyết định active → không bị trùng
  const isActive = (item) => item.label === activeItem;

  const baseClasses =
    "flex items-center h-10 sm:h-12 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm transition-all";

  return (
    <nav className="w-full bg-red-700 text-white text-sm">
      <div className="mx-auto max-w-6xl px-2 sm:px-4">
        {/* thanh nav cuộn ngang trên mobile nếu nhiều item */}
        <div className="flex items-center gap-1 overflow-x-auto py-1 sm:py-0">
          {menuItems.map((item) => {
            const active = isActive(item);
            const commonClass = [
              baseClasses,
              active
                ? "border-b-[3px] border-[#00b050] font-semibold"
                : "hover:bg-red-600",
            ].join(" ");

            // Mục cần scroll
            if (item.scroll) {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    setActiveItem(item.label);
                    onGoScroll(item.scroll);
                  }}
                  className={commonClass}
                >
                  {item.label}
                </button>
              );
            }

            // Mục dùng Link
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setActiveItem(item.label)}
                className={commonClass}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
