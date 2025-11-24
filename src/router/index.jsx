import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "@/layouts/SiteLayout";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";
import NotFound from "@/pages/NotFound";
import Category from "@/pages/Category";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import OrderSuccessPage from "@/pages/OrderSuccessPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import WarrantyAndReturnPolicy from "@/pages/WarrantyAndReturnPolicy";
import GuideOrderPayment from "@/pages/GuideOrderPayment";
import BlogTranhPage from "@/pages/BlogTranhPage";
import HoaSacNewsBlog from "@/components/HoaSacNewsBlog";
import PaintByNumbersTrendDetail from "@/components/PaintByNumbersTrendDetail";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "tranh-to-theo-so", element: <Category /> },
      { path: "tranh-to/:idOrSlug", element: <ProductDetail /> },
      { path: "gio-hang", element: <CartPage /> },
      { path: "thanh-toan", element: <CheckoutPage /> },
      { path: "don-hang-thanh-cong", element: <OrderSuccessPage /> },
      { path: "dieu-khoan-chung", element: <PrivacyPolicy /> },
      { path: "bao-hanh-doi-tra", element: <WarrantyAndReturnPolicy /> },
      { path: "blog-tin-tuc", element: <BlogTranhPage /> },
      {
        path: "blog-tin-tuc/hoa-sac-tranh-so-hoa",
        element: <HoaSacNewsBlog />,
      },
      { path: "blog-tin-tuc/vi-sao-tranh-so-hoa-gay-sot", element: <PaintByNumbersTrendDetail /> },

      { path: "huong-dan-dat-hang-thanh-toan", element: <GuideOrderPayment /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
