import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TopNav = ({ onGoScroll }) => {
  const location = useLocation();

  const getInitialActive = (path) => {
    switch (path) {
      case "/":
        return "Trang chủ";
      case "/blog-tin-tuc":
        return "Tin tức";
      case "/#":
        return "NFC";
      case "/lien-he":
        return "Liên hệ";
      default:
        return "Trang chủ";
    }
  };

  const [activeItem, setActiveItem] = useState(() =>
    getInitialActive(location.pathname)
  );
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Giới thiệu", scroll: "about" },
    { label: "Sản phẩm", scroll: "products" },
    { label: "Tin tức", path: "/blog-tin-tuc" },
    { label: "NFC", path: "/#" },
    { label: "Liên hệ", path: "/lien-he" },
  ];

  const isActive = (item) => item.label === activeItem;

  const baseClasses =
    "flex items-center h-10 sm:h-12 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm transition-all";

  const renderItem = (item, extraClass = "") => {
    const active = isActive(item);
    const commonClass = [
      baseClasses,
      extraClass,
      active
        ? "border-b-[3px] border-[#00b050] font-semibold"
        : "hover:bg-red-600",
    ].join(" ");

    if (item.scroll) {
      return (
        <button
          key={item.label}
          type="button"
          onClick={() => {
            setActiveItem(item.label);
            setMobileOpen(false);
            onGoScroll(item.scroll);
          }}
          className={commonClass}
        >
          {item.label}
        </button>
      );
    }

    return (
      <Link
        key={item.label}
        to={item.path}
        onClick={() => {
          setActiveItem(item.label);
          setMobileOpen(false);
        }}
        className={commonClass}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <nav className="w-full bg-red-700 text-white text-sm">
      <div className="mx-auto max-w-6xl px-2 sm:px-4">
        {/* Header: logo + hamburger */}
        <div className="flex items-center justify-between py-1 sm:py-0">
          {/* <div className="py-2 text-sm sm:text-base font-semibold uppercase tracking-wide">
            Họa Sắc
          </div> */}

          {/* Nút hamburger chỉ hiện trên mobile */}
          <button
            type="button"
            className="md:hidden inline-flex flex-col justify-center items-center gap-1 p-2"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${
                mobileOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-opacity ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-transform ${
                mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => renderItem(item))}
        </div>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-red-600 mt-1 flex flex-col">
            {menuItems.map((item) =>
              renderItem(
                item,
                "w-full justify-start text-sm h-11 border-b border-red-600/40"
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
