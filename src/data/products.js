// src/data/products.js
import HoaLuStory from "@/components/stories/HoaLuStory.jsx";
import DenNgocSonStory from "@/components/stories/DenNgocSonStory.jsx";
import CuChiStory from "@/components/stories/CuChiStory.jsx";
import DinhDocLapStory from "@/components/stories/DinhDocLapStory.jsx";
import DuongTruongSonStory from "@/components/stories/DuongTruongSonStory.jsx";
import HoangThanhThangLongStory from "@/components/stories/HoangThanhThangLongStory.jsx";
import VanMieuQuocTuGiamStory from "@/components/stories/VanMieuQuocTuGiamStory.jsx";
import KyDaiHueStory from "@/components/stories/KyDaiHueStory.jsx";
const products = [
  {
    id: "t01",
    title: "Cố Đô Hoa Lư",
    image: "/images/san-pham/co-do-hoa-lu.png",
    priceFrom: 400000,
    href: "tranh-to/co-do-hoa-lu",
    StoryComponent: HoaLuStory,    
  },
  {
    id: "t02",
    title: "Đền Ngọc Sơn",
    image: "/images/san-pham/den-ngoc-son.png",
    priceFrom: 400000,
    href: "tranh-to/den-ngoc-son",
    StoryComponent: DenNgocSonStory,
  },
  {
    id: "t03",
    title: "Địa Đạo Củ Chi",
    image: "/images/san-pham/dia-dao-cu-chi.png",
    priceFrom: 400000,
    href: "tranh-to/dia-dao-cu-chi",
    StoryComponent: CuChiStory,
  },
  {
    id: "t04",
    title: "Dinh Độc Lập",
    image: "/images/san-pham/dinh-doc-lap.png",
    priceFrom: 400000,
    href: "tranh-to/dinh-doc-lap",
    StoryComponent: DinhDocLapStory,
  },
  {
    id: "t05",
    title: "Đường Trường Sơn",
    image: "/images/san-pham/duong-truong-son.png",
    priceFrom: 400000,
    href: "tranh-to/duong-truong-son",
    StoryComponent: DuongTruongSonStory,
  },
  {
    id: "t06",
    title: "Hồ Gươm",
    image: "/images/san-pham/ho-guom.png",
    priceFrom: 400000,
    href: "tranh-to/ho-guom",
  },
  {
    id: "t07",
    title: "Hoàng Thành Thăng Long",
    image: "/images/san-pham/hoang-thanh-thang-long.png",
    priceFrom: 400000,
    href: "tranh-to/hoang-thanh-thang-long",
    StoryComponent: HoangThanhThangLongStory,
  },
  {
    id: "t08",
    title: "Kinh Thành Huế",
    image: "/images/san-pham/kinh-thanh-hue.png",
    priceFrom: 400000,
    href: "tranh-to/kinh-thanh-hue",
  },
{
    id: "t09",
    title: "Kỳ Đài Huế",
    image: "/images/san-pham/ky-dai-hue.png",
    priceFrom: 400000,
    href: "tranh-to/ky-dai-hue",
    StoryComponent: KyDaiHueStory,
  },
  {
    id: "t10",
    title: "Thành Cổ Loa",
    image: "/images/san-pham/thanh-co-loa.png",
    priceFrom: 400000,
    href: "tranh-to/thanh-co-loa",
  },
  {
    id: "t11",
    title: "Văn Miếu Quốc Tử Giám",
    image: "/images/san-pham/van-mieu-quoc-tu-giam.png",
    priceFrom: 400000,
    href: "tranh-to/van-mieu-quoc-tu-giam",
    StoryComponent: VanMieuQuocTuGiamStory,
  },
];

export default products;
