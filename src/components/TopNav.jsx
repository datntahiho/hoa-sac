import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = ({ onGoScroll }) => {
  const [activeItem, setActiveItem] = useState("Trang chủ");

  const menuItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Giới thiệu", scroll: "about" },
    { label: "Sản phẩm", scroll: "products" },
    { label: "Tin tức", path: "/blog-tin-tuc" },
    { label: "NFC", path: "/#" },
    { label: "Liên hệ", path: "/#" },
  ];

  return (
    <nav className="w-full bg-red-700 text-white text-sm">
      <div className="flex items-center relative">
        {menuItems.map((item) => {
          // Mục cần scroll
          if (item.scroll) {
            return (
              <button
                key={item.label}
                onClick={() => {
                  setActiveItem(item.label);
                  onGoScroll(item.scroll);
                }}
                className={[
                  "flex items-center h-12 px-6 whitespace-nowrap transition-all",
                  activeItem === item.label
                    ? "border-b-[3px] border-[#00b050] font-semibold"
                    : "hover:bg-red-600",
                ].join(" ")}
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
              className={[
                "flex items-center h-12 px-6 whitespace-nowrap transition-all",
                activeItem === item.label
                  ? "border-b-[3px] border-[#00b050] font-semibold"
                  : "hover:bg-red-600",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default TopNav;
