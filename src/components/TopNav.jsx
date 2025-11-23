import React, { useState } from "react";

const TopNav = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    "Danh sách sản phẩm",
    "Trang chủ",
    "Giới thiệu",
    "Sản phẩm",
    "Tin tức",
    "NFC",
    "Liên hệ",
  ];

  const productTypes = [
  ];

  const activeItem = "Danh sách sản phẩm";

  return (
    <nav className="w-full bg-red-700 text-white text-sm">
      <div className="flex items-center relative">
        {/* Item: Danh sách sản phẩm */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className={[
              "flex items-center h-12 px-6 whitespace-nowrap",
              activeItem === "Danh sách sản phẩm"
                ? "border-b-[3px] border-[#00b050]"
                : "",
            ].join(" ")}
          >
            {/* Icon 3 gạch */}
            <span className="mr-3 flex flex-col gap-[3px]">
              <span className="h-[2px] w-5 bg-white rounded" />
              <span className="h-[2px] w-5 bg-white rounded" />
              <span className="h-[2px] w-5 bg-white rounded" />
            </span>
            <span>Danh sách sản phẩm</span>
          </button>

          {/* Dropdown danh sách type sản phẩm */}
          {open && (
            <div className="absolute left-0 top-full mt-1 bg-white text-black shadow-lg rounded-sm min-w-[220px] z-50">
              {productTypes.map((type) => (
                <button
                  key={type}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    console.log("Selected type:", type);
                    setOpen(false); // đóng dropdown sau khi chọn
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Các item còn lại */}
        {menuItems.slice(1).map((item) => (
          <button
            key={item}
            className="flex items-center h-12 px-6 whitespace-nowrap"
            onClick={() => {
              console.log("Click:", item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TopNav;
