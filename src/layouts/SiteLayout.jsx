// src/layouts/SiteLayout.jsx
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CartDrawer from "@/components/carts/CartDrawer";

import { getCartItems } from "@/utils/cartStorage";
import productsData from "@/data/products.js";

export default function SiteLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // chứa FULL product + quantity

  // JOIN cart(id+qty) với PRODUCTS
  const joinCartData = () => {
    const rawCart = getCartItems(); // [{id, quantity}]
    const fullItems = rawCart
      .map((c) => {
        const product = productsData.find((p) => p.id === c.id);
        if (!product) return null;
        return {
          ...product,
          quantity: c.quantity,
        };
      })
      .filter(Boolean);

    setCartItems(fullItems);
  };

  // load giỏ hàng ban đầu
  useEffect(() => {
    joinCartData();

    const onChange = () => joinCartData();
    window.addEventListener("cart-changed", onChange);

    return () => window.removeEventListener("cart-changed", onChange);
  }, []);

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar
        phone="0587.10.20.03"
        onCartClick={() => setIsCartOpen(true)}
        cartCount={cartCount}
      />

      <ScrollToTop />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />

      <CartDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems} // truyền dữ liệu FULL để render
      />
    </div>
  );
}
